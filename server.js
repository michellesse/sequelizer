const Sequelize = require('sequelize');
const op = Sequelize.Op;


var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;

var ProductsModel = require('./api/models/products')

console.log('sequelizer loaded');



//Option 1 : passing our parameters separately
var dbName = 'prueba2';
var dbPass = 'PASSWORD';
var dbUser = 'root'

const sequelize = new Sequelize(dbName, dbUser, dbPass, {
    host: 'localhost',
    dialect: 'mysql'
});

var productCrud = ProductsModel(sequelize);

// crearProducto();
// listarProducto();
// actualizarProducto();
// eliminar();
search();

app.listen(port);

function crearProducto() {

    var productoNuevo = {
        id: 5,
        nombre: 'Sierra Cantabria',
        precio: 250,
        category: 'TINTO',
        existencia: true,
        cantidad: 1,
        descripcion: 'La neta no lo conozco',
    }
    productCrud.create(productoNuevo).then(resp => {
        console.log('creado...')
        console.log(resp);
    });

}

function listarProducto() {
    productCrud.findAll().then(resp => {
        console.log('listando...')

        console.log(resp)
    });
}


function actualizarProducto() {
    var productoNuevo = {
        nombre: 'Nebbiolo, cincuenta gatos',
        precio: 500,
        cantidad: 4
    }

    productCrud.update(productoNuevo, {
        where: {
            nombre: 'Nebbiolo, once gatos'
        }
    }).then(resp => {
        console.log('actualizado');
    })
}

function eliminar() {
    productCrud.destroy({
        where: {
            nombre: 'Nebbiolo, once gatos'
        }
    }).then(() => {
        console.log('eliminando...')
    });
}

function search() {
    productCrud.findAll({
        where: {
            precio: {
                [op.gt]: 500
            }
        }
    }).then(resp => {
        console.log('buscando...')

        console.log(resp)
    });
}

