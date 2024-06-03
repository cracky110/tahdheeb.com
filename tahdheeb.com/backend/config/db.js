const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',          // Dein PostgreSQL-Benutzername
    host: 'localhost',         // Hostname (meistens localhost)
    database: 'tahdheeb',      // Name der Datenbank, die du erstellt hast
    password: 'Jaafar123',  // Dein PostgreSQL-Passwort
    port: 5432,                // Standardport für PostgreSQL
});
module.exports = pool;
