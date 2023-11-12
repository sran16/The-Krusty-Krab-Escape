class Preloader {
  constructor(scene) {
    scene.load.image("scene-start", "assets/scene-start.png");

    // all obstacle
    scene.load.image("obstacle-scene-un", "assets/hall/obstacle-scene-un.png");
    scene.load.image(
      "obstacle-scene-deux",
      "assets/kitchen/obstacle-scene-deux.png"
    );

    // all scenes
    scene.load.image("background-scene-un", "assets/hall/hall.png");
    scene.load.image(
      "background-scene-deux",
      "assets/kitchen/background-scene-deux.png"
    );
    scene.load.image("background-scene-finale", "assets/finale/finale.png");

    //  introduction
    scene.load.image("start-text", "assets/start-text.png");

    // end text

    scene.load.image("end-text", "assets/finale/end-text.png");
    //Player
    scene.load.spritesheet("plankton", "assets/player/plancton.png", {
      frameWidth: 67,
      frameHeight: 130,
    });
    // crushed
    scene.load.image(
      "character_collision",
      "assets/kitchen/crushed-plankton.png"
    );
    // plankton finale
    scene.load.image("plankton-f", "assets/finale/plankton-final.png");

    // Platforms
    scene.load.image("ground", "assets/platform.png");
    // Burger
    scene.load.image("burgers", "assets/burgers.png");
  }
}
