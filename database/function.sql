CREATE OR REPLACE FUNCTION add_review(
    p_order_id BIGINT,
    p_book_id BIGINT,
    p_review_description TEXT,
    p_stars INT
) 
	RETURNS VOID 
	LANGUAGE plpgsql
	AS 
$$
DECLARE
    v_review_id BIGINT;
    v_existing_review_id BIGINT;
BEGIN
    -- Check if the order_item already has a review_id
    SELECT Review_ID INTO v_existing_review_id
    FROM Order_item
    WHERE Order_ID = p_order_id AND Book_ID = p_book_id;

    -- If no review_id exists, proceed to add a review
    IF v_existing_review_id IS NULL THEN
        -- Generate a new Review_ID
        INSERT INTO Review (Review_description, Stars)
        VALUES (p_review_description, p_stars)
        RETURNING Review_ID INTO v_review_id;

        -- Update the Order_item with the new review_id
        UPDATE Order_item
        SET Review_ID = v_review_id
        WHERE Order_ID = p_order_id AND Book_ID = p_book_id;
    END IF;
END;
$$;
drop function add_review