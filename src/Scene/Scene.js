class Scene extends Phaser.Scene {
// class Scene extends Phaser.Scene {
//   preload() {
//     this.load.spritesheet("plankton", "assets/Plancton.png", {
//       frameWidth: 66,
//       frameHeight: 130,
//     });

  preload() {
    new Preloader(this);
//     this.load.image("start", "assets/start.png");
//     this.load.image("ground", "assets/plateformsaut.png");
//     this.load.image("burger", "assets/burger.png");
//   }

  }
   
    async create() {
      const background = this.add.image(640, 420, "scene-start"); 
      background.setScale(0.7);
  
       
    // const button = this.add.image(640, 420, "button-start");
    //  button.setScale(0.5);
  
      
  
      const startText = this.add.image(640, 360, "start-text");
      startText.setScale(0.7);
      startText.setOrigin(0.4);
      startText.alpha = 0;
  
      // Animation text start
      this.tweens.add({
        targets: startText,
        alpha: 1,
        duration: 2000,
        ease: "Linear",
        // onComplete: () => {
        //   this.scene.start('SceneFinale');  
        // }
      });  
    }
  }
  
//   create() {
//     const background = this.add.image(640, 420, "start");
//     background.setScale(0.7);

//     // Animation set
//     // this.anims.create({
//     //   key: "walk",
//     //   frames: this.anims.generateFrameNumbers("plankton", {
//     //     start: 1,
//     //     end: 9,
//     //   }),
//     //   frameRate: 35,
//     //   repeat: -1,
//     // });

//     // Créer le sprite du personnage
//     // const cody = this.add.sprite(600, 370, "plankton", 0);

//     // cody.play("walk");

   
//     // Gestion des touches
//     this.input.keyboard.on("keydown", (event) => {
//       if (event.keyCode === Phaser.Input.Keyboard.SPACE) {
//         // Le sprite saute
//         cody.setVelocityY(-300);
//       }
//     });
//     groupe_plateformes = this.physics.add.staticGroup();
//     groupe_plateformes.create(200, 584, "ground");
//     groupe_plateformes.create(600, 584, "ground");

//     player = this.physics.add.sprite(100, 450, "plankton");
//     player.setCollideWorldBounds(true);
//     this.physics.add.collider(player, groupe_plateformes);
//     player.setBounce(0.2);
//     this.anims.create({
//       key: "left",
//       frames: this.anims.generateFrameNumbers("plankton", { start: 9, end: 0 }),
//       frameRate: 15,
//       repeat: -1,
//     });

//     this.anims.create({
//       key: "turn",
//       frames: [{ key: "plankton", frame: 10 }],
//       frameRate: 20,
//     });

//     this.anims.create({
//       key: "right",
//       frames: this.anims.generateFrameNumbers("plankton", {
//         start: 11,
//         end: 19,
//       }),
//       frameRate: 10,
//       repeat: -1,
//     });

//     clavier = this.input.keyboard.createCursorKeys();
//   }

//   update() {
//     if (clavier.right.isDown) {
//       player.setVelocityX(160);
//     } else if (clavier.left.isDown) {
//       player.setVelocityX(-160);
//     } else {
//       player.setVelocityX(0);
//     }

//     if (clavier.up.isDown && player.body.touching.down) {
//       player.setVelocityY(-250);
//     }
//   }
// }

// var groupe_plateformes;
// var player;
// var clavier;
