  
$("textarea").bind("input", function(e) {
  while($(this).outerHeight() < this.scrollHeight +

    parseFloat($(this).css("borderTopWidth")) +
    parseFloat($(this).css("borderBottomWidth"))
    && $(this).height() < 500 // Altura máxima
    
   	) {
        $(this).height($(this).height()+1);
  };
});
