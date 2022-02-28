Final projects endpoints table 

| Method    |  URL     | Description |  Protected   |
| :-------- | :------- | :---------- | :----------- |
| GET | `/` | Index |   No   |
| GET | `/inicio-sesion ` | Inicio de sesión | No |
| POST | `/inicio-sesion ` | Inicio de sesión | No |
| POST | `/cerrar-sesion ` | Cierre de sesión | No |
| GET | `/perfil` | Ver perfil propio | Si |
| GET | `/registro ` | Registro | No |
| POST | `/registro ` | Registro | No |
| GET | `/escuelas` | Listado de escuelas | Si |
| GET | `/escuelas/:escuela_id` | Listado de vías de la escuela en concreto | Si |
<!-- | GET | `/escuelas/crear` | Crear una escuela | Si |
| POST | `/escuelas/crear` | Crear una escuela | Si | -->
<!-- | GET | `/escuelas/:escuela_id/editar` | Editar una escuela | Si |
| POST | `/escuelas/:escuela_id/editar` | Editar una escuela  | Si | -->
<!-- | POST | `/escuelas/:escuela_id/eliminar` | Eliminar una escuela| Si| -->
| GET | `/usuarios` | Lista de usuarios | Si |
| GET | `/usuarios/:usuario_id` | Detalles de cada usuario | Si |

