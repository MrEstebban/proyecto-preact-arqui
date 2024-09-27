# Proyecto Preact Arquitectura

Este proyecto utiliza Docker para facilitar su ejecución y despliegue.

## Requisitos previos

1. **Docker**: Asegúrate de tener Docker instalado en tu sistema.
2. **Git**: Recomendado para clonar el respositorio en tu máquina.


## Instalación

### 1. Clonar el repositorio

Primero, clona el repositorio en tu máquina local:

```sh
git clone https://github.com/tu-usuario/proyecto-preact-arqui.git
cd proyecto-preact-arqui
```

### Construir la imagen Docker
Primero, asegúrate de estar en el directorio donde se encuentra tu `Dockerfile`. Luego, ejecuta el siguiente comando para construir la imagen Docker:

```sh
docker build -t proyecto-preact-arqui .
```

### 3. Ejecutar el Contenedor Docker

Una vez que la imagen Docker se haya construido correctamente, puedes ejecutar el contenedor con el siguiente comando:

```sh
docker run -p 5173:5173 proyecto-preact-arqui
```

Esto iniciará el servidor web y podrás acceder a la aplicación en http://`localhost:5173`

¡Y eso es todo! Ahora deberías tener tu proyecto corriendo en un contenedor Docker.
