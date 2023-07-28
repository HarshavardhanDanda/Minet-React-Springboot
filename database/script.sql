-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema BC88_minet
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema BC88_minet
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `BC88_minet` ;
USE `BC88_minet` ;


-- -----------------------------------------------------
-- Table `BC88_minet`.`crypto_currency`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `BC88_minet`.`crypto_currency` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL DEFAULT NULL,
  `symbol` VARCHAR(45) NULL DEFAULT NULL,
  `icon` VARCHAR(300) NULL DEFAULT NULL,
  `market_cap` VARCHAR(45) NULL DEFAULT NULL,
  `created` VARCHAR(45) NULL DEFAULT NULL,
  `price` DOUBLE NULL DEFAULT NULL,
  `price_at_1H` DOUBLE NULL DEFAULT NULL,
  `price_at_1D` DOUBLE NULL DEFAULT NULL,
  `price_at_1W` DOUBLE NULL DEFAULT NULL,
  `price_at_1M` DOUBLE NULL DEFAULT NULL,
  `total_supply` VARCHAR(45) NULL DEFAULT NULL,
  `circulating_supply` VARCHAR(45) NULL DEFAULT NULL,
  `price_change` DOUBLE NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `BC88_minet`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `BC88_minet`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = armscii8;


-- -----------------------------------------------------
-- Table `BC88_minet`.`wallet`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `BC88_minet`.`wallet` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL DEFAULT NULL,
  `balance` DOUBLE NULL DEFAULT NULL,
  `price_change` DOUBLE NULL DEFAULT NULL,
  `user_id` INT NOT NULL,
  `crypto_currency_id` INT NOT NULL,
  PRIMARY KEY (`id`, `user_id`),
  INDEX `fk_wallet_user1_idx` (`user_id` ASC) VISIBLE,
  INDEX `fk_wallet_crypto_currency1_idx` (`crypto_currency_id` ASC) VISIBLE,
  CONSTRAINT `fk_wallet_crypto_currency1`
    FOREIGN KEY (`crypto_currency_id`)
    REFERENCES `BC88_minet`.`crypto_currency` (`id`),
  CONSTRAINT `fk_wallet_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `BC88_minet`.`user` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `BC88_minet`.`transaction`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `BC88_minet`.`transaction` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `amount` DOUBLE NULL DEFAULT NULL,
  `transaction_type` VARCHAR(45) NULL DEFAULT NULL,
  `status` VARCHAR(45) NULL DEFAULT NULL,
  `transaction_fee` DOUBLE NULL DEFAULT NULL,
  `transaction_time` DATETIME NULL DEFAULT NULL,
  `quantity` DOUBLE NULL DEFAULT NULL,
  `user_id` INT NOT NULL,
  `crypto_currency_id` INT NOT NULL,
  `wallet_id` INT NOT NULL,
  PRIMARY KEY (`id`, `user_id`, `wallet_id`),
  INDEX `fk_transaction_user1_idx` (`user_id` ASC) VISIBLE,
  INDEX `fk_transaction_crypto_currency1_idx` (`crypto_currency_id` ASC) VISIBLE,
  INDEX `fk_transaction_wallet1_idx` (`wallet_id` ASC) VISIBLE,
  CONSTRAINT `fk_transaction_crypto_currency1`
    FOREIGN KEY (`crypto_currency_id`)
    REFERENCES `BC88_minet`.`crypto_currency` (`id`),
  CONSTRAINT `fk_transaction_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `BC88_minet`.`user` (`id`),
  CONSTRAINT `fk_transaction_wallet1`
    FOREIGN KEY (`wallet_id`)
    REFERENCES `BC88_minet`.`wallet` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

