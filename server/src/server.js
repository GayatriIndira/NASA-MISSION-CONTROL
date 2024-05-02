const http = require('http');
const dotenv = require('dotenv');
const app = require('./app');
const { mongoConnect } = require('./services/mongo');
const { loadPlanetsData } = require('./models/planets.model');
const { loadLaunchData } = require('./models/launches.models');

dotenv.config();

const PORT = process.env.PORT || 5000;

const server = http.createServer(app);

async function startServer() {
    try {
        await mongoConnect();
        await loadPlanetsData();
        await loadLaunchData();

        server.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error('Error starting server:', error);
        process.exit(1); // Exit the process with a non-zero code to indicate failure
    }
}

startServer();
