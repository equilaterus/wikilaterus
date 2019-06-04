const wikilaterus = {};

wikilaterus.OpenCurrentDropdown = function () {
    const currentPath = window.location.pathname;
    $(`a[data-wiki-url$="${currentPath}"]`).addClass('active');
    $(`a[data-wiki-url$="${currentPath}"]`).closest('div.dropdown-menu').addClass('show');
    $(`a[data-wiki-url$="${currentPath}"]`).closest('li.dropdown').addClass('show');
    
}

$(function() {
    wikilaterus.OpenCurrentDropdown();
});