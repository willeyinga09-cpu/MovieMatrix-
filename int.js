const translations = {
    en: { 
        home: "Home", reg: "Registration", help: "Help", all: "All Genres", drama: "Drama", download: "Download", contact: "My Contact Info",
        t_sum: "A poor artist falls in love with an aristocrat aboard the Titanic.",
        r_sum: "A convict participates in a deadly TV game show.",
        m_sum: "The high-tech AI doll returns in this futuristic thriller.",
        w_sum: "The untold story of the witches of Oz.",
        y_sum: "A mother and daughter navigate a complex relationship after a tragedy.",
        p_sum: "A new standalone adventure in the Predator universe set in the future.",
        budget: "Budget:", country: "Country:"
    },
    fr: { 
        home: "Accueil", reg: "Inscription", help: "Aide", all: "Tous les genres", drama: "Drame", download: "Télécharger", contact: "Mes Coordonnées",
        t_sum: "Un artiste pauvre tombe amoureux d'une aristocrate à bord du Titanic.",
        r_sum: "Un policier participe à un jeu télévisé mortel.",
        m_sum: "La poupée technologique est de retour dans ce thriller futuriste.",
        w_sum: "L'histoire inédite des sorcières d'Oz.",
        y_sum: "Une mère et sa fille naviguent dans une relation complexe après une tragédie.",
        p_sum: "Une nouvelle aventure autonome dans l'univers Predator située dans le futur.",
        budget: "Budget :", country: "Pays :"
    }
};

let currentLang = 'en';

const myMovies = [
    { title: "Titanic", year: "1997", genre: "Drama", country: "USA", budget: "$200M", img: "images/Titanic.jpg", url: "movies/titanic.mp4", likes: 0, dislikes: 0, userChoice: null, sKey: "t_sum" },
    { title: "The Running Man", year: "1987", genre: "Action", country: "USA", budget: "$27M", img: "images/running_man.jpg", url: "movies/running.mp4", likes: 0, dislikes: 0, userChoice: null, sKey: "r_sum" },
    { title: "Megan 2.0", year: "2025", genre: "Sci-Fi", country: "USA", budget: "$12M", img: "images/megan.jpg", url: "movies/megan.mp4", likes: 0, dislikes: 0, userChoice: null, sKey: "m_sum" },
    { title: "Wicked", year: "2025", genre: "Sci-Fi", country: "USA/UK", budget: "$145M", img: "images/wicked.webp", url: "movies/wicked.mp4", likes: 0, dislikes: 0, userChoice: null, sKey: "w_sum" },
    { title: "Regretting You", year: "2025", genre: "Drama", country: "USA", budget: "$35M", img: "images/regretting_you.jpg", url: "movies/regretting.mp4", likes: 0, dislikes: 0, userChoice: null, sKey: "y_sum" },
    { title: "Predator Badlands", year: "2025", genre: "Drama", country: "USA", budget: "$50M", img: "images/predator-badlands.jpg", url: "movies/predator.mp4", likes: 0, dislikes: 0, userChoice: null, sKey: "p_sum" }
];

const gallery = document.getElementById('movie-gallery');

// --- MOBILE MENU TOGGLE LOGIC ---
const mobileMenuBtn = document.getElementById('mobile-menu');
const navMenu = document.getElementById('nav-menu');

if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

function renderMovies() {
    const genreElement = document.getElementById('genre-filter');
    if (!genreElement) return; 
    
    const genre = genreElement.value;
    gallery.innerHTML = '';
    const filtered = genre === 'all' ? myMovies : myMovies.filter(m => m.genre === genre);

    filtered.forEach(movie => {
        const idx = myMovies.findIndex(m => m.title === movie.title);
        const card = document.createElement('div');
        card.className = 'movie-card';
        card.innerHTML = `
            <img src="${movie.img}" class="movie-poster" alt="${movie.title}">
            <div class="movie-info">
                <h3 class="movie-title">${movie.title} <span class="movie-year">(${movie.year})</span></h3>
                <p class="movie-details">
                    <strong>${translations[currentLang].country}</strong> ${movie.country} | 
                    <strong>${translations[currentLang].budget}</strong> ${movie.budget}
                </p>
                <p class="movie-summary">${translations[currentLang][movie.sKey] || ""}</p>
                <div class="reactions">
                    <button class="reaction-btn ${movie.userChoice === 'likes' ? 'active' : ''}" data-index="${idx}" data-type="likes">👍 ${movie.likes}</button>
                    <button class="reaction-btn ${movie.userChoice === 'dislikes' ? 'active' : ''}" data-index="${idx}" data-type="dislikes">👎 ${movie.dislikes}</button>
                </div>
                <a href="${movie.url}" download class="download-btn">${translations[currentLang].download}</a>
            </div>`;
        gallery.appendChild(card);
    });
}

gallery.addEventListener('click', (e) => {
    const btn = e.target.closest('.reaction-btn');
    if (!btn) return;
    
    const m = myMovies[parseInt(btn.dataset.index)];
    const type = btn.dataset.type;

    if (m.userChoice === type) { 
        m[type]--; 
        m.userChoice = null; 
    }
    else if (m.userChoice) { 
        m[m.userChoice]--; 
        m[type]++; 
        m.userChoice = type; 
    }
    else { 
        m[type]++; 
        m.userChoice = type; 
    }
    renderMovies();
});

document.getElementById('lang-selector').onchange = (e) => {
    currentLang = e.target.value;
    
    if(document.getElementById('nav-home')) document.getElementById('nav-home').innerText = translations[currentLang].home;
    if(document.getElementById('nav-reg')) document.getElementById('nav-reg').innerText = translations[currentLang].reg;
    if(document.getElementById('nav-help')) document.getElementById('nav-help').innerText = translations[currentLang].help;
    if(document.getElementById('lang-all')) document.getElementById('lang-all').innerText = translations[currentLang].all;
    if(document.getElementById('lang-drama')) document.getElementById('lang-drama').innerText = translations[currentLang].drama;
    if(document.getElementById('footer-contact')) document.getElementById('footer-contact').innerText = translations[currentLang].contact;
    
    renderMovies();
};

document.getElementById('genre-filter').onchange = renderMovies;

renderMovies();
