


adoptAPet API :

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <title>Cat API Viewer</title>
  <!-- Bootstrap CSS -->
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
  <!-- Custom CSS -->
  <style>
    body {
      padding: 20px;
    }
    .cat-container {
      margin-top: 20px;
    }
    .cat-image {
      max-width: 100%;
      height: auto;
      margin-bottom: 10px;
    }
  </style>
</head>
<body>

<!-- Container for Cat API data -->
<div class="container cat-container">
  <!-- Cat API Images -->
  <div class="row" id="catImages"></div>
</div>

<!-- Bootstrap JS and dependencies -->
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
<!-- Custom JavaScript -->
<script>
  // Function to fetch data from the Cat API using Promises
  function fetchData(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(error => reject(error));
    });
  }

  // Function to display cat images on the webpage
  function displayCatImages(catData) {
    const catImagesElement = document.getElementById('catImages');
    catData.forEach(cat => {
      catImagesElement.innerHTML += `<div class="col-md-4">
                                        <img src="${cat.url}" alt="Cat Image" class="cat-image">
                                      </div>`;
    });
  }

  // Fetch cat data from the API and display on the webpage
  fetchData('https://api.thecatapi.com/v1/images/search?limit=10')
    .then(data => displayCatImages(data))
    .catch(error => console.error('Error fetching Cat API data:', error));
</script>

</body>
</html>

