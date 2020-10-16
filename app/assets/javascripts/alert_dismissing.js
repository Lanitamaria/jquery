$(document).ready(function(){
    $('.close').click(function(){
        $('.alert').fadeOut('slow', function(){
            $(this).remove()
        })
    })
});