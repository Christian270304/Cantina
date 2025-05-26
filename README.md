# Cantina - Proyecto 2DAW

## Requisitos previos

Necesitas tener **Node.js**, **npm** y **Angular CLI** instalados en tu sistema.

- Descarga e instala Node.js desde [https://nodejs.org/](https://nodejs.org/).
- npm se instala automáticamente junto con Node.js.

Para comprobar si ya los tienes instalados, ejecuta en la terminal:

```bash
node -v
npm -v
ng version
```

- Instala Angular CLI globalmente con:

```bash
npm install -g @angular/cli
```

Si todos los comandos muestran un número de versión, ya tienes Node.js, npm y Angular CLI instalados.

## Requisitos

- Node.js (v18 o superior recomendado)
- npm

---

## 1. Clonar el repositorio

```bash
git clone https://github.com/Christian270304/Cantina.git
cd Cantina
```

---

## 2. Configuración del Backend

### a) Instalar dependencias

```bash
cd Backend
npm install
```

### b) Configurar entorno

- En la raiz de la carpeta `Backend` crear el archivo `.env`, posteriormente copiar lo que le he dejado en el `.txt` del correo.

### c) Levantar el backend

```bash
npm start o npm run dev
```

El backend se levantará por defecto en [http://localhost:3000](http://localhost:3000).

---

## 3. Configuración del Frontend

### a) Instalar dependencias

```bash
cd ../Frontend
npm install
```

### b) Configurar entorno

- Edita `src/environments/environment.ts`, si no se encuentra el fichero o la carpeta hay que crearlo para poner la URL del Backend:

environment.ts
```bash
export const environment = {
    production: false,
    apiUrl: 'http://localhost:3000/api',
  };
```

### c) Levantar el frontend en desarrollo

- En la terminal ejecutar el siguiente comando:

```bash
ng serve
```
Puede que no le deje unicamente con la terminal cmd, pruebe con la terminal bash de git.

El frontend estará disponible en [http://localhost:4200](http://localhost:4200).

---

## 4. Acceso

- Abre [http://localhost:4200](http://localhost:4200) en tu navegador.
- Regístrate o inicia sesión para empezar a usar la aplicación.
- Cualquier duda me puede enviar un correo.

---
