$("#txtSearch").on('keyup', function() {
    var search = $(this).val().toLowerCase();
    //Go through each list item and hide if not match search

    $(".list-group-item").each(function() {
        if ($(this).html().toLowerCase().indexOf(search) != -1) {
            $(this).show();
        }
        else {
            $(this).hide();  
        }

    });
    $(".list-group-item:visible").each(function(index) {
         if(index == 0){
             $(this).css("border-top-left-radius", "10px");
             $(this).css("border-top-right-radius", "10px");
         }
         if(index == $(".list-group-item:visible").length - 1){
             $(this).css("border-bottom-left-radius", "10px");
             $(this).css("border-bottom-right-radius", "10px");
         }
     });

});