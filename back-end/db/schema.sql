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

DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    first_name varchar NOT NULL UNIQUE,
    last_name varchar NOT NULL UNIQUE,
    email TEXT NOT NULL,
    created_at timestamp,
    modified_at timestamp
);

DROP TABLE IF EXISTS Cart_activity;

CREATE TABLE Cart_activity (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    product_id INTEGER REFERENCES products(id),
    quantity INTEGER,
    created_at timestamp,
    updated_at timestamp,
    deleted_at timestamp
);