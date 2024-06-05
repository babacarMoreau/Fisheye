
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

async function getMedia() {

    const reponse = await fetch("data/photographers.json");

    const photographerAndMedia = await reponse.json();

    const media = photographerAndMedia.media;

    return media;

}


async function displayMedia(){

        const mediaPhotograph = document.querySelector('.media-photograh');

        const media = await getMedia();


        for (const elementMedia of media) {

            if(elementMedia.photographerId == id){
                
                const element = mediaTemplate(elementMedia);
                
                mediaPhotograph.appendChild(element);
            }

        }


        /*media.forEach(media => {

           
            
            if(media.photographerId == id){

                const element = mediaTemplate(media);
                
            
                mediaPhotograph.appendChild(element);

            }

        }); */

}


addInfosPhotograph();
displayMedia();
 



