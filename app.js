window.addEventListener(`load`, () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((posicion) => {
      console.log(posicion);
      //Muestra por consola la posicion
    });
  }
});
