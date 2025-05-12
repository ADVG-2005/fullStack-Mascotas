window.submitForm = submitForm;

async function submitForm(){

    // Limpiar error
    document.getElementById("name.error").innerHTML = ""
    document.getElementById("race_id.error").innerHTML = ""
    document.getElementById("gender_id.error").innerHTML = ""
    document.getElementById("estado.error").innerHTML = ""
    document.getElementById("categoria_id.error").innerHTML = ""

    // Obtener datos
    const nombre = document.getElementById("name").value;
    const raza_id = document.getElementById("race_id").value;
    const genero_id = document.getElementById("gender_id").value;
    const estado = document.getElementById("estado").value;
    const categoria_id = document.getElementById("categoria_id").value;
    const foto = document.getElementById("photo").files?.[0];
    console.log(foto)

    // Checkear errores
    if(!nombre) document.getElementById("name.error").innerHTML = "Ingrese un nombre"
    if(!raza_id) document.getElementById("race_id.error").innerHTML = "Ingrese una raza"
    if(!estado) document.getElementById("estado.error").innerHTML = "Ingrese una estado"
    if(!genero_id) document.getElementById("gender_id.error").innerHTML = "Ingrese un género"
    if(!categoria_id) document.getElementById("categoria_id.error").innerHTML = "Ingrese un género"
    if(!nombre || !raza_id || !genero_id || !estado || !categoria_id) return;

    const formData = new FormData();

    formData.append("nombre",nombre);
    formData.append("fk_Raza",raza_id);
    formData.append("estado",estado);
    formData.append("fk_Categoria",categoria_id)
    formData.append("fk_Genero",genero_id);
    formData.append("foto",foto);

    const response = await fetch(`http://10.4.20.71:3000/api/mascotaADVG`,{
        body : formData,
        method : "POST",
        headers : {
            "Authorization" : `Bearer ${localStorage.getItem("token")}`
        }
    })

    const json = await response.json();

    if(json.status != 201) console.log(json);
    else window.location.href = '/pages/home.html';
    alert("mascota registrada")
}

const razasRes = await fetch(`http://10.4.20.71:3000/api/razaADVG`,{
    headers : {
        'Authorization' : `Bearer ${localStorage.getItem("token")}`
    }
})

const racesJson = await razasRes.json();

if(racesJson.status === 401) window.location.href = '/';

const races = await racesJson.data;

document.getElementById("race_id").innerHTML += races.map((race) => (
    `<option value="${race.id}">${race.nombre.charAt(0).toUpperCase()+race.nombre.slice(1)}</option>`
))
const categoriaRes = await fetch(`http://10.4.20.71:3000/api/categoriaADVG`,{
    headers : {
        'Authorization' : `Bearer ${localStorage.getItem("token")}`
    }
})

const categoriaJson = await categoriaRes.json();

if(categoriaJson.status === 401) window.location.href = '/';

const categorias = await categoriaJson.data;

document.getElementById("categoria_id").innerHTML += categorias.map((categoria) => (
    `<option value="${categoria.id}">${categoria.nombre.charAt(0).toUpperCase()+categoria.nombre.slice(1)}</option>`
))

const gendersRes = await fetch(`http://10.4.20.71:3000/api/generoADVG`,{
    headers : {
        'Authorization' : `Bearer ${localStorage.getItem("token")}`
    }
})

const gendersJson = await gendersRes.json();

if(gendersJson.status === 401) window.location.href = '/';

const genders = await gendersJson.data;

document.getElementById("gender_id").innerHTML += genders.map((gender) => (
    `<option value="${gender.id}">${gender.nombre.charAt(0).toUpperCase()+gender.nombre.slice(1)}</option>`
))

window.displayPreview = displayPreview

function displayPreview(){
    const file = document.getElementById("photo").files?.[0];
    const photoPreview = document.getElementById("photo-preview");
    if(file) {
        const blobUrl = URL.createObjectURL(file);
        photoPreview.src = blobUrl;
    }
}