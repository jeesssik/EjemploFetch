var boton = document.querySelector('#obtenerUsuario');
var div = document.querySelector('#resultado');

boton.addEventListener('click', function () {
    fetch('https://randomuser.me/api/')
        .then(function (respuesta) {
            return respuesta.json();
        })
        .then(function (data) {
            var usuario = data.results[0];
            div.innerHTML = `
                <img src="${usuario.picture.medium}" class="foto"/>
                <p>${usuario.name.first} ${usuario.name.last}</p>
            `
        })
        .catch(function(error){
            console.log(error);
        });
});
