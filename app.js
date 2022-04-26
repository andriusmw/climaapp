window.addEventListener(`load`, () => {
  let lon;
  let lat;

  //capturamos elementos del DOM
  let temperaturaValor = document.getElementById("temperaturaValor");
  let temperaturaDescrip = document.getElementById("temperaturaDescrip");
  let ubicacion = document.getElementById("ubicacion");
  let iconoAnimado = document.getElementById("iconoAnimado");
  let velocidadViento = document.getElementById("velocidadViento");

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((posicion) => {
      //console.log(posicion);
      //Muestra por consola la posicion
      lon = posicion.coords.longitude;
      lat = posicion.coords.latitude;
      //asignamos nuestra longitud y latitud a las variables lat y lon
      //para después introducirlas en la llamada a la api.

      //ubicación actual
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=c44fb8c6c479a763a22b7b7d70c5f610`;
      //https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

      console.log(url);

      //ubicación por nombre ciudad
      // const url = https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
    });
  }
});
