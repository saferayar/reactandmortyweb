import axios from "axios";

const URL_PERSONAJES = "https://rickandmortyapi.com/api/character";
const getPersonajes = async()=>{
    const response = await axios.get(URL_PERSONAJES);
    //TODO: Que hacemos con estos datos?
    debugger;
}


export {getPersonajes};