const galleryContainer = document.getElementById('galleryContainer');
fetch('https://jsonplaceholder.typicode.com/photos')
  .then(response => response.json())
  .then(data => {
    const gallery = data.slice(0, 12);
    const images = gallery.map(item => {
    const img = document.createElement('img');
    img.src = item.url;
    const div = document.createElement('div');
    div.appendChild(img);
      return div;
    });

    galleryContainer.append(...images);
  })
  .catch(error => console.error(error));

