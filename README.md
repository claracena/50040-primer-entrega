# 50040-primer-entrega

#### Nombre: César Aracena

#### Institucion: Coderhouse

#### Curso: Back End

#### Comision: 50040

#### Profesor: Rabindranath Ferreira Villamizar

#### Tutor: Allan Reynoso Naranjo

#### Entrega Numero: 1

#### Este archivo tiene como proposito mostrar el código de creación y uso de una clase en JavaScript la cual serviría como base para el manejo de productos, cumpliendo con las premisas de la primer entrega del curso. Decidí utilizar un archivo JSON que se crea/lee en la misma ruta que el archivo JS para tener mayores posibilidades a la hora de probar su funcionamiento y agregué un método para eliminar dicho archivo y comenzar desde cero.

---

## Ejecución de pruebas

#### Para realizar las pruebas de los métodos, se deben descomentar las líneas adecuadas en el archivo.

### Agregado de productos

#### Para agregar un producto, es necesario instanciar un objeto/variable desde la clase maestra, para luego llamar al método addProduct() es decir, que se deben descomentar de a dos (2) líneas por producto que se desee agregar. Por ejemplo, las líneas 180 y 181 para agregar el primero de los productos listos en el ejemplo

### Obtener lista de productos

#### Simplemente creamos una instancia de la clase maestra y llamamos al método getProducts(). En el ejemplo esto significa descomentar las líneas 194 y 195. Conviene dejar descomentada la línea 194 hasta finalizar con las pruebas

### Obtener un producto en específico

#### Con la clase instanciada (línea 194 descomentada), descomentar la línea 196 y ejecutar el archivo bajo el servidor de Node. Esto llamará al método getProductById(n) el cual recibe un solo parámetro que es un entero con el número de ID del producto a buscar.

### Eliminación de productos

#### Para eliminar el archivo con los productos, simplemente dejar instanciada la clase y descomentar la línea 197 para llamar al método deleteProducts() que eliminará el archivo de productos creado previamente
