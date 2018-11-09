CREATE TABLE dragon
(
    id SERIAL PRIMARY KEY,
    birthdate TIMESTAMP NOT NULL,
    nickname VARCHAR(64),
    "generationId" INTEGER,
    FOREIGN KEY ("generationID") REFERENCES generation(id)
);