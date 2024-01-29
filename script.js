const searchInput = document.getElementById('busca-input');
const resultArtist = document.getElementById('resultado-artista');
const resultPlaylist = document.getElementById('resultado-playlist');

function requestAPI(searchTerm) {
    const url = `http://localhost:3000/artists?name_like=${searchTerm}`;
    fetch(url)
        .then((response) => response.json())
        .then((result) => displayResults(result));
}

function displayResults(result) {
    resultPlaylist.classList.add('hidden');

    const artistName = document.getElementById('artista-name');
    const artistImage = document.getElementById('artista-img');

    result.forEach(element => {
        artistName.innerText = element.name;
        artistImage.src = element.urlImg;
    });
    
    resultArtist.classList.remove('hidden');
}

document.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    if(searchTerm === '') {
        resultArtist.classList.add('hidden');
        resultPlaylist.classList.remove('hidden');
        return;
    }
    requestAPI(searchTerm);
});