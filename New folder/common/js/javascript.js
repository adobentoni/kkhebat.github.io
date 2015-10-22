$(document).ready(function(e) {
	$("#settings-dropdown").hide();
    $("#sidebarTrigger").click(function(e) {
		$("#settings-dropdown").slideToggle();
    });
});