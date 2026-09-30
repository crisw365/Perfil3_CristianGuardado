# 📱 Perfil3_CristianGuardadoApp

## Evaluación Práctica — Desarrollo Móvil con React Native y Expo

---

### 📋 Información del Estudiante

| Campo         | Detalle                          |
| ------------- | -------------------------------- |
| **Nombre**    | Cristian Alejandro Guardado      |
| **Carnet**    | XX-XXXX-XXXX                     |
| **Sección**   | 01                               |
| **Grupo**     | 03                               |
| **Materia**   | Desarrollo de Aplicaciones Móviles |
| **Docente**   | [Nombre del Docente]             |
| **Fecha**     | Septiembre 2026                  |

---

### 📖 Descripción del Proyecto

Aplicación móvil desarrollada en **React Native** con **Expo** que consta de dos pantallas:

1. **Pantalla Home (Presentación):** Muestra la información personal del estudiante con un diseño limpio y moderno, incluyendo un botón destacado de navegación.
2. **Pantalla API View:** Consume la API pública de [Rick and Morty](https://rickandmortyapi.com/api/character) y muestra una lista de personajes con su nombre, imagen, estado y origen.

---

### 🛠️ Tecnologías Utilizadas

- **React Native** — Framework de desarrollo móvil
- **Expo** — Plataforma de desarrollo y build
- **React Navigation** (`@react-navigation/native`, `@react-navigation/native-stack`) — Navegación entre pantallas
- **Rick and Morty API** — Fuente de datos externa

---

### 📂 Estructura del Proyecto

```
Perfil3_CristianGuardadoApp/
├── App.js                          # Punto de entrada y configuración de navegación
├── app.json                        # Configuración de Expo (icon, splash)
├── index.js                        # Registro del componente raíz
├── package.json                    # Dependencias del proyecto
├── assets/
│   ├── icon.png                    # Ícono de la aplicación
│   ├── splash.png                  # Pantalla de carga personalizada
│   └── favicon.png                 # Favicon para web
└── src/
    ├── components/
    │   ├── Card.js                 # Componente reutilizable de tarjeta
    │   ├── LoadingIndicator.js     # Componente de indicador de carga
    │   └── ErrorMessage.js         # Componente de mensaje de error
    ├── hooks/
    │   └── useFetchCharacters.js   # Custom Hook para consumo de API
    └── screens/
        ├── HomeScreen.js           # Pantalla 1: Información del estudiante
        └── APIViewScreen.js        # Pantalla 2: Lista de personajes (API)
```

---

### 🏗️ Arquitectura y Patrones Aplicados

| Patrón                    | Implementación                                                                  |
| ------------------------- | ------------------------------------------------------------------------------- |
| **Custom Hooks**          | `useFetchCharacters.js` — Encapsula `fetch`, maneja `data`, `loading`, `error` |
| **Componentización**      | `Card`, `LoadingIndicator`, `ErrorMessage` — Componentes reutilizables          |
| **Separación de intereses** | La lógica de datos está en el hook, la UI en las pantallas                    |
| **Props drilling**        | `Card` recibe datos vía props, sin dependencias externas                       |

---

### 🚀 Instalación y Ejecución

```bash
# 1. Clonar el repositorio
git clone https://github.com/TU_USUARIO/Perfil3_CristianGuardadoApp.git

# 2. Entrar al directorio del proyecto
cd Perfil3_CristianGuardadoApp

# 3. Instalar dependencias
npm install

# 4. Iniciar el proyecto con Expo
npx expo start
```

---

### 📦 Generar APK con EAS Build

```bash
# Instalar EAS CLI globalmente
npm install -g eas-cli

# Iniciar sesión en Expo
eas login

# Configurar el proyecto para EAS
eas build:configure

# Generar APK de desarrollo/preview
eas build --platform android --profile preview
```

---

### 📸 Capturas de Pantalla

| Pantalla Home | Pantalla API View |
| :-----------: | :---------------: |
| *(Insertar captura)* | *(Insertar captura)* |

---

### 🎥 Video Demostrativo

🔗 [Enlace al video demostrativo](#)

> El video muestra la navegación entre pantallas, la carga de datos desde la API y la interacción con la lista de personajes.

---

### 📄 Licencia

Proyecto desarrollado con fines académicos. Todos los datos de personajes pertenecen a [Rick and Morty API](https://rickandmortyapi.com/).
