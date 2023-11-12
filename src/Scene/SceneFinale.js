// Define a Phaser Scene named "SceneFinale"

export default class SceneFinale extends Phaser.Scene {
  constructor() {
    super({ key: "SceneFinale" });
  }

  preload() {
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
    getSceneById(3);
    new Preloader(this);
  }

  async create() {
    // images for the finale scene
    const SceneFinale = this.add.image(760, 350, "background-scene-finale");
    SceneFinale.setScale(1.2);

    const endText = this.add.image(1150, 550, "end-text");
    endText.setScale(1);
    endText.setAlpha(0);

    const planktonEnd = this.add.image(870, 550, "plankton-f");
    planktonEnd.setScale(0.2);
    planktonEnd.setAlpha(0.2);

    // animation for the end message and plankton

    this.tweens.add({
      targets: endText,
      alpha: 1,
      ease: "Linear",
      duration: 3050,
    });

    this.tweens.add({
      targets: planktonEnd,
      alpha: 1,
      ease: "Linear",
      duration: 500,
    });
  }
}
