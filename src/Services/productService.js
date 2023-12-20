import data from "../json/productsData.json";

export const traerLibros = () => {
    return new Promise((resolve, reject) => {
        resolve(data) 
    })
}

export const traerLibroPorId = (id) => {
    return new Promise((resolve, reject) => {
        const libro = data.find((item) => item.id === id);
        if(libro){
            resolve(libro)
        }
    })
}
