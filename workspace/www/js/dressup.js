var app = {
    initialize: function() 
    {
        debug ? this.init() : document.addEventListener('deviceready', this.init, false);
    },
    init: function() 
    {

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
        
        game = new Phaser.Game(540, 960, Phaser.AUTO, 'Dress Up');

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
                game.load.spritesheet('targetJelly', 'img/target.jpg', 166, 83);


            },
            create: function() 
            {
                bg = game.add.sprite(20, 240, 'bg');
                blockV = game.add.sprite(50, 240, 'verticalJelly');
                blockH = game.add.sprite(250, 520, 'smallHJelly');
                
                //////////////////////////////////////////////////////////
               blockV.inputEnabled = true;
               blockV.input.enableDrag();
               blockV.input.enableSnap(32, 32, false, true);

                blockV.events.onDragStart.add(startDrag);
                blockV.events.onDragStop.add(stopDrag);
        
               
                function startDrag() {
        
                    blockV.body.moves = false;
                 blockV.x = blockH.x;
                blockV.y = blockH.y;
                }
                
                
//https://codepen.io/jdnichollsc/pen/WbZgwM
                function stopDrag() {
                
                blockV.body.moves = true;
                
                
                }
           
            },
            
            
            
            update: function() 
            {
                
                       
                
             
            },   
            
            render: function()
            {
             //   game.debug.pointer(game.input.mousePointer);

            }, 
        

        }; // end of state

        game.state.add('ingame', inGameState);
        game.state.start('ingame');

    } // end of init

}; // end of app

app.initialize();