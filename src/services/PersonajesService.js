import axios from "axios";

const URL_PERSONAJES = "https://rickandmortyapi.com/api/character";
const getPersonajes = async()=>{
    
    const response = await axios.get(URL_PERSONAJES);
    const personajes = response.data.results.map(r=>{
        return {id: r?.id,
             name: r?.name,
             status: r?.status,
              gender: r?.gender,
             specie: r?.species,
             origin: r?.origin?.name,
             countOfEpisodes: r?.episode?.length,
             image: r?.image
             }
    });
    
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(personajes);
        }, 5000)
    });
 
}

// data =  ["1", "2"].map(n=> parseInt(n))
// [1,2]


export {getPersonajes};