/**
 * Nombre: Cesar Aracena
 * Institucion: Coderhouse
 * Curso: Back End
 * Comision: 50040
 * Profesor: Rabindranath Ferreira Villamizar
 * Tutor: Allan Reynoso Naranjo
 * Entrega Numero: 1
 *
 * Este archivo tiene como proposito mostrar el codigo de creacion
 * y uso de una clase en JavaScript la cual serviria como base para
 * el manejo de productos, cumpliendo con las premisas de la primer
 * entrega del curso. Decidi utilizar un archivo JSON que se crea/lee
 * en la misma ruta que el archivo JS para tener mayores posibilidades
 * a la hora de probar su funcionamiento y agregue un metodo para
 * eliminar dicho archivo y comenzar desde cero.
 */

/**
 * Genera UUIDs que cumplen con los requerimientos de la RFC4122. Por ejemplo:
 * c02edb71-193e-4a7b-a01e-b34a836611ff
 * No se utilizara en este ejercicio
 */
function uuidv4() {
    return '10000000-1000-4000-8000-100000000000'.replace(/[018]/g, (c) =>
        (c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16)
    );
}

// Delaracion de requerimientos y variables
const fs = require('node:fs');

/**
 * Esta seccion sirve para verificar que exista el archivo JSON
 * donde se guardaran todos los productos. En caso de no existir
 * se creara con un juego de llaves vacias en su interior
 */
const finished = (error) => {
    if (error) {
        console.error(error);
        return;
    }
};

/**
 * Graba un nuevo producto en el archivo JSON
 *
 * @param {array} data - Es un array con todas las caracteristicas
 * del producto a agregar
 */
const saveData = (data) => {
    // const finished = (error) => {
    //     if (error) {
    //         console.error(error);
    //         return;
    //     }
    // };

    const jsonData = JSON.stringify(data, null, 2);
    fs.writeFile('products.json', jsonData, finished);

    console.log('Producto agregado satisfactoriamente');

    // fs.close('products.json', finished);
};

/**
 * Proporciona un modelo para trabajar con los productos
 * @method addProduct - Se utiliza para agregar nuevos productos
 * @method getProducts - Permite visualizar todos los productos
 * @method getProductById - Permite buscar un producto por su ID
 * @method deleteProducts - Permite eliminar la lista de productos
 */
class ProductManager {
    constructor() {
        this.data = {};
        this.currentId = 0;

        if (fs.existsSync('products.json')) {
            this.data = JSON.parse(fs.readFileSync('products.json'));
            this.currentId = Object.keys(this.data).length;
            // console.log(this.data);
        } else {
            let initData = '{}';
            fs.writeFile('products.json', initData, finished);
        }
    }

    /**
     * Metodo para agregar un nuevo producto. El ID sera asignado de
     * forma automatica
     * @param {string} title - Nombre del producto
     * @param {string} description Descripcion del producto
     * @param {number} price - Precio en entero o flotante
     * @param {string} thumbnail - Path y nombre de la imagen del producto
     * @param {integer} stock - Cantidad de producto disponible
     */
    addProduct(title, description, price, thumbnail, stock, code) {
        if (stock <= 0 || typeof stock !== 'number') {
            console.log('Debe ingresar una cantidad real');
            return '';
        }

        let thisItem = {};
        // let data = {};

        // this.title = title;
        // this.description = description;
        // this.price = price;
        // this.thumbnail = thumbnail;
        // this.stock = stock;
        // this.code = code;

        thisItem.title = title;
        thisItem.description = description;
        thisItem.price = price;
        thisItem.thumbnail = thumbnail;
        thisItem.stock = stock;
        thisItem.code = code;

        this.currentId = this.currentId + 1;
        this.data[this.currentId] = thisItem;
        // saveData(data);
        console.log(this.data);
    }

    /**
     * Permite obtener un listado de todos los productos almacenados
     * @returns {object} Array de objetos con caracteristicas de cada producto
     */
    getProducts() {
        if (productsQty > 1) {
            return data;
        } else {
            console.log('No products found');
            return '';
        }
    }

    /**
     * Permite buscar un producto en particular utilizando el codigo de producto
     * @param {integer} id - codigo unico identificatorio del producto a buscar
     * @returns {object} Objeto con caracteristicas del producto buscado o mensaje si no encuentra el codigo
     */
    getProductById(id) {
        if (data[id] === undefined) {
            console.log(`No existe un producto con el codigo ${id}`);
            return '';
        } else {
            return data[id];
        }
    }

    /**
     * Permite eliminar el archivo JSON con los productos para comenzar desde cero
     */
    deleteProducts() {
        try {
            fs.unlinkSync('products.json');
        } catch (err) {
            console.error(err);
        }
    }
}

/**
 * PRUEBAS Y TESTEOS
 * A continuacion encontrara distintas pruebas a realizar. Cada prueba esta
 * contenida en un bloque con una descripcion en la parte superior.
 * Se aconseja descomentar y probar un bloque a la vez para no obtener
 * resultados confusos en la temrinal
 */

/**
 * Prueba de agregar productos
 * Descomentando de a dos (2) lineas, podra agregar un nuevo producto.
 * El ejemplo esta preparado para insertar dos (2) productos distintos
 * descomentando las 4 lineas, pero puede agregar sus propios productos
 * o insertar estos productos cuantas veces necesite
 */

// Producto 1
const producto1 = new ProductManager();
producto1.addProduct('Manzana', 'Manzana Red Delicious del Valle', 99, 'manzana.jpg', 100, 'asd123');

// Producto 2
const producto2 = new ProductManager();
producto2.addProduct('Pera', 'Pera Williams de temporada', 80, 'pera.jpg', 80000, 'qwe321');

/**
 * Visualizacion de productos
 * Descomentando la primer linea, puede proceder a lo siguiente:
 * Decomentando la segunda linea, visualizar todos los productos
 * Descomentando la tercer linea, visualizar un producto en especifico
 * Descomentando la ultima linea, eliminar el archivo y comenzar desde cero
 */
// const productos = new ProductManager();
// console.log(productos.getProducts());
// console.log(productos.getProductById(1));
// productos.deleteProducts();
