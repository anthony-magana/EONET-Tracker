# EONET-Tracker 🔥⛈🌋

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
![Issues](https://img.shields.io/github/issues/anthony-magana/EONET-Tracker)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/anthony-magana/EONET-Tracker.svg)](https://github.com/anthony-magana/EONET-Tracker/pulls)

[Website](https://eonet-tracker.netlify.app/)

Single Page Application that utilizes NASA's EONET api for data on current live natural events happening around the world while also implementing the Google Maps api allowing user interaction with NASA's EONET data, like its geographic location of each natural event as well as information about the event. This project also utilizes iconify for the icons of each event displayed on the map.

## Features

Allows user interaction with google maps.

Displays markers that are either fires, volcanoes, or storms around the world to the exact position where the natural event is taking place.

Markers are clickable which displays an info box about the natural event such as the ID, Title, Category, and Date.

Info box closes when you click outside if the info box area.

## Installation

1. Clone repository
2. cd to project directory.
3. Run `npm install` to install project dependencies.
4. Run `npm start` to run the app in development mode.\
   Open [http://localhost:3000](http://localhost:3000) to view it in the browser.\
   The page will reload if you make edits.\
   You will also see any lint errors in the console.

### In the project directory, you can also run:

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
