// export default class Player extends Phaser.Physics.Arcade.Sprite {
//   constructor(scene, x, y, texture) {
//     super(scene, x, y, texture);
//     scene.add.existing(this);
//     scene.physics.add.existing(this);

//     this.setScale(-1, 1);
//     this.setBounce(0.2);
//     this.setCollideWorldBounds(true);

//     scene.anims.create({
//       key: "left",
//       frames: scene.anims.generateFrameNumbers(texture, { start: 0, end: 3 }),
//       frameRate: 20,
//       repeat: -1,
//     });

//     scene.anims.create({
//       key: "turn",
//       frames: [{ key: texture, frame: 4 }],
//       frameRate: 20,
//     });

//     scene.anims.create({
//       key: "right",
//       frames: scene.anims.generateFrameNumbers(texture, { start: 5, end: 8 }),
//       frameRate: 20,
//       repeat: -1,
//     });
//   }

//   update(cursors) {
//     if (cursors.left.isDown) {
//       this.setVelocityX(-160);
//       this.setScale(1, 1);
//       this.anims.play("left", true);
//     } else if (cursors.right.isDown) {
//       this.setVelocityX(160);
//       this.setScale(-1, 1);
//       this.anims.play("right", true);
//     } else {
//       this.setVelocityX(0);
//       this.anims.play("turn");
//     }

//     if (cursors.up.isDown && this.body.touching.down) {
//       this.setVelocityY(-330);
//     }
//   }
// }
