-- Create database schema for Indian coffee retailers
CREATE TABLE coffee_companies (
    id INTEGER PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    headquarters VARCHAR(50),
    founded_year INTEGER,
    website VARCHAR(200),
    description TEXT,
    type VARCHAR(50)
);

[Rest of the SQL content...]