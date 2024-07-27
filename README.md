

Para crear componentes:  

primero se crea el componente dentro de app (o donde sea)


---------------
 

CHULETA ANGULAR

OJO: hay que instalar primero angular CLI y NODE js. Node js incluye NPM.

En VScode, bajarse Angular Language Service & angular essentials (en view-> extensions).

una vez instalado el node js, en consola se pone: npm install -g @angular/cli y así se instala el CLI 

1.- Poner esto en powershell:

Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Unrestricted

2.- Crear nuevo proyecto angular:

ng new apiDemo 

3.- Seleccionar SCSS

4.- Una vez creado, ponerse en la carpeta correspondiente en terminal y poner "code . " para abrirla con VS code.

5.- Crear el archivo route poniendo esto en consola: ng generate module app-routing --flat

6.- Creamos 1 nuevo componente angular. para crear componentes en vs code, cambiamos la terminal a cmd y ponemos:

ng g c home (angular generate component llamado home)

7.- instalar los paketes: “npm install”

8.- para ejecutar:

ng serve -o (esto compila y ejecuta la app, y levanta un servidor local y abre el navegador en VS)
npm start (en VSCODE. esto ejecuta un script que levanta un server de desarrollo que se puede visitar clicando en el "localhost"- esto INCLUYE ng serve!!).

----------

Diferentes archivos:

- archivos de configuración de typescript (no tocar si no se sabe usar):
	- tsconfig.app.json
	- tsconfig.json
	- tsconfig.spec.json

estos archivos controlan cómo va a funcionar el code ts y cómo va a interactuar con angular.


- archivos de dependencias:
	- package-lock.json
	- package.json

sirven para managear las dependencias de nuestra app. Son features.

- angular.json: extra config settings. En general no se debe cambiar nada.

- config files:
	- .editorconfig: rules about how the code must be formatted
	- gitignore

- src: folder main. Aquí se buildea los componentes y el code.
	- styles.css → esto se aplicará a todos los componentes.
	- index.html → main html: el primero q se verá de la app.
	- main.ts → sera el 1er code file que sera ejecutado cuando nuestra app 	sea ejecutada.
	
- assets: aquí guardas imagenes, como logos, etc.

- app: folder donde se crean y combinan todos los componentes.	

--------------

En el main.ts se importan los componentes. Por ej, un componente llamado “hola” se importaría así:

import {AppComponent} from './hola/hola.component';

---------------

# Udemy

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
