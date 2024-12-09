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
SELECT * FROM review
SELECT * FROM report
SELECT * FROM publisher
SELECT MAX(users_id) AS max_id FROM users
UPDATE order_item SET quantity = quantity + 1 WHERE order_id = 100 AND book_id = 1

SELECT DISTINCT b.book_id, b.title, u.user_name, b.image_url FROM book b JOIN writes w ON b.book_id = w.book_id JOIN users u ON w.author_id = u.users_id JOIN order_item i ON b.book_id = i.book_id JOIN orders o ON i.order_id = o.order_id;
SELECT * FROM orders o JOIN order_item i ON o.order_id = i.order_id
INSERT INTO order_item (review_id) SELECT 3 FROM orders o JOIN order_item i ON o.order_id = i.order_id WHERE o.customer_id = 18 AND i.book_id = 2
UPDATE order_item SET review_id = 4 FROM orders o WHERE o.customer_id = 18 AND o.order_id = order_item.order_id AND order_item.book_id = 2
SELECT r.review_id, r.review_description, r.review_date, r.stars FROM review r JOIN order_item o ON r.review_id = o.review_id WHERE o.book_id = 2
SELECT i.book_id, o.customer_id, i.review_id FROM orders o JOIN order_item i ON o.order_id = i.order_id