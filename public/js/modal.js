$(document).ready(function() {
    $('#surveyForm').on('submit', function(e) {
      e.preventDefault(); // Предотвращаем стандартную отправку формы
      $('#formModal').modal('hide'); // Скрываем модальное окно с формой
      $('#thankYouModal').modal('show'); // Показываем модальное окно с благодарностью
    });
});