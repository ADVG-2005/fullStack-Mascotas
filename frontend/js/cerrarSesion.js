const token = localStorage.getItem('token')
if (!token){
    localStorage.removeItem('token')
    window.location.href = '/'
}

async function cerrarSesion() {
    localStorage.removeItem('token')
    window.location.href = '/'
}