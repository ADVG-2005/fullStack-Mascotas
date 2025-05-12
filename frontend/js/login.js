/* const token = localStorage.getItem('token')
if (token) window.location.href = '/home.html' 
 */
const formLogin = document.getElementById("loginForm")
if (formLogin) {
    formLogin.addEventListener('submit', (event) => {
        event.preventDefault()
        loginADVG()
    })
}

async function loginADVG() {
    try {
        const correo = document.getElementById('correo').value
        const contraseña = document.getElementById('contraseña').value

        if (!correo || !contraseña) {
            document.getElementById('respuestaError').innerHTML = "Campos requeridos"
            return;
        }

        const data = { correo, contraseña }

        const respuesta = await fetch(`http://localhost:3000/api/loginADVG`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        })

        const respuestaBody = await respuesta.json()

        if (!respuesta.ok) {
            document.getElementById('respuestaError').innerHTML = respuestaBody.msg || "Error de autenticación"
        } else {
            document.getElementById('respuestaError').innerHTML = ''
            if (respuestaBody.data) {
                localStorage.setItem('token', respuestaBody.data)
                window.location.href = '/pages/home.html'
            } else {
                document.getElementById('respuestaError').innerHTML = "Token inválido"
            }
        }

    } catch (error) {
        console.error("Error al obtener API:", error)
        document.getElementById('respuestaError').innerHTML = "Error de conexión con el servidor"
    }
}
