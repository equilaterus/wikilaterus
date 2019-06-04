const wikilaterus = {};

wikilaterus.OpenCurrentDropdown = function () {
    const currentPath = window.location.pathname;

    $(`a[href$="${currentPath}"]`).addClass('active');
    $(`a[href$="${currentPath}"]`).closest('div.dropdown-menu').addClass('show');
    $(`a[href$="${currentPath}"]`).closest('li.dropdown').addClass('show');
    
}

$(function() {
    wikilaterus.OpenCurrentDropdown();
});