import axios from "axios";
import fs from "fs";

const username = "";
const password = "";

function downloadConfig(id) {
  const credentials = btoa(`${username}:${password}`);
  const headers = {
    Authorization: `Basic ${credentials}`,
  };
  const url = ``;
  axios
    .get(url, { headers }) // <-- pass headers here
    .then((response) => {
      //console.log(JSON.stringify(response.data, null, 2));
      const configValues = response.data.config;
      const name = response.data.name;
      //console.log(configValues);
      const parsedConfigValue = configValues.replace(/\\/g, "\n").replace(/"/g, "");
      //console.log(parsedConfigValue);
      fs.writeFileSync(`./${name}.ovpn`, parsedConfigValue, "utf8").then((name) => {
        console.log(`Config file saved`);
      });
    })
    .catch((error) => {
      console.error(JSON.stringify(error, null, 2));
    });
}

export default downloadConfig;
