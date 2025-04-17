// Load Header
fetch('../modules/header.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('header').innerHTML = data;
});

// Load Footer
fetch('../modules/footer.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('footer').innerHTML = data;
});