DROP TABLE IF EXISTS customer, product;

-- CREATE TABLE customer (
--     id INT AUTO_INCREMENT,
--     customer_id int,
--     first_name varchar(45),
--     last_name varchar(45),
--     phone_number varchar(100),
--     address varchar(200),
--     city varchar(45),
--     state varchar(2),
--     zipcode varchar(30),
--     email varchar(200),
--     PRIMARY KEY(id),
--     FOREIGN KEY (use_id)
--     ON DELETE CASCADE
-- -- Line 16-17 means if I delete a customer, I should delete their trades too. 
-- );

CREATE TABLE `customer` (
  `id` int NOT NULL AUTO_INCREMENT,
  `customer_id` int NOT NULL,
  `first_name` varchar(45) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  `phone_number` varchar(100) NOT NULL,
  `address` varchar(200) NOT NULL,
  `city` varchar(45) NOT NULL,
  `state` varchar(2) NOT NULL,
  `zipcode` varchar(30) NOT NULL,
  `email` varchar(200) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `phone_number_UNIQUE` (`phone_number`),
  KEY `membership_id_FK_idx_idx` (`customer_id`,`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci

-- CREATE TABLE product (
--     id INT AUTO_INCREMENT,
--     product_name varchar(45) ,
--     product_description varchar(45) ,
--     price decimal(10,2),
-- );

CREATE TABLE `product` (
  `id` int NOT NULL AUTO_INCREMENT,
  `product_name` varchar(45) NOT NULL,
  `product_description` varchar(45) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci,


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

