


Characters of Harry Potter


<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <title>API Details Display</title>
  <!-- Bootstrap CSS -->
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
  <!-- Custom CSS -->
  <style>
    body {
      padding: 20px;
      text-align: center;
      background: #F1E6B9;

    }
    .api-details {
      margin-top: 20px;
      color: #F8AC16;
    }
    .card {
        background-color: #7F0909;
        margin: 10px;
        padding: 20px;
    }

    
  </style>
</head>
<body>

<!-- Container for API details -->
<div class="container api-details">
    <h3 style="color: black; margin-bottom: 50px;">Characters of Harry Potter</h3>
  <!-- API Data Display -->
  <div id="apiData"></div>
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

  // Function to display data on the webpage
  function displayData(apiData) {
    const apiElement = document.getElementById('apiData');
    apiData.forEach(character => {
      apiElement.innerHTML += `
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">${character.name}</h5>
            <p class="card-text">House : ${character.house}</p>
            <p class="card-text">Birthdate : ${character.dateOfBirth}</p>
            <p class="card-text">Patronus : ${character.patronus}</p>
          </div>
        </div>
      `;
    });
  }

  // Fetch data from the API and display on the webpage
  fetchData('https://hp-api.onrender.com/api/characters/students')
    .then(data => displayData(data))
    .catch(error => console.error('Error fetching API data:', error));
</script>

</body>
</html>