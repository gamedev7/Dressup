


var game = new Phaser.Game(500, 550, Phaser.AUTO, 'Dress Up', 
{

  preload: function(){
  
  var initX = 15;
  var initY1 = 10;
  var initY2 = 90;
  

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
   this.lastSprite = this.game.add.sprite(this.verticalJelly.position.x-25, 15, 'defaulthair');

    this.huesoCopy.anchor.x = 0.1;
    this.huesoCopy.scale.x = 0.5;
    this.huesoCopy.scale.y = 0.5;
    
    this.greenhairCopy.anchor.x = 0.1;
    this.greenhairCopy.scale.x = 0.5;
    this.greenhairCopy.scale.y = 0.5;
    
    this.lastSprite.anchor.x = 0.1;
    this.lastSprite.scale.x = 1;
    this.lastSprite.scale.y = 1;
  
    this.dragItem(this.huesoCopy);
    this.dragItem(this.greenhairCopy);
    this.dragItem(this.lastSprite);


    
//    this.HorizontalJelly = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'HorizontalJelly');
//    this.HorizontalJelly.anchor.set(0.5);
  },
  
  dragItem: function(temp)
  {    
      

    this.game.physics.arcade.enable(temp);
    temp.inputEnabled = true;
    temp.input.enableDrag();
    temp.originalPosition = temp.position.clone();
    this.tempSprite = temp;
  
    
    temp.events.onDragStop.add(function(currentSprite)
    {
        
        this.lastSprite.x = currentSprite.originalPosition.x;
        this.lastSprite.y = currentSprite.y;
        this.lastSprite.scale.x = 0.5;
        this.lastSprite.scale.y = 0.5;   
        this.stopDrag(currentSprite, this.verticalJelly);
    
    }, this);
    
    //events.currentTarget.parent.addChild(events.currentTarget);

  },
 
  
    stopDrag: function(currentSprite, endSprite)
    {

       if (!this.game.physics.arcade.overlap(currentSprite, endSprite, function() 
         {
             //this.tempSprite = currentSprite;
             
                  //    currentSprite.input.draggable = false;
                currentSprite.position.copyFrom(endSprite.position); 
                currentSprite.position.x = endSprite.position.x-8;
                currentSprite.position.y = 50;
                currentSprite.anchor.setTo(endSprite.anchor.x, endSprite.anchor.y); 
                currentSprite.scale.x = 1;
                currentSprite.scale.y = 1;

           //     this.lastSprite.position.copyFrom(currentSprite.originalPosition);
                
                this.lastSprite.position.x = 15;
                this.lastSprite.position.x = 190;

                this.lastSprite = currentSprite;


             
         //     this.theData = currentSprite.dataTransfer.getData("Text");
        //      this.theDraggedElement = document.getElementById(theData);
        //      this.lastSprite = this.theDraggedElement;


           })) { 
                    
           currentSprite.position.copyFrom(currentSprite.originalPosition);

        }
        else
        {
          // this.lastSprite.position.copyFrom(currentSprite.originalPosition);

        //  this.lastSprite.position.copyFrom(events.currentTarget.originalPosition);
          //this.lastSprite.visibility=false;

        }
        
     }
     
     
});

