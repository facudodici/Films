//function createCard(movie){
//
//    const contenedorDePeliculas = document.querySelector(".contenedor-peliculas");
//
//    const card = document.createElement("div");
//    card.classList.add("card-style", "col-12", "col-sm-6", "col-md-4", "col-lg-3", "mb-4");
//
//    const cardBody = document.createElement("div");
//    cardBody.classList.add("card-body");
//    
//    const linkElement = document.createElement("a");
//    linkElement.classList.add("text-decoration-none");
//    linkElement.href = "";
//
//    const elementTitle = document.createElement("h5");
//    elementTitle.classList.add("card-title");
//    elementTitle.textContent = movie.title;
//    linkElement.appendChild(elementTitle);
//
//    const elementPoster = document.createElement("img");
//    elementPoster.src = movie.poster;
//    elementPoster.classList.add("imgCard", "card-img-top");
//    elementPoster.alt = movie.title;
//
//    const elementYear = document.createElement("p");
//    elementYear.classList.add("card-text");
//    elementYear.textContent = `Year: ${movie.year}`;
//
//    const elementDirector = document.createElement("p");
//    elementDirector.classList.add("card-text");
//    elementDirector.textContent = `Director: ${movie.director}`;
//
//    const elementDuration = document.createElement("p");
//    elementDuration.classList.add("card-text");
//    elementDuration.textContent = `Duration: ${movie.duration}`;
//
//    const elementGenre = document.createElement("p");
//    elementGenre.classList.add("card-text");
//    elementGenre.textContent = `Genre: ${movie.genre.join(", ")}`;
//
//    const elementRate = document.createElement("p");
//    elementRate.classList.add("card-text");
//    elementRate.textContent = `Rate: ${movie.rate}`;
//
//    cardBody.append(linkElement, elementYear, elementDirector, elementDuration, elementGenre, elementRate);
//    card.append(elementPoster, cardBody);
//
//    contenedorDePeliculas.appendChild(card);  
//}
//
//module.exports = createCard;

function createCard(movie) {
    const contenedorDePeliculas = document.querySelector(".contenedor-peliculas");

    const card = document.createElement("div");
    card.classList.add("col-12", "col-sm-6", "col-md-4", "col-lg-3", "mb-4");

    const cardInner = document.createElement("div");
    cardInner.classList.add("card-style", "card", "h-100"); // Agrega "card" y "h-100" para altura completa y estilo de tarjeta de Bootstrap

    const elementPoster = document.createElement("img");
    elementPoster.src = movie.poster;
    elementPoster.classList.add("imgCard", "card-img-top");
    elementPoster.alt = movie.title;

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const linkElement = document.createElement("a");
    linkElement.classList.add("text-decoration-none");
    linkElement.href = ""; // Agrega el enlace correspondiente

    const elementTitle = document.createElement("h5");
    elementTitle.classList.add("card-title");
    elementTitle.textContent = movie.title;
    linkElement.appendChild(elementTitle);

    const elementYear = document.createElement("p");
    elementYear.classList.add("card-text");
    elementYear.textContent = `Year: ${movie.year}`;

    const elementDirector = document.createElement("p");
    elementDirector.classList.add("card-text");
    elementDirector.textContent = `Director: ${movie.director}`;

    const elementDuration = document.createElement("p");
    elementDuration.classList.add("card-text");
    elementDuration.textContent = `Duration: ${movie.duration}`;

    const elementGenre = document.createElement("p");
    elementGenre.classList.add("card-text");
    elementGenre.textContent = `Genre: ${movie.genre.join(", ")}`;

    const elementRate = document.createElement("p");
    elementRate.classList.add("card-text");
    elementRate.textContent = `Rate: ${movie.rate}`;

    cardBody.append(linkElement, elementYear, elementDirector, elementDuration, elementGenre, elementRate);
    cardInner.append(elementPoster, cardBody);
    card.appendChild(cardInner);

    contenedorDePeliculas.appendChild(card);  
}

module.exports = createCard;
