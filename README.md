# VPN Server List Console Application

This console application is designed to interact with a VPN API, allowing users to download a list of VPN servers and select and download their desired server configuration in OVPN format. 

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository to your local machine using the following command:

```bash
git clone https://github.com/HeenLight/VPN_CLI.git
cd VPN_CLI
npm install
```
At file downloadConfig.js add your Username and Password for VPN API(Only basic auth), and URL where API located.

## Usage

1. Run the application using the following command:
```bash
node ./src/index.js
```
2. Use the navigation arrows to browse through the list of VPN servers.

3. Select the desired server by navigating to it and pressing the appropriate key.

4. The selected server's configuration file in OVPN format will be downloaded to your local machine.

## Features

- Fetch a list of VPN servers from the VPN API.
- Navigate through the list using arrow keys.
- Sort servers by country (Note: This feature may need further improvement).
- Download selected server configuration in OVPN format.

## Contributing

Contributions to this project are welcome. If you have any ideas for improvements or new features, feel free to submit a pull request.

1. Fork the project.
2. Create your feature branch (`git checkout -b feature/your-feature-name`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Open a pull request.