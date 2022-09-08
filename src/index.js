const Wu = require('Wu');
const wu = new Wu();

let currentScript = wu.doc.querySelector('script[src*="uact.js"],script[src*="uact.min.js"]');

if (!currentScript) {
  const scripts = wu.doc.getElementsByTagName('script');

  currentScript = wu.doc.currentScript || scripts[scripts.length - 1];
}

const scriptQuery = currentScript ? currentScript.src.split('?')[1] : '';
const queryString = (wu.win.location.search + '').substring(1);

let uactOpts = wu.getAttrs(currentScript);

if (scriptQuery) {
  uactOpts = wu.extend(uactOpts, wu.queryParseString(scriptQuery));
}

if (wu.win.Element && !wu.win.Element.prototype.closest) {
  wu.win.Element.prototype.closest = (s) => {
    let matches = (this.document || wu.win.ownerDocument).querySelectorAll(s),
      i,
      el = this;

    do {
      i = matches.length;
      while (--i >= 0 && matches.item(i) !== el) {};
    } while ((i < 0) && (el = el.parentElement));
    return el;
  };
}

/**
 * UTM auto click tracker
 */
class Uact {
  constructor() {
    this.wu = wu;
    this.log = wu.debug('uact');
    this._name = 'Uact';

    this.init();
  }

  /**
   * get the name of the library
   * @return {string} library name
   */
  get name() {
    return this._name;
  }

  slugify(str) {
    return (str || '')
      .toLowerCase()
      .replace(/[^0-9a-z_-]+/g, '-')
      .replace(/-{2,}/g, '-');
  }

  pushEvent(evt) {
    const events = JSON.parse(wu.win.localStorage.getItem('brxe') || '[]');
    events.push(evt);
    wu.win.localStorage.setItem('brxe', JSON.stringify(events));
  }

  processEvents(fromLoad = false) {
    const that = this;
    const events = JSON.parse(wu.win.localStorage.getItem('brxe') || '[]');
    let myEvt = events[0] || '';
    if (myEvt.length > 0) {
      const image = new Image(1,1);
      that.log(`event: ${myEvt}`);

      if (fromLoad) {
        events.shift();
        wu.win.localStorage.setItem('brxe', JSON.stringify(events));
      } else {
        wu.addEvent(image, 'load', function() {
          events.shift();
          wu.win.localStorage.setItem('brxe', JSON.stringify(events));
        });
      }
      image.src = myEvt;
    }

    return events;
  }

  appendQuery(existing, queryStr) {
    const that = this;
    const oldHref = wu.isNull(existing, '/') || '/';
    const parts = oldHref.split('#');
    that.log(`updating ${oldHref}`);

    if (oldHref.indexOf('/') > -1) {
      // exit if javascript or bad href
      if (/\w+:\w+/gi.test(oldHref) ||
        oldHref.toLowerCase().indexOf('javascript:') > -1 ||
        oldHref.toLowerCase().indexOf('utm_') > -1) {
        that.log(`update skip [${oldHref}]`);
        return existing;
      }

      // append & instead of ? if existing query string
      parts[0] = parts[0] + ((parts[0].indexOf('?') < 0) ? '?' : '&') + queryStr;

      // finally add back hash
      if (parts[1]) {
        parts[0] = parts[0] + '#' + parts[1];
      }

      that.log(`update from [${oldHref}] to [${parts[0]}]`);
      return parts[0];
    } else {
      that.log(`skipping [${oldHref}]`);
    }

    return existing;
  }

  /**
   * get the Query String
   * @param  {Boolean} asObject true to return as object
   * @return query string or object
   */
  getUtmQuery(asObject = false) {
    let query = {};

    if (queryString) {
      const queryTemp = wu.queryParseString(queryString);

      // normalize query string key to lowercase
      wu.each(queryTemp, (v, k) => {
        query[k.toLowerCase()] = v;
      });
    }

    try {
      // store query string in cookie if utm_campaign exists
      if (query.utm_campaign) {
        wu.win.sessionStorage.setItem('brxutm', 'true');
        // overide existing cookie
        wu.cookie('brxutmquery', JSON.stringify(query));
      } else {
        const myq = wu.cookie('brxutmquery');

        if (myq && myq.indexOf('{') > -1) {
          query = JSON.parse(myq);
        }
      }
    } catch (e) {
      wu.debug(e);
    }

    return asObject ? query : wu.queryStringify(query);;
  }

