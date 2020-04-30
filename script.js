let htmlVis = true;
let cssVis = true;
let jsVis = true;
let outputVis = true;

$("#html-toggle").click(function() {
    
    if (htmlVis) {
        
        $("#html-panel").hide();
        htmlVis = false;
         
    } else {
        
        $("#html-panel").show();
        htmlVis = true;
        
    }
    
});

$("#css-toggle").click(function() {
    
    if (cssVis) {
        
        $("#css-panel").hide();
        cssVis = false;
         
    } else {
        
        $("#css-panel").show();
        cssVis = true;
        
    }
    
});

$("#js-toggle").click(function() {
    
    if (jsVis) {
        
        $("#js-panel").hide();
        jsVis = false;
         
    } else {
        
        $("#js-panel").show();
        jsVis = true;
        
    }
    
});

$("#output-toggle").click(function() {
    
    if (outputVis) {
        
        $("#output-panel").hide();
        outputVis = false;
         
    } else {
        
        $("#output-panel").show();
        outputVis = true;
        
    }
    
});