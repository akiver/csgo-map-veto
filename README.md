# CSGO Map Veto

Desktop and WEB application to do maps veto for the game Counter-Strike Global Offensive.

![Preview](https://raw.githubusercontent.com/akiver/csgo-map-veto/master/preview.jpg)

## Installation

You can use the web version [here](https://csgomapveto.csgo-demo-manager.com) or download the last desktop version [here](https://github.com/akiver/csgo-map-veto/releases).

### Database

Since the version 2.0.0, an optional database service (MySQL) is available to persist your vetos.

Assuming you have a working MySQL server, if you want to use it you have few steps to do:

1. Download the binary file called `backend` for your OS from [GitHub](https://github.com/akiver/csgo-map-veto/releases)
2. Create a file called `.env` next to the `backend` file and copy paste the content of [.env.example](https://raw.githubusercontent.com/akiver/csgo-map-veto/master/.env.example) into it
3. Edit the `.env` file and adjust the values if necessary
4. Create a database, by default the name is `csgomapveto`, you can change it from the `.env` file
5. Execute the `backend` file, the database should be running now
6. Launch the application, go to the settings and fill the `API address` field (example `http://localhost:3080` by default)

## Development

### Application

1. `yarn`
2. `yarn dev` for WEB version, `yarn dev:electron` for Electron version

### Database

You have to install [go](https://golang.org/) to run the database during development.

1. `cp backend/.env.example backend/.env`
2. Edit the `.env` file and set `DISABLE_CORS` and `DEBUG` to `true`, you can also adjust the other options if you want
3. `yarn db` to build and start the database with auto reload

### Production build

### Application

To build the WEB version  
`yarn build:web`

To build the desktop application for your current OS  
`yarn build`

To build the desktop application for all platforms (tested on MAC OS only)  
`yarn build:all`

Dist files are located in the `dist` folder.

### Database

`yarn build:db`

The binary file is located in `backend/backend[.exe]`.

## Tests

### Unit / integration tests

`yarn test`

### E2E tests

`yarn test:e2e` (headless mode)  
`yarn test:e2e:dev` (open Cypress to debug tests)

### Coverage report

`yarn test:coverage`

## License

[GPL v2](https://github.com/akiver/csgo-map-veto/blob/master/LICENSE.md)
