import utils from './Utils';

const getFeedback = (isSuccess, result, successText) => `<div class="alert alert-${isSuccess ? 'success' : 'danger'} alert-dismissible fade show" role="alert">
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
      ${isSuccess ? successText : (result.message || result.email)}
    </div>`;

utils.$document.ready(() => {

  const $forms = $('.mailbluster-subscribe');

  if ($forms.length > 0) {
    $forms.each((index, value) => {
      const $form = $(value);
      const $submit = $form.find('[type=\'submit\']');
      const $feedback = $form.find('.mailbluster-feedback');
      const successText = $form.find('[type=\'hidden\']').val() || 'Thank you so much for subscribing!';
      const submitText = $submit.text();

      $form.on('submit', (e) => {
        e.preventDefault();
        $submit.text('Please wait...');
        $.ajax({
          type: 'POST',
          url: '/assets/php/mailbluster.php',
          data: $form.serialize(), // again, keep generic so this applies to any form,
        })
          .done((result) => {
            $feedback.html(getFeedback(true, result, successText));
            $form.trigger('reset');
          })
          .fail((xhr) => {
            $feedback.html(getFeedback(false, xhr.responseJSON));
          })
          .always(() => {
            $submit.text(submitText);
          });
      });
    });
  }
});
