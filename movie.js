
class Movie {
    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    static getPG(movies) {
        return movies.filter(movie => movie.rating === "PG");
    }
}


const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");
// Creating an array of Movie instances
const moviesArray = [
    new Movie("Batman", "WB", "PG-13"),
    new Movie("Godzilla King of the Monsters", "Legendary Pictures", "PG-13"),
    new Movie("Joker", " Warner Bros", "PG"),
    new Movie("Harry Potter and the Sorcerer's Stone", "Warner Bros", "PG"),

];

// Getting only PG-rated movies from the array
const pgMoviesArray = Movie.getPG(moviesArray);

console.log(casinoRoyale);
console.log(pgMoviesArray);