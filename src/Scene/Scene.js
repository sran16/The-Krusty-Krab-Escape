class Scene extends Phaser.Scene {
  constructor() {
    super();
    this.planktonSprite = null;
  }

  preload() {
    this.load.image("obstacle-scene-un", "assets/obstacle-scene-un.png");
    // Load the image for the plankton sprite.
    this.load.image("plankton", "assets/plankton.png");
  }

  async create() {
    // Create the plankton sprite.
    this.planktonSprite = this.add.sprite(100, 100, "plankton");

    // Configure the properties of the plankton sprite.
    this.planktonSprite.setSize(32, 32);
    this.planktonSprite.setBounce(0.2);
    this.planktonSprite.setGravityY(300);

    // Create an animation named "run" for the plankton sprite.
    this.anims.create({
      key: "run",
      frames: this.anims.generateFrameNumbers("plankton", { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1, // -1 means it will loop forever
    });

    // Play the "run" animation for the plankton sprite.
    this.planktonSprite.play("run");
  }
}
