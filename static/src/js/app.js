import * as bootstrap from 'bootstrap';

document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(toastNode => new bootstrap.Tooltip(toastNode));

document.querySelectorAll('[data-bs-toggle="popover"]')
    .forEach(function (popover) {
        new bootstrap.Popover(popover)
    })

document.querySelectorAll('.toast')
    .forEach(function (toastNode) {
        var toast = new bootstrap.Toast(toastNode, {
            autohide: false
        })

        toast.show()
    })