  /**
   * init function
   */
  init() {
    const that = this;
    const qry  = wu.queryParseString(queryString);

    if (qry.debug) {
      wu.debug.enable(qry.debug);
    }

    that.setupHandlers();
    const queryStr = that.getUtmQuery(false);

    if (!uactOpts.disableDeepTracking && queryStr.indexOf('utm_') > -1) {
      that.log('begin updating anchors');

      wu.win.setTimeout(() => {
        try {
          const sessionUtm = wu.win.sessionStorage.getItem('brxutm') || wu.win.sessionStorage.brxutm;

          if (sessionUtm) {
            if (queryString.indexOf('utm_') < 0) {
              const pageUrl = that.appendQuery(queryString, queryStr);

              wu.win.history.pushState('', '', pageUrl);
            }
          }

          // rewrite urls
          var found = document.querySelectorAll('a'), i;
          that.log(`anchors count ${ found.length }`);

          for (i = 0; i < found.length; ++i) {
            const item     = found[i];
            const oldQuery = wu.getAttr(item, 'href');
            const query    = that.appendQuery(oldQuery, queryStr);

            if (oldQuery !== query) {
              wu.setAttr(item, 'href', query);
            }
          }

          // set site from global variable brxSite
          if (undefined === uactOpts.site) {
            uactOpts.site = wu.win.brxSite;
          }
        } catch (e) {
          wu.debug(e);
        }

      }, 2000);
    }
  }

  /**
   * setup action handlers
   */
  setupHandlers() {
    const that = this;
    const query = that.getUtmQuery(true);

/*eslint-disable */
    if (wu.isNull(query.utm_campaign, '').length < 2) {
      that.log('exiting: invalid utm_campaign');
      return query;
    }
    /* eslint-enable */

    function actionHandler(e) {
      const event = e || that.win.event;
      const target = event.target || event.srcElement;
      const btn = target.closest('button');
      const evt = {query: query};
      const tagName = (target.tagName + '').toLowerCase();

      if (tagName === 'input') {
        const targetType = target.type.toLowerCase();

        if (targetType === 'submit' || targetType === 'button') {
          evt.action = target.name || target.id || e.type || 'input button';
          evt.label = target.value;
        } else {
          that.log(`exiting from ${e.type} - ignoring input type ${targetType}`);
          return;
        }
      } else if (tagName === 'select' && target.options && target.selectedIndex) {
        const opt = target.options[target.selectedIndex];

        if (opt) {
          evt.action = target.name || target.id || e.type || 'select';
          evt.label = `${opt.value}`;
        }
      } else if (btn) {
        evt.action = btn.name || btn.id || e.type || 'button';
        evt.label = btn.textContent || btn.innerText || evt.action;
      } else if (e.type === 'change') {
        that.log('exiting from non-select change event');
        return;
      } else if (e.type === 'submit') {
        evt.action = e.type;
        evt.label = target.action;
      } else {
        const a = target.closest('a');

        if (tagName !== 'A' && !a) {
          that.log(`exiting from ${e.type} event with no valid parent element`);
          return;
        }

        evt.action = 'link:' + wu.getAttr(a, 'href');
        evt.label = that.slugify(a.textContent || a.innerText);
      }

      if (!evt.action) {
        that.log(`exiting from ${e.type} - no action to log`);
        return;
      }

      that.log('triggering...');
      that.log(evt);
      const site = uactOpts.site || wu.win.brxSite;
      let uae = {
        site: site,
        ec: evt.action || e.type,
        el: evt.label,
        utmn: evt.query.utm_campaign,
        utms: evt.query.utm_source,
        utmm: evt.query.utm_medium,
        utmc: evt.query.utm_content,
        utmt: evt.query.utm_term
      };

      // track event in our own analytics
      if (site) {  
        for (var propName in uae) {
          if (uae[propName] === null || uae[propName] === undefined) {
            delete uae[propName];
          } else {
            /* uae[propName] = (uae[propName] + '')
                              .toLowerCase()
                              .replace(/[^0-9a-z_-]+/g, '-')
                              .replace(/-{2,}/g, '-');*/
          }
        }

        uae.page = wu.win.location.pathname.toLowerCase();
        uae.ts   = `${(new Date().getTime())}`;

        that.pushEvent(`https://pi.brickinc.net/shake/?${wu.queryStringify(uae)}`);
        that.processEvents(false);
      }

      // track GA4
      if (typeof (wu.win.dataLayer) !== 'undefined') {
        const dataLayer = wu.win.dataLayer || [];
        // use gtag logic allow pushing data to both gtag and GTM
        const gtag = wu.win.gtag || function () {dataLayer.push(arguments);};

        gtag('event', 'uact', {
          'event_category': uae.ec,
          'event_label': uae.el
        });
      }

      // send to all classic analytic named trackers
      if (typeof (wu.win.ga) !== 'undefined') {
        const trackers = wu.win.ga.getAll();

        trackers.forEach(tracker => {
          wu.win.ga(tracker.get('name') + '.send', 'event', uae.ec, 'uact', uae.el);
        });
      }
    } // end actionHandler

    that.actionHandler = actionHandler;

    wu.addEvent(wu.doc, 'click', actionHandler);
    wu.addEvent(wu.doc, 'tap', actionHandler);
    wu.addEvent(wu.doc, 'change', actionHandler);
    wu.addEvent(wu.doc, 'submit', actionHandler);

    // for some reason, tel does not propagate
    // so we track it separately
    var tels = document.querySelectorAll('a[href^="tel:"'), i;

    for (i = 0; i < tels.length; ++i) {
      wu.addEvent(tels[i], 'click', actionHandler);
    }

    // make sure all events are processed
    let events = that.processEvents(true);
    while (events.length > 0) {
      events = that.processEvents(true);
    }

    return query;
  }
};

export default new Uact();
