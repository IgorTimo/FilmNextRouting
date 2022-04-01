import balabanovFilms from "../balabanovFilms"

const getFimlByAlias = (alias) => {
   return balabanovFilms.find(film => film.alias === alias);
}

export default getFimlByAlias;