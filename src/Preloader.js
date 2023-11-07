class Preloader {
  constructor(scene) {
    scene.load.image("obstacle-scene-un", "assets/obstacle-scene-un.png");
    scene.load.spritesheet("plankton", "assets/plankton.png", {
      frameWidth: 32,
      frameHeight: 32,
    });

  }
}
