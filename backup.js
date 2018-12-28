var app = {
    initialize: function() 
    {
        debug ? this.init() : document.addEventListener('deviceready', this.init, false);
    },
    init: function() 
    {
        
        var left = false;
        var right = false;
        var fingerUp = false;
        var down = false;
        var topEdge = 240;
        var leftEdge = 20;
        var rightEdge = 520;
        var bottomEdge = 740;
        
        var reached = false;
        
        var newPosY;
        
        var clickedX = 0;
        var clickedY = 0;
     
        var onPress = false;
        var moveDown = false;
        
        var currentBlock;

        var blockV;
        var blockH;
        var blockSV;
        var blockSH;
        var blockTarget;
        
        var blockVPosY = 0;
        
        game = new Phaser.Game(540, 960, Phaser.AUTO, 'UnBlock Me');

        var inGameState = 
        {
            preload: function()
            {
                if (debug) 
                {
                    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
                } 
                else 
                {
                    game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
                }

                game.scale.pageAlignHorizontally = true;
                game.scale.pageAlignVertically = true;
                game.scale.refresh();


                game.load.image('bg', 'img/background.jpg');
                game.load.spritesheet('verticalJelly', 'img/jellyV.jpg', 83, 250);
                game.load.spritesheet('HorizontalJelly', 'img/jellyH.jpg', 250, 83);

                game.load.spritesheet('smallHJelly', 'img/smallH.jpg', 166, 83);
                game.load.spritesheet('smallVJelly', 'img/smallV.jpg', 83, 166);
                game.load.spritesheet('targetJelly', 'img/target.jpg', 166, 83);


            },
            create: function() 
            {
                bg = game.add.sprite(20, 240, 'bg');
                blockV = game.add.sprite(50, 240, 'verticalJelly');
                blockH = game.add.sprite(150, 520, 'smallHJelly');
                

                ///////////////////moving tiles code ////////////////////////////////
            
                
                 game.input.onDown.add(checkDir, this); // on finger touched 
             
             
                 function checkDir()
                 {
                     
                        clickedX = this.input.activePointer.x;
                        clickedY = this.input.activePointer.y;

                        fingerUp = false;
                        reached = false;
                    
                        
                      //  newPosY = this.input.activePointer.y;    

                        
                        if(clickedX >= blockV.x && clickedX < blockV.x + blockV.width && clickedY.y > blockV.y && clickedY.y < blockV.y + blockV.height)
                        {
                            currentBlock = blockV;

                        }
                
                        if(this.input.activePointer.x >= blockH.x && this.input.activePointer.x < blockH.x + blockH.width && this.input.activePointer.y > blockH.y && this.input.activePointer.y < blockH.y + blockH.height)
                        {
                            currentBlock = blockH;
                        }
                        
                        if(this.input.activePointer.x >= blockSV.x && this.input.activePointer.x < blockSV.x + blockSV.width && this.input.activePointer.y > blockSV.y && this.input.activePointer.y < blockSV.y + blockSV.height)
                        {
                            currentBlock = blockSV;
                        }
                        
                        if(this.input.activePointer.x >= blockSH.x && this.input.activePointer.x < blockSH.x + blockSH.width && this.input.activePointer.y > blockSH.y && this.input.activePointer.y < blockSH.y + blockSH.height)
                        {
                            currentBlock = blockSH;
                        }
                        
                        if(this.input.activePointer.x >= blockTarget.x && this.input.activePointer.x < blockTarget.x + blockTarget.width && this.input.activePointer.y > blockTarget.y && this.input.activePointer.y < blockTarget.y + blockTarget.height)
                        {
                            currentBlock = blockTarget;
                        }
                    
                        if (blockV.y < topEdge) 
                        {
                        //    blockV.y = topEdge;
                        }
                        else if (blockV.y > bottomEdge) 
                        {
                            blockV.y = bottomEdge;
                        }
                    
                
                   //  onPress = true;

                }
            
                game.input.onUp.add(stopDir, this);     // on finger up
                


                function stopDir()
                {
                  fingerUp = false;
                  moveDown = false;
                  
                }
                
                ////////////////////////////////////////////////////
            },
            update: function() 
            {
              //  newPosY = this.input.activePointer.positionUp.y;   
                
                newPosY = this.input.activePointer.y; 
                blockVPosY = blockV.y + blockV.height;
                
                
                if(newPosY > clickedY + 83 && blockV.y < blockVPosY + 83 && !reached && blockVPosY < 700)   // going down
                {
                    blockV.y += 83;
                    reached = true;
                }
                
            
                if(newPosY < clickedY - 83 && !reached && blockV.y > 240)   // going up
                {
                    blockV.y -= 83;
                    reached = true;
                }
                
             
            },   
            
            render: function()
            {
                game.debug.pointer(game.input.mousePointer);

            }

        }; // end of state

        game.state.add('ingame', inGameState);
        game.state.start('ingame');

    } // end of init

}; // end of app

app.initialize();