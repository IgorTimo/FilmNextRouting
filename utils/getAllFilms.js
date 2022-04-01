import balabanovFilms from "../balabanovFilms";

const getAllFilms = () => {
   return balabanovFilms.map(film => ({ title: film.title, alias: film.alias }));
}

export default getAllFilms;