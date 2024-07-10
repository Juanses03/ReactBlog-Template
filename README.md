# Plantilla de Blog con Panel para Novatos

Este es solo un proyecto de demostración, no está ni de cerca a la altura del nivel profesional, y está diseñado para los aprendices de React y otras tecnologías básicas.

## Tecnologías Utilizadas

- **React** con **Vite**
- **Firebase** (Authentication, Firestore, Storage)
- **Tailwind CSS** para los estilos
- **React Router** para la navegación

## Estructura del Proyecto

```js
src/
├── public/
├── assemblies/
│ ├── Auth/
│ │ ├── Login.jsx
│ │ └── Register.jsx
│ ├── Blog/
│ │ ├── BlogDetail.jsx
│ │ ├── BlogItem.jsx
│ │ ├── BlogList.jsx
│ │ └── CreateBlog.jsx
│ ├── Dashboard/
│ │ ├── BlogForm.jsx
│ │ ├── BlogItem.jsx
│ │ └── UserBlogList.jsx
│ ├── Navbar.jsx
│ └── ThemeSwitcher.jsx
├── Context/
│ ├── AuthContext.jsx
│ ├── FirebaseContext.jsx
│ └── ThemeContext.jsx
├── pages/
│ ├── Dashboard.jsx
│ ├── ForgotPasswordPage.jsx
│ ├── Home.jsx
│ ├── LoginPage.jsx
│ └── RegisterPage.jsx
├── App.css
├── App.jsx
├── firebaseConfig.js
├── index.css
├── main.jsx
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── .gitignore
├── index.html
└── README.md
```

## Configuración Inicial

### Clonar el Repositorio

bash

Copiar código

```bash
git clone https://github.com/tu-usuario/tu-repositorio.git cd tu-repositorio
```

### Instalar Dependencias

bash

Copiar código

```bash
npm install
```

### Configurar Firebase

Crea un archivo `firebaseConfig.js` en el directorio `src` con tu configuración de Firebase:

jsx

Copiar código

```jsx
// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };

```

### Ejecutar el Proyecto

bash

Copiar código

```bash
npm run dev
```

## Descripción de Funcionalidades

- **Login y Registro**: Autenticación de usuarios con Firebase Authentication.
- **Creación y Edición de Blogs**: Los usuarios pueden crear y editar sus publicaciones de blog.
- **Listado de Blogs**: Visualización de blogs creados por los usuarios.
- **Cambio de Tema**: Alternar entre temas claro y oscuro.
- **Almacenamiento de Imágenes**: Subida de imágenes a Firebase Storage.

## Librerías Principales

- **React**: Biblioteca principal para construir la interfaz de usuario.
- **Vite**: Herramienta de compilación rápida.
- **Firebase**: Servicios de backend.
- **Tailwind CSS**: Framework de CSS para estilos rápidos y personalizados.
- **React Router**: Para la navegación en la aplicación.

## Notas

Este proyecto es una plantilla básica y tiene como objetivo ayudar a los principiantes a aprender las tecnologías mencionadas. No se recomienda usarlo en producción sin realizar mejoras y revisiones adicionales.

---

¡Diviértete aprendiendo y construyendo!

Con cariño Juanses-Dev 

(/◕ヮ◕)/
