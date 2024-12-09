-- Add Person Information
INSERT INTO Users (Users_ID, Email, Phone_number, User_name, Passwords)
VALUES
	(1, 'nguyen.van.a@example.com', '0912345678', 'TommyVan23', 'somethingsomething'),
	(2, 'tran.thi.b@example.com', '0923456789', 'TranNguNgoan', 'HolaAmigos'),
	(3, 'le.hoang.c@example.com', '0934567890', 'Lel44', 'DingDong33'),
	(4, 'pham.thanh.d@example.com', '0945678901', 'Phami29', 'ThanhYouBich'),
	(5, 'hoang.minh.e@example.com', '0956789012', 'HongKonGiCa', 'MineAss'),
	(6, 'do.thi.f@example.com', '0967890123', 'DoReMi', 'ThiTranNho'),
	(7, 'ngo.ba.g@example.com', '0978901234', 'NgooQuaDi', 'BaBaBaBa'),
	(8, 'bui.thu.h@example.com', '0989012345', 'BuiBu69', 'ThuTienDuaDay'),
	(9, 'pham.hoang.i@example.com', '0990123456', 'Phamily', 'HoangManging'),
	(10, 'vu.ngoc.j@example.com', '0910234567', 'VuToThemBu', 'NGOCNGHECH');

-- Add Author --
INSERT INTO author (Author_id, Number_of_books)
VALUES
	(1, 3),
	(2, 4),
	(4, 3);

-- Add Customer --
INSERT INTO customer(Customer_ID, Money_spent)
VALUES
	(3, 0),
	(4, 0),
	(5, 0),
	(6, 0),
	(7, 0),
	(8, 0),
	(9, 0),
	(10, 0);

-- Add Publisher--
INSERT INTO publisher(Publisher_id, Publisher_name, Address)
VALUES
	(1, 'Sach moi', '123 Duong Sach, Quan 1, TP.HCM'),
	(2, 'Nha Xuat Ban Van Hoc', '456 Pho Sach, Quan 3, TP.HCM'),
	(3, 'Tri Thuc', '789 Nga Tu Sach, Quan 5, TP.HCM');

-- Add Random Book Information
INSERT INTO Book (Book_id, Genre, Price, Title, Publish_date, Publisher_id, Conditions)
VALUES
    (1000000000011, 'Fiction', 100000, 'The Whispering Pines', '2015-05-20', 1, 'Online'),
    (1000000000012, 'Science Fiction', 150000, 'Journey to the Stars', '2018-07-15', 2, 'New'),
    (1000000000013, 'Fantasy', 200000, 'Dragonfire Chronicles', '2020-10-05', 3, 'Online'),
    (1000000000014, 'Mystery', 100000, 'The Lost Treasure', '2017-11-11', 3, 'Used'),
    (1000000000015, 'Romance', 20000, 'Love in the Time of Chaos', '2021-01-01', 2, 'Online'),
    (1000000000016, 'Thriller', 200000, 'The Final Countdown', '2019-03-30', 1, 'Used'),
    (1000000000017, 'Horror', 300000, 'Nightmare Alley', '2022-02-14', 2, 'New'),
    (1000000000018, 'Biography', 200000, 'Life of a Legend', '2016-09-09', 1, 'New'),
    (1000000000019, 'Historical Fiction', 100000, 'Echoes of the Past', '2018-12-12', 3, 'Used'),
    (1000000000020, 'Non-Fiction', 150000, 'Understanding the Universe', '2023-08-20', 3, 'New');

-- Add Order --
INSERT INTO orders(Order_id, Total_money, Order_date, Customer_id)
VALUES
	(101, 100000, '2024-09-05', 4),
	(102, 170000, '2024-09-18', 5),
	(103, 142500, '2024-09-19', 5),
	(104, 240000, '2024-09-25', 7),
	(105, 200000, '2024-09-30', 7),
	(106, 360000, '2024-10-01', 6),
	(107, 19000, '2024-10-05', 8),
	(108, 300000, '2024-10-08', 9),
	(109, 150000, '2024-10-22', 10),
	(110, 510000, '2024-10-15', 3);

-- Add Order Item --
INSERT INTO order_item(order_id, book_id, quantity, discount, review_id)
VALUES
    (101, 1000000000011, 1, 0.00, 3),
    (104, 1000000000019, 3, 0.20, 1),
    (107, 1000000000015, 1, 0.05, 4),
    (110, 1000000000017, 2, 0.15, 2);
	
INSERT INTO order_item(order_id, book_id, quantity, discount)
VALUES
	(102, 1000000000013, 1, 0.15),
    (103, 1000000000012, 1, 0.05),
	(105, 1000000000016, 1, 0.00),
    (106, 1000000000018, 2, 0.10),
	(108, 1000000000014, 4, 0.25),
    (109, 1000000000020, 1, 0.00);
	
INSERT INTO Review(review_description, review_date, stars)
VALUES
	('Good', '2024-11-17', 5),
	('Worst book ever', '2024-11-25', 1),
	('Good book bad delivery', '2024-12-5', 3),
	('PERRRFECTTT', '2024-12-19', 5);

INSERT INTO Writes(Book_ID, Author_ID)
VALUES
	(1000000000011,2),
	(1000000000012,2),
	(1000000000013,1),
	(1000000000014,1),
	(1000000000015,1),
	(1000000000016,4),
	(1000000000017,2),
	(1000000000018,2),
	(1000000000019,4),
	(1000000000020,4);