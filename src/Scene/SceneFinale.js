class SceneFinale extends Phaser.Scene {
  
    preload() {
      new Preloader(this);
    }
     
      async create() {
        const SceneFinale = this.add.image(760, 415, "background-scene-finale"); 
        SceneFinale.setScale(1.20);


        const endText = this.add.image(720, 415, "end-text"); 
        endText.setScale(1.2);
      }

      
}


