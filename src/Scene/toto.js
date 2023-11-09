class Scene extends Phaser.Scene {
  cursors;
  platforms;
  burgers;
  player;

  preload() {
    this.load.image("start", "assets/start.png");
    this.load.image("ground", "assets/platform.png");
    this.load.image("burgers", "assets/burgers.png");
    this.load.spritesheet("plankton", "assets/plancton.png", {
      frameWidth: 67,
      frameHeight: 130,
    });
  }

  create() {
    const background = this.add.image(640, 420, "start");
    background.setScale(0.7);

    this.platforms = this.physics.add.staticGroup();

    this.platforms.create(400, 584, "ground");
    this.platforms.create(100, 584, "ground");
    this.platforms.create(1100, 584, "ground");

    this.player = this.physics.add.sprite(100, 450, "plankton");

    this.player.setBounce(0.2);
    this.player.setCollideWorldBounds(true);

    this.anims.create({
      key: "left",
      frames: this.anims.generateFrameNumbers("plankton", { start: 0, end: 3 }),
      frameRate: 20,
      repeat: -1,
    });

    this.anims.create({
      key: "turn",
      frames: [{ key: "plankton", frame: 4 }],
      frameRate: 20,
    });

    this.anims.create({
      key: "right",
      frames: this.anims.generateFrameNumbers("plankton", { start: 5, end: 8 }),
      frameRate: 20,
      repeat: -1,
    });

    this.cursors = this.input.keyboard.createCursorKeys();

    this.burgers = this.physics.add.group({
      key: "burgers",
      repeat: 11,
      setXY: { x: 12, y: 0, stepX: 70 },
    });

    this.burgers.children.iterate((child) => {
      child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
    });

    this.physics.add.collider(this.player, this.platforms);
    this.physics.add.collider(this.burgers, this.platforms);

    this.physics.add.overlap(
      this.player,
      this.burgers,
      this.collectBurgers,
      null,
      this
    );
  }

  update() {
    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-160);
      this.player.setScale(1, 1);
      this.player.anims.play("left", true);
    } else if (this.cursors.right.isDown) {
      this.player.setVelocityX(160);
      this.player.setScale(-1, 1);

      this.player.anims.play("right", true);
    } else {
      this.player.setVelocityX(0);

      this.player.anims.play("turn");
    }

    if (this.cursors.up.isDown && this.player.body.touching.down) {
      this.player.setVelocityY(-330);
    }
  }

  collectBurgers(player, burgers) {
    burgers.disableBody(true, true);
  }

  //   update() {
  //     if (this.cursors.left.isDown) {
  //       this.player.anims.play("left", true);
  //     } else if (this.cursors.right.isDown) {
  //       // Play the "turn" animation when changing direction to the right
  //       this.player.body.setVelocityX(160);

  //       if (this.player.body.velocity.x < 0) {
  //         this.player.anims.play("turn", true);
  //       } else {
  //         this.player.anims.setFrame("turn", 10);
  //         this.player.anims.play("right", true);
  //       }
  //     } else {
  //       this.player.body.setVelocityX(0);

  //       this.player.anims.play("turn", true);
  //     }

  //     if (this.cursors.up.isDown && this.player.body.touching.down) {
  //       this.player.body.setVelocityY(-330);
  //     }
  //   }
}
