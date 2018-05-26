$(document).foundation()

function toggleDetails(el){
    $(el).find('.tags-section').slideToggle(300, 'linear');
    $(el).find('.description-section').slideToggle(300, 'linear');
}

function expandCollapse(){
    if ($('.expand-collapse').text() == 'expand all') {
        $('.tags-section:hidden').slideDown();
        $('.description-section:hidden').slideDown();
        $('.expand-collapse').html("collapse all<i class='icon-angle-circled-up'>");
    } else {
        $('.tags-section').slideUp();
        $('.description-section').slideUp();
        $('.expand-collapse').html("expand all<i class='icon-angle-circled-down'>");
    }
}
