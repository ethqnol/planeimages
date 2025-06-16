-- Migration number: 0001 	 2025-06-16T21:49:42.775Z
CREATE TABLE users (
    user_id TEXT PRIMARY KEY NOT NULL,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    image TEXT
);

CREATE TABLE user_images (
    image_id TEXT PRIMARY KEY NOT NULL,
    user_id TEXT NOT NULL,
    r2_object_key TEXT NOT NULL,
    description TEXT,
    uploaded_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);