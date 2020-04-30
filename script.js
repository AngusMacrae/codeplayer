$("textarea").on('change keyup paste', function() {
    
    $("#output").contents().find("html").html($("#html-input").val());
    
});

$(".tab-toggle").click(function() {
    
    $("#" + $(this).attr("id").slice(0,-6) + "panel").toggle();
    
});