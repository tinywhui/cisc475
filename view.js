// Really need a json-sass converter, these hardcoded values are
// a bad idea.


// clicking while in open transition doesn't do anything, that's not great.
$(document).ready(function(){
  $("#menuButton").click(function(){
    var menu = $("#menu");
    var pdf = $("#pdfView");

    var width = menu.width();
    var parentWidth = menu.offsetParent().width();
    var percent = 100*width/parentWidth;

    if(percent === 25){ // closing
      console.log("Closing Menu");
      menu.width("0%");
      pdf.width("100%");
      pdf.css("margin-left","0%")
    }
    else { // opening
      console.log("Opening Menu");
      menu.width("25%")
      pdf.width("75%");
      pdf.css("margin-left","25%")
    }

  });

});
