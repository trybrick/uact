import Wu from 'wu';

let wu = new Wu();
let currentScript = wu.doc.querySelector('script[src*="uact.js"],script[src*="uact.min.js"]');

if (!currentScript) {
  let scripts = wu.doc.getElementsByTagName('script');

  currentScript = wu.doc.currentScript || scripts[scripts.length - 1];
}

let opts = wu.getAttrs(currentScript);

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

  /**
   * init function
   * @param  {object} opts options
   */
  init() {
    this.setupHandlers();

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

      ga('create', opts.ga, 'auto');
    }
/*eslint-enable */

  }

  /**
   * setup action handlers
   */
  setupHandlers() {
    let that = this;

    function actionHandler(e) {
      let queryString = wu.win.location.search.substring(1);
      let queryTemp = wu.queryParseString(queryString);
      let query = {};

      // normalize query string key to lowercase
      wu.each(queryTemp, (v, k) => {
        query[k.toLowerCase()] = v;
      });

      if (wu.isNull(query.utm_campaign, '').length < 2) {
        that.log('exiting: invalid utm_campaign');
        return;
      }

      let event = e || that.win.event;
      let target = event.target || event.srcElement;
      let btn = target.closest('button');
      let evt = {query: query, category: query.utm_campaign, value: 1 };

      if (target.tagName === 'INPUT') {
        let targetType = target.type.toLowerCase();

        if (targetType === 'submit' || targetType === 'button') {
          evt.action = target.name || target.id || e.type || 'button action';
          evt.label = target.value;
        }
      } else if (btn) {
        evt.action = btn.name || btn.id || e.type || 'button action';
        evt.label = btn.textContent || btn.innerText;
      } else {
        let a = target.closest('a');

        if (!a) {
          that.log('exiting: click has no valid parent element');
          return;
        }

        evt.action = wu.getAttr(a, 'href');
        evt.label = a.textContent || a.innerText;
      }

      that.log('triggering...');
      that.log(evt);

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
      }
    }

    wu.addEvent(wu.doc, 'click', actionHandler);
    wu.addEvent(wu.doc, 'tap', actionHandler);
  }
}

if (typeof (wu.win.uact) === 'undefined') {
  wu.win.uact = new Uact();
}

export default wu.win.uact;
