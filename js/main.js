$('#generatePoem').on('click', function () {
    const plant = $('#plant').val().trim();
    const animal = $('#animal').val().trim();

    if (plant && animal) {
      const poem = `In a meadow of ${plant}s, danced a lonely ${animal} under the golden sun.`;
      $('#poemText').text(poem);
      $('#poemCard').fadeIn();
    } else {
      alert('Please enter both a plant and an animal.');
    }
  });

  $('#resetForm').on('click', function () {
    $('#plant').val('');
    $('#animal').val('');
    $('#poemText').text('');
    $('#poemCard').fadeOut();
  });





  