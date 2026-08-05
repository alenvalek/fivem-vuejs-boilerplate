

<p align="center">
    <a href="https://github.com/alenvalek/fivem-vuejs-boilerplate">
        <img src="https://i.ibb.co/NrJDyC2/Five-M-Vue-JS-Boilerplate.png" alt="FiveM VueJS Boilerplate"/>
    </a>
</p>

<h4 align="center">Plantilla base de VueJS para FiveM para crear interfaces NUI hermosas sin el tedio de configurar todo desde cero</h4>

<p align="center">
    <img alt="GitHub package.json version (subfolder of monorepo)" src="https://img.shields.io/github/package-json/v/alenvalek/fivem-vuejs-boilerplate?filename=html%2Fpackage.json">
    <img alt="GitHub" src="https://img.shields.io/github/license/alenvalek/fivem-vuejs-boilerplate">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/alenvalek/fivem-vuejs-boilerplate">
    <img alt="Maintenance" src="https://img.shields.io/maintenance/yes/2024">
</p>
<p align="center">
<img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/alenvalek/fivem-vuejs-boilerplate?style=social">
    <img alt="GitHub forks" src="https://img.shields.io/github/forks/alenvalek/fivem-vuejs-boilerplate?style=social">
</p>
<hr>

FiveM VueJS Boilerplate es una plantilla para crear tus propias interfaces NUI para FiveM utilizando VueJS. Elimina el tedio de configurar todo por tu cuenta y lidiar constantemente con errores y fallos antes de poder ponerlo en marcha. VueJS te permite desarrollar tus interfaces NUI más rápido y facilita la implementación de la lógica. Con esta plantilla, todo lo que tienes que hacer es dejar volar tu mente en una racha creativa y comenzar a diseñar tus propias interfaces.
<hr>

## Características principales
* Gestión de estado con Pinia preimplementada con ejemplos de uso
* Vuetify 3 preimplementado con ejemplos de uso
* Axios preimplementado con ejemplos de uso
* Código del cliente preimplementado con ejemplos de uso
* Script de observación (watch) preimplementado para compilar el sitio para ui_view dentro del juego
<hr>

## Instalación
Descarga los archivos zip o clona el repositorio:
```bash
git clone https://github.com/alenvalek/fivem-vuejs-boilerplate.git
```
Abre el proyecto en la terminal de tu elección y cambia el directorio de trabajo a la carpeta html:
```bash
cd ./html
```
Instala los paquetes de node requeridos
```bash
npm install
```

Después, puedes modificar el archivo de la API dentro de html/api/axios.js en caso de que planees renombrar el recurso. \
Una vez hecho esto, estarás listo para comenzar a construir la interfaz NUI de tus sueños.


### Consejos de desarrollo
Ejecuta el siguiente comando para desarrollar utilizando un servidor en vivo (en el navegador)
```bash
npm run dev
```
Ejecuta el siguiente comando para compilar tu proyecto para su uso en el juego
```bash
npm run build
```
Ejecuta el siguiente comando para compilar el proyecto automáticamente cada vez que se realice un cambio para su uso en el juego (ten en cuenta que aún debes reiniciar el recurso en tu servidor para que los cambios surtan efecto) **[RECOMENDADO]**
```bash
npm run watch
```
<hr>

## Tecnologías
* [Lua](https://www.lua.org)
* [VueJS](https://vuejs.org)
* [VuetifyJS](https://vuetifyjs.com/en/)
* [Pinia](https://pinia.vuejs.org/)
* [Typescript](https://www.typescriptlang.org/)

## Contribuir
Si deseas contribuir al proyecto y mejorarlo, toda ayuda es bienvenida.
### Cómo contribuir
1. Haz **Fork** del repositorio a tu propia cuenta de GitHub
2. **Clona** el proyecto en tu máquina
3. **Haz Commit** de los cambios en tu propia rama
4. **Push** tu trabajo a tu rama
5. Envía un **pull** request para que los cambios sean revisados antes de fusionarlos 

NOTA: Asegúrate de fusionar los cambios más recientes de "upstream" antes de enviar la solicitud de fusión.

## Licencia y resumen de la licencia
FiveM BoilerPlate está licenciado bajo la **Licencia MIT**

```
Licencia MIT

Copyright (c) 2023 Alen Valek

Por la presente se concede permiso, libre de cargos, a cualquier persona que obtenga una copia
de este software y de los archivos de documentación asociados (el "Software"), para utilizar
el Software sin restricción, incluyendo sin limitación los derechos
a usar, copiar, modificar, fusionar, publicar, distribuir, sublicenciar y/o vender
copias del Software, y para permitir a las personas a las que se les proporcione
el Software a hacerlo, sujeto a las siguientes condiciones:

El aviso de derechos de autor anterior y este aviso de permiso se incluirán en todas
las copias o partes substanciales del Software.

EL SOFTWARE SE PROPORCIONA "COMO ESTÁ", SIN GARANTÍA DE NINGÚN TIPO, EXPRESA O
IMPLÍCITA, INCLUIDAS, PERO NO LIMITADAS A, LAS GARANTÍAS DE COMERCIABILIDAD,
APTITUD PARA UN PROPÓSITO PARTICULAR Y NO INFRACCIÓN. EN NINGÚN CASO LOS
AUTORES O TITULARES DE LOS DERECHOS DE AUTOR SERÁN RESPONSABLES DE NINGUNA REIVINDICACIÓN, DAÑOS U OTRAS
RESPONSABILIDADES, YA SEA EN UNA ACCIÓN DE CONTRATO, AGRAVIO O DE OTRO MODO, DERIVADAS DE,
FUERA DE O EN CONEXIÓN CON EL SOFTWARE O EL USO U OTROS TRATOS EN EL
SOFTWARE.
```
