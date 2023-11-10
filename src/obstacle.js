// export default class Obstacle extends Phaser.GameObjects.Image {
//   constructor(scene, x, y, texture, speed) {
//     super(scene, x, y, texture);
//     scene.add.existing(this);

//     this.setScale(0.2);

//     scene.tweens.add({
//       targets: this,
//       x: x + 200,
//       ease: "Linear",
//       duration: 1000,
//       yoyo: true,
//       repeat: -1,
//     });

//     scene.physics.add.existing(this);
//     scene.physics.add.collider(this, scene.platforms);
//   }
// }
