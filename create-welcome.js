const fs = require("fs");

fs.writeFile("welcome.txt", "Hello Node", (error) => {
  if (error) {
    console.error(error);
    return;
  }

  console.log("welcome.txt created");
});
