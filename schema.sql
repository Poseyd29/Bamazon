DROP DATABASE IF EXISTS Bamazon_db;

CREATE DATABASE Bamazon_db;

USE Bamazon_db;

CREATE TABLE Products(
    ItemID MEDIUMINT AUTO_INCREMENT NOT NULL,
    ProductName VARCHAR(100) NOT NULL,
    DepartmentName VARCHAR(50) NOT NULL,
    Price DECIMAL(10,2) NOT NULL,
    StockQuantity INT(10) NOT NULL,
    primary key(ItemID)
);

select * FROM Products;


INSERT INTO Products(ProductName,DepartmentName,Price,StockQuantity)

VALUES ("Yeezy Boost V2", "Clothing", 699.99, 5000),
		("Retro Jordan IV", "Clothing", 399.99, 8000),
        ("Retro Jordan XI", "Clothing", 499.99, 6500),
        ("Adidas Ultraboost", "Clothing", 299.99, 10000),
        ("Iphone X", "Electronics", 999.99, 3500),
        ("Samsung Galaxy", "Electronics", 699.99, 7000),
        ("Playstation Pro", "Electronics", 499.99, 4000),
        ("Xbox", "Electronics", 399.99, 7000) ,
        ("Gold Necklace", "Jewelry", 1499.99, 1500),
        ("Diamond Necklace", "Jewelry", 2999.99, 800);