import Wu from 'wu';

let wu = new Wu();
let currentScript = wu.doc.querySelector('script[src*="uact.js"],script[src*="uact.min.js"]');

if (!currentScript) {
  let scripts = wu.doc.getElementsByTagName('script');

  currentScript = wu.doc.currentScript || scripts[scripts.length - 1];
}

let opts = wu.getAttrs(currentScript);
let scriptQuery = currentScript.src.split('?')[1];
let queryString = (wu.win.location.search + '').substring(1);

if (scriptQuery) {
  opts = wu.extend(opts, wu.queryParseString(scriptQuery));
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
    this._brxua = '79697394-26';
    this.init();
  }

  /**
   * get the name of the library
   * @return {string} library name
   */
  get name() {
    return this._name;
  }

  /**
   * init function
   * @param  {object} opts options
   */
  init() {
    let that = this;

    if (opts.debug) {
      wu.debug.enable(opts.debug);
    }

    that.setupHandlers();

/*eslint-disable */
    // load gtm and ga
    if (opts.utm) {
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer', opts.gtm);
    }
    
    if (opts.ga) {
      if (typeof (wu.win.ga) === 'undefined') {
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
      }

      function createGaUact() {
        if (typeof (wu.win.ga) === 'undefined') {
          setTimeout(createGaUact, 200);
        }
        ga('create', opts.ga, 'auto', {'name': 'uact'});
      }
      
      createGaUact();
    }
/*eslint-enable */

    if (!opts.disableDeepTracking && wu.win.jQuery && queryString.indexOf('utm_') > -1) {
      that.log(`begin updating anchors`);
      wu.win.jQuery(wu.doc).ready(() => {
        wu.each(wu.win.jQuery('a'), (v, k) => {
          let oldHref = wu.isNull(wu.getAttr(v, 'href'), '');
          let parts = oldHref.split('#');

          // exit if javascript or bad href
          if (parts[0].length <= 0 || 
            /\w+:\w+/gi.test(oldHref) || 
            oldHref.toLowerCase().indexOf('javascript:') > -1 || 
            oldHref.toLowerCase().indexOf('utm_') > -1) {
            that.log(`update skip [${oldHref}]`);
            return;
          }

          // append & instead of ? if existing query string
          parts[0] = parts[0] + ((parts[0].indexOf('?') < 0) ? '?' : '&') + queryString;

          // finally add back hash
          if (parts[1]) {
            parts[0] = parts[0] + '#' + parts[1];
          }

          that.log(`update from [${oldHref}] to [${parts[0]}]`);
          wu.setAttr(v, 'href', parts[0]);
        });
      });
    }

  }

  /**
   * setup action handlers
   */
  setupHandlers() {
    let that = this;

    function actionHandler(e) {
      let queryTemp = wu.queryParseString(queryString);
      let query = {};

      // normalize query string key to lowercase
      wu.each(queryTemp, (v, k) => {
        query[k.toLowerCase()] = v;
      });

/*eslint-disable */
      // tom mistake come back to bite me
      if (query.utm_name) {
        query.utm_campaign = query.utm_name;
      }

      if (wu.isNull(query.utm_campaign, '').length < 2) {
        that.log('exiting: invalid utm_campaign');
        return;
      }
/*eslint-enable */

      let event = e || that.win.event;
      let target = event.target || event.srcElement;
      let btn = target.closest('button');
      let evt = {query: query, category: query.utm_campaign, value: 1 };
      let tagName = (target.tagName + '').toLowerCase();

      if (tagName === 'input') {
        let targetType = target.type.toLowerCase();

        if (targetType === 'submit' || targetType === 'button') {
          evt.action = target.name || target.id || e.type || 'button action';
          evt.label = target.value;
        } else {
          that.log(`exiting from ${e.type} - ignoring input type ${targetType}`);
          return;
        }
      } else if (tagName === 'select' && target.options && target.selectedIndex) {
        let opt = target.options[target.selectedIndex];
        
        if (opt) {
          evt.action = target.name || target.id || e.type || 'select action';
          evt.label = `${opt.value}_${opt.text}`;
        }
      } else if (btn) {
        evt.action = btn.name || btn.id || e.type || 'button action';
        evt.label = btn.textContent || btn.innerText;
      } else if (e.type === 'change') {
        that.log('exiting from non-select change event');
        return;
      } else if (e.type === 'submit') {
        evt.action = 'submit action';
        evt.label = target.action;
      } else {
        let a = target.closest('a');

        if (!a) {
          that.log(`exiting from ${e.type} event with no valid parent element`);
          return;
        }

        evt.action = wu.getAttr(a, 'href');
        evt.label = a.textContent || a.innerText;
      }

      if (!evt.action) {
        that.log(`exiting from ${e.type} - no action to log`);
        return;
      }

      that.log('triggering...');
      that.log(evt);

      // track event in our own analytics
      if (that._brxua) {
        let image = new Image(1, 1);
        let uae = { ea: evt.action, el: evt.label, ev: evt.value, ec: evt.category + '_' + wu.win.location.hostname, cb: (new Date().getTime()) };

        if (!uae.ea) {
          uae = wu.del(uae, 'ea');
        }
        if (!uae.el) {
          uae = wu.del(uae, 'el');
        }

        image.src = `https://pi.brickinc.net/ua/${that._brxua}?` + wu.queryStringify(uae) + '&' + queryString;
      }

      // track google tag manager
      if (typeof (wu.win.dataLayer) !== 'undefined') {
        wu.win.dataLayer.push({
          'category': evt.category,
          'action': evt.action,
          'label': evt.label,
          'value': evt.value,
          'query': evt.query,
          'event': 'uact'});
      }

      // track google analytics
      if (typeof (wu.win.ga) !== 'undefined') {
        wu.win.ga('send', 'event', evt.category, evt.action, evt.label, evt.query);
        if (opts.ga) {
          wu.win.ga('uact.send', 'event', evt.category, evt.action, evt.label, evt.query);
        }
      }
    }

    wu.addEvent(wu.doc, 'click', actionHandler);
    wu.addEvent(wu.doc, 'tap', actionHandler);
    wu.addEvent(wu.doc, 'change', actionHandler);
    wu.addEvent(wu.doc, 'submit', actionHandler);
  }
}

if (typeof (wu.win.uact) === 'undefined') {
  wu.win.uact = new Uact();
}

export default wu.win.uact;
