/**
 * @overview jQuery.queryPass
 * @description Pass query params from current URL to certain links on the page.
 * @author James Anthony Bruno
 * @version 1.0.0
 * @see {@link https://github.com/czycha/query-pass}
 * @requires jQuery
 */

'use strict';
var URL = require('url-parse');

/**
 * Apply to jQuery elements.
 * @param {Array<string>} keys - Param keys to add to link.
 * @param {boolean} [override=false] - If key exists in link's query, replace it.
 * @example <caption>Pass UTM paramaters to links with the query-pass--utm class.</caption>
 * $('.query-pass--utm').queryPass(['utm_content', 'utm_campaign', 'utm_source', 'utm_medium']);
 */
jQuery.fn.queryPass = function(keys, override) {
  if(override === undefined) {
    override = false;
  }
  var location = new URL(window.location.href, true);
  var urlQuery = {};
  var empty = true;
  for(var i = 0; i < keys.length; i++) {
    if(keys[i] in location.query) {
      urlQuery[keys[i]] = location.query[keys[i]];
      empty = false;
    }
  }
  if(empty === true) {
    return this;
  }
  jQuery(this).each(function() {
    var $this = jQuery(this);
    var href = new URL($this.attr('href'), true);
    var hrefQuery = href.query;
    href.set('query', override ? jQuery.extend({}, urlQuery, hrefQuery) : jQuery.extend({}, hrefQuery, urlQuery));
    $this.attr('href', href.href);
  });
  return this;
}