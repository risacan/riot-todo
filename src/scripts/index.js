require('./templates/my-app.tag.html');
riot.mount('*');
riot.mount( 'starwars-yeah', {
    items : [
      { url: 'people/1/' },
      { url: "people/2/" },
      { url: "people/3/" }
    ]
} )