document.addEventListener('DOMContentLoaded', function(e) {
    window.wizard = new wizard(document.getElementById('setup'));

    wizard.next_step_action = function(step) {
        if (step.getAttribute('data-name') == 'admin_form') {
            wizard.db['admin'] = {};

            var nombre = step.querySelector('#admin_nombre');
            var email= step.querySelector('#admin_email');
            var mensaje = step.querySelector('#admin_mensaje');

            wizard.db['admin']['nombre'] = nombre.value;
            wizard.db['admin']['email'] = email.value;
            wizard.db['admin']['mensaje'] = mensaje.value;

        }

        return []; // ugly hack
    };

    wizard.handle_error = function(error) {
        backdrop_error(error);
    };

    wizard.handle_finish = function(step) {
        alert('Mensaje enviado!');
        window.location.href = '/proyect/index.html';
    };

    wizard.start();
});