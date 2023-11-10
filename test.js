// Importez vos scènes
import SceneHome from './src/Scene/SceneHome'; // Assurez-vous que le nom du fichier est correct
import Scene from './src/Scene/Scene'; // Assurez-vous que le nom du fichier est correct

const config = {
  type: Phaser.AUTO,
  width: innerWidth,
  height: innerHeight,
  scene: {
    home: SceneHome, // Donnez une clé unique "start" à votre scène d'accueil
    scene: Scene, // Donnez une clé unique "game" à votre scène de jeu
  }
};

const game = new Phaser.Game(config);
