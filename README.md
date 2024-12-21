# tfg
Aplicación para Dungeon Masters y jugadores que escucha partidas de rol en tiempo real, genera notas automáticas, y ofrece asistencia rápida para reglas y creación de contenido.
# Herramienta de Asistencia para Dungeon Masters y Jugadores

## Problemas Identificados

1. **Gestión de Notas:** Dificultad para llevar notas detalladas durante una sesión siendo Dungeon Master.  
2. **Falta de Ideas Creativas:** Escasez de inspiración para aspectos del mundo, misiones y NPCs.  
3. **Ayuda con Mecánicas:** Necesidad de soporte rápido para interpretar reglas o resolver dudas.  

## Soluciones Propuestas

- **Procesamiento en Tiempo Real:** La herramienta escucha las partidas y transforma la información en notas automáticas.  
- **Asistente Inteligente (Nth1):** Responde preguntas basadas en las notas generadas durante la sesión.  
- **Asistente de Reglas (Nth2):** Ofrece ayuda rápida sobre mecánicas y reglas del juego.  

---

## Progreso del Proyecto

1. **Creación de Cuenta de GitHub**  
   - Elegí GitHub por su comunidad activa, repositorios gratuitos, integración con herramientas y visibilidad para proyectos públicos o colaborativos.  

2. **Elección de Nombre de Usuario**  
   - Decidí un nombre profesional para mantener consistencia en entornos laborales y personales.  

3. **Creación de Repositorio**  
   - Configuré un repositorio para alojar el proyecto y mantener control de versiones.  

4. **Configuración de Credenciales de Git**  
   - Configuré las credenciales de Git para facilitar la autenticación desde mi equipo local.  

5. **Clonación del Repositorio**  
   - Usé `git clone` para acceder al repositorio desde mi ordenador y comenzar el desarrollo local.  

6. **Instalacion de las dependencias de npm necesarias para el proyecto**

# Herramienta de Asistencia para Dungeon Masters y Jugadores

## Instalación y Configuración del Entorno de Desarrollo

### **Dependencias y Herramientas Instaladas**

1. **Node.js y npm**  
   - Instalamos Node.js y npm para gestionar dependencias y ejecutar scripts.  
   - Aseguramos que la variable de entorno `PATH` incluya la ruta de Node.js.  
   - Verificamos la instalación con:  
     ```bash
     node -v
     npm -v
     ```

2. **Vite (React + TypeScript)**  
   - Usamos Vite para crear el proyecto base con React y TypeScript.  
   - Comando ejecutado:  
     ```bash
     npm create vite@latest tfg-web-app --template react-ts
     ```

3. **Sass**  
   - Instalamos Sass para la gestión avanzada de estilos con preprocesadores.  
   - Comando ejecutado:  
     ```bash
     npm install sass
     ```

4. **ESLint**  
   - Configuramos ESLint para mantener la calidad del código y seguir buenas prácticas en React y TypeScript.  
   - Instalamos las dependencias necesarias:  
     ```bash
     npm install eslint eslint-plugin-react eslint-plugin-react-hooks @typescript-eslint/parser @typescript-eslint/eslint-plugin --save-dev
     ```  
   - Configuramos `.eslintrc.json` con reglas básicas para React y TypeScript.  

5. **Material-UI**  
   - Añadimos Material-UI para un sistema de diseño moderno y componentes reutilizables.  
   - Comando ejecutado:  
     ```bash
     npm install @mui/material @emotion/react @emotion/styled
     ```
   - Para iconos:  
     ```bash
     npm install @mui/icons-material
     ```

---

### **Progreso del Proyecto**

- Configuramos Node.js y npm.  
- Creamos un proyecto base con React y TypeScript usando Vite.  
- Añadimos Sass para estilos.  
- Configuramos ESLint para seguir buenas prácticas de desarrollo.  
- Instalamos Material-UI para mejorar el diseño de la interfaz.  


---
en base al input del usuario y utilizando los archivos como contexto seleccionado te genera unas notas descargables
podra responder a distintas preguntas del usuario en base a las notas generadas y al contexto seleccionado

#f5e800
