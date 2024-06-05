 function photographerTemplate(data) {
    const { name, id, portrait, city, country, tagline, price } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;

        const link = document.createElement('a');
        link.setAttribute("aria-label", name);
        link.href = "./photographer.html?id=" + id;
        link.style.textDecoration = 'none';

        link.style.display = 'flex';
        link.style.flexDirection = 'column';
        link.style.justifyContent = 'center';
        link.style.alignItems = 'center';


        const p = document.createElement('p');
        p.textContent = city + ', ' + country;

        const p1 = document.createElement('p');
        p1.textContent = tagline;

        const p2 = document.createElement('p');
        p2.textContent = price + "€/jour";

        link.appendChild(img);
        link.appendChild(h2);
        article.appendChild(link);
        article.appendChild(p);
        article.appendChild(p1);
        article.appendChild(p2);
        
        return (article);
    }

    function getInfosPhotograph(){

        const divInfos = document.getElementById('infos_photograph');
        const h2 = document.createElement( 'h2' );
        h2.className = "namePhotograph"
        h2.textContent = name;

        const p = document.createElement('p');
        p.className = "cityPhotograph"
        p.textContent = city + ', ' + country;
        
        const p1 = document.createElement('p');
        p1.className = "taglinePhotograph"
        p1.textContent = tagline;

        divInfos.appendChild(h2);
        divInfos.appendChild(p);
        divInfos.appendChild(p1);


        const divPicture = document.getElementById('picture_photograph');

        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);

        divPicture.appendChild(img);

    }

    return {name, city, country, tagline, picture, getUserCardDOM, getInfosPhotograph}
}