CREATE TABLE Stock (
    stock_id SERIAL PRIMARY KEY,
    symbol_ticker VARCHAR ( 50 ) UNIQUE NOT NULL,
    symbol_name VARCHAR ( 100 ) UNIQUE NOT NULL,
    symbol_exchange VARCHAR ( 50 ) NOT NULL,
    date_added TIMESTAMPTZ NOT NULL DEFAULT Now(),
    price_open INT NOT NULL,
    change INT NOT NULL,
    percent_change VARCHAR ( 100 ) NOT NULL,
    previous_close INT NOT NULL,
    fifty_two_week_low INT NOT NULL,
    fifty_two_week_high INT NOT NULL,
    fifty_two_week_range VARCHAR ( 100 ) NOT NULL,
    five_min_interval JSON NOT NULL
);


INSERT INTO Stock ( symbol_ticker, symbol_name, symbol_exchange, price_open, 
                    change, percent_change, previous_close, fifty_two_week_low, 
                    fifty_two_week_high, fifty_two_week_range, five_min_interval )
 VALUES( 'FB', 'META', 'NSDQ', 2456.43, 23.2, '-123.1', 1234.12, 1234.4, 1678.83,
                    '1341.31 - 3123.13', '{ "customer": "John Doe", 
                    "items": {"product": "Beer","qty": 6}}' );

INSERT INTO Stock ( symbol_ticker, symbol_name, symbol_exchange, price_open, 
                    change, percent_change, previous_close, fifty_two_week_low, 
                    fifty_two_week_high, fifty_two_week_range, five_min_interval )
 VALUES( 'APPL', 'Apple', 'NSDQ', 157.45, 23.2, '-123.1', 1234.12, 1234.4, 1678.83,
                    '1341.31 - 3123.13', '{ "customer": "John Doe", 
                    "items": {"product": "Beer","qty": 6}}' );