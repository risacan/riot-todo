<sns-count-facebook>
  <span>{ count }</span>
  <script>
    this.count = "Loading"

    var self = this

    fetch( 'https://swapi.co/api/' + opts.url )
    .then( function ( data ) {
        return data.json()
    } )
    .then( function ( json ) {
        self.count = json.name
        self.update()
    } )
  </script>
</sns-count-facebook>