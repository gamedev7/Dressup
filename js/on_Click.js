


var game = new Phaser.Game(500, 550, Phaser.AUTO, 'Dress Up', 
{

  preload: function(){
  
  var initX = 15;
  var initY1 = 10;
  var initY2 = 90;
  var mtext;
  var counter = 0;
  

   this.game.load.spritesheet('verticalJelly2', 'img/jellyV.jpg', 83, 250);
   this.game.load.image('blue_suit', 'img/BlueSuite.png', 83, 250);
   this.game.load.image('golden_hair', 'img/Purple.png', 83, 250);
   this.game.load.image('green_hair', 'img/Green.png', 83, 250);
   this.game.load.image('white_pant', 'img/White.png', 83, 250);
   this.game.load.image('violet_pant', 'img/Violet.png', 83, 250);
   this.game.load.image('verticalJelly', 'img/Amelia.png', 100, 450);
   this.game.load.image('defaulthair', 'img/blondi.png', 83, 250);


   
  //  this.game.load.spritesheet('HorizontalJelly', 'img/jellyH.jpg', 80, 200);
  },
  create: function(){
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    this.verticalJelly = this.game.add.sprite(310, 155, 'verticalJelly');
    this.verticalJelly.anchor.setTo(0.3, 0.3);
    this.game.physics.arcade.enable(this.verticalJelly);
  //  this.verticalJelly.tint= 0xff00ff;
    
 //  this.huesoCopy = this.game.add.sprite(15, 10, this.verticalJelly.key, this.verticalJelly.frame);
   this.huesoCopy = this.game.add.sprite(15, 150, 'golden_hair');
   this.greenhairCopy = this.game.add.sprite(15, 90, 'green_hair');
  this.lastSprite = this.game.add.sprite(15,200, 'defaulthair');
  
  this.lastSprite.scale.x = 0.5;
  this.lastSprite.scale.y = 0.5; 
  this.greenhairCopy.scale.x = 0.5;
  this.greenhairCopy.scale.y = 0.5; 
  this.huesoCopy.scale.x = 0.5;
  this.huesoCopy.scale.y = 0.5; 
  
  this.lastSprite1 = this.game.add.sprite(this.verticalJelly.position.x-33, 15, 'defaulthair');
  this.greenhairCopy1 = this.game.add.sprite(this.verticalJelly.position.x-33, 15, 'green_hair');
  this.huesoCopy1 = this.game.add.sprite(this.verticalJelly.position.x-33, 15, 'golden_hair');

    
  this.lastSprite.inputEnabled = true;
  this.lastSprite.events.onInputDown.add(this.listenerHair, this);
  
  this.greenhairCopy.inputEnabled = true;
  this.greenhairCopy.events.onInputDown.add(this.listenerHair, this);
  
  this.huesoCopy.inputEnabled = true;
  this.huesoCopy.events.onInputDown.add(this.listenerHair, this);

  //this.mtext = game.add.text(50, 26, '', { fill: '#ffffff' });

//    this.HorizontalJelly = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'HorizontalJelly');
//    this.HorizontalJelly.anchor.set(0.5);
  },
  
  listenerHair: function (spritem, pointer) 
  {
  //  this.counter += 1;
 //   this.mtext.text = "You clicked " + this.counter + " times!";

    if(spritem == this.lastSprite)
    {
      game.world.bringToTop(this.lastSprite1);
    }
    else if(spritem == this.greenhairCopy)
    {
      game.world.bringToTop(this.greenhairCopy1);
    }
    else if(spritem == this.huesoCopy)
    {
      game.world.bringToTop(this.huesoCopy1);
    }
    
  }
  
});

