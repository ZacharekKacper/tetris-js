$('#submit-button').click(function(e) {
    e.preventDefault(); // zapobiega domyślnemu zachowaniu przycisku Submit
  
    const variable1 = $('#input-variable1').val();
  
    $.ajax({
      type: 'POST',
      url: '/save-data',
      data: JSON.stringify({ variable1, variable2 }),
      contentType: 'application/json',
      success: function(response) {
        console.log(response);
        // Aktualizacja interfejsu użytkownika po pomyślnym zapisaniu danych
      },
      error: function(xhr, status, error) {
        console.error(error);
        // Obsługa błędów
      }
    });
  });