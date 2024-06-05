
//récupération de l'id du photographe dans l'url du site
let params = new URL(document.location).searchParams;

let id = params.get('id');


//Récupere le photographe par rapport a son id
async function getPhotographers() {
    
    const reponse = await fetch("data/photographers.json");

    const photographerAndMedia = await reponse.json();

    const photographers = photographerAndMedia.photographers.find((photographer) => photographer.id == id);


    return  photographers ;  

}

// Ajoute les informations du photographe dans le header de la page web
async function addInfosPhotograph (){

    const photographer = await getPhotographers();
    const photographerModel = photographerTemplate(photographer);
    photographerModel.getInfosPhotograph();

}


addInfosPhotograph();
 



