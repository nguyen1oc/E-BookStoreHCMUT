-- Users --
CREATE TABLE Users(
	Users_ID bigserial PRIMARY KEY,
	Email TEXT NOT NULL UNIQUE,
	Phone_number NUMERIC(10) UNIQUE,
	User_name TEXT NOT NULL,
	Passwords TEXT NOT NULL
);
-- Report --
CREATE TABLE Report(
	Report_ID bigserial PRIMARY KEY,
	Report_date TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
	Description TEXT,
	Title TEXT,
	Users_ID bigserial,
	FOREIGN KEY (Users_ID) REFERENCES Users(Users_ID) ON DELETE CASCADE
);
-- Author --
CREATE TABLE Author(
	Author_ID bigserial PRIMARY KEY,
	Number_of_books NUMERIC(5) NOT NULL CHECK(Number_of_books >= 1),
	FOREIGN KEY (Author_ID) REFERENCES Users(Users_ID) ON DELETE CASCADE
);

-- Customer --
CREATE TABLE Customer(
	Customer_ID bigserial PRIMARY KEY,
	Money_spent NUMERIC(15,3) NOT NULL CHECK(Money_spent >= 0) DEFAULT 0,
	FOREIGN KEY (Customer_ID) REFERENCES Users(Users_ID) ON DELETE CASCADE
);

-- Order --
CREATE TABLE Orders(
	Order_ID bigserial PRIMARY KEY,
	Total_money NUMERIC(15,3) NOT NULL CHECK(Total_money >= 0) DEFAULT 0,
	Order_date TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
	Customer_ID bigserial,
	FOREIGN KEY (Customer_ID) REFERENCES Customer(Customer_ID) ON DELETE CASCADE
);

-- Publisher --
CREATE TABLE Publisher(
	Publisher_ID bigserial PRIMARY KEY,
	Publisher_name TEXT NOT NULL,
	Address TEXT
);

-- Book --
CREATE TABLE Book(
	Book_ID bigserial PRIMARY KEY,
	Genre TEXT,
	Price NUMERIC(15,3) NOT NULL CHECK(Price >= 0),
	Title TEXT NOT NULL,
	Publish_date DATE NOT NULL,
	Publisher_ID bigserial,
	Conditions TEXT NOT NULL,
	
	FOREIGN KEY (Publisher_ID) REFERENCES Publisher(Publisher_ID) ON DELETE SET NULL
);
-- Review --
CREATE TABLE Review (
	Review_ID bigserial PRIMARY KEY,
	Review_description TEXT,
	Review_date TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
	Stars INT NOT NULL CHECK (Stars >= 0 AND Stars <= 5)
);
-- Order Item--
CREATE TABLE Order_item(
	Order_ID bigserial,
	Book_ID bigserial,

	PRIMARY KEY(Order_ID, Book_ID),
	
	Quantity NUMERIC CHECK(Quantity > 0),
	Discount NUMERIC(3, 2) CHECK(Discount >= 0 and Discount <= 1),
	Review_ID NUMERIC(13,0),
	
	FOREIGN KEY (Order_ID) REFERENCES Orders(Order_ID) ON DELETE CASCADE,
	FOREIGN KEY (Book_ID) REFERENCES Book(Book_ID) ON DELETE CASCADE
);

-- Writes --
CREATE TABLE Writes (
	Book_ID bigserial,
	Author_ID bigserial,

	PRIMARY KEY(Author_ID, Book_ID),
	FOREIGN KEY (Book_ID) REFERENCES Book(Book_ID) ON DELETE CASCADE,
	FOREIGN KEY (Author_ID) REFERENCES Author(Author_ID) ON DELETE SET NULL
)