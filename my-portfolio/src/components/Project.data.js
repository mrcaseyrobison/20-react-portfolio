import whiskyImage from "../assets/images/whisky_taste.jpg";
import cardsForJokes from "../assets/images/cardsforjokesjpg";
import communityVision from "../assets/images/seattle_center.jpg";

const data = [
    {
        "id": 1,
        "title": "Whisky Journal",
        "description": "Full-stack group project creating a journal for a user to record details about their favorite scotch whiskies",
        "image": whiskyImage,
        "repo": "https://github.com/mrcaseyrobison/my-scotch-whisky-journal",
        "live": "https://whisky-journal.herokuapp.com/"
    },
    {
        "id": 2,
        "title": "Cards For Jokes",
        "description": "Group Project utilizing third-party api requests to generate anime quotes",
        "image": cardsForJokes,
        "repo": "https://github.com/mrcaseyrobison/Cards_For_Jokes",
        "live": "https://mrcaseyrobison.github.io/Cards_For_Jokes/"
    },
    {
        "id": 3,
        "title": "Community Vision",
        "description": "Full-stack project building a usable tech blog",
        "image": communityVision,
        "repo": "https://github.com/alexmayberry/community-vision",
        "live": "https://community-vision.herokuapp.com/"
    },

];

export default data;