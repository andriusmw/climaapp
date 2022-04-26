window.addEventListener(`load`, () => {
  let lon;
  let lat;
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((posicion) => {
      //console.log(posicion);
      //Muestra por consola la posicion
      lon = posicion.coords.longitude;
      lat = posicion.coords.latitude;
      //asignamos nuestra longitud y latitud a las variables lat y lon
      //para después introducirlas en la llamada a la api.

      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=c44fb8c6c479a763a22b7b7d70c5f610`;
      //https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

      console.log(url);
      //pasamos la longitud y latitud de nuestra ubicacion a la url de la api, con la apikey
      //y la mostramos por consola.
    });
  }
});
