SELECT b.book_id, u.user_name, p.publisher_name, b.genre, b.price, b.title, b.conditions, b.image_url
FROM book b JOIN publisher p ON b.publisher_id = p.publisher_id
			JOIN writes w ON b.book_id = w.book_id
			JOIN users u ON w.author_id = u.users_id;

SELECT * FROM writes
SELECT * FROM users
SELECT * FROM order_item
SELECT * FROM orders
SELECT * FROM customer
SELECT * FROM book
SELECT * FROM author
SELECT * FROM writes
SELECT MAX(users_id) AS max_id FROM users
UPDATE order_item SET quantity = quantity + 1 WHERE order_id = 100 AND book_id = 1

SELECT DISTINCT b.book_id, b.title, u.user_name, b.image_url FROM book b JOIN writes w ON b.book_id = w.book_id JOIN users u ON w.author_id = u.users_id JOIN order_item i ON b.book_id = i.book_id JOIN orders o ON i.order_id = o.order_id; 