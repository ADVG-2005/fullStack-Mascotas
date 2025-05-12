document.getElementById("data-display").innerHTML = '<h2 style="color:white;text-align:center">Cargando...</h2>'

async function getMascotasADVG(){
    try{
        const response = await fetch(`http://localhost:3000/api/mascotaADVG/`,{
            headers : {
                'Authorization' : `Bearer ${localStorage.getItem("token")}`
            }
        });
        if(!response.ok) throw new Error("NO AUTORIZADO")
        const json = await response.json();
        return json.data;
    }
    catch(error){
        console.error(error);
        if(error.message === "NO AUTORIZADO"){
            localStorage.removeItem("token");
            window.location.href = '/';
        }
        return error;
    }
}

const data = await getMascotasADVG();
let count = 0;
document.getElementById("data-display").innerHTML = data.map((mascota) => {

    count += 1;

    return (
        `
            <div class='mascota-contenedor' style='background-color:${count % 2 == 0 ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.7)' };'>
                <div class='foto-div'>
                    <img class='foto-mascota' src='http://localhost:3000/public/mascotas/${mascota.foto}' alt='pet-photo'>
                </div>
                <div class='nombre-contenedor'>
                    <p class='nombre-mascota'>${mascota.nombre}</p>
                    <p class='raza-mascota'>${(mascota.raza.nombre).charAt(0).toUpperCase()+(mascota.raza.nombre).slice(1)}</p>
                </div>
                <div class='opciones-contenedor'>
                    <img class='opcion' src='../assets/img/btn-show.svg' alt='ver' onclick="window.location.href = '/pages/consultarMascota.html?mascota=${mascota.id}'">
                    <img class='opcion' src='../assets/img/btn-edit.svg' alt='editar' onclick="window.location.href = '/pages/editarMascota.html?mascota=${mascota.id}'">
                    <img class='opcion' src='../assets/img/btn-delete.svg' alt='eliminar' onclick="deletePet(${mascota.id})">
                </div>
            </div>
        `
    )
})

window.deletePet = deletePet

async function deletePet(id){
    const response = await fetch(`http://localhost:3000/api/mascotaADVG/${id}`,{
        method : "DELETE",
        headers : {
            "Authorization" : `Bearer ${localStorage.getItem("token")}`
        }
    });
    if(!response.ok) console.log("Error borrando la mascota");
    else window.location.reload();
}
