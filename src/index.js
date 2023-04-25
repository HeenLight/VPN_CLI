import inquirer from "inquirer";
import DisplayServers from "./components/serverlist.js";

function displayMenu() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "menu",
        message: "Select an option:",
        choices: ["Server List", "Exit"],
      },
    ])
    .then((answers) => {
      if (answers.menu === "Exit") {
        console.log("Exiting program...");
        return;
      }

      console.log(`You chose ${answers.menu}\n`);

      if (answers.menu === "Server List") {
        DisplayServers();
      } else {
        displayMenu();
      }
    });
}

displayMenu();
export default displayMenu;