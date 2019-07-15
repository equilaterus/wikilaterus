// JS Utils for wikilaterus

//
// Wikilaterus utils
//
const wikilaterus = {};

wikilaterus.UpdateActiveMenu = function (prevUrl, url) {
    if (prevUrl) {
        $(`a[href$="${prevUrl}"]`).removeClass('active');
    } else {
        $(`a[href$="${url}"]`)
            .parents('li.dropdown')
            .children('.dropdown-toggle')
            .dropdown('toggle');
    }    

    $(`a[href$="${url}"]`).addClass('active');  

    // Force closing inactive menus
    $('#sideNavbar .dropdown-toggle').each(function(){
        const menu = $(this)
            .parents('li.dropdown')
            .children('.dropdown-menu');
        if (menu.is(":visible")) {
            $(this).dropdown('toggle');
        }
    });

    // Hide menu on mobile devices
    $('#sideNavbar').removeClass('show');
}

wikilaterus.GenerateTOC = function () {
    let htmlTOC = '<ol>';
    let insideH2 = false;
    $('#main-content h2, #main-content h3').each(function() {
        const elementType = $(this).prop('nodeName').toLowerCase();
        
        if (elementType == 'h2') {
            htmlTOC += `<li><a href="#${$(this).prop('id')}">${$(this).html()}</a></li>`
        }
    });
    htmlTOC += '</ol>';
    return htmlTOC;
}

wikilaterus.AddTOC = function () {
    $('#TOC').html(
        wikilaterus.GenerateTOC()
    );
}

wikilaterus.UpdateCurrentLocation = function (url) {
    history.pushState({}, null, url);
}

wikilaterus.LoadPostFromUrl = function(url) {
    $.ajax({
        url: url
    }).done(function(response) {
        $('#main-content').html(
            response.match(/<!--CONTENT_BEGIN-->(.*)<!--CONTENT_END-->/s )[0]
        );
        wikilaterus.AddTOC();
    });
}

wikilaterus.OpenMenuElement = function (prevUrl, url) {
    this.UpdateActiveMenu(prevUrl, url);    
    this.UpdateCurrentLocation(url);
    this.LoadPostFromUrl(url);
}


//
// jQuery event handlers
//

$('#sideNavbar a.dropdown-item').on('click', function(e) {
    e.preventDefault();
    e.stopPropagation();

    const prevUrl = window.location.pathname;
    const url = $(this).attr('href');
    $("html, body").scrollTop(0);

    wikilaterus.OpenMenuElement(prevUrl, url);        
});

$('#sideNavbar .dropdown').on({
    "hide.bs.dropdown":  function() {
        return $(this).find(".active").length == 0; 
    }
});

$(window).on('popstate', function() {
    // Trigger url load
    document.location = document.location;  
})

$(function() {
    const url = window.location.pathname;
    wikilaterus.UpdateActiveMenu(null, url);
    wikilaterus.AddTOC();
});