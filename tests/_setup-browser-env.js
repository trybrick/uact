import browserEnv from 'browser-env';
import jQuery from 'jquery';
browserEnv(['window', 'document', 'navigator']);
global.jQuery = jQuery(window)
