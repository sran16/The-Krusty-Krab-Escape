class SceneHall extends Phaser.Scene {
  
  preload() {
    new Preloader(this);
  }
   
    async create() {
      const SceneHall = this.add.image(720, 415, "background-scene-un"); 
      SceneHall.setScale(1.15);

      const obstacleHall = this.add.image(720, 415, "obstacle-scene-un"); 
      obstacleHall.setScale(0.2);
    }
}






  