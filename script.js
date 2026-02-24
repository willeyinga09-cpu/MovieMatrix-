const translations = {
    en: { 
        home: "Home", reg: "Registration", help: "Help", all: "All Genres", drama: "Drama", adventure: "Adventure", horror: "Horror", download: "Download", contact: "My Contact Info",
        t_sum: "A poor artist falls in love with an aristocrat aboard the Titanic.",
        r_sum: "A convict participates in a deadly TV game show.",
        m_sum: "The high-tech AI doll returns in this futuristic thriller.",
        w_sum: "The untold story of the witches of Oz.",
        y_sum: "A mother and daughter navigate a complex relationship after a tragedy.",
        p_sum: "A new standalone adventure in the Predator universe set in the future.",
        av_sum: "Earth's mightiest heroes must come together to stop Loki.",
        eg_sum: "The Avengers take a final stand against Thanos.",
        fd_sum: "Death returns to claim a new group of survivors.",
        pp_sum: "A young boy who can fly leads children to Neverland.",
        we_sum: "An interlocking story about the disappearance of a family.",
        ll_sum: "A queen hires a sorceress to find a lost magical land.",
        bb_sum: "Miami's finest are on the run in this high-octane sequel.",
        ox_sum: "A woman wakes up in a cryogenic pod with no memory.",
        ph_sum: "A psychological thriller about deep-seated fears.",
        ra_sum: "A warrior searches for the last dragon to save humanity.",
        si_sum: "A U.S. Marshal investigates a disappearance at an asylum.",
        s6_sum: "Ghostface follows the survivors to New York City.",
        sm_sum: "A doctor is haunted by a terrifying smiling entity.",
        wi_sum: "A family in 1630s New England is torn apart by witchcraft.",
        tr_sum: "Five stories of Halloween terror are woven together.",
        rg_sum: "Immortal Guardians team up to protect the world's children.",
        budget: "Budget:", country: "Country:"
        
    },
    fr: { 
        home: "Accueil", reg: "Inscription", help: "Aide", all: "Tous les genres", drama: "Drame", adventure: "Aventure", horror: "Horreur", download: "Télécharger", contact: "Mes Coordonnées",
        t_sum: "Un artiste pauvre tombe amoureux d'une aristocrate à bord du Titanic.",
        r_sum: "Un policier participe à un jeu télévisé mortel.",
        m_sum: "La poupée technologique est de retour dans ce thriller futuriste.",
        w_sum: "L'histoire inédite des sorcières d'Oz.",
        y_sum: "Une mère et sa fille naviguent dans une relation complexe après une tragédie.",
        p_sum: "Une nouvelle aventure autonome dans l'univers Predator située dans le futur.",
        av_sum: "Les héros de la Terre s'unissent pour arrêter Loki.",
        eg_sum: "Les Avengers font face à Thanos pour une ultime bataille.",
        fd_sum: "La mort revient réclamer un nouveau groupe de survivants.",
        pp_sum: "Un garçon qui peut voler emmène des enfants au Pays Imaginaire.",
        we_sum: "Une histoire liée sur la disparition d'une famille.",
        ll_sum: "Une reine engage une sorcière pour trouver une terre perdue.",
        bb_sum: "Les flics de Miami sont en fuite dans cette suite.",
        ox_sum: "Une femme se réveille dans une capsule cryogénique.",
        ph_sum: "Un thriller psychologique sur des peurs profondes.",
        ra_sum: "Une guerrière cherche le dernier dragon pour sauver l'humanité.",
        si_sum: "Un marshal enquête sur une disparition dans un asile.",
        s6_sum: "Ghostface suit les survivants à New York.",
        sm_sum: "Un médecin est hanté par une entité souriante terrifiante.",
        wi_sum: "Une famille de la Nouvelle-Angleterre est déchirée par la sorcellerie.",
        tr_sum: "Cinq histoires de terreur d'Halloween s'entremêlent.",
        rg_sum: "Les Gardiens s'unissent pour protéger les enfants du monde.",
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
    { title: "Predator Badlands", year: "2025", genre: "Drama", country: "USA", budget: "$50M", img: "images/predator-badlands.jpg", url: "movies/predator.mp4", likes: 0, dislikes: 0, userChoice: null, sKey: "p_sum" },
    { title: "Avengers", year: "2012", genre: "Action", country: "USA", budget: "$220M", img: "images/avengers.jpg", url: "movies/avengers.mp4", likes: 0, dislikes: 0, userChoice: null, sKey: "av_sum" },
    { title: "Avengers: Endgame", year: "2019", genre: "Action", country: "USA", budget: "$356M", img: "images/Avengers_Endgame.jpg", url: "movies/endgame.mp4", likes: 0, dislikes: 0, userChoice: null, sKey: "eg_sum" },
    { title: "Final Destination: Bloodlines", year: "2025", genre: "Horror", country: "USA", budget: "$40M", img: "images/final_destination.jpg", url: "movies/fd.mp4", likes: 0, dislikes: 0, userChoice: null, sKey: "fd_sum" },
    { title: "Peter Pan", year: "2003", genre: "Adventure", country: "USA/UK", budget: "$130M", img: "images/Peter_pan.png", url: "movies/peter.mp4", likes: 0, dislikes: 0, userChoice: null, sKey: "pp_sum" },
    { title: "Weapons", year: "2026", genre: "Horror", country: "USA", budget: "$15M", img: "images/weapons.jpg", url: "movies/weapons.mp4", likes: 0, dislikes: 0, userChoice: null, sKey: "we_sum" },
    { title: "In the Lost Lands", year: "2025", genre: "Sci-Fi", country: "USA/Germany", budget: "$45M", img: "images/in_the_lost_lands.jpg", url: "movies/lost_lands.mp4", likes: 0, dislikes: 0, userChoice: null, sKey: "ll_sum" },
    { title: "Bad Boys: Ride or Die", year: "2024", genre: "Action", country: "USA", budget: "$100M", img: "images/Bad-Boys.jpg", url: "movies/bad_boys.mp4", likes: 0, dislikes: 0, userChoice: null, sKey: "bb_sum" },
    { title: "Oxygen", year: "2021", genre: "Sci-Fi", country: "France/USA", budget: "$10M", img: "images/oxygen.jpg", url: "movies/oxygen.mp4", likes: 0, dislikes: 0, userChoice: null, sKey: "ox_sum" },
    { title: "Phobia", year: "2024", genre: "Horror", country: "India", budget: "$5M", img: "images/phobia.jpg", url: "movies/phobia.mp4", likes: 0, dislikes: 0, userChoice: null, sKey: "ph_sum" },
    { title: "Raya and the Last Dragon", year: "2021", genre: "Adventure", country: "USA", budget: "$150M", img: "images/raya.png", url: "movies/raya.mp4", likes: 0, dislikes: 0, userChoice: null, sKey: "ra_sum" },
    { title: "Shutter Island", year: "2010", genre: "Drama", country: "USA", budget: "$80M", img: "images/shutter-island.jpg", url: "movies/shutter.mp4", likes: 0, dislikes: 0, userChoice: null, sKey: "si_sum" },
    { title: "Scream VI", year: "2023", genre: "Horror", country: "USA", budget: "$35M", img: "images/scream6.png", url: "movies/scream6.mp4", likes: 0, dislikes: 0, userChoice: null, sKey: "s6_sum" },
    { title: "Smile", year: "2022", genre: "Horror", country: "USA", budget: "$17M", img: "images/smile.png", url: "movies/smile.mp4", likes: 0, dislikes: 0, userChoice: null, sKey: "sm_sum" },
    { title: "The Witch", year: "2015", genre: "Horror", country: "USA/Canada", budget: "$4M", img: "images/The_witch.jpg", url: "movies/witch.mp4", likes: 0, dislikes: 0, userChoice: null, sKey: "wi_sum" },
    { title: "Trick 'r Treat", year: "2007", genre: "Horror", country: "USA/Canada", budget: "$12M", img: "images/TrT.jpg", url: "movies/trick.mp4", likes: 0, dislikes: 0, userChoice: null, sKey: "tr_sum" },
    { title: "Rise of the Guardians", year: "2012", genre: "Adventure", country: "USA", budget: "$145M", img: "images/rise.jpg", url: "movies/rise.mp4", likes: 0, dislikes: 0, userChoice: null, sKey: "rg_sum" }
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
