// ==UserScript==
// @name           Make GitHub Blob pages full width
// @namespace      https://bitbucket.org/deadlydog/greasemonkeyscripts
// @description    Makes the GitHub Blob page span the full width of the browser.
// @include        https://github.com/*/blob/*
// @version        1.0
// ==/UserScript==
elements = document.getElementsByClassName('container hentry');
for (var index in elements)
{
	elements[index].style.width="95%";	// Only 95% to leave room for text in the margins.
}

elements = document.getElementsByClassName('frames');
for (var index in elements)
{
	elements[index].style.width="100%";
}

elements = document.getElementsByClassName('frame frame-center');
for (var index in elements)
{
	elements[index].style.width="100%";
}
