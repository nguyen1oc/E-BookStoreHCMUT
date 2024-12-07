CREATE OR REPLACE FUNCTION update_total_books()
	RETURNS TRIGGER
	LANGUAGE PLPGSQL
AS
$$
BEGIN
	UPDATE author
    SET Number_of_books = Number_of_books + 1
    WHERE Author_ID = NEW.Author_ID;
	RETURN NEW;
END;
$$;

CREATE TRIGGER increment_author_book_count
AFTER INSERT ON writes
FOR EACH ROW
EXECUTE FUNCTION update_total_books();

CREATE OR REPLACE FUNCTION update_money_order()
	RETURNS TRIGGER
	LANGUAGE PLPGSQL
AS
$$
DECLARE
   sum_money NUMERIC(15,3);
BEGIN	
	sum_money = NEW.Quantity * ((1 - NEW.Discount )
				* (SELECT Price FROM Book  WHERE Book_ID = NEW.Book_ID));

	UPDATE orders
		SET Total_money = Total_money + sum_money
		WHERE NEW.Order_ID = Order_ID;

	UPDATE customer
		SET Money_spent = Money_spent + sum_money
		WHERE Customer_ID = (SELECT Customer_ID FROM orders 
							WHERE NEW.Order_ID = Order_ID);
	RETURN NEW;
END;
$$;

CREATE TRIGGER update_order_total_money
AFTER INSERT ON order_item
FOR EACH ROW
EXECUTE FUNCTION update_money_order();