$(function () {
    'use strict';

    // init the validator
    // validator files are included in the download package
    // otherwise download from http://1000hz.github.io/bootstrap-validator

    $('#contact-form').validator();


    // when the form is submitted
    $('#contact-form').on('submit', function (e) {

        // if the validator does not prevent form submit
        if (!e.isDefaultPrevented()) {
            e.preventDefault();

            // No backend on GitHub Pages: open the visitor's email client
            // with a pre-filled message addressed to Erion Nezha.
            var name = $('#form_name').val().trim();
            var email = $('#form_email').val().trim();
            var message = $('#form_message').val().trim();

            var subject = encodeURIComponent('Portfolio contact from ' + name);
            var body = encodeURIComponent(message + '\n\n— ' + name + ' (' + email + ')');

            window.location.href = 'mailto:erjonnezhaa@gmail.com?subject=' + subject + '&body=' + body;

            var alertBox = '<div class="alert alert-success alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>Opening your email app — your message to Erion is ready to send.</div>';

            // inject the alert to .messages div in our form
            $('#contact-form').find('.messages').html(alertBox);
            // empty the form
            $('#contact-form')[0].reset();

            return false;
        }
    })
});
