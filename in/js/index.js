'use strict';

//js
import * as $ from "jquery"
import "bootstrap-sass/assets/javascripts/bootstrap.min.js";

//css
require ('../css/style.scss');

window.onload = function() {
	$('.page-title').append('<p>jQuery works!</p>')
}