-- -----------------------------------------------------
-- Table `BC88_minet`.`watchlist`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `BC88_minet`.`watchlist` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `crypto_currency_id` INT NOT NULL,
  PRIMARY KEY (`id`, `user_id`),
  INDEX `fk_watchlist_user1_idx` (`user_id` ASC) VISIBLE,
  INDEX `fk_watchlist_crypto_currency1_idx` (`crypto_currency_id` ASC) VISIBLE,
  CONSTRAINT `fk_watchlist_crypto_currency1`
    FOREIGN KEY (`crypto_currency_id`)
    REFERENCES `BC88_minet`.`crypto_currency` (`id`),
  CONSTRAINT `fk_watchlist_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `BC88_minet`.`user` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;



-- Insert values into `user` table
INSERT INTO `BC88_minet`.`user` (name, email, password)
VALUES ('John doe', 'JhonDoe1996@gmail.com', 'Minet1@password.com'),
('Merry jane','MerryJane1996@gmail.com','Minet2@password.com');

-- Insert values into `crypto_currency` table
INSERT INTO `BC88_minet`.`crypto_currency` (name, symbol, icon, market_cap, created, price, price_at_1H, price_at_1D, price_at_1W, price_at_1M, total_supply, circulating_supply, price_change)
VALUES ('Bitcoin', 'BTC', 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579', '$54.6T', '2022-12-23', 345466.54, 345460.4, 345470.4, 345500.31, 345456.33, '$2.9T', '18.8M BTC', 1.6),
('Ethereum', 'ETH', 'https://w7.pngwing.com/pngs/268/1013/png-transparent-ethereum-eth-hd-logo-thumbnail.png', '$162.92B', '2022-12-23', 1297.93, 1290.0, 1299.99, 1300.9, 1296.55, '$11.5B', '122.60M ETH', -0.6),
('USD coin', 'USD', 'https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png?1547042389', '$1B', '2022-12-23', 1, 1, 1, 1, 1, '$11.5T', '11T USD', 2.6),
('XRP', 'XRP', 'https://cdn-icons-png.flaticon.com/128/6675/6675833.png', '$4.2', '2022-12-23', 24942.54, 23942.54, 2482.54, 24442.54, 23942.54, '$11.5T', '23.5T USD', -3.69),
('Polkadot', 'PKD', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeEq2ilWnFAsNgYntJ3U_0YA6HSEb6eTLgWOisSbAqSQ&s', '$3.4', '2022-12-23', 104.52, 106.87, 105.64, 98.67, 90.76, '$5.3T', '21.5T USD',-1.82),
('Cardano', 'ADA', 'https://seeklogo.com/images/C/cardano-ada-logo-4B6BADDB43-seeklogo.com.png', '$2.7', '2022-12-23', 57.21, 56.76, 55.87, 53.87, 51.89, '$4.2T', '53.2T USD', 1.11),
('Doge coin', 'DOGE', 'data:image/png;base64,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', '$2.3', '2022-12-23', 17.64, 18.3, 18.6, 19.6, 18.56, '$3.4T', '54.2T USD', 6.96),
('Tether', 'USDT', 'https://w7.pngwing.com/pngs/113/18/png-transparent-tether-hd-logo-thumbnail.png', '$25.4', '2022-12-23', 88.1, 87.9, 89.9, 87.9, 86.5, '$5.5T', '17.8T USD', -5.49),
('BNB', 'BNB', 'https://assets.coingecko.com/coins/images/825/small/bnb-icon2_2x.png?1644979850', '$25.4', '2022-12-23', 78.1, 79.9, 80.9, 81.9, 84.4, '$5.5T', '17.9T USD', -8.7);


-- Insert values into `wallet` table
INSERT INTO `BC88_minet`.`wallet` (name, balance,price_change, user_id, crypto_currency_id)
VALUES ('Bitcoin Wallet', 2.5429,2.6,1, 1),
('Ethereum Wallet', 23.5454,1.06,1, 2),
('USD Coin Wallet', 3500,0,1, 3),
('Bitcoin  Wallet', 1.5429,3,2, 1),
('Ethereum Wallet', 33.5454,3.4,2, 2),
('USD Coin Wallet', 25000,0,2, 3);




-- Insert values into `transaction` table
INSERT INTO `BC88_minet`.`transaction` (amount, transaction_type, status, transaction_fee, transaction_time, quantity, user_id, crypto_currency_id, wallet_id)
VALUES (3000, 'purchase', 'sucess', 1000, '2022-03-25 12:30:00', 0.0245, 1, 1, 1),
(2000, 'sell', 'sucess', 500, '2022-04-25 1:30:00', 1.45, 1, 2, 2),
(3000, 'purchase', 'pending', 900, '2022-03-25 12:50:00', 0.0245, 2, 6, 1),
(2000, 'purchase', 'pending', 800, '2022-03-25 11:30:00', 0.0276, 2, 3, 2),
(12000, 'sell', 'pending', 500, '2022-04-25 11:30:00', 1.45, 1, 4, 2),
(1000, 'sell', 'fail', 500, '2022-04-25 12:30:00', 1.45, 1, 5, 2);

-- Insert values into `watchlist` table
INSERT INTO `BC88_minet`.`watchlist` (user_id, crypto_currency_id)
VALUES (1, 1),
(1,2);




