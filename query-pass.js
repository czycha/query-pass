'use strict';
var URL = require('url-parse');

jQuery.fn.queryPass = function(keys, override) {
  if(override === undefined) {
    override = false;
  }
  var location = new URL(window.location.href, true);
  var queryObj = {};
  var empty = true;
  for(var i = 0; i < keys.length; i++) {
    if(keys[i] in location.query) {
      queryObj[keys[i]] = location.query[keys[i]];
      empty = false;
    }
  }
  if(empty === true) {
    return this;
  }
  jQuery(this).each(function() {
    var $this = jQuery(this);
    var href = new URL($this.attr('href'), true);
    var query = href.query;
    if(!override) {
      for(var i = 0; i < keys.length; i++) {
        if(keys[i] in href.query) {
          return;
        }
      }
    }
    href.set('query', jQuery.extend({}, query, queryObj));
    $this.attr('href', href.href);
  });
  return this;
};
