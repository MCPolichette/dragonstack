const pool = require('../../databasePool.js');

class GenerationTable {
    static storeGeneration(generation) {
        return new Promise((resolve, reject) => {
            pool.query(
                'INSERT INTO generation(expiration) VALUES($1) RETURNING id'
                [generation.expiration],
                (error, response) => {
                    if (error) return console.error(error);

                    const generationID = response.rows[0].id;

                    resolve({ genreationid });

                }
            );
        });
    }
}

module.exports = GenerationTable;