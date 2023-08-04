# Sample TypeScript/ReactJS frontend and backend project
This sample project is to demonstrate both frontend and backend services that could also be leveraged as a simple mono-architecture or microservice architecture.

See demonstration at http://18.222.210.109:3000/

## Running
A simple `npm install` for both the backend and frontend projects and running `npm run dev` in two different servers.  Note that you will need an API key NASA at https://api.nasa.gov/.

## Backend project
For the backend we have a simple Express server and TypeScript type to surround a basic NASA APOD (picture of the day) to enforce data integrity as we expect an array of APODs to be returned to our frontend for displaying a table list of these results.

## Frontend project
For the frontend we use Redux with ReactJs.  You will be able to follow the crud that is inacted by our dispatch of actions to trigger our backend API call running on localhost:4000.  This will inturn execute our reducer to update and persist a new state from our array of APODs that was returned by the backend service.
