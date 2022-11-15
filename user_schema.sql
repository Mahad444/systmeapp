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