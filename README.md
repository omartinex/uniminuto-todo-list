# ToDo List basado en Ethereum smart contracts

_Construyendo una aplicación web de Lista de Quehaceres (ToDo List)_

### Arquitectura

![arch](https://i.ibb.co/mttGGGM/Captura-de-pantalla-de-2020-05-31-17-01-47.png)

## Prerequisitos 🛠️

* [git](https://git-scm.com/) - Control de versiones

* [NodeJS](https://nodejs.org/es/) - El framework web usado

* [Ganache](https://www.trufflesuite.com/ganache) - Ethereum blockchain personal.

    Ganache es una herramienta de desarrollo local que se puede utilizar para imitar el comportamiento de una blockchain pública. Recomiendo usar Ganache como su blockchain personal para el desarrollo de Ethereum. Permite implementar contratos inteligentes, desarrollar aplicaciones y ejecutar pruebas. ¡Está disponible en Windows, Mac y Linux como una aplicación de escritorio y una herramienta de línea de comandos!

* [Truffle Framework](https://www.trufflesuite.com/) - Testing framework and asset pipeline for blockchains using the Ethereum Virtual Machine (EVM)

    Truffle Framework, provee un conjunto de herramientas para desarrollar Ethereum smart contacts con el lenguaje de programación Solidity.

* [Metamask](https://metamask.io/) - A crypto wallet & gateway to blockchain apps

    MetaMask es una extension para acceder aplicaciones distrubuidas sobre Ethereum, o "Dapps" desde Chrome browser!

    La extension injecta la API de web3 de Ethereum a cada contexto javascript del sitio web, para que las Dapps puedan leer la blockchain.

## Comenzando 🚀

Este proyecto se desarrolla sobre Ubuntu, por lo que esta guia asume que se está utilizando un sistema basado en UNIX

## Instalación 🔧

Para realizar la instalación de prerequisitos se pueden seguir los 


* nodeJs

```console
sudo apt install nodejs npm
```

* Truffle Framework

```console
npm install -g truffle@5.0.2
```

* Ganache

    Descargar la AppImage 

    https://github.com/trufflesuite/ganache/releases/download/v2.4.0/ganache-2.4.0-linux-x86_64.AppImage

* Metamask

    Instalar la extensión desde la Chrome Web Store 

    https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn

## Configuración del proyecto

Iniciamos con la creación del directorio paara el proyecto

```console
$ mkdir todo-list
$ cd todo-list
```

Dentro del directorio se inicializa un proyecto de Truffle

```console
$ truffle init
```
![truffle init](https://i.ibb.co/PgJPsWd/truffle-init.png)

Ahora creamos un archivo `package.json` donde se definen las dependencias necesarias para el proyecto.

```json
{
  "name": "todo-list",
  "version": "1.0.0",
  "description": "Blockchain Todo List Powered By Ethereum",
  "main": "truffle-config.js",
  "directories": {
    "test": "test"
  },
  "scripts": {
    "dev": "lite-server",
    "test": "echo \"Error: no test specified\" && sexit 1"
  },
  "author": "oscar.martinez-r@uniminuto.edu.co",
  "license": "ISC",
  "devDependencies": {
    "bootstrap": "4.1.3",
    "chai": "^4.1.2",
    "chai-as-promised": "^7.1.1",
    "chai-bignumber": "^2.0.2",
    "lite-server": "^2.3.0",
    "nodemon": "^1.17.3",
    "truffle": "5.0.2",
    "truffle-contract": "3.0.6"
  }
}
```

Ahora se pueden instalar las dependencias desde la CLI:

```console
$ npm install
```
La estructura de directorios del proyecto se ve de esta forma:

![estructura](https://i.ibb.co/DGbrWZ5/Captura-de-pantalla-de-2020-05-30-19-47-59.png)

* contracts directory: en este directorio residen los smart contacts.

* migrations directory: en este directorio residen los archivos de migraciones. Estas migraciones son similares a otros frameworks que requieren mirgaciones para cambiar el estado de una base de datos. Siempre que se despliegan smart contracts a la blockchain, se actualiza el estado de la blockchain, por consiguiente se necesita una migración.

* node_modules directory: este directorio contiene las dependencias isntaladas anteriormente.

* test directory: en este directorio se definen los tests para los smart contract.

* truffle-config.js file: este archivo es el principal archivo de configuración del proyecto Truffle, se usa para definir parametros como la configuración de red.

## Ejecutando las pruebas ⚙️

```shell
truffle test
```

## Despliegue 📦

* Iniciar Ganache y hacer clic en `QUICKSTART ETEHREUM` para iniciar la blockchain local.

![ganache](https://i.ibb.co/wLdMjJ2/Captura-de-pantalla-de-2020-05-30-20-46-25.png)

* Clonar el repo

```console
git clone https://github.com/omartinex/uniminuto-todo-list/
```

* Ingresar al directorio

```console
cd uniminuto-todo-list
```

* Migrar los contratos a la blockchain

  * esto permite migrar a la blockchain los contratos que se han definido en el archivo `Migrations.sol`

```console
$ truffle migrate
```

    * _Si se cambia el código del smart contract, se debe redesplegar ya que el código desplegado anteriormente es inmmutable. En este caso se añade la opcion `--reset` al comando `truffle migrate`._

![migrate](https://i.ibb.co/x8rmS6T/Captura-de-pantalla-de-2020-05-31-17-09-01.png)

* Correr http server

```console
$ npm run dev
```
![npm run dev](https://i.ibb.co/zNmPygL/Captura-de-pantalla-de-2020-05-30-20-43-59.png)

        * Desde el navegador acceder a http://localhost:3000

* Configurar Metamask

  * En Ganache seleccionar la dirección que va a realizar las transacciones

  ![dir](https://i.ibb.co/JzJn9xP/Captura-de-pantalla-de-2020-05-30-20-49-51.png)

  *





## PoC 

![alt text](https://i.ibb.co/kHRjhWh/poc.gif)

## Autores ✒️

* **Oscar Martínez** - [github](https://github.com/omartinex)

## Licencia 📄

Este proyecto está bajo la Licencia GNU General Public License v3.0 - mira el archivo [LICENSE.md](LICENSE.md) para detalles

---
⌨️ con ❤️ por [omartinex](https://github.com/omartinex) 😊