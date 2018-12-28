var app = {
    initialize: function() 
    {
        debug ? this.init() : document.addEventListener('deviceready', this.init, false);
    },
    init: function() 
    {
        
        var left = false;
        var right = false;
        var fingerUp = true;
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

        var currentBlock;

        var blockV;
        var blockH;
        var blockSV;
        var blockSH;
        var blockTarget;
        
        var b1;
        var b2;
        var b3;
        var midVal;
        var moveDown = false;
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
            
              /*
              game.input.onDown.add(checkDir, this); // on finger touched 
             
             
                 function checkDir()
                 {
                     
                        clickedX = this.input.activePointer.x;
                        clickedY = this.input.activePointer.y;
                        initialPos_blockV_Y = blockV.y;
                        initialPos_blockV_X = blockV.x;

                        fingerUp = false;
                        reached = false;
                        moveDown = true;
                    
                        if(clickedX >= blockV.x && clickedX < blockV.x + blockV.width && clickedY.y > blockV.y && clickedY.y < blockV.y + blockV.height)
                        {
                            currentBlock = blockV;
                            //blockV.y++; 

                        }
                        
                        b1 = (blockV.y + blockV.height) / 3;
                        b2 = b1 * 2;
                        b3 = blockV.y + blockV.height;
                        midVal = b1 + (b1/2);
                        
                        if (blockV.y < topEdge) 
                        {
                            //blockV.y = topEdge;
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
                  fingerUp = true;

                }
                */
            
                
                 
                ////////////////////////////////////////////////////
            },
            update: function() 
            {
                /*

                newPosY = this.input.activePointer.y; 
                
                blockVPosY = blockV.y + blockV.height;
                
                
                if(newPosY > clickedY + midVal && blockV.y < blockVPosY + (b2-midVal) && !reached && blockVPosY < 700)   // going down
                {

                    blockV.y += (500/6);
                    reached = true;
                }
                else if(newPosY < clickedY + (500/6) && !reached && blockVPosY < 700)
                {
                    if(!fingerUp && moveDown)
                    {
                        blockV.y+= 1; // sliding
                    }
                    else if(fingerUp)
                    {
                        
                        moveDown = false;
                        reached = true;
                        blockV.y = initialPos_blockV_Y;

                    }
                    else
                    {
                        blockV.y += 500/6;
                    }
                    
                }
            
                if(newPosY < clickedY - (500/6) && !reached && blockV.y > 240)   // going up
                {
                    blockV.y -= (250/3);
                    reached = true;
                }
            
                */
             
            },   
            
            render: function()
            {
             //   game.debug.pointer(game.input.mousePointer);

            }

        }; // end of state

        game.state.add('ingame', inGameState);
        game.state.start('ingame');

    } // end of init

}; // end of app

app.initialize();