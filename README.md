# Planets
This is a web app that lets you interact with the Star Wars API for quick information in a beautiful table.

## Getting started
Please clone this repo and navigate to the project's root folder in your terminal.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io). Your Google Chrome browser should open automatically.

## Features
- Display the following planet categories: Name, Population, Diameter, Rotation Period, Orbital Period, Terrain, and Films.

- Paginate the API response, 10 planets at a time.

- Search entire API by planet name.

- All fields are ascending/descending-sortable (per page) by clicking on the column header, expect Terrain and Films.

## File tree structure
- Custom components --> src/app/components
- Custom interfaces --> src/app/interfaces
- Custom services --> src/app/services
- Root HTML --> src/app/app.component.html
