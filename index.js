import './style.css';

const card = (title, description, image, soustitre) => `
  <div class="col-lg-4 col-sm-12">
    <div class="card mb-5 shadow-sm">
      <img src="${image}" class="img-fluid" />

      <div class="card-body">
        <div class="card-title">
          <h2>${title}</h2>  
          <h3>${soustitre}</h3>
        </div>
        <div class="card-text">
          <p>
          ${description}
          </p>
        </div>
   
        <p>
        <a href="#" class="btn btn-outline-info rounded-0 float-end">Read More</a>
     
        </p>
      </div>
    </div>
  </div>
`;
(async () => {
  const apiData = await fetch(
    'https://api.airtable.com/v0/app7WHpsbeFA9BKmD/tble47DGXvXgj1LzB'
  ).then((response) => response.json());

  const myData = [
    {
      title: 'OpenClassRoom',
      description:
        '',
      image: 'https://picsum.photos/id/238/1000/1600.jpg',
      soustitre: 'Lundi 14 Novembre 2022',
    },
    {
      title: 'Html, CSS, Javascrit',
      description: '',
      image: 'https://picsum.photos/id/240/1000/1600.jpg',
      soustitre: 'Mardi 15 Novembre 2022',
    },
    {
      title: 'Bootsrap',
      description: '',
      image: 'https://picsum.photos/id/242/1000/1600.jpg',
      soustitre: 'Mercredi 16 Novembre 2022',
    },
    {
      title: 'Portfolio,Blog',
      description: '',
      image: 'https://picsum.photos/id/244/1000/1600.jpg',
      soustitre: 'Jeudi 17 Novembre 2022',
    },
    {
      title: 'Format de donnée, Request Api',
      description: '',
      image: 'https://picsum.photos/id/246/1000/1600.jpg',
      soustitre: 'Vendredi 18 Novembre 2022',
    },
    {
      title: 'Titre Das 5',
      description: 'lol 5',
      image: 'https://picsum.photos/id/248/1000/1600.jpg',
      soustitre: 'Lundi 21 Novembre 2022',
    },
  ];

  myData.forEach((post) => {
    console.log(post.title);
    document.getElementById('card-list').innerHTML += card(
      post.title,
      post.description,
      post.image,
      post.soustitre
    );
  });
})();
