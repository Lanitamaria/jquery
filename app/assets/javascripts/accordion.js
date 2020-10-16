$(document).ready(function(){
    $('.btn-accordion').click(function(){
        var div_id = $(this).data('target')
        var div_accordion = $('#'+div_id)
        if (div_accordion.is(':visible')) {
            div_accordion.hide('slow')
        }else{
            $('.accordion-content').hide('slow')
            div_accordion.show('slow')
        }
    })
});