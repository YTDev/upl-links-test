document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var formData = new FormData(this);
    
    fetch('/upload', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(link => {
        document.getElementById('linkContainer').innerHTML = `<a href="${link}" target="_blank">View Image</a>`;
    })
    .catch(error => console.error('Error:', error));
});
