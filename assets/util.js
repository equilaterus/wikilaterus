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

wikilaterus.ParseHeading = function(element, state, htmlTOC) {
    const elementType = element ? element.prop('nodeName').toLowerCase() : '';
    console.log(state);
    console.log(element);
    switch (state) {
        case '':
            if (elementType === 'h2') {
                // Open h2
                htmlTOC += `<li><a href="#${element.prop('id')}">${element.html()}</a>`;
                state = 'inside-h2';
            }
            break;
        case 'inside-h2':
            if (elementType === 'h2') {
                // Close previous h2 and continue
                htmlTOC += `</li><li><a href="#${element.prop('id')}">${element.html()}</a>`;
                state = 'inside-h2';
            } else if (elementType === 'h3') {
                // Open an h3
                htmlTOC += `<ul><li><a href="#${element.prop('id')}">${element.html()}</a></li>`;
                state = 'inside-h3';
            } else {
                // Close h2
                htmlTOC += `</li>`;
                state = '';
            }
            break;
        case 'inside-h3':
            if (elementType === 'h2') {
                // Close h3 and h2 and continue
                htmlTOC += `</ul></li><li><a href="#${element.prop('id')}">${element.html()}</a>`;
                state = 'inside-h2';
            } else if (elementType === 'h3') {
                // Continue
                htmlTOC += `<li><a href="#${element.prop('id')}">${element.html()}</a></li>`;
                state = 'inside-h3';
            } else {
                // Close h3 and h2
                htmlTOC += `</ul></li>`;
                state = '';
            }
            break;
    }
    
    return [ htmlTOC, state ];
}

wikilaterus.GenerateTOC = function () {
    let htmlTOC = '<ol>';
    let state = '';
    $('#main-content h2, #main-content h3').each(function() {
        [htmlTOC, state] = wikilaterus.ParseHeading($(this), state, htmlTOC);
    });
    [htmlTOC, state] = wikilaterus.ParseHeading(null, state, htmlTOC);
    htmlTOC += '</ol>';
    console.log(htmlTOC);
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