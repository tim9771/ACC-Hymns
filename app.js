const charactersList = document.getElementById('charactersList');
const searchBar = document.getElementById('searchBar');
let songs = [];

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();
    const filteredSongs = songs.filter( song => {
        return ( song.title.toLowerCase().includes(searchString) ||
        song.number.toLowerCase().includes(searchString) );
    });
    const noSongs = songs.filter( song => {
        return ( song.title.toLowerCase().includes("asjfnnwfenow3w") ||
        song.number.toLowerCase().includes("asjfnnwfenow3w") );
    });
    if(!!searchString) {
        displayCharacters(filteredSongs);
    } else {
        displayCharacters(noSongs);
    }
    
      
});

const loadCharacters = async () => {
    try {
        songs = getZionsHarp();
    } catch (err) {
        console.error(err);
    }
};

const displayCharacters = (characters) => {
    const htmlString = characters
        .map((character) => {
            return `
            <a href="song.html">
                <div class="book-zionsharp">
                    <div class="book-gospelhymns--left">
                        <div class="song__title">${character.title}</div>
                        <div class="book__title">${character.book}</div>
                    </div>
                    <div class="booktext--right">
                        <div class="song__number">#${character.number}</div>
                        <ion-icon name="ellipsis-vertical"></ion-icon>
                    </div>
                </div>
            </a>
            `;
        })
        .join('');
    charactersList.innerHTML = htmlString;
};





loadCharacters();