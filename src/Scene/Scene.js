class Scene extends Phaser.Scene {
  
  preload() {
    new Preloader(this);
    
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
  

   