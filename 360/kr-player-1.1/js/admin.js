
// end with a slash /
var DEFAULT_VIDEO_URL = "http://khilnani.github.io/debug/360/videos/"
var PLAYER_BASE = ( location.host.toLowerCase() == 'localhost' || location.host.toLowerCase() == '127.0.0.1') ? 'http://khilnani.github.io' : (location.protocol + '//' + location.host).toLowerCase();
var PLAYER_PATH = '/debug/360/kr-player-1.1/?';
var IFRAME_START = '<iframe style="position: relative; border: 0px; border-width: 0px;" src="';
var IFRAME_END = '" height="300" width="540" frameborder="0" scrolling="no"><!--iframe--></iframe>';
var VALID_FILE_EXT = [".mp4", ".mov", ".m4v", ".jpg"];
var URL_ERROR_MSG = VALID_FILE_EXT.join(' ') + ' files only. No spaces in URL. Media should reside on: ' + PLAYER_BASE;


function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function sampleFields() {
	console.log('Sample fields.')
	$('#url').val('http://khilnani.github.io/debug/360/videos/01-03-TedLigety-sphere.mp4');
	$('#config').val('video.xml');
	$('#type').val('video');
	$('#splash').val('http://khilnani.github.io/debug/360/videos/test1-poster.jpg');
	$('#url_ios').val('http://khilnani.github.io/debug/360/videos/01-03-TedLigety-sphere.mp4');
	$('#config_ios').val('video.xml');
	$('#fallbackBcVideoId').val('3980406145001');
	$('#fallbackBcPlayerKey').val('AQ~~,AAAABvaL8JE~,ufBHq_I6Fnz0FnzhghXhEvHTegMzyUse');

	update();
}

function clearFields() {
	console.log('Clear fields.')
	$('#url').val(DEFAULT_VIDEO_URL);
	$('#splash').val('');
	$('#config').val('video.xml');
	$('#type').val('video');
	$('#url_ios').val('');
	$('#config_ios').val('');
	$('#fallbackBcVideoId').val('');
	$('#fallbackBcPlayerKey').val('');

	updateEmbed();
}

function hasValidExtension(url) {
	console.log('hasValidExtension: ' + url);
	for(var i=0; i < VALID_FILE_EXT.length; i++) {
		var t = (url.toLowerCase().indexOf( VALID_FILE_EXT[i].toLowerCase() ) > -1);
		console.log( url.toLowerCase().indexOf( VALID_FILE_EXT[i].toLowerCase() ) + ' ' + t);
		if (t) {
			return true;
		}
	}
	return false;
}

function isUrlValid(url) {
	var valid = false;
	if(url) {
		if(url.toLowerCase().indexOf('rtmp://') == 0) {
			//rtmp urls are not checked for crossdomain.xml
			valid = true;
		} else {
			valid = hasValidExtension(url) && (url.toLowerCase().indexOf( ' ' ) == -1) && (url.toLowerCase().indexOf( PLAYER_BASE ) > -1);
		}
	}
	return valid;
}

function validate() {
	console.log( 'Validate.' );

	var valid = true;

	console.log( "'" + $('#url').val() + "'");
	if(isUrlValid( $('#url').val() )) {
		$('#url').parent().removeClass('has-error');
		$('#url-error').text('');
	} else {
		$('#url').parent().addClass('has-error');
		$('#url-error').text( URL_ERROR_MSG );
		valid = false;
	}

	console.log( "'" + $('#splash').val() + "'" );
	if($('#splash').val().trim() == "" || isUrlValid( $('#splash').val() )) {
		$('#splash').parent().removeClass('has-error');
		$('#splash-error').text('');
	} else {
		$('#splash').parent().addClass('has-error');
		$('#splash-error').text( URL_ERROR_MSG );
		valid = false;
	}

	console.log( "'" + $('#url_ios').val() + "'");
	if($('#url_ios').val().trim() == "" || isUrlValid( $('#url_ios').val() )) {
		$('#url_ios').parent().removeClass('has-error');
		$('#url_ios-error').text('');
	} else {
		$('#url_ios').parent().addClass('has-error');
		$('#url_ios-error').text( URL_ERROR_MSG );
		valid = false;
	}

	if(!valid) {		
		updateEmbed('Unable to generate embed HTML. Please check for Errors in your data.');
	}

	return valid;
}

function createUrl() {
	var url = PLAYER_BASE + PLAYER_PATH;
	// required
	url += 'url=' + $('#url').val() + '&';
	url += 'config=' + $('#config option:selected').val() + '&';
	url += 'type=' + $('#type option:selected').val() + '&';
	url += 'desktopOnly=' + $('#desktopOnly option:selected').val() + '&';
	//optional
	if( $('#splash').val().trim() != "" )
		url += 'splash=' + $('#splash').val() + '&';
	if( $('#url_ios').val().trim() != "" )
		url += 'url.ios=' + $('#url_ios').val() + '&';
	if( $('#config_ios option:selected').val().trim() != "" )
		url += 'config.ios=' + $('#config_ios option:selected').val() + '&';
	if( $('#fallbackBcVideoId').val().trim() != "" )
		url += 'fallbackBcVideoId=' + $('#fallbackBcVideoId').val() + '&';
	if( $('#fallbackBcPlayerKey').val().trim() != "" )
		url += 'fallbackBcPlayerKey=' + $('#fallbackBcPlayerKey').val() + '&';
	console.log('URL: ' + url);
	return url;
}

function createEmbedHtml (url) {
	var html = undefined;
	if(url) {
		html = IFRAME_START + url + IFRAME_END;
	}
	console.log('HTML: ' + html);
	return html;
}

function update() {
	if( validate() ) {

		var url = createUrl();
		var html = createEmbedHtml(url);

		updateEmbed(html, url);

	}

	$('#collapseThree').collapse('show');
}

function updateEmbed (html, url) {	
	if(!html) {
		html = '';
	}

	$('#html-embed-code').text( html );
	$('#html-embed-iframe').html( html );

	if(url) {
		$('#html-embed-link').html( '<a href="' + url + '" target="_blank">Direct URL - Click to preview</a>' );

		$('#html-preview-reset').addClass('hidden');
		$('#html-preview').removeClass('hidden');
	} else {
		$('#html-preview-reset').removeClass('hidden');
		$('#html-preview').addClass('hidden');
	}
}

$(function() {
	console.log('Loaded.');
	console.log('PLAYER_BASE: ' + PLAYER_BASE);

	$('#fileTypeLabel').text( VALID_FILE_EXT.join(' ') );
  $('#DEFAULT_VIDEO_URL').text( DEFAULT_VIDEO_URL );

  clearFields();

	if( getParameterByName('sample') == 'true') {
		sampleFields();
	}

	$('.btn-clear').on("click", function () { 
		clearFields();
	});

	$('.btn-submit').on("click", function () {
		console.log('Submit clicked.');

		update();

	});
});


