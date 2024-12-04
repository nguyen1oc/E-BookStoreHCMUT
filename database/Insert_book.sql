INSERT INTO publisher (publisher_id, publisher_name, address) VALUES
	(1, 'Penguin Random House', 'TPHCM'),
	(2, 'Knopf Canada', 'TPHCM'),
	(3, 'Nhà Xuất Bản Trẻ', 'TPHCM'),
	(4, 'Bloomsbury Publishing', 'TPHCM'),
	(5, 'NXB Văn Học', 'TPHCM'),
	(6, 'HarperOne', 'TPHCM'),
	(7, 'J.B. Lippincott & Co', 'TPHCM'),
	(8, 'T.Egerton', 'TPHCM'),
	(9, 'Litte, Brown and Company', 'TPHCM'),
	(10, 'Secker & Warburg', 'TPHCM');
INSERT INTO Book (Book_id, Genre, Price, Title, Publish_date, Publisher_id, Conditions)
VALUES
    (1, 'Self-Help, Personal Development', 100000, 'Atomic Habits', '2018-10-16', 1, 'Available'),
    (2, 'Adventure Fiction, Philosophical Fiction', 250000, 'Life of Pi', '2018-10-16', 2, 'Available'),
    (3, 'Romance, Coming-of-Age', 75000, 'Mắt biếc', '2018-10-16', 3, 'Affordable'),
    (4, 'Romance, Drama', 50000, 'Ngày Xưa Có Một Chuyện Tình', '2018-10-16', 3, 'Affordable'),
    (5, 'Historical Fiction, Mythology', 150000, 'The Song of Achilles', '2018-10-16', 4, 'Affordable'),
    (6, 'Fiction, Mystery', 120000, 'The Miracles of the Namiya General Store', '2018-10-16', 3, 'Affordable'),
    (7, 'Fiction, Literature', 95000, 'My Sweet Orange Tree', '2018-10-16', 5, 'Affordable'),
    (8, 'Fiction, Adventure', 120000, 'The Alchemist', '2018-10-16', 6, 'Affordable'),
    (9, 'Fiction, Classic', 140000, 'To Kill a Mockingbird', '2018-10-16', 7, 'Affordable'),
    (10, 'Fiction, Romance', 110000, 'Pride and Prejudice', '2018-10-16', 8, 'Affordable'),
    (11, 'Fiction, Dystopian', 150000, '1984', '2018-10-16', 9, 'Affordable');

SELECT * FROM book