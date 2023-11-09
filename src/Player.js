class Player extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, "plankton");

    // Configure the properties of the sprite.
    this.setSize(32, 32);
    this.setBounce(0.2);
    this.setGravityY(300);

    // Add the sprite to the scene.
    scene.add.existing(this);

    // Create an animation named "run".
    this.scene.anims.create({
      key: "run",
      frames: this.scene.anims.generateFrameNumbers("plankton", {
        start: 0,
        end: 3,
      }),
      frameRate: 10,
      repeat: -1, // -1 means it will loop forever
    });
  }

  update() {
    // Move the sprite based on its inputs.
    if (this.scene.input.keyboard.isDown("up")) {
      this.body.velocity.y = -500;
    } else if (this.scene.input.keyboard.isDown("down")) {
      this.body.velocity.y = 500;
    }

    // Check if the sprite is in collision with an obstacle.
    if (this.collidesWith(this.scene.obstacles)) {
      this.body.velocity.y = 0;
    }

    // Play the animation "run".
    this.play("run");
  }
}
