class Preloader {
  constructor(scene) {
    // home page + button start
    scene.load.image("button-start", "assets/button-start.png");

    scene.load.image("scene-start", "assets/scene-start.png");

    // all obstacle
    scene.load.image("obstacle-scene-un", "assets/hall/obstacle-scene-un.png");
    scene.load.image("obstacle-scene-deux", "assets/kitchen/obstacle-scene-deux.png");

    // all scenes
    scene.load.image("background-scene-un", "assets/hall/background-scene-un.png");
    scene.load.image("background-scene-deux", "assets/kitchen/background-scene-deux.png");
    scene.load.image("background-scene-finale", "assets/finale/scene-finale.png"); 
    
  //  introduction
  scene.load.image("start-text", "assets/start-text.png");

  // end text
  scene.load.image("end-text", "assets/finale/end-text.png");

  }
}
