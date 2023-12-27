let products = {};

class ProductManager {
    constructor() {
        this.currentId = Object.keys(products).length + 1;
    }

    addProduct(title, description, price, thumbnail, stock, code) {
        if (stock <= 0 || typeof stock !== 'number') {
            console.log('Debe ingresar una cantidad real');
            return '';
        }

        for (let i = 0; i < Object.keys(products).length; i = i + 1) {
            if (Object.values(products).find((value) => products[i + 1]['code'] === code) !== undefined) {
                console.log('El codigo no debe repetirse');
                return '';
            }
        }

        let thisItem = {};

        thisItem.id = this.currentId;
        thisItem.title = title;
        thisItem.description = description;
        thisItem.price = price;
        thisItem.thumbnail = thumbnail;
        thisItem.stock = stock;
        thisItem.code = code;

        products[this.currentId] = thisItem;

        console.log(`Producto agregado satisfactoriamente con el id ${this.currentId}`);
    }

    getProducts() {
        if (this.currentId > 1) {
            return products;
        } else {
            console.log('No se encontraron productos');
            return '';
        }
    }

    getProductById(id = null) {
        if (products[id] === undefined) {
            console.log(`No existe un producto con el codigo ${id}`);
            return '';
        } else {
            return products[id];
        }
    }
}

const producto1 = new ProductManager();
producto1.addProduct('Manzana', 'Manzana Red Delicious del Valle', 99, 'manzana.jpg', 100, 'asd123');

const producto2 = new ProductManager();
producto2.addProduct('Pera', 'Pera Williams de temporada', 80, 'pera.jpg', 80000, 'qwe321');

// const mis_productos = new ProductManager();
// console.log(mis_productos.getProducts());
// console.log(mis_productos.getProductById(1));
