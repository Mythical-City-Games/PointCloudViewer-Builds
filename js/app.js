var heightMultiplier = .9;
// var doCentreVertically = true; // Unused now


var isFullscreen = false;

// update canvas size
var refreshCanvas = function() {
  var footerHeight = $("#unity-footer").is( ":visible" ) ? $( "#unity-footer" ).height() : 0;

  container.style.width = canvas.style.width = window.innerWidth * heightMultiplier + "px";
  canvas.style.height = ( window.innerHeight - footerHeight ) * heightMultiplier + "px";
  container.style.height = window.innerHeight * heightMultiplier + "px";
};

$(function() {
  // scale canvas correctly once on start
  refreshCanvas();

});


// on window resize, apply width to game
$( window ).resize(function() {
  refreshCanvas();
});

// check for fullscreen toggle
// $(document).keydown(function(event) {
//   var keycode = (event.keyCode ? event.keyCode : event.which);
//   if(keycode == '70'){
//     if (!isFullscreen) {
//       unityInstance.SetFullscreen(1);
//       isFullscreen = true;
//     }
//     else {
//       unityInstance.SetFullscreen(0);
//       isFullscreen = false;
//     }
//   }
// });

