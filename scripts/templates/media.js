function mediaTemplate(data){

        const { photographerId, title, image, likes, price} = data;

        const article = document.createElement('article');

        const picture = `assets/${photographerId}/${image}`;

        const img = document.createElement('img');

        img.setAttribute('src', picture);

        const pictureDiv = document.createElement('div');
        pictureDiv.className = 'media-picture';

        pictureDiv.appendChild(img);

        const p = document.createElement('p');
        p.textContent = title;

        const underPicture = document.createElement('div');
        underPicture.className = "under-picture";

        underPicture.appendChild(p);

        const p1 = document.createElement('p');
        p1.textContent = likes;

        const heart = document.createElement('img');

        heart.setAttribute('src', "assets/icons/heart.svg");

        const AllLikes = document.createElement('div');
        AllLikes.className = 'all-likes';

        AllLikes.appendChild(p1);
        AllLikes.appendChild(heart);

        underPicture.appendChild(AllLikes);

        article.appendChild(pictureDiv);
        article.appendChild(underPicture);

        return article;

        

    



}