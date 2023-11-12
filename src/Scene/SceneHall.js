export default class SceneHall extends Phaser.Scene {
  sceneSprite;
  imgobs;
  sceneObs;
  scoreText;
  score = 0;
  cursors;
  platforms;
  burgers;
  player;
  obstacleHall;
  messageWin;
  isCollided = false;
  obstacleHallTween;
  obstacleHallSpeed = 100;
  isPlayerDead = false;

  preload() {
    // Function to fetch scene data by ID
    function getSceneById(Id) {
      let url = "getSceneId.php?id=" + Id;
      fetch(url, { method: "GET" })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Something went wrong!");
          }

          let parsedResponse = response.json();
          return parsedResponse;
        })
        .then((data) => {
          console.log(data);
          sceneSprite = data;
          sceneObs = data;
          return data;
        })
        .catch((error) => {});
    }
    // Function to fetch obstacle data by ID
    function getObstaclesById(Id) {
      let url = "getObstacles.php?id=" + Id;
      fetch(url, { method: "GET" })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Something went wrong!");
          }

          let parsedResponse = response.json();
          return parsedResponse;
        })
        .then((data) => {
          console.log(data);
          imgobs = data;
          data = data;
          return data;
        })
        .catch((error) => {});
    }
    // Fetch scene and obstacle data by IDs
    getSceneById(1);
    getObstaclesById(1);
    // Load assets using the Preloader class
    new Preloader(this);
  }

  async create() {
    // Create the background image
    const background = this.add.image(780, 400, "background-scene-un");
    background.setScale(1);

    // add obstacleHall

    this.obstacleHall = this.add.image(800, 600, "obstacle-scene-un");
    this.obstacleHall.setScale(0.29);
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

    this.physics.add.existing(this.player);
    this.physics.add.existing(this.obstacleHall);

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
      setXY: { x: 320, y: 0, stepX: 310 },
    });

    this.burgers.children.iterate((child) => {
      child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
    });
    // add score text

    this.scoreText = this.add.text(16, 16, "Burger: 0", {
      fontSize: "32px",
      fill: "white",
    });
    this.messageWin = this.add.text(200, 400, "", {
      fontSize: "100px",
      fill: "white",
    });
    // Set up physics collisions and overlaps
    this.physics.add.collider(this.player, this.platforms);
    this.physics.add.collider(this.burgers, this.platforms);
    this.physics.add.collider(this.obstacleHall, this.platforms);

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
    // obstacleHall mouvement
    this.obstacleHallTween = this.tweens.add({
      targets: this.obstacleHall,
      y: 500,
      ease: "Linear",
      duration: 1000,
      yoyo: true,
      repeat: -1,
    });
    this.physics.add.collider(
      this.player,
      this.obstacleHall,
      this.playerHitobstacleHall,
      null,
      this
    );
  }
  update() {
    // Update player movement based on cursor input
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
    // Check for player jump input
    if (this.cursors.up.isDown && this.player.body.touching.down) {
      this.player.setVelocityY(-390);
    }
  }
  // Function to handle player collision with obstacleHall
  playerHitobstacleHall() {
    !this.isPlayerDead;
    this.isPlayerDead = true;
    this.player.setTint(0xff0000);
    this.physics.pause();
    this.time.delayedCall(100, () => {
      this.score = 0;
      this.scene.restart();
    });
  }
  // Check if the player has enough score to proceed to the next scene
  collectBurgers(player, burgers) {
    burgers.disableBody(true, true);
    this.score += 10;
    this.scoreText.setText(`Burger: ${this.score}`);

    if (this.score >= 40) {
      this.time.delayedCall(800, () => {
        this.scene.start("SceneKitchen");
      });
    }
  }
}
console.log("  mamp ");
