
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function isMobileDevice () {
  var retVal = false;
  (function(a,b){if(/(android|bb\d+|meego).+mobile|android|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))retVal = true})(navigator.userAgent||navigator.vendor||window.opera);
  console.log('isMobileDevice: ' + retVal + ' ' + navigator.userAgent);
  return retVal;
};

function isIOS () {
  var retVal = false;
  (function(a,b){if(/iP(hone|od|ad)/i.test(a))retVal = true})(navigator.userAgent||navigator.vendor);
  console.log('isIOS: ' + retVal);
  return retVal;
};

function hasFlash (){
	var retVal = false;
    try {
      if (navigator.plugins !== null && navigator.plugins.length > 0){
        retVal = navigator.plugins["Shockwave Flash"] && true;
      }
      if(~navigator.userAgent.toLowerCase().indexOf("webtv")){
        retVal = true;
      }
      if(~navigator.appVersion.indexOf("MSIE") && !~navigator.userAgent.indexOf("Opera")){
        try{
            retVal = new ActiveXObject("ShockwaveFlash.ShockwaveFlash") && true;
        } catch(e){}
      }
    } catch(e){}
    console.log('hasFlash: ' + retVal);
    return retVal;
};

 function hasWebgl () {
 	var retVal = false;
    try{
    var canvas = document.createElement( 'canvas' );
    retVal = !! window.WebGLRenderingContext && (
         canvas.getContext( 'webgl' ) || canvas.getContext( 'experimental-webgl' ) );
    } catch(e) {
    	retVal = false;
    }
    console.log('hasWebgl: ' + retVal);
    return retVal;
 };


function onvideoready() {
	console.log('onvideoready');
}

function onvideoplay() {
	console.log('onvideoplay');

	try {
		console.log('document.referrer: ' + document.referrer);
	} catch (e) {}
}

function onvideopaused() {
	console.log('onvideopaused');
}

function onvideocomplete() {
	console.log('onvideocomplete');
}

function onvideoupdate(ispaused) {
	console.log('onvideoupdate: ispaused: ' + ispaused);
}

function embedPanoramicContent () {	
	var type = getParameterByName('type');
	
	var url = getParameterByName('url');
	var config = getParameterByName('config');

	var url_ios = getParameterByName('url.ios');
	var config_ios = getParameterByName('config.ios');


	var splash = getParameterByName('splash');
	var fallback = getParameterByName('fallback');

	var settings = {
		swf:"../vendor/kr-1.18.3/player.swf",
		xml: "config/video.xml", 
		target:"video-content", 
		html5:"fallback", 
		wmode: "transparent", 
		passQueryParameters:false,
	};

	if( isIOS() ) {
		url = (url_ios) ? url_ios : url;
		config = (config_ios) ? config_ios : config;
	}	

	if( config ) {
		console.log('Setting config to: ' + config);
		settings.xml = 'config/' + config;
	}

	var vars = settings.vars = {};
	if(type == 'image') {
		vars['image.sphere.url'] = url;
	} else {
		vars['plugin[video].videourl'] = url;
		vars['plugin[video].posterurl'] = splash;
		vars['plugin[video].pausedonstart'] = true;
	}

	//console.log ( JSON.stringify( settings ));

  	embedpano( settings );
}


function displayFallback (videoId, playerKey) {
	console.log('displayFallback: ' + videoId + ', ' + playerKey);
	var videoFallback = '<object id="myExperience' + videoId + '" class="BrightcoveExperience">' +
	  '<param name="bgcolor" value="#FFFFFF" />' +
	  '<param name="width" value="100%" />' +
	  '<param name="height" value="100%" />' +
	  '<param name="playerID" value="1954048782001" />' +
	  '<param name="playerKey" value="' + playerKey + '" />' +
	  '<param name="isVid" value="true" />' +
	  '<param name="isUI" value="true" />' +
	  '<param name="dynamicStreaming" value="true" />' +
	  '<param name="@videoPlayer" value="' + videoId + '" />' +
	'</object>';
	$('#video-content').append(videoFallback);
	brightcove.createExperiences();
}

$(function() {
	var desktopOnly = getParameterByName('desktopOnly');
	console.log('desktopOnly: ' + (desktopOnly && desktopOnly == "true") );

	if( isMobileDevice() ) {
		// phone or tablet
		if( desktopOnly && desktopOnly == "true") {
			$('#video-content').addClass('table');
			$('.error-desktop-only').removeClass('hide-error').addClass('show-error');
		} else if( hasWebgl() ) {
			embedPanoramicContent();
		} else {
			var bcVideoId = getParameterByName('fallbackBcVideoId');
			var bcPlayerKey = getParameterByName('fallbackBcPlayerKey');
			if(bcVideoId && bcPlayerKey) {
				displayFallback(bcVideoId, bcPlayerKey);
			} else {
				$('#video-content').addClass('table');
				$('.error-webgl').removeClass('hide-error').addClass('show-error');
			}
		}
	} else {
		// desktop
		if( hasFlash() ) {
			embedPanoramicContent();
		} else {
			$('#video-content').addClass('table');
			$('.error-flash').removeClass('hide-error').addClass('show-error');
		}

	}
});


