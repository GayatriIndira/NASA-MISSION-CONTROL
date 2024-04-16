const { getAllLaunches, addNewLaunch, existsLaunchWithId, abortLaunchById } = require('../../models/launches.models');

function httpGetAllLaunches(req, res) {
    const launches = getAllLaunches(); // Call the function to get the array of launches
    return res.status(200).json(launches); // Return the launches array as JSON
}

function httpAddNewLaunch(req, res) {
    const launch = req.body;
    if(!launch.mission || !launch.rocket || !launch.launchDate || !launch.target) {
        return res.status(400).json({
            error: 'Missing required launch property'
        });
    }
    launch.launchDate = new Date(launch.launchDate);
    if(isNaN(launch.launchDate)) {
        return res.status(400).json({
            error: 'Invalid Launch Date',
        })
    }
    addNewLaunch(launch);
    return resp.status(201).json(launch);
}

function httpAbortLaunch(req, res) {
    const launchId = Number(req.params.id);

    if(!existsLaunchWithId(launchId)) {
        return res.status(404).json({
            error: 'Launch not found',
        });
    }
    
    const aborted = abortLaunchById(launchId);
    return res.status(200).json(aborted);
}
module.exports = {
    httpAddNewLaunch,
    httpGetAllLaunches,
    httpAbortLaunch,
};
