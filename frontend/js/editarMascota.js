const parametros = new URLSearchParams(window.location.search);
const mascotaId = parametros.get('mascota');
const URL = "http://10.4.20.71:3000/api";

window.enviarFormulario = enviarFormulario;

async function enviarFormulario() {
    // Limpiar errores
    document.getElementById("name.error").innerHTML = "";
    document.getElementById("race_id.error").innerHTML = "";
    document.getElementById("gender_id.error").innerHTML = "";
    document.getElementById("estado.error").innerHTML = "";
    document.getElementById("categoria_id.error").innerHTML = "";

    // Obtener datos
    const nombre = document.getElementById("name").value;
    const raza_id = document.getElementById("race_id").value;
    const genero_id = document.getElementById("gender_id").value;
    const estado = document.getElementById("estado").value;
    const categoria_id = document.getElementById("categoria_id").value;
    const foto = document.getElementById("foto").files?.[0];

    // Validar
    if (!nombre) document.getElementById("name.error").innerHTML = "Ingrese un nombre";
    if (!raza_id) document.getElementById("race_id.error").innerHTML = "Seleccione una raza";
    if (!estado) document.getElementById("estado.error").innerHTML = "Seleccione un estado";
    if (!genero_id) document.getElementById("gender_id.error").innerHTML = "Seleccione un género";
    if (!categoria_id) document.getElementById("categoria_id.error").innerHTML = "Seleccione una categoría";
    if (!nombre || !raza_id || !genero_id || !estado || !categoria_id) return;

    const formData = new FormData();
    formData.append("nombre", nombre);
    formData.append("fk_Raza", raza_id);
    formData.append("estado", estado);
    formData.append("fk_Categoria", categoria_id);
    formData.append("fk_Genero", genero_id);
    formData.append("foto", foto);

    const respuesta = await fetch(`${URL}/mascotaADVG/${mascotaId}`, {
        method: "PUT",
        body: formData,
        headers: {
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    });

    const resultado = await respuesta.json();

    if (resultado.status !== 200) console.log(resultado);
    else window.location.href = '/pages/home.html';
    alert("Datos de la mascota actualizados")
}

// Cargar razas
const resRazas = await fetch(`${URL}/razaADVG`, {
    headers: {
        'Authorization': `Bearer ${localStorage.getItem("token")}`
    }
});
const datosRazas = await resRazas.json();
if (datosRazas.status === 401) window.location.href = '/';
const razas = await datosRazas.data;
document.getElementById("race_id").innerHTML += razas.map((r) =>
    `<option value="${r.id}">${r.nombre.charAt(0).toUpperCase() + r.nombre.slice(1)}</option>`
);

// Cargar géneros
const resGeneros = await fetch(`${URL}/generoADVG/`, {
    headers: {
        'Authorization': `Bearer ${localStorage.getItem("token")}`
    }
});
const datosGeneros = await resGeneros.json();
if (datosGeneros.status === 401) window.location.href = '/';
const generos = await datosGeneros.data;
document.getElementById("gender_id").innerHTML += generos.map((g) =>
    `<option value="${g.id}">${g.nombre.charAt(0).toUpperCase() + g.nombre.slice(1)}</option>`
);

// Cargar categorías
const resCategorias = await fetch(`${URL}/categoriaADVG`, {
    headers: {
        'Authorization': `Bearer ${localStorage.getItem("token")}`
    }
});
const datosCategorias = await resCategorias.json();
if (datosCategorias.status === 401) window.location.href = '/';
const categorias = await datosCategorias.data;
document.getElementById("categoria_id").innerHTML += categorias.map((c) =>
    `<option value="${c.id}">${c.nombre.charAt(0).toUpperCase() + c.nombre.slice(1)}</option>`
);

// Mostrar vista previa de imagen
window.mostrarVistaPrevia = function mostrarVistaPrevia() {
    const archivo = document.getElementById("foto").files?.[0];
    const vista = document.getElementById("foto-previa");
    if (archivo) {
        const blobUrl = URL.createObjectURL(archivo);
        vista.src = blobUrl;
    }
};

// Cargar datos actuales de la mascota
const resMascota = await fetch(`${URL}/mascotaADVG/${mascotaId}`, {
    headers: {
        'Authorization': `Bearer ${localStorage.getItem("token")}`
    }
});
const datosMascota = await resMascota.json();
const mascota = datosMascota.data;

document.getElementById("name").value = mascota.nombre;
document.getElementById("race_id").value = mascota.fk_Raza;
document.getElementById("categoria_id").value = mascota.fk_Categoria;
document.getElementById("estado").value = mascota.estado;
document.getElementById("gender_id").value = mascota.fk_Genero;
document.getElementById("foto-previa").src = `http://10.4.20.71:3000/public/mascotas/${mascota.foto}`;
