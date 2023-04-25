import axios from "axios";
import inquirer from "inquirer";
import displayMenu from "../index.js";
import downloadConfig from "./downloadConfig.js";

const username = "rich";
const password = "richpassword";

const credentials = btoa(`${username}:${password}`);
const headers = {
  Authorization: `Basic ${credentials}`,
};
function getServers() {
  axios
    .get("https://richvpn.overdb.fun/api/servers/", { headers })
    .then((response) => {
      const data = response.data;

      // Create arrays for each country
      const countries = [
        ...new Set(
          data.map((item) => {
            // Get the country name before any '-' or ',' characters
            const name = item.name.split(/[,-]/)[0].replace(/#?\d+/, "").trim();
            return name;
          })
        ),
      ];
      countries.sort();
      const countryArrays = {};
      countries.forEach((country) => (countryArrays[country] = []));

      // Filter servers to their respective country arrays
      data.forEach((server) => {
        // Get the country name before any '-' or ',' characters
        const name = server.name.split(/[,-]/)[0].replace(/#?\d+/, "").trim();
        countryArrays[name].push(server);
      });
      /*DEBUG
      // Display the array names and their lengths
      Object.keys(countryArrays).forEach((country) => {
        console.log(`${country}: ${countryArrays[country].length}`);
      });*/

      const choices = countries.concat(["Exit"]); // Add Exit option
      inquirer
        .prompt([
          {
            type: "list",
            name: "country",
            message: "Select a country to view its servers:",
            choices,
          },
        ])
        .then((answers) => {
          if (answers.country === "Exit") {
            displayMenu(); // Go back to Display Menu
          } else {
            console.log(`Servers in ${answers.country}:`);
            countryList(countryArrays[answers.country]);
            //getServers(); // Display servers again
          }
        });
    })
    .catch((error) => {
      console.error(error);
    });
}
function DisplayServers() {
  console.log("Fetching server data...");

  try {
    getServers();
  } catch (error) {
    console.log(error);
  }
}

function countryList(servers) {
  inquirer
    .prompt([
      {
        type: "list",
        name: "server",
        message: "Select a server:",
        choices: servers.map((server) => server.name),
      },
    ])
    .then((answers) => {
      const selectedServer = servers.find(
        (server) => server.name === answers.server
      );
      console.log(
        `Downloading data for server ${selectedServer.name} (id: ${selectedServer.id})...`
      );
      downloadConfig(selectedServer.id);
    });
}

//DisplayServers();
export default DisplayServers;
