const config = {
  type: Phaser.AUTO,
  width: window.innerWidth,
  height: window.innerHeight,
  backgroundColor: "#4488aa",
  scene: Scene,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 300 },
    },
  },
};

// Create a new instance of Phaser
const game = new Phaser.Game(config);

 
