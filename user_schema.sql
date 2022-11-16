--this is my suser schema table in the XAMMP in Mysql usermanagement Db


CREATE TABLE Users (
    id int NOT null AUTO_INCREMENT,
    FirstName Varchar (45) Not Null,
    LastName varchar(45) not null,
    email varchar (45) not null,
    phone varchar (45) not null,
    comments text not null,
    status varchar(10) DEFAULT 'active',
    
    PRIMARY KEY (id)
    );
-- Inserting the Values

    INSERT INTO `users`( `FirstName`, `LastName`, `email`, `phone`, `comments`, `status`) VALUES ('Mohamed','Ahmad','mohamed@gmail.com','07432978675','Hey this is A comment from Mohaa','active');


/*code: 'ER_ACCESS_DENIED_ERROR',
  errno: 1045,
  sqlMessage: "Access denied for user 'root'@'localhost' (using password: YES)",
  sqlState: '28000',
  fatal: true */ 

    --create  new user in your XAMMP or mySQL if the code above is excecuted in your code
    
    CREATE USER 'user'@'localhost' IDENTIFIED VIA mysql_native_password USING '***';GRANT ALL PRIVILEGES ON *.* TO 'user'@'localhost' REQUIRE NONE WITH GRANT OPTION MAX_QUERIES_PER_HOUR 0 MAX_CONNECTIONS_PER_HOUR 0 MAX_UPDATES_PER_HOUR 0 MAX_USER_CONNECTIONS 0;

    -- Granting Permissions to the created user in the Database
    GRANT SELECT, INSERT, UPDATE, DELETE, CREATE, DROP, REFERENCES, INDEX, ALTER, CREATE VIEW, TRIGGER, SHOW VIEW ON `usermanagement`.`users` TO 'user'@'localhost' WITH GRANT OPTIO

    -- The Data We have in The Db
    INSERT INTO `users`(`FirstName`, `LastName`, `email`, `phone`, `comments`, `status`) VALUES ('Alfred','kinywa','kinywamalfredb@hotmail.com','05689352655','i hope this gonna change the world today','active');
INSERT INTO `users`(`FirstName`, `LastName`, `email`, `phone`, `comments`, `status`) VALUES ('Joice','waweru','wawerujoiceb@imail.com','07674352667','changing the world is optional','active');
INSERT INTO `users`(`FirstName`, `LastName`, `email`, `phone`, `comments`, `status`) VALUES ('jeff','musyokaa','musyokaaJeffb@hotmail.com','05674352643','Hello World','active');
INSERT INTO `users`(`FirstName`, `LastName`, `email`, `phone`, `comments`, `status`) VALUES ('Arafat','Said','saidarafat@hotmail.com','056744456434','The Product Was Awesome','active');
INSERT INTO `users`(`FirstName`, `LastName`, `email`, `phone`, `comments`, `status`) VALUES ('ibrahim','Musa','musaIbrahim@gmail.com','07342674352','i hope this gonna change the world','active');
INSERT INTO `users`(`FirstName`, `LastName`, `email`, `phone`, `comments`, `status`) VALUES ('Qauthar','Abdi','arabqauthar@hotmail.com','o976543212','Hello World','active');
INSERT INTO `users`(`FirstName`, `LastName`, `email`, `phone`, `comments`, `status`) VALUES ('Mary','Ouma','oumamary@icloud.com','05674352612','Delivered Services are Great','active')

-- Updating a value in the db
UPDATE `users` SET `status` = 'removed' WHERE `users`.`id` = 1;