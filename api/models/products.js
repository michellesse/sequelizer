const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    const Products = sequelize.define('productos', {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        nombre: {
            type: Sequelize.STRING,
            allowNull: false
        },
        precio: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        category: {
            type: Sequelize.ENUM ('TINTO', 'BLANCO', 'ROSADO'),
            allowNull: true
        },
        existencia: {
            type: Sequelize.BOOLEAN,
            allowNull: true
        },
        cantidad: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        descripcion: {
            type: Sequelize.STRING,
            allowNull: true
        }
    }, {timestamps: false, freezeTableName:true});
    
    return Products;
}