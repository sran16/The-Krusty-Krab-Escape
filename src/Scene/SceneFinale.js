// Define a Phaser Scene named "SceneFinale"

class SceneFinale extends Phaser.Scene {
  
  preload() {
    new Preloader(this);
  }
   
    async create() {

      // images for the finale scene
      const SceneFinale = this.add.image(760, 415, "background-scene-finale"); 
      SceneFinale.setScale(1.20);


      const endText = this.add.image(1150, 600, "end-text"); 
      endText.setScale(1.1);
      endText.setAlpha(0);


      const planktonEnd = this.add.image(870, 650, "plankton-final");
      planktonEnd.setScale(0.2); 
      planktonEnd.setAlpha(0);

      // animation for the end message and plankton 


      this.tweens.add({
        targets: endText,
        alpha: 1, 
        ease: 'Linear',   
        duration: 1000,    
    });

    this.tweens.add({
      targets: planktonEnd,
      alpha: 1, 
      ease: 'Linear',   
      duration: 1000,    
  });

    }

}
