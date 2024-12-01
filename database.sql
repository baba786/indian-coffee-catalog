-- Create the coffee_houses table
CREATE TABLE coffee_houses (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    headquarters TEXT,
    year_founded INTEGER,
    description TEXT,
    website TEXT
);

-- Create the coffee_products table
CREATE TABLE coffee_products (
    id INTEGER PRIMARY KEY,
    coffee_house_id INTEGER,
    name TEXT NOT NULL,
    type TEXT,
    roast_level TEXT,
    grind_options TEXT,
    price DECIMAL(10,2),
    weight_grams INTEGER,
    description TEXT,
    FOREIGN KEY (coffee_house_id) REFERENCES coffee_houses(id)
);

-- Insert sample data
INSERT INTO coffee_houses (name, headquarters, year_founded, description, website) VALUES
('Blue Tokai Coffee Roasters', 'New Delhi', 2013, 'Premium coffee roaster focusing on single-estate Indian coffee beans', 'https://bluetokaicoffee.com');
