let sceneSprite;
let globalData;
// sceneObs = "";

function getSceneById(id) {
  return new Promise((resolve, reject) => {
    fetch("getSceneId.php?id=" + id)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        globalData = data;
        console.log(globalData);
        sceneSprite = globalData;

        resolve(data);
      })
      .catch((error) => {
        console.log("There has been a problem:", error);
        reject(error);
      });
  });
}

getSceneById(1);

class Scene extends Phaser.Scene {
  // sceneSprite = "";
  // sceneObs = "";
  scoreText;
  score = 0;
  cursors;
  platforms;
  burgers;
  player;
  obstacle;
  isCollided = false;

  preload() {
    // getSceneById();

    // new Preloader(this);
    console.log(sceneSprite);
    this.load.image("start", "assets/interior-2.png");
    this.load.image(
      "character_collision",
      "assets/kitchen/crushed-plankton.png"
    );
    this.load.image("ground", "assets/" + sceneSprite);
    this.load.image("ground", "assets/platform.png");
    this.load.image("obstacle", "assets/hall/obstacle-scene-un.png");
    this.load.image("burgers", "assets/burgers.png");
    this.load.spritesheet("plankton", "assets/player/plancton.png", {
      frameWidth: 67,
      frameHeight: 130,
    });
  }

  create() {
    console.log(this.sceneSprite);
    // // const background = this.add.image(640, 420, sceneSprite);
    // background.setScale(0.7);

    this.platforms = this.physics.add.staticGroup();

    this.platforms.create(400, 700, "ground");
    this.platforms.create(100, 700, "ground");
    this.platforms.create(1100, 700, "ground");

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

    this.burgers = this.physics.add.group({
      key: "burgers",
      repeat: 6,
      setXY: { x: 300, y: 0, stepX: 200 },
    });

    this.burgers.children.iterate((child) => {
      child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
    });

    this.scoreText = this.add.text(16, 16, "Burger: 0", {
      fontSize: "32px",
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
  }

  update() {
    console.log(sceneSprite);

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
    this.score += 10;
    this.scoreText.setText(`Score: ${this.score}`);
  }
}
