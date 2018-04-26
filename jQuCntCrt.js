


$(document).ready(function(){
    $('button').on("click",function(){
        $("#right").append('<div id="cntCrd"><p></p><h3></h3><a href="#">Click for description</a></div>');
        $("h3").text($('#fName').val()+" "+$('#lName').val());  
        $('a').click(function(){
            $(this).hide();
            $(this).siblings().hide();
            $(this).siblings('p').text($("#discribtion").val()).show();

            
        });
       
    });
    $(document).on('click','p', function(){
        $(this).hide();
        $(this).siblings().show();
    });               
    
});