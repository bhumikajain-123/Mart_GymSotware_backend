const postgres = require("postgres");

const dbConnection = async () => {
    try {
        const sql = postgres(process.env.DATABASE_URL);

        await sql`SELECT 1`;

        console.log("Database connected successfully");

        return sql;
    } catch (error) {
        console.log("Database connection failed:", error.message);
    }
};

module.exports = dbConnection;