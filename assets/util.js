const wikilaterus = {};

wikilaterus.UpdateActiveMenu = function (prevUrl, url) {
    if (prevUrl) {
        $(`a[href$="${prevUrl}"]`).removeClass('active');
    }

    $(`a[href$="${url}"]`).addClass('active');
    $(`a[href$="${url}"]`).closest('div.dropdown-menu').addClass('show');
    $(`a[href$="${url}"]`).closest('li.dropdown').addClass('show');    
}

wikilaterus.UpdateCurrentLocation = function (url) {
    history.pushState({}, null, url);
}

wikilaterus.LoadPostFromUrl = function(url) {
    $.ajax({
        url: url
    }).done(function(response) {
        $('#main-content').html(
            response.match( /<!--CONTENT_BEGIN-->(.*)<!--CONTENT_END-->/s )
        );
    });
}

wikilaterus.OpenMenuElement = function (prevUrl, url) {
    this.UpdateActiveMenu(prevUrl, url);    
    this.UpdateCurrentLocation(url);
    this.LoadPostFromUrl(url);
} 

$('#sideNavbar a.dropdown-item').on('click', function(e) {
    e.preventDefault();
    e.stopPropagation();

    const prevUrl = window.location.pathname;
    const url = $(this).attr('href');
    
    wikilaterus.OpenMenuElement(prevUrl, url);    
});

$(function() {
    const url = window.location.pathname;
    wikilaterus.UpdateActiveMenu(null, url);
});