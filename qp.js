/*
 *  getQueryParameters.js
 *  Copyright (c) 2014 Nicholas Ortenzio
 *  The MIT License (MIT)
 *
 */

window.getQueryParameters = function(str) {
  return (str || document.location.search).replace(/(^\?)/,'').split("&").map(
  	function(n){
  		//return n = n.split("="),this[n[0]] = n[1],this
  		return n = n.split("="),
		( !this[n[0]] ? this[n[0]] = n[1] : ((typeof this[n[0]] === 'object') ? this[n[0]].push(n[1]) : this[n[0]]=[this[n[0]], n[1]]) ),
		this
  }.bind({}))[0];
}
