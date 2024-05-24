//Mettre le code JavaScript lié à la page photographer.html

let params = new URL(document.location).searchParams;

let id = params.get('id');


async function getPhotographers() {
    
    const reponse = await fetch("data/photographers.json");

    const photographerAndMedia = await reponse.json();

    const photographers = photographerAndMedia.photographers.find((photographer) => photographer.id == id);


    return  photographers ;  

}


 



