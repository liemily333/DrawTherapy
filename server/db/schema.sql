USE scoreTracker;

CREATE TABLE user
(
    ID INT NOT NULL
    AUTO_INCREMENT,
username VARCHAR
    (100) NOT NULL,
password VARCHAR
    (100) NOT NULL,
PRIMARY KEY
    (ID)
);


    SELECT *
    FROM user;

    CREATE TABLE game
    (
        ID INT NOT NULL
        AUTO_INCREMENT,
name VARCHAR
        (100) NOT NULL,
userID INT NOT NULL,
PRIMARY KEY
        (ID),
FOREIGN KEY
        (userID)REFERENCES user
        (ID)
);

        SELECT *
        FROM game;