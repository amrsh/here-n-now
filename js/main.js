// Show the navbar only if we are in on the web, otherwise set the top bar
$(window).on('load', function() {
	if (forge.is.web()) {
    $('#nav').show();
	} else {
		forge.topbar.setTitle("Here and Now");
  	$('#nav').hide();
  }
});

forge.enableDebug();

// A helper function so that when we change tabs the web view scrolls to the top of the new page
var scrollTop = function () {
    setTimeout(function () {
        document.body.scrollTop = 0;
    }, 0);
}

// This is the method we are going to call when a tabbar button is pressed
var updateTab = function (search) {
    scrollTop();
    // For now just pop up a message with the tab which was pressed
    alert(search);
}

// Add our 3 tab buttons to the tabbar and add press listeners
var homeButton = forge.tabbar.addButton({
    text: "Home",
    icon: "img/home.png",
    index: 0
}, function (button) {
    button.onPressed.addListener(function () {
        updateTab("home");
    });
    // This is the default button, activate it immediately
    button.setActive();
    updateTab("home");
});

var settingsButton = forge.tabbar.addButton({
    text: "Settings",
    icon: "img/settings.png",
    index: 1
}, function (button) {
    button.onPressed.addListener(function () {
        updateTab("settings");
    });
});
