Game Of Thrones API

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <title>API Character Details</title>
  <!-- Bootstrap CSS -->
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
  <!-- Custom CSS -->
  <style>
    body {
      padding: 20px;
    }
    .character-details {
      margin-top: 20px;
    }
  </style>
</head>
<body>

<!-- Container for Character Details -->
<div class="container character-details">
  <h2>Character Details</h2>
  <div id="characterDetails"></div>
</div>

<!-- Bootstrap JS and dependencies -->
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
<!-- Custom JavaScript -->
<script>
  // Function to fetch data from API using Promises
  function fetchData(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(error => reject(error));
    });
  }

  // Function to display character details on the webpage
  function displayCharacterDetails(character) {
    const characterDetailsElement = document.getElementById('characterDetails');
    characterDetailsElement.innerHTML = `
      <p><strong>Name :</strong> ${character.name}</p>
      <p><strong>Gender :</strong> ${character.gender}</p>
      <p><strong>Culture :</strong> ${character.culture}</p>
      <p><strong>Birth Year :</strong> ${character.born}</p>
      <p><strong>Titles :</strong> ${character.titles.join(', ')}</p>
      <p><strong>Tv Series :</strong> ${character.tvSeries.join(', ')}</p>
      <p><strong>Aliases :</strong> ${character.aliases.join(', ')}</p>
    `;
  }

  // Fetch data from the provided API URL and display details
  fetchData('https://anapioficeandfire.com/api/characters/583')
    .then(character => displayCharacterDetails(character))
    .catch(error => console.error('Error fetching character details:', error));
</script>

</body>
</html>
