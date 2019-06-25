create database if not exists prueba1;


use prueba1;
use classicmodels;

create table if not exists users(
	id INT NOT NULL AUTO_INCREMENT,
    nombre varchar(100) NOT NULL,
    nickname varchar(100),
    email varchar(100),
    pais varchar(100) null,
    CONSTRAINT users_PK PRIMARY KEY (id)
);

select * from users;
select * from customers;

alter user 'root'@'localhost' identified with mysql_native_password by 'PASSWORD';

create database if not exists prueba2;


use prueba2;

create table if not exists productos(
	id INT NOT NULL AUTO_INCREMENT,
    nombre varchar(100) NOT NULL,
    precio INT,
    category enum ('TINTO', 'BLANCO', 'ROSADO'),
    existencia boolean,
    cantidad INT,
    descripcion varchar(100),
    CONSTRAINT productos_PK PRIMARY KEY (id)
);

select * from productos;

create table if not exists productoss(
    nombre varchar(100) NOT NULL,
    precio INT,
    category enum ('TINTO', 'BLANCO', 'ROSADO'),
    existencia boolean,
    cantidad INT,
    descripcion varchar(100)
);
