const objs = [
    {
        title : 'Usuarios',
        tables : [
            {
                title : 'getAll',
                url : '/usuarioADVG',
                method : 'GET',
                body : 'NULL',
                responses : '200 OK - 500 Internal Error'
            },
            {
                title : 'create',
                url : '/usuarioADVG',
                method : 'POST',
                body : '{<br> nombreCompleto : String,<br> correo : String,<br> contraseña : String<br> }',
                responses : '201 Created - 400 Client Error - 500 Internal Error'
            },
            {
                title : 'login',
                url : '/loginADVG',
                method : 'POST',
                body : '{<br> correo : String,<br> contraseña : String<br> }',
                responses : '200 OK - 404 Not Found - 400 Client Error - 500 Internal Error'
            },
            {
                title : 'update',
                url : '/usuarioADVG/:id',
                method : 'PUT',
                body : '{<br> nombreCompleto : String?,<br> correo : String?,<br> contraseña : String?<br> }',
                responses : '200 OK - 400 Client Error - 500 Internal Error'
            },
            {
                title : 'delete',
                url : '/usuarioADVG/:id',
                method : 'DELETE',
                body : '{<br> nombreCompleto : String?,<br> correo : String?,<br> contraseña : String?<br> }',
                responses : '200 OK - 400 Client Error - 500 Internal Error'
            }
        ]
    },
    {
        title : 'Mascotas',
        tables : [
            {
                title : 'getAll',
                url : '/mascotaADVG',
                method : 'GET',
                body : 'NULL',
                responses : '200 OK - 500 Internal Error'
            },
            {
                title : 'create',
                url : '/mascotaADVG',
                method : 'POST',
                body : '{<br> nombre : String,<br> estado : Estado,<br> fk_Raza : Int,<br> fk_Categoria : Int,<br> foto : String,<br> fk_Genero : Int<br> }',
                responses : '201 Created - 400 Client Error - 500 Internal Error'
            },
            {
                title : 'update',
                url : '/mascotaADVG/:id',
                method : 'PUT',
                body : '{<br> nombre : String?,<br> estado : Estado?,<br> fk_Raza : Int?,<br> fk_Categoria : Int?,<br> foto : String?,<br> fk_Genero : Int?<br> }',
                responses : '200 OK - 400 Client Error - 500 Internal Error'
            },
            {
                title : 'delete',
                url : '/mascotaADVG/:id',
                method : 'DELETE',
                body : '{<br> nombre : String?,<br> estado : Estado?,<br> fk_Raza : Int?,<br> fk_Categoria : Int?,<br> foto : String?,<br> fk_Genero : Int?<br> }',
                responses : '200 OK - 400 Client Error - 500 Internal Error'
            }
        ]
    },
    {
        title : 'Categorias',
        tables : [
            {
                title : 'getAll',
                url : '/categoriaADVG',
                method : 'GET',
                body : 'NULL',
                responses : '200 OK - 500 Internal Error'
            },
            {
                title : 'create',
                url : '/categoriaADVG',
                method : 'POST',
                body : '{<br> nombre : String<br> }',
                responses : '201 Created - 400 Client Error - 500 Internal Error'
            },
            {
                title : 'update',
                url : '/categoriaADVG/:id',
                method : 'PUT',
                body : '{<br> nombre : String?<br> }',
                responses : '200 OK - 400 Client Error - 500 Internal Error'
            },
            {
                title : 'delete',
                url : '/categoriaADVG/:id',
                method : 'DELETE',
                body : '{<br> nombre : String?<br> }',
                responses : '200 OK - 400 Client Error - 500 Internal Error'
            }
        ]
    },
    {
    title : 'Razas',
    tables : [
            {
                title : 'getAll',
                url : '/razaADVG',
                method : 'GET',
                body : 'NULL',
                responses : '200 OK - 500 Internal Error'
            },
            {
                title : 'create',
                url : '/razaADVG',
                method : 'POST',
                body : '{<br> nombre : String<br> }',
                responses : '201 Created - 400 Client Error - 500 Internal Error'
            },
            {
                title : 'update',
                url : '/razaADVG/:id',
                method : 'PUT',
                body : '{<br> nombre : String?<br> }',
                responses : '200 OK - 400 Client Error - 500 Internal Error'
            },
            {
                title : 'delete',
                url : '/razaADVG/:id',
                method : 'DELETE',
                body : '{<br> nombre : String?<br> }',
                responses : '200 OK - 400 Client Error - 500 Internal Error'
            }
        ]
    },
    {
    title : 'Generos',
    tables : [

            {
                title : 'getAll',
                url : '/generoADVG',
                method : 'GET',
                body : 'NULL',
                responses : '200 OK - 500 Internal Error'
            },
            {
                title : 'create',
                url : '/generoADVG',
                method : 'POST',
                body : '{<br> nombre : String<br> }',
                responses : '201 Created - 400 Client Error - 500 Internal Error'
            },
            {
                title : 'update',
                url : '/generoADVG/:id',
                method : 'PUT',
                body : '{<br> nombre : String?<br> }',
                responses : '200 OK - 400 Client Error - 500 Internal Error'
            },
            {
                title : 'delete',
                url : '/generoADVG/:id',
                method : 'DELETE',
                body : '{<br> nombre : String?<br> }',
                responses : '200 OK - 400 Client Error - 500 Internal Error'
            }
        ]
    }
]

const tables = objs.map(controller=>(
    `<div class="contenedor-endpoints">
    <div class="titulo-contenedor">
        <h5 class="titulo">${controller.title}</h5>
    </div>

    ${controller.tables.map(table => (
        `<table class="tabla-endpoint">
            <thead>
                <tr>
                    <th class="titulo-tabla" colspan="2">${table.title}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="campo"><b>URL:</b></td>
                    <td>${table.url}</td>
                </tr>
                <tr>
                    <td class="campo"><b>Method:</b></td>
                    <td>${table.method}</td>
                </tr>
                <tr>
                    <td class="campo"><b>Headers:</b></td>
                    <td>Content-Type: application/json</td>
                </tr>
                <tr>
                    <td class="campo"><b>Body:</b></td>
                    <td>${table.body}</td>
                </tr>
                <tr>
                    <td class="campo"><b>Responses:</b></td>
                    <td>${table.responses}</td>
                </tr>
            </tbody>
        </table>`
    )).join('')}
</div>
`
))

document.getElementById('tables').innerHTML = tables;