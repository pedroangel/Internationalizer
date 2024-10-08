﻿
# Proyecto Node.js Multilenguaje con MongoDB

Este proyecto es una aplicación web en Node.js que maneja el texto de una página web en diferentes idiomas, almacenando la información en una base de datos MongoDB.

## Requisitos

- **Node.js** v16 o superior
- **MongoDB** (MongoDB Atlas)
- **npm** v7 o superior

## Instalación

1. **Clonar el repositorio**:

    ```bash
    git clone https://github.com/pedroangel/Internationalizer.git
    cd Internationalizer
    ```

2. **Instalar las dependencias**:

    ```bash
    npm install
    ```

3. **Configurar variables de entorno**:

    Crea un archivo `.env` en la raíz del proyecto:

    ```plaintext
    MONGODB_URI=mongodb+srv://<usuario>:<contraseña>@cluster0.mongodb.net/<nombre-bd>?retryWrites=true&w=majority
    PORT=3000
    ```

    Reemplaza `<usuario>`, `<contraseña>`, y `<nombre-bd>` con los valores adecuados para tu configuración.

4. **Ejecutar la aplicación localmente**:

    ```bash
    npm start
    ```

    La aplicación estará disponible en `http://localhost:3000`.

## Documentación de la API

### Rutas Disponibles

#### 1. **Obtener todos los textos por idioma y página**

- **URL**: `/api/texts`
- **Método**: `GET`
- **Descripción**: Obtiene todos los textos en general, con sus diferentes traducciones.

##### Ejemplo de solicitud:

```bash
curl -X GET http://localhost:3000/api/texts
```

##### Respuesta Exitosa:

```json
[
  {
    "key": "home.upperText",
    "page": "home",
    "translations": {
        "es": "#Software Co...",
        "en": "#Accounting...",
        "fr": "#Logiciel d..."
    },
  },
  {
    "key": "about.title",
    "page": "about",
    "translations": {
        "es": "Personas co...",
        "en": "Ordinary pe...",
        "fr": "Personnes o...",
    },
  }
]
```

#### 2. **Obtener textos específicos por página**

- **URL**: `/api/texts/page/:page`
- **Método**: `GET`
- **Descripción**: Obtiene textos específicos filtrados por página y idioma.

##### Ejemplo de solicitud:

```bash
curl -X GET http://localhost:3000/api/texts/page/about
```

##### Respuesta Exitosa:

```json
[
  {
    "key": "about.upperText",
    "page": "about",
    "translations": {
        "es": "#Software Co...",
        "en": "#Accounting...",
        "fr": "#Logiciel de..."
    },
  },
  {
    "key": "about.title",
    "page": "about",
    "translations": {
        "es": "Reimagina l... ",
        "en": "Reimagine y...",
        "fr": "Réimaginez ..."
    },
  }
]
```

#### 3. **Agregar un nuevo texto**

- **URL**: `/api/texts`
- **Método**: `POST`
- **Descripción**: Agrega un nuevo texto al sistema.
- **Cuerpo de la Solicitud**:

```json
{
    "key": "home.demoTitle",
    "page": "home",
    "translations": {
        "es": "Anímate a dar el primer paso. Solicita una demo"
    }
}
```

##### Ejemplo de solicitud:

```bash
curl -X POST http://localhost:3000/api/texts \
  -H "Content-Type: application/json" \
  -d '{
    "key": "home.demoTitle",
    "page": "home",
    "translations": {
        "es": "Anímate a dar el primer paso. Solicita una demo"
    }
  }'
```

##### Respuesta Exitosa:

```json
{
  "message": "Texto agregado exitosamente."
}
```

#### 4. **Actualizar un texto existente**

- **URL**: `/api/texts/:key`
- **Método**: `PUT`
- **Descripción**: Actualiza un texto existente por KEY, modificar el texto de las diferentes traducciones o incluso agregar nuevas traducciones.
- **Cuerpo de la Solicitud**:

```json
{
    "translations.en": "Take the first step. Request a demo."
}
```

##### Ejemplo de solicitud:

```bash
curl -X PUT http://localhost:3000/api/texts/home.demoTitle \
  -H "Content-Type: application/json" \
  -d '{
    "translations.en": "Take the first step. Request a demo."
}'
```

##### Respuesta Exitosa:

```json
{
  "message": "Texto actualizado exitosamente."
}
```

#### 5. **Eliminar un texto existente**

- **URL**: `/api/texts/:key`
- **Método**: `DELETE`
- **Descripción**: Elimina un texto existente y todas sus traducciones por KEY.

##### Ejemplo de solicitud:

```bash
curl -X DELETE http://localhost:3000/api/texts/home.demoTitle
```

##### Respuesta Exitosa:

```json
{
  "message": "Texto eliminado exitosamente."
}
```

## Despliegue

Se le hizo Deploy a esta API a Google Cloud y se debe utilizar `https://internationalizer.rj.r.appspot.com/` como url base para los request documentados.
