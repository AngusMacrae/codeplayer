updateOutput();

$("textarea").on('change keyup paste', updateOutput);

$(".tab-toggle").click(function() {
    
    $("#" + $(this).attr("id").slice(0,-6) + "panel").toggle();
    
});

function updateOutput() {
    
    $("#output").contents().find("html").html("<html><head><style type='text/css'>" + $("#css-input").val() + "</style></head><body>" + $("#html-input").val() + "</body></html>");
    
    document.getElementById("output").contentWindow.eval($("#js-input").val());
    
}