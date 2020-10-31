# Nakama Web Server

## Available Scripts

### `npm run dev` (preferred)

Starts the server situated `/dist/index.js` in development mode.

Runs with nodemon, so any change made in source files causes the server to restart.

Open [http://localhost:5000](http://localhost:5000) to view it in the browser.

### `npm start`

You can also start the server with this command. But it does not restart when source files are changed.

### `npm run watch`

Asks typescript to watch any `.ts` file changes and compiles it in javascript in `/dist` directory.

Then the server can be started using one of the above two commands.

## Recommended developer steps to start server  

1. `npm run watch`

2. `npm run dev`
