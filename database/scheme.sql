CREATE DATABASE IF NOT EXISTS car_rental;
USE car_rental;

CREATE TABLE IF NOT EXISTS users (
  user_id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  role ENUM('user','admin') DEFAULT 'user'
);

CREATE TABLE IF NOT EXISTS cars (
  car_id INT AUTO_INCREMENT PRIMARY KEY,
  brand VARCHAR(100),
  model VARCHAR(100),
  category ENUM('Econom','Comfort','Luxury'),
  price_per_day DECIMAL(10,2),
  status ENUM('available','booked') DEFAULT 'available',
  image_url VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS bookings (
  booking_id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  car_id INT,
  start_date DATE,
  end_date DATE,
  total_price DECIMAL(10,2),
  status ENUM('active','completed','cancelled') DEFAULT 'active',
  FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE,
  FOREIGN KEY (car_id) REFERENCES cars(car_id) ON DELETE CASCADE
);

-- create an admin test user (password: adminpass)
INSERT INTO users (name,email,password,role)
SELECT 'Admin','admin@example.com', '$2b$10$7zYq1o60YQ1jv8aZ1y6SmuZ4u2YxR4u0xY0O1NwqTqfKcQqQ7aX9O', 'admin'
WHERE NOT EXISTS (SELECT 1 FROM users WHERE email='admin@example.com');

-- example cars
INSERT INTO cars (brand,model,category,price_per_day)
VALUES
('Toyota','Yaris','Econom',25.00),
('Hyundai','Elantra','Comfort',45.00),
('BMW','5 Series','Luxury',120.00)
ON DUPLICATE KEY UPDATE brand=brand;