document.getElementById("formulario-info").innerHTML = `<h2 style='color:white;text-align:center;'>Cargando...</h2>`;
const API_URL = "http://10.4.20.71:3000/api"

const urlParams = new URLSearchParams(window.location.search);
const idMascota = urlParams.get('mascota');

if (!idMascota) {
    document.getElementById("formulario-info").innerHTML = `<h1 style='color:white;text-align:center;'>404 - NO ENCONTRADO</h1>`;
}

const respuesta = await fetch(`${API_URL}/mascotaADVG/${idMascota}`, {
    headers: {
        'Authorization': `Bearer ${localStorage.getItem("token")}`
    }
});

const json = await respuesta.json();

if (json.status === 401) window.location.href = '/';

const mascota = json.data;

if (!mascota) {
    document.getElementById("formulario-info").innerHTML = `<h1 style='color:white;text-align:center;'>404 - NO ENCONTRADO</h1>`;
}

document.getElementById("formulario-info").innerHTML = `
    <div style='display:flex; align-items:center; flex-direction:column;'>
        <div class='contenedor-foto'>
            <img class='foto-mascota' src='http://10.4.20.71:3000/public/mascotas/${mascota.foto}' />
        </div>
        <div style='margin-top:64px'>
            <div class='seccion-info'>
                <img class='icono-info' src='../assets/img/info-name.svg' />
                <p class='texto-info'>${mascota.nombre}</p>
            </div>
            <div class='seccion-info'>
                <img class='icono-info' src='../assets/img/info-race.svg' />
                <p class='texto-info'>${mascota.raza.nombre.charAt(0).toUpperCase() + mascota.raza.nombre.slice(1)}</p>
            </div>
            <div class='seccion-info'>
                <img class='icono-info' src='../assets/img/info-category.svg' />
                <p class='texto-info'>${mascota.categoria.nombre.charAt(0).toUpperCase() + mascota.categoria.nombre.slice(1)}</p>
            </div>
            <div class='seccion-info'>
                <img class='icono-info' src='../assets/img/info-gender.svg' />
                <p class='texto-info'>${mascota.genero.nombre.charAt(0).toUpperCase() + mascota.genero.nombre.slice(1)}</p>
            </div>
        </div>
    </div>
`;
