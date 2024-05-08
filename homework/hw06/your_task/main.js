const baseURL = 'https://www.apitutor.org/spotify/simple/v1/search';

function search (ev) {
    const term = document.querySelector('#search').value;
    console.log('search for:', term);
    // issue three Spotify queries at once...
    getTracks(term);
    getAlbums(term);
    getArtist(term);
    if (ev) {
        ev.preventDefault();
    }
}

async function getTracks (term) {
    const url= `https: //www.apitutor.org/spotify/simple/v1/search?type=track&q=${term}` ;
    const response= await fetch(url);
    const trackData= await response.json();
    const firstTrack=trackData[0]
    console.log(trackData);
    const template=`
    <section class="track-item preview">
    <img src="${track.album.image_url}">
    <i class="fas play-track fa-play" aria-hidden="true"></i>
    <div class="label">
        <h2>Black Swan</h2>
        <p>
            BTS
        </p>
    </div>
</section>
    `;
Document.querySelector("#tracks").innerHTMl=template;

}

async function getAlbums (term) {
    console.log(`
        get albums from spotify based on the search term
        "${term}" and load them into the #albums section 
        of the DOM...`);
}

async function getArtist (term) {
    const url= `https: //www.apitutor.org/spotify/simple/v1/search?type=artist&q=${term}` ;
    const response= await fetch(url);
    const artistData= await response.json();
    const artist= artistData[0];


    const snippet= `
    <section class="artist-card" id="${artist.id}">
    <div>
        <img src="${artist.image_url}">
        <h2>${artist.name}</h2>
        <div class="footer">
            <a href="${artist.spotify_url}" target="_blank">
                view on spotify
            </a>
        </div>
    </div>
</section>`

const container= document.querySelector('#artist');
container.innerHTML= snippet;
  

};


document.querySelector('#search').onkeyup = function (ev) {
    // Number 13 is the "Enter" key on the keyboard
    console.log(ev.keyCode);
    if (ev.keyCode === 13) {
        ev.preventDefault();
        search();
    }
}