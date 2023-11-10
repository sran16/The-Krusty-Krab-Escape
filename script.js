import SceneHall from "./src/Scene/SceneHall.js";
import SceneKitchen from "./src/Scene/SceneKitchen.js";
import SceneFinale from "./src/Scene/SceneFinale.js";

const config = {
  type: Phaser.AUTO,
  width: window.innerWidth,
  height: window.innerHeight,
  backgroundColor: "#4488aa",
  scene: [SceneHall, SceneKitchen, SceneFinale],
  // scene: Scene,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 300 },
    },
  },
};

// Create a new instance of Phaser
const game = new Phaser.Game(config);

// function getSceneById(Id) {
//   let url = "getSceneId.php?id=" + Id;
//   fetch(url, { method: "GET" })
//     .then((response) => {
//       // Before parsing (i.e. decoding) the JSON data
//       if (!response.ok) {
//         // check for any errors.
//         // In case of an error, throw.
//         throw new Error("Something went wrong!");
//       }

//       let parsedResponse = response.json();
//       return parsedResponse; // Parse the JSON data.
//     })
//     .then((data) => {
//       // This is where you handle what to do with the response.
//       console.log(data);
//       return data;
//     })
//     .catch((error) => {
//       // This is where you handle errors.
//     });
// }

// getSceneById(1);
console.log("Parle moi");
