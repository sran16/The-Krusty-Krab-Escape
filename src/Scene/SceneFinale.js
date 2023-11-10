export default class SceneFinale extends Phaser.Scene {
  constructor() {
    super({ key: "SceneFinale" });
  }
  preload() {
    new Preloader(this);
  }

  async create() {
    const SceneFinale = this.add.image(760, 415, "background-scene-finale");
    SceneFinale.setScale(1.2);

    const endText = this.add.image(720, 415, "end-text");
    endText.setScale(1.2);
  }
}
