export default class SceneHall extends Phaser.Scene {
  scoreText;
  score = 0;
  cursors;
  platforms;
  burgers;
  player;
  obstacle;
  messageWin;
  isCollided = false;
  preload() {
    new Preloader(this);
  }

  async create() {
    // const delayInMilliseconds = 60000;
    const SceneHall = this.add.image(720, 415, "background-scene-un");
    SceneHall.setScale(1.3);

    const obstacleHall = this.add.image(920, 615, "obstacle-scene-un");
    obstacleHall.setScale(0.4);
    // add platforms
    this.platforms = this.physics.add.staticGroup();

    this.platforms.create(400, 720, "ground");
    this.platforms.create(100, 720, "ground");
    this.platforms.create(1100, 720, "ground");
    // add player
    this.player = this.physics.add.sprite(100, 450, "plankton");
    this.player.setScale(-1, 1);
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

    // add burgers
    this.burgers = this.physics.add.group({
      key: "burgers",
      repeat: 3,
      setXY: { x: 300, y: 0, stepX: 200 },
    });

    this.burgers.children.iterate((child) => {
      child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
    });
    // add score text

    this.scoreText = this.add.text(16, 16, "Burger: 0", {
      fontSize: "32px",
      fill: "#000",
    });
    this.messageWin = this.add.text(200, 400, "", {
      fontSize: "100px",
      fill: "#000",
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
    this.platforms.children.iterate((platform) => {
      platform.alpha = 0;
    });
    // const timerEvent = this.time.addEvent({
    //   delay: delayInMilliseconds,
    //   callback: this.delayedAction,
    //   callbackScope: this,
    //   loop: false,
    // });
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
    // if (this.score >= 40) {
    //   this.messageWin.setText(`Scene 2 `);
    //   // this.delayedAction();
    //   this.scene.start("SceneKitchen");
    // }
    if (this.score >= 40)
      this.time.delayedCall(1500, () => {
        this.scoreText.setText(`Burger: ${this.score}`);
        this.scene.start("SceneKitchen");
      });
  }

  collectBurgers(player, burgers) {
    burgers.disableBody(true, true);
    this.score += 10;
    this.scoreText.setText(`Burger: ${this.score}`);
    console.log("SaaS");
  }
  // delayedAction() {
  //   // This function will be called after the delay
  //   console.log("Delayed action executed!");
  // }
}
function handleCollision() {
  isCollided = true;
  player.setTexture("character_collision");
}
