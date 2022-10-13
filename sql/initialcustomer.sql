DROP TABLE IF EXISTS customer, product;

CREATE TABLE customer (
    id INT NOT NULL AUTO_INCREMENT,
    customer_id int,
    first_name varchar(45),
    last_name varchar(45),
    phone_number varchar(100),
    address varchar(200),
    city varchar(45),
    state varchar(2),
    zipcode varchar(30),
    email varchar(200),
    PRIMARY KEY(id),
    FOREIGN KEY (use_id)
    ON DELETE CASCADE
-- Line 16-17 means if I delete a customer, I should delete their trades too. 
);

CREATE TABLE product (
    id INT NOT NULL AUTO_INCREMENT,
    product_name varchar(45) ,
    product_description varchar(45) ,
    price decimal(10,2),
);


-- DROP TABLE IF EXISTS customer;


INSERT INTO customer 
(customer_id, first_name, last_name, phone_number, address, city, state, zipcode, email)
VALUES
("6", "Piana", "Apple", "123-789-9020", "pianapple tree", "Paris", "TX", 12345, "test@test.com")


INSERT INTO product
(product_name, product_description, price)
VALUES
("Solar Panel", "65 Watts", "$100"),
("Hard Drive", "10 TB", "$200"),
("Laptop", "20TB, 1000G Ram", "$2000");

