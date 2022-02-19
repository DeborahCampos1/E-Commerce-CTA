DROP DATABASE IF EXISTS cta_dev;
CREATE DATABASE cta_dev;

\c cta_dev;

DROP TABLE IF EXISTS products;

CREATE TABLE products (
    id SERIAL PRIMARY KEY, 
    name TEXT NOT NULL,
    description TEXT,
    image TEXT,
    weight INTEGER,
    price INTEGER,
    rating INTEGER,
    CHECK (rating >= 0 AND rating <= 5),
    featured BOOLEAN,
    in_stock BOOLEAN
);

