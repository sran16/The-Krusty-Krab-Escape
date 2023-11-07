class Scene extends Phaser.Scene {
  preload() {
    new Preloader(this);
    this.load.image("scene-start", "assets/start.png");
  }

  async create() {
    this.add.image(640, 360, "scene-start");
    this.add.image(400, 20, "obstacle-scene-un");
  }
}
