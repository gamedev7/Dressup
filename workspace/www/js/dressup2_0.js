


var game = new Phaser.Game(500, 420, Phaser.AUTO, 'Dress Up', 
{
  preload: function(){
   this. game.load.spritesheet('verticalJelly', 'img/jellyV.jpg', 83, 250);
  //  this.game.load.spritesheet('HorizontalJelly', 'img/jellyH.jpg', 80, 200);
  },
  create: function(){
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    this.verticalJelly = this.game.add.sprite(310, 125, 'verticalJelly');
    this.verticalJelly.anchor.setTo(0.3, 0.3);
    this.game.physics.arcade.enable(this.verticalJelly);
    this.verticalJelly.tint= 0xff00ff;
    
 //   this.huesoCopy = this.game.add.sprite(this.game.world.centerX, 0, this.verticalJelly.key, this.verticalJelly.frame);
       this.huesoCopy = this.game.add.sprite(10, 10, this.verticalJelly.key, this.verticalJelly.frame);

    this.huesoCopy.anchor.x = 0.1;
    this.huesoCopy.scale.x = 0.5;
    this.huesoCopy.scale.y = 0.5;

    this.game.physics.arcade.enable(this.huesoCopy);
    this.huesoCopy.inputEnabled = true;
    this.huesoCopy.input.enableDrag();
    this.huesoCopy.originalPosition = this.huesoCopy.position.clone();
    this.huesoCopy.events.onDragStop.add(function(currentSprite){
      this.stopDrag(currentSprite, this.verticalJelly);
    }, this);
    
//    this.HorizontalJelly = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'HorizontalJelly');
//    this.HorizontalJelly.anchor.set(0.5);
  },
  stopDrag: function(currentSprite, endSprite){
    if (!this.game.physics.arcade.overlap(currentSprite, endSprite, function() {
    currentSprite.input.draggable = false;
    currentSprite.position.copyFrom(endSprite.position); 
    currentSprite.anchor.setTo(endSprite.anchor.x, endSprite.anchor.y); 
    currentSprite.scale.x = 1;
    currentSprite.scale.y = 1;
  })) { currentSprite.position.copyFrom(currentSprite.originalPosition);
  }
  }
});