\c cta_dev;

INSERT INTO products (name, description, image, weight, price, rating, featured, in_stock) VALUES
('1 oz Coin', 'American Gold Buffalo', 'https://online.kitco.com/products/1_oz_Gold_American_Buffalo_Coin_9999_2460/enu-1-oz-Gold-American-Buffalo-Coin-9999-2460-20000-2.jpg', 1, 2000,5, false, true),
('1 oz Coin', 'American Gold Eagle', 'https://online.kitco.com/products/1_oz_Gold_American_Eagle_Coin_9167_3000/enu-1-oz-Gold-American-Eagle-Coin-9167-3000-40000-2.jpg', 1, 2005, 4, true, true),
('1 oz Coin', 'Canadian Gold Maple Leaf', 'https://online.kitco.com/products/1_oz_Gold_Canadian_Maple_Leaf_Coin_9999_3110/enu-1-oz-Gold-Canadian-Maple-Leaf-Coin-9999-3110-40000-2.jpg', 1, 1995, 4, true, true),
('1 oz Coin', 'Platinum American Eagle', 'https://online.kitco.com/products/2022-1-oz-Platinum-American-Eagle-Coin-9995-3005Y2022/enu-2022-1-oz-Platinum-American-Eagle-Coin-9995-3005Y2022-40000-2.jpg', 1, 1238, 5, false, true),
('1 oz Coin', 'Platinum Canadian Maple Leaf', 'https://online.kitco.com/products/1_oz_Platinum_Canadian_Maple_Leaf_Coin_9995_3105/enu_1_oz_Platinum_Canadian_Maple_Leaf_Coin_9995_3105_40000_2.jpg', 1 , 1216, 4, true, true),
('1 oz Bar', 'Platinum Valcambi Suisse', 'https://online.kitco.com/products/1-oz-Platinum-Valcambi-Suisse-Bar-9995-1017V/enu-1-oz-Platinum-Valcambi-Suisse-Bar-9995-1017V-40000-2.jpg', 1, 1197, 5, false, true),
('25 oz Coins', 'Silver Maple Leaf Coins (25 pcs)', 'https://online.kitco.com/products/2022-1-oz-Silver-Maple-Leaf-Tube-25-coins-MintFirst-3104MFT2022/enu-2022-1-oz-Silver-Maple-Leaf-Tube-25-coins-MintFirst-3104MFT2022-50000-2.jpg', 25, 790, 5, true, true);

INSERT INTO users (first_name, last_name, email) VALUES
('Amanda', 'Nunez', '123123@example.com'),
('User', 'Two', 'email@etest.com'),
('Test', 'User', 'email2@example.com');

INSERT INTO Cart_activity(user_id, product_id, quantity, created_at, updated_at, deleted_at) VALUES
(1,2,3,'1999-01-08 04:05:06', '10/22/2017 10:00', '10/22/2017 10:30');