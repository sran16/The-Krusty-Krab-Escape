class SceneKitchen extends Phaser.Scene {
  
    preload() {
      new Preloader(this);
      
    }
     
      async create() {
        const background = this.add.image(720, 400, "background-scene-deux"); 
        background.setScale(1.2);


        const obstacleSceneDeux = this.add.image(640, 600, "obstacle-scene-deux"); 
        obstacleSceneDeux.setScale(0.2);


        
      }
    }