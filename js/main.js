// Show the navbar only if we are in on the web, otherwise set the top bar
$(window).on('load', function() {
	if (forge.is.web()) {
    $('#nav').show();
    bindNav();
	} else {
		forge.topbar.setTitle("Here and Now");
  	$('#nav').hide();
  }
  updateView("home");
});

forge.enableDebug();

// A helper function so that when we change tabs the web view scrolls to the top of the new page
var scrollTop = function () {
    setTimeout(function () {
        document.body.scrollTop = 0;
    }, 0);
}

// This is the method we are going to call when a navbar or tabbar button is pressed
var updateView = function (view) {
    // scrollTop();
    // Flip views depending on selection
  	if (view == "settings") {
      $('#home').hide();
      $('#settings').show();
      $('#about').hide();
  	} else if (view == "about") {
      $('#home').hide();
      $('#settings').hide();
      $('#about').show();
    } else {
      $('#home').show();
      $('#settings').hide();
      $('#about').hide();
    }
}

// Bind to navbar
var bindNav = function() {
  $('#nav-home').bind('click', function() {
    updateView("home");
  });
  $('#nav-settings').bind('click', function() {
    updateView("settings");
  });
  $('#nav-about').bind('click', function() {
    updateView("about");
  });
}

// Add our tab buttons to the tabbar and add press listeners
var homeButton = forge.tabbar.addButton({
    text: "Home",
    icon: "img/home.png",
    index: 0
}, function (button) {
    button.onPressed.addListener(function () {
        updateView("home");
    });
    // This is the default button, activate it immediately
    button.setActive();
    updateView("home");
});

var settingsButton = forge.tabbar.addButton({
    text: "Settings",
    icon: "img/settings.png",
    index: 1
}, function (button) {
    button.onPressed.addListener(function () {
        updateView("settings");
    });
});
