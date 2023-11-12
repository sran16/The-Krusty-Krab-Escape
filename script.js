import SceneHall from "./src/Scene/SceneHall.js";
import SceneKitchen from "./src/Scene/SceneKitchen.js";
import SceneFinale from "./src/Scene/SceneFinale.js";
// Configuration object for the Phaser game

const config = {
  type: Phaser.AUTO,
  width: window.innerWidth,
  height: window.innerHeight,
  backgroundColor: "#4488aa",
  scene: [SceneHall, SceneKitchen, SceneFinale],
  // scene: SceneKitchen,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 300 },
    },
  },
};
// Create a new Phaser Game instance with the specified configuration
const game = new Phaser.Game(config);

console.log("bingbing");
