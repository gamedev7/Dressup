


var game = new Phaser.Game(800, 520, Phaser.AUTO, 'Dress Up', 
{

  preload: function(){
  
  var initX = 15;
  var initY1 = 10;
  var initY2 = 90;
  var mtext;
  var counter = 0;
  var Rbutton;
  var Lbutton;
  var group;
  var face_maniken;
  var neck_maniken;
  var ear_maniken;
  var eye_shadow; 
  var lips1;
  var hair1;
  var index_eyes = 1;
  var charContainer;
  var mankContainer;
  var sk1Icon;
  var sk2Icon;
  
   this.game.load.image('background', 'img/DressupImages/background.png', 800, 450);
   this.game.load.image('verticalJelly', 'img/DressupImages/character.png', 90, 100);
   this.game.load.image('cupb1', 'img/DressupImages/Cupboard1.png', 120, 90);
   this.game.load.image('cupb2', 'img/DressupImages/Cupboard2.png', 55, 70);
   this.game.load.image('lbtn', 'img/DressupImages/left.png', 30, 30);
   this.game.load.image('rbtn', 'img/DressupImages/right.png', 30, 30);
  this.game.load.image('ChangeWardrobe', 'img/DressupImages/ok.png', 30, 30);

   
   this.game.load.image('manikenFace', 'img/DressupImages/maniken.png', 30, 30);
   this.game.load.image('manikenNeck', 'img/DressupImages/neckManiken.png', 30, 30);
   this.game.load.image('manikenEar', 'img/DressupImages/earringmaniken.png', 30, 30);

   this.game.load.image('eyes1', 'img/DressupImages/eyes1.png', 10, 10);
   this.game.load.image('eyes2', 'img/DressupImages/eyes2.png', 10, 10);
   this.game.load.image('eyes3', 'img/DressupImages/eyes3.png', 10, 10);
   this.game.load.image('eyes4', 'img/DressupImages/eyes4.png', 10, 10);
   this.game.load.image('eyes5', 'img/DressupImages/eyes5.png', 10, 10);
   
   this.game.load.image('shadow1', 'img/DressupImages/eyeshadow1.png', 50, 50);
  this.game.load.image('shadow2', 'img/DressupImages/eyeshadow2.png', 50, 50);
   this.game.load.image('shadow3', 'img/DressupImages/eyeshadow3.png', 50, 50);
   this.game.load.image('shadow4', 'img/DressupImages/eyeshadow4.png', 50, 50);
   this.game.load.image('shadow5', 'img/DressupImages/eyeshadow5.png', 50, 50);

   
   this.game.load.image('lip1', 'img/DressupImages/lips1.png', 50, 50);
      this.game.load.image('lip2', 'img/DressupImages/lips2.png', 50, 50);
   this.game.load.image('lip3', 'img/DressupImages/lips3.png', 50, 50);
   this.game.load.image('lip4', 'img/DressupImages/lips4.png', 50, 50);
   this.game.load.image('lip5', 'img/DressupImages/lips5.png', 50, 50);

   
   this.game.load.image('hair1', 'img/DressupImages/hair_1.png', 10, 10);
 this.game.load.image('hair2', 'img/DressupImages/hair_2.png', 10, 10);
   this.game.load.image('hair3', 'img/DressupImages/hair_3.png', 10, 10);
   this.game.load.image('hair4', 'img/DressupImages/hair_4.png', 10, 10);
   this.game.load.image('hair5', 'img/DressupImages/hair_5.png', 10, 10);
   this.game.load.image('hair6', 'img/DressupImages/hair_6.png', 10, 10);
   this.game.load.image('hair7', 'img/DressupImages/hair_7.png', 10, 10);


    this.game.load.image('top1', 'img/DressupImages/top4.png', 10, 10);
    this.game.load.image('top2', 'img/DressupImages/top2.png', 10, 10);
    this.game.load.image('top3', 'img/DressupImages/top3.png', 10, 10);
    this.game.load.image('top4', 'img/DressupImages/top1.png', 10, 10);
    this.game.load.image('top5', 'img/DressupImages/top5.png', 10, 10);
    this.game.load.image('top6', 'img/DressupImages/top6.png', 10, 10);
    this.game.load.image('top7', 'img/DressupImages/top7.png', 10, 10);

    
    this.game.load.image('skirt1', 'img/DressupImages/skirt2.png', 10, 10);
    this.game.load.image('skirt2', 'img/DressupImages/skirt1.png', 10, 10);
    this.game.load.image('skirt3', 'img/DressupImages/skirt3.png', 10, 10);
    this.game.load.image('skirt4', 'img/DressupImages/skirt4.png', 10, 10);
    this.game.load.image('skirt5', 'img/DressupImages/skirt5.png', 10, 10);
    
    this.game.load.image('pan1', 'img/DressupImages/pants1.png', 10, 10);
    this.game.load.image('pan2', 'img/DressupImages/pants2.png', 10, 10);
    this.game.load.image('pan3', 'img/DressupImages/pants3.png', 10, 10);
    this.game.load.image('pan4', 'img/DressupImages/pants4.png', 10, 10);

   this.game.load.image('shoe1', 'img/DressupImages/shoes5.png', 10, 10);
    this.game.load.image('shoe2', 'img/DressupImages/shoes2.png', 10, 10);
   this.game.load.image('shoe3', 'img/DressupImages/shoes3.png', 10, 10);
   this.game.load.image('shoe4', 'img/DressupImages/shoes4.png', 10, 10);
   this.game.load.image('shoe5', 'img/DressupImages/shoes1.png', 10, 10);
  
  
  
      this.game.load.image('bag1', 'img/DressupImages/bag1.png', 10, 10);
   this.game.load.image('bag2', 'img/DressupImages/bag2.png', 10, 10);
   this.game.load.image('bag3', 'img/DressupImages/bag3.png', 10, 10);
   this.game.load.image('bag4', 'img/DressupImages/bag4.png', 10, 10);



     this.game.load.image('dr1', 'img/DressupImages/dress1.png', 10, 10);
   this.game.load.image('dr2', 'img/DressupImages/dress2.png', 10, 10);
   this.game.load.image('dr3', 'img/DressupImages/dress3.png', 10, 10);
   this.game.load.image('dr4', 'img/DressupImages/dress4.png', 10, 10);
   this.game.load.image('dr5', 'img/DressupImages/dress5.png', 10, 10);

   this.game.load.image('ear1', 'img/DressupImages/ear1.png', 10, 10);
   this.game.load.image('ear2', 'img/DressupImages/ear2.png', 10, 10);
   this.game.load.image('ear3', 'img/DressupImages/ear3.png', 10, 10);
   this.game.load.image('ear4', 'img/DressupImages/ear4.png', 10, 10);

   this.game.load.image('glass1', 'img/DressupImages/glasses1.png', 10, 10);
   this.game.load.image('glass2', 'img/DressupImages/glasses2.png', 10, 10);
   this.game.load.image('glass3', 'img/DressupImages/glasses3.png', 10, 10);
   this.game.load.image('glass4', 'img/DressupImages/glasses4.png', 10, 10);

      this.game.load.image('nk1', 'img/DressupImages/neck1.png', 50, 50);
   this.game.load.image('nk2', 'img/DressupImages/neck2.png', 50, 50);
   this.game.load.image('nk3', 'img/DressupImages/neck3.png', 50, 50);
   this.game.load.image('nk4', 'img/DressupImages/neck4.png', 50, 50);


/*   
   this.game.load.image('blue_suit', 'img/BlueSuite.png', 83, 250);
   this.game.load.image('golden_hair', 'img/Purple.png', 83, 250);
   this.game.load.image('green_hair', 'img/Green.png', 83, 250);
   this.game.load.image('white_pant', 'img/White.png', 83, 250);
   this.game.load.image('violet_pant', 'img/Violet.png', 83, 250);
   this.game.load.image('defaulthair', 'img/blondi.png', 83, 250);
*/

   
  //  this.game.load.spritesheet('HorizontalJelly', 'img/jellyH.jpg', 80, 200);
  },
  create: function(){
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    this.bg = this.game.add.sprite(0, 0, 'background');
    this.bg.scale.x = 0.8;
    this.bg.scale.y = 0.9;
    this.verticalJelly = this.game.add.sprite(250, 180, 'verticalJelly');
    this.verticalJelly.anchor.setTo(0.3, 0.3);
    this.verticalJelly.scale.x = 0.9;
    this.verticalJelly.scale.y = 0.9;
    this.game.physics.arcade.enable(this.verticalJelly);
  ///  this.verticalJelly.tint= 0xff00ff;
      
    this.cupb1 = this.game.add.sprite(470, 100, 'cupb1');
    this.cupb1.scale.x = 0.78;
    this.cupb1.scale.y = 0.78;
    
    this.cupb2 = this.game.add.sprite(467, 102, 'cupb2');
    this.cupb2.scale.x = 0.56;
    this.cupb2.scale.y = 0.64;
    
    this.Lbutton = game.add.button(470, 465, 'lbtn', this.Eyes_Hair_Lip, this, 2, 1, 0);
    this.Lbutton.scale.x = 0.5;
    this.Lbutton.scale.y = 0.5;
   
    this.Rbutton = game.add.button(680, 465, 'rbtn', this.changeCloset, this, 2, 1, 0);
    this.Rbutton.scale.x = 0.5;
    this.Rbutton.scale.y = 0.5;
    this.Rbutton.visible = false;
    
    this.changeWdBttn = game.add.button(573, 465, 'ChangeWardrobe', this.changeWard, this, 2, 1, 0);
    this.changeWdBttn.scale.x = 0.33;
    this.changeWdBttn.scale.y = 0.33;
    
    /*
    this.Lbutton2 = game.add.button(410, 220, 'lbtn', this.actionOnClick, this, 2, 1, 0);
    this.Rbutton2 = game.add.button(740, 220, 'rbtn', this.actionOnClick, this, 2, 1, 0);
    this.Lbutton2.scale.x = 0.5;
    this.Lbutton2.scale.y = 0.5;
    this.Rbutton2.scale.x = 0.5;
    this.Rbutton2.scale.y = 0.5;
    this.Lbutton3 = game.add.button(410, 325, 'lbtn', this.actionOnClick, this, 2, 1, 0);
    this.Rbutton3 = game.add.button(740, 325, 'rbtn', this.actionOnClick, this, 2, 1, 0);
    this.Lbutton3.scale.x = 0.5;
    this.Lbutton3.scale.y = 0.5;
    this.Rbutton3.scale.x = 0.5;
    this.Rbutton3.scale.y = 0.5;
    */
    this.face_maniken1 = game.add.sprite(460, 125, 'manikenFace');
    this.face_maniken1.scale.x=0.8;
    this.face_maniken1.scale.y=0.8;
    this.face_maniken2 = game.add.sprite(530, 125, 'manikenFace');
    this.face_maniken2.scale.x=0.8;
    this.face_maniken2.scale.y=0.8;
    this.face_maniken3 = game.add.sprite(600, 125, 'manikenFace');
    this.face_maniken3.scale.x=0.8;
    this.face_maniken3.scale.y=0.8;
    
    this.neck_maniken1 = game.add.sprite(460, 240, 'manikenNeck');
    this.neck_maniken1.scale.x=0.8;
    this.neck_maniken1.scale.y=0.8;
    this.neck_maniken2 = game.add.sprite(525, 240, 'manikenNeck');
    this.neck_maniken2.scale.x=0.8;
    this.neck_maniken2.scale.y=0.8;
    this.neck_maniken3 = game.add.sprite(590, 240, 'manikenNeck');
    this.neck_maniken3.scale.x=0.8;
    this.neck_maniken3.scale.y=0.8;
    
    this.ear_maniken1 = game.add.sprite(490, 379, 'manikenEar');
    this.ear_maniken1.scale.x=1;
    this.ear_maniken1.scale.y=1;
    this.ear_maniken2 = game.add.sprite(553, 379, 'manikenEar');
    this.ear_maniken2.scale.x=1;
    this.ear_maniken2.scale.y=1;
    this.ear_maniken3 = game.add.sprite(615, 379, 'manikenEar');
    this.ear_maniken3.scale.x=1;
    this.ear_maniken3.scale.y=1;
    
  //  this.eye1=game.add.sprite(497, 115, 'eyes1');
  this.eye1=game.add.sprite(0, 0, 'eyes1');
  this.eye1.scale.x=0.9;
  this.eye1.scale.y=0.9;
    this.eye1.inputEnabled = true;
    this.eye1.events.onInputDown.add(this.changeEyes, this);

//    this.eye2=game.add.sprite(566, 107, 'eyes2');
    this.eye2=game.add.sprite(0, 0, 'eyes2');
    this.eye2.scale.x=0.9;
    this.eye2.scale.y=0.9;
    this.eye2.inputEnabled = true;
        this.eye2.events.onInputDown.add(this.changeEyes, this);

  
//  this.eye3=game.add.sprite(630, 107, 'eyes3');
    this.eye3=game.add.sprite(0, 0, 'eyes3');
    this.eye3.scale.x=0.9;
    this.eye3.scale.y=0.9;
    this.eye3.inputEnabled = true;
    this.eye3.events.onInputDown.add(this.changeEyes, this);

//  this.eye4=game.add.sprite(497, 107, 'eyes4');
    this.eye4=game.add.sprite(0, 0, 'eyes4');
    this.eye4.scale.x=0.9;
    this.eye4.scale.y=0.9;
    this.eye4.inputEnabled = true;
    this.eye4.events.onInputDown.add(this.changeEyes, this);

//  this.eye5=game.add.sprite(566, 107, 'eyes5');
    this.eye5=game.add.sprite(0, 0, 'eyes5');
    this.eye5.scale.x=0.9;
    this.eye5.scale.y=0.9;
    this.eye5.inputEnabled = true;
    this.eye5.events.onInputDown.add(this.changeEyes, this);
   
    this.test1=game.add.sprite(273, 78, 'eyes1');
    this.test2=game.add.sprite(273, 72, 'eyes2');
    this.test3=game.add.sprite(273, 74, 'eyes3');
    this.test4=game.add.sprite(273, 72, 'eyes4');
    this.test5=game.add.sprite(273, 74, 'eyes5');
    
     /////// eye shadow //////////////////
     
     
    this.eye_sd1 = game.add.sprite(0, 0, 'shadow1');
    this.eye_sd1.scale.x = 0.9;
    this.eye_sd1.scale.y = 0.9;
    this.eye_sd1.inputEnabled = true;
    this.eye_sd1.events.onInputDown.add(this.changeEyeshadow, this);
    
    this.eye_sd2 = game.add.sprite(0, 0, 'shadow2');
    this.eye_sd2.scale.x = 0.9;
    this.eye_sd2.scale.y = 0.9;
    this.eye_sd2.inputEnabled = true;
    this.eye_sd2.events.onInputDown.add(this.changeEyeshadow, this);
    
    this.eye_sd3 = game.add.sprite(0, 0, 'shadow3');
    this.eye_sd3.scale.x = 0.9;
    this.eye_sd3.scale.y = 0.9;
    this.eye_sd3.inputEnabled = true;
    this.eye_sd3.events.onInputDown.add(this.changeEyeshadow, this);
    
    this.eye_sd4 = game.add.sprite(0, 0, 'shadow4');
    this.eye_sd4.scale.x = 0.9;
    this.eye_sd4.scale.y = 0.9;
    this.eye_sd4.inputEnabled = true;
    this.eye_sd4.events.onInputDown.add(this.changeEyeshadow, this);
    
    this.eye_sd5 = game.add.sprite(0, 0, 'shadow5');
    this.eye_sd5.scale.x = 0.9;
    this.eye_sd5.scale.y = 0.9;
    this.eye_sd5.inputEnabled = true;
    this.eye_sd5.events.onInputDown.add(this.changeEyeshadow, this);
    
    this.eye_shadow1 = game.add.sprite(267, 67, 'shadow1');
    this.eye_shadow2 = game.add.sprite(267, 60, 'shadow2');
     this.eye_shadow3 = game.add.sprite(267, 67, 'shadow3');
    this.eye_shadow4 = game.add.sprite(267, 62, 'shadow4');
       this.eye_shadow5 = game.add.sprite(267, 55, 'shadow5');


    /////// lips ////////////////////
    
    this.lipz1 = game.add.sprite(0, 0, 'lip1');
    this.lipz1.scale.x = 0.9;
    this.lipz1.scale.y = 0.9;
    this.lipz1.inputEnabled = true;
    this.lipz1.events.onInputDown.add(this.changeLips, this);
    
    this.lipz2 = game.add.sprite(0, 0, 'lip2');
    this.lipz2.scale.x = 0.9;
    this.lipz2.scale.y = 0.9;
    this.lipz2.inputEnabled = true;
    this.lipz2.events.onInputDown.add(this.changeLips, this);
  
    this.lipz3 = game.add.sprite(0, 0, 'lip3');
    this.lipz3.scale.x = 0.9;
    this.lipz3.scale.y = 0.9;
    this.lipz3.inputEnabled = true;
    this.lipz3.events.onInputDown.add(this.changeLips, this);
      
    this.lipz4 = game.add.sprite(0, 0, 'lip4');
    this.lipz4.scale.x = 0.9;
    this.lipz4.scale.y = 0.9;
    this.lipz4.inputEnabled = true;
    this.lipz4.events.onInputDown.add(this.changeLips, this);
    
    this.lipz5 = game.add.sprite(0, 0, 'lip5');
    this.lipz5.scale.x = 0.9;
    this.lipz5.scale.y = 0.9;
    this.lipz5.inputEnabled = true;
    this.lipz5.events.onInputDown.add(this.changeLips, this);
    
    this.lips1 =game.add.sprite(273, 96, 'lip1');
    this.lips2 =game.add.sprite(273, 94, 'lip2');
    this.lips3 =game.add.sprite(273, 92, 'lip3');
    this.lips4 =game.add.sprite(273, 101, 'lip4');
    this.lips5 =game.add.sprite(273, 99, 'lip5');

 
    
    ////// hair ///////////////////////
    
    this.hair1 = game.add.sprite(253, 30, 'hair1');
    this.hair1.scale.x = 0.95;
    this.hair1.scale.y = 0.95;
    
    ///////// top //////////////////
    
    this.top1 = game.add.sprite(261, 96, 'top1');
    this.top1.scale.x = 0.93;
    this.top1.scale.y = 0.93;
    
    this.top2 = game.add.sprite(255, 120, 'top2');
    this.top2.scale.x = 0.93;
    this.top2.scale.y = 0.93;
    
    this.top3 = game.add.sprite(245, 120, 'top3');
    this.top3.scale.x = 0.84;
    this.top3.scale.y = 0.84;
    
    this.top4 = game.add.sprite(245, 120, 'top4');
    this.top4.scale.x = 0.90;
    this.top4.scale.y = 0.90;
    
    this.top5 = game.add.sprite(242, 120, 'top5');
    this.top5.scale.x = 0.93;
    this.top5.scale.y = 0.93;
    
    this.top6 = game.add.sprite(238, 120, 'top6');
    this.top6.scale.x = 0.93;
    this.top6.scale.y = 0.93;
    
    this.top7 = game.add.sprite(222, 119, 'top7');
    this.top7.scale.x = 0.89;
    this.top7.scale.y = 0.89;
    
    this.groupTops=game.add.group();
    this.groupTops.add(this.top1);
    this.groupTops.add(this.top2);
    this.groupTops.add(this.top3);
    this.groupTops.add(this.top4);
    this.groupTops.add(this.top5);
    this.groupTops.add(this.top6);
    this.groupTops.add(this.top7);
    
     for(var k = 1; k < this.groupTops.length; k++)
    {
       this.groupTops.children[k].visible = false;
    }
    
    //////// skirt ////////////////
    
    this.skirt1 = game.add.sprite(225, 200, 'skirt1');
    this.skirt1.scale.x = 0.93;
    this.skirt1.scale.y = 0.93;
     
    this.skirt2 = game.add.sprite(218, 198, 'skirt2');
    this.skirt2.scale.x = 0.93;
    this.skirt2.scale.y = 0.93;

    this.skirt3 = game.add.sprite(221, 200, 'skirt3');
    this.skirt3.scale.x = 0.96;
    this.skirt3.scale.y = 0.93;
    
    this.skirt4 = game.add.sprite(205, 182, 'skirt4');
    this.skirt4.scale.x = 0.96;
    this.skirt4.scale.y = 0.93;
   
    this.skirt5 = game.add.sprite(210, 182, 'skirt5');
    this.skirt5.scale.x = 0.96;
    this.skirt5.scale.y = 0.93;
    
     this.groupSkirts=game.add.group();
    this.groupSkirts.add(this.skirt1);
    this.groupSkirts.add(this.skirt2);
    this.groupSkirts.add(this.skirt3);
    this.groupSkirts.add(this.skirt4);
    this.groupSkirts.add(this.skirt5);
    
     for(var i = 1; i < this.groupSkirts.length; i++)
    {
       this.groupSkirts.children[i].visible = false;
    }
    
    //////  shoes ////////////////
    
    this.shoes1 = game.add.sprite(267, 447, 'shoe1');
    this.shoes1.scale.x = 0.93;
    this.shoes1.scale.y = 0.93;
    
    /////// Pants on Girl ///////////
    
    this.pant1 = game.add.sprite(225, 200, 'pan1');
    this.pant1.scale.x = 0.93;
    this.pant1.scale.y = 0.93;
    
    this.pant2 = game.add.sprite(237, 197, 'pan2');
    this.pant2.scale.x = 0.93;
    this.pant2.scale.y = 0.93;
    
    this.pant3 = game.add.sprite(235, 195, 'pan3');
    this.pant3.scale.x = 0.93;
    this.pant3.scale.y = 0.93;
    
    this.pant4 = game.add.sprite(232, 200, 'pan4');
    this.pant4.scale.x = 0.93;
    this.pant4.scale.y = 0.93;
    
     this.groupPants=game.add.group();
    this.groupPants.add(this.pant1);
    this.groupPants.add(this.pant2);
    this.groupPants.add(this.pant3);
    this.groupPants.add(this.pant4);
    
    this.groupPants.visible = false;
    
    ///Icons...on..right.../////////////
    

    // skirts
    
    this.sk1Icon = game.add.sprite(500, 180, 'skirt2');
    this.sk1Icon.inputEnabled = true;
    this.sk1Icon.events.onInputDown.add(this.changeSkirts1, this);
      this.sk1Icon.scale.x = 0.70;
    this.sk1Icon.scale.y = 0.70;
   
    this.sk2Icon = game.add.sprite(500, 250, 'skirt1');
    this.sk2Icon.inputEnabled = true;
    this.sk2Icon.events.onInputDown.add(this.changeSkirts2, this);
    this.sk2Icon.scale.x = 0.60;
    this.sk2Icon.scale.y = 0.60;
    
    this.sk3Icon = game.add.sprite(560, 330, 'skirt3');
    this.sk3Icon.inputEnabled = true;
    this.sk3Icon.events.onInputDown.add(this.changeSkirts3, this);
     this.sk3Icon.scale.x = 0.60;
    this.sk3Icon.scale.y = 0.60;
   
    this.sk4Icon = game.add.sprite(600, 160, 'skirt4');
    this.sk4Icon.inputEnabled = true;
    this.sk4Icon.events.onInputDown.add(this.changeSkirts4, this);
     this.sk4Icon.scale.x = 0.60;
    this.sk4Icon.scale.y = 0.60;
  
    this.sk5Icon = game.add.sprite(600, 240, 'skirt5');
    this.sk5Icon.inputEnabled = true;
    this.sk5Icon.events.onInputDown.add(this.changeSkirts5, this);
    this.sk5Icon.scale.x = 0.60;
    this.sk5Icon.scale.y = 0.60;
    
    this.skIconGroup = game.add.group();
    this.skIconGroup.add(this.sk5Icon);
    this.skIconGroup.add(this.sk4Icon);
    this.skIconGroup.add(this.sk3Icon);
    this.skIconGroup.add(this.sk1Icon);
    this.skIconGroup.add(this.sk2Icon);
    
    // pants //
    
    this.pan1Icon = game.add.sprite(600, 150, 'pan1');
    this.pan1Icon.inputEnabled = true;
    this.pan1Icon.scale.x = 0.50;
    this.pan1Icon.scale.y = 0.50;
    this.pan1Icon.events.onInputDown.add(this.changePant1, this);
   
    this.pan2Icon = game.add.sprite(510, 150, 'pan2');
    this.pan2Icon.inputEnabled = true;
     this.pan2Icon.scale.x = 0.50;
    this.pan2Icon.scale.y = 0.50;
    this.pan2Icon.events.onInputDown.add(this.changePant2, this);
   
    this.pan3Icon = game.add.sprite(550, 280, 'pan3');
    this.pan3Icon.inputEnabled = true;
     this.pan3Icon.scale.x = 0.50;
    this.pan3Icon.scale.y = 0.50;
    this.pan3Icon.events.onInputDown.add(this.changePant3, this);
   
    this.pan4Icon = game.add.sprite(650, 280, 'pan4');
    this.pan4Icon.inputEnabled = true;
     this.pan4Icon.scale.x = 0.50;
    this.pan4Icon.scale.y = 0.50;
    this.pan4Icon.events.onInputDown.add(this.changePant4, this);
  
    
    this.panIconGroup = game.add.group();
    this.panIconGroup.add(this.pan4Icon);
    this.panIconGroup.add(this.pan3Icon);
    this.panIconGroup.add(this.pan2Icon);
    this.panIconGroup.add(this.pan1Icon);
    this.panIconGroup.visible = false;
    
    // tops
    
      this.top1Icon = game.add.sprite(510, 150, 'top1');
    this.top1Icon.inputEnabled = true;
     this.top1Icon.scale.x = 0.50;
    this.top1Icon.scale.y = 0.50;
    this.top1Icon.events.onInputDown.add(this.changeTop1, this);
  
    this.top2Icon = game.add.sprite(650, 160, 'top2');
    this.top2Icon.inputEnabled = true;
     this.top2Icon.scale.x = 0.50;
    this.top2Icon.scale.y = 0.50;
    this.top2Icon.events.onInputDown.add(this.changeTop2, this);
  
  
    this.top3Icon = game.add.sprite(500, 250, 'top3');
    this.top3Icon.inputEnabled = true;
     this.top3Icon.scale.x = 0.50;
    this.top3Icon.scale.y = 0.50;
    this.top3Icon.events.onInputDown.add(this.changeTop3, this);
  
  
    this.top4Icon = game.add.sprite(650, 260, 'top4');
    this.top4Icon.inputEnabled = true;
     this.top4Icon.scale.x = 0.50;
    this.top4Icon.scale.y = 0.50;
    this.top4Icon.events.onInputDown.add(this.changeTop4, this);
  
  
    this.top5Icon = game.add.sprite(510, 350, 'top5');
    this.top5Icon.inputEnabled = true;
     this.top5Icon.scale.x = 0.50;
    this.top5Icon.scale.y = 0.50;
    this.top5Icon.events.onInputDown.add(this.changeTop5, this);
  
  
    this.top6Icon = game.add.sprite(650, 360, 'top6');
    this.top6Icon.inputEnabled = true;
    this.top6Icon.scale.x = 0.50;
    this.top6Icon.scale.y = 0.50;
    this.top6Icon.events.onInputDown.add(this.changeTop6, this);
  
  
    this.top7Icon = game.add.sprite(580, 260, 'top7');
    this.top7Icon.inputEnabled = true;
        this.top7Icon.scale.x = 0.40;
    this.top7Icon.scale.y = 0.40;
    this.top7Icon.events.onInputDown.add(this.changeTop7, this);
  
    this.topIconGroup = game.add.group();
    this.topIconGroup.add(this.top7Icon);
    this.topIconGroup.add(this.top6Icon);
    this.topIconGroup.add(this.top5Icon);
    this.topIconGroup.add(this.top4Icon);
    this.topIconGroup.add(this.top3Icon);
    this.topIconGroup.add(this.top2Icon);
    this.topIconGroup.add(this.top1Icon);
    this.topIconGroup.visible = false;

    ///// shoes ////
    
    this.shoes1Icon = game.add.sprite(570, 350, 'shoe1');
    this.shoes1Icon.inputEnabled = true;
    this.shoes1Icon.scale.x = 0.50;
    this.shoes1Icon.scale.y = 0.50;
  //  this.shoes1Icon.events.onInputDown.add(this.changeSkirts1, this);
  
     this.shoes2Icon = game.add.sprite(570, 350, 'shoe2');
    this.shoes2Icon.inputEnabled = true;
    this.shoes2Icon.scale.x = 0.50;
    this.shoes2Icon.scale.y = 0.50;
  //  this.shoes2Icon.events.onInputDown.add(this.changeSkirts1, this);
  
  
   this.shoes3Icon = game.add.sprite(570, 350, 'shoe3');
    this.shoes3Icon.inputEnabled = true;
    this.shoes3Icon.scale.x = 0.50;
    this.shoes3Icon.scale.y = 0.50;
  //  this.shoes3Icon.events.onInputDown.add(this.changeSkirts1, this);
  
  
   this.shoes4Icon = game.add.sprite(570, 350, 'shoe4');
    this.shoes4Icon.inputEnabled = true;
    this.shoes4Icon.scale.x = 0.50;
    this.shoes4Icon.scale.y = 0.50;
  //  this.shoes4Icon.events.onInputDown.add(this.changeSkirts1, this)
  
   this.shoes5Icon = game.add.sprite(570, 350, 'shoe5');
    this.shoes5Icon.inputEnabled = true;
    this.shoes5Icon.scale.x = 0.50;
    this.shoes5Icon.scale.y = 0.50;
  //  this.shoes5Icon.events.onInputDown.add(this.changeSkirts1, this);
  
    
    /// bags //////
    
    
    
    //// dresses ////
    
    
    
    
    
    
    ////////////////////////////////////////////////
    
    this.cub2Cntainer = game.add.group();
    this.cub2Cntainer.add(this.cupb2);
    this.cub2Cntainer.add(this.topIconGroup);
    this.cub2Cntainer.add(this.panIconGroup);
    this.cub2Cntainer.add(this.skIconGroup);

    /*
    this.cub2Cntainer.add(this.sk5Icon);
    this.cub2Cntainer.add(this.sk4Icon);
    this.cub2Cntainer.add(this.sk3Icon);
    this.cub2Cntainer.add(this.sk1Icon);
    this.cub2Cntainer.add(this.sk2Icon);
    */
    

    //////////////////////////////////////////////////////

    this.group1 = game.add.group();
    this.group1.add(this.eye1);
    this.group1.add(this.eye2);
    this.group1.add(this.eye3);
    this.group1.add(this.eye5);
    this.group1.add(this.eye4);
    
     this.group1.x = 497;
    this.group1.y = 157;
    
    this.groupShadow = game.add.group();
    this.groupShadow.add(this.eye_sd1);
    this.groupShadow.add(this.eye_sd2);
    this.groupShadow.add(this.eye_sd3);
    this.groupShadow.add(this.eye_sd4);
    this.groupShadow.add(this.eye_sd5);

/*
    this.groupShadow.x = 491;
    this.groupShadow.y = 143;
    */
     this.groupShadow.x = 560;
    this.groupShadow.y = 143;
    
    this.groupLip = game.add.group();
    this.groupLip.add(this.lipz1);
    this.groupLip.add(this.lipz2);
    this.groupLip.add(this.lipz3);
    this.groupLip.add(this.lipz4);
    this.groupLip.add(this.lipz5);
    
    this.groupLip.x = 497;
    this.groupLip.y = 173;
    
 //   this.groupLip.children[0].x = 0;
 //   this.groupLip.children[0].y = 0;
    this.groupLip.children[1].x = 0;
    this.groupLip.children[1].y = -2;
    this.groupLip.children[2].x = 0;
    this.groupLip.children[2].y = -3;
    this.groupLip.children[3].x = 0;
    this.groupLip.children[3].y = 5;
    this.groupLip.children[4].x = 0;
    this.groupLip.children[4].y = 3;     
    
     this.mankContainer = game.add.group();
    this.mankContainer.add(this.cupb1);
    this.mankContainer.add(this.face_maniken1);
    this.mankContainer.add(this.face_maniken2);
    this.mankContainer.add(this.face_maniken3);
      this.mankContainer.add(this.neck_maniken1);
    this.mankContainer.add(this.neck_maniken2);
    this.mankContainer.add(this.neck_maniken3);
      this.mankContainer.add(this.ear_maniken1);
    this.mankContainer.add(this.ear_maniken2);
    this.mankContainer.add(this.ear_maniken3);
    this.mankContainer.add(this.groupShadow);
    this.mankContainer.add(this.group1);
    this.mankContainer.add(this.groupLip);

   // this.cub2Cntainer.visible=false;
    game.world.bringToTop(this.mankContainer);
    
      this.groupShadow.children[0].x = 0;
      this.groupShadow.children[0].y = 0; 
      this.groupShadow.children[1].x = 0;
      this.groupShadow.children[1].y = -7; 
       this.groupShadow.children[2].x = 0;
      this.groupShadow.children[2].y = 0;
      this.groupShadow.children[3].x = 0;
      this.groupShadow.children[3].y = -5; 
      this.groupShadow.children[4].x = 0;
      this.groupShadow.children[4].y = -10;
          
      this.group1.children[1].x = 0;
      this.group1.children[1].y = -7;
      this.group1.children[2].x = 0;
      this.group1.children[2].y = -7;
      this.group1.children[3].x = 0;
      this.group1.children[3].y = -7;
      this.group1.children[4].x = 0;
      this.group1.children[4].y = -7;
      this.group1.children[5].x = 0;
      this.group1.children[5].y = -7;
     


     
      /*
     this.mankContainer.children[11].children[1].x = 0;
      this.mankContainer.children[11].children[1].y = 300;
     this.mankContainer.children[11].children[2].x = 0;
      this.mankContainer.children[11].children[2].y = -300;
     */ 
     
   
    
  
    
  //  for(var i = 0; i < this.group1.children.length; i++)
  
      
    
    /*
    this.group2.x = 568;
    this.group2.y = 111;
    
    this.group3.x = 638;
    this.group3.y = 112;
    
    */
    //////////////////////////////////////////////////////
    
 ///  this.huesoCopy = this.game.add.sprite(15, 10, this.verticalJelly.key, this.verticalJelly.frame);
/*   this.huesoCopy = this.game.add.sprite(15, 150, 'golden_hair');
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
*/
  //this.mtext = game.add.text(50, 26, '', { fill: '#ffffff' });

//    this.HorizontalJelly = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'HorizontalJelly');
//    this.HorizontalJelly.anchor.set(0.5);
  },
  
 
  
  changeSkirts1: function()
  {
    
  //  this.groupSkirts.bringToTop(this.groupSkirts.children[0]);
  //  this.groupSkirts.children[0].visible = true;
    
    this.groupSkirts.visible = true;
        this.groupPants.visible=false;
     this.groupSkirts.bringToTop(this.skirt2);
    this.skirt2.visible=true;
    this.skirt4.visible=false;
    this.skirt1.visible=false;
    this.skirt3.visible=false;
    this.skirt5.visible=false;
     
     /*
     this.groupSkirts.children[1].visible = true;
      this.skirt2.visible=true;

    for(var i = 0; i < this.groupSkirts.length-1; i++)
    {
      this.groupSkirts.children[0].visible = false;
    }
    */
  
  },
  
   changeSkirts2: function()
  {
    this.groupSkirts.visible = true;
        this.groupPants.visible=false;
    this.groupSkirts.bringToTop(this.skirt1);
    this.skirt1.visible=true;
    this.skirt2.visible=false;
    this.skirt3.visible=false;
    this.skirt4.visible=false;
    this.skirt5.visible=false;


  },
  
   
   changeSkirts3: function()
  {
    this.groupSkirts.visible = true;
        this.groupPants.visible=false;
    this.groupSkirts.bringToTop(this.skirt3);
    this.skirt3.visible=true;
    this.skirt2.visible=false;
    this.skirt1.visible=false;
    this.skirt4.visible=false;
    this.skirt5.visible=false;
  

  },
  
     changeSkirts4: function()
  {
    this.groupSkirts.visible = true;
    this.groupPants.visible=false;
    this.groupSkirts.bringToTop(this.skirt4);
    this.skirt4.visible=true;
    this.skirt2.visible=false;
    this.skirt1.visible=false;
    this.skirt3.visible=false;
    this.skirt5.visible=false;
  

  },
  
  changeSkirts5: function()
  {
      
    this.groupSkirts.visible = true;
    this.groupPants.visible=false;
    this.groupSkirts.bringToTop(this.skirt5);
    this.skirt5.visible=true;
    this.skirt1.visible=false;
    this.skirt3.visible=false;
    this.skirt2.visible=false;
    this.skirt4.visible=false;

  },
  
   changePant1: function()
   {
    this.groupSkirts.visible = false;
    this.groupPants.visible=true;
    this.groupPants.bringToTop(this.pant1);
    this.pant1.visible=true;
    this.pant2.visible=false;
    this.pant3.visible=false;
    this.pant4.visible=false;

  },
  
   changePant2: function()
   {
    this.groupSkirts.visible = false;
        this.groupPants.visible=true;

    this.groupPants.bringToTop(this.pant2);
    this.pant2.visible=true;
    this.pant1.visible=false;
    this.pant3.visible=false;
    this.pant4.visible=false;

  },
  
   changePant3: function()
   {
    this.groupSkirts.visible = false;
        this.groupPants.visible=true;

    this.groupPants.bringToTop(this.pant3);
    this.pant3.visible=true;
    this.pant1.visible=false;
    this.pant2.visible=false;
    this.pant4.visible=false;

  },
  
    changePant4: function()
   {
    this.groupSkirts.visible = false;
        this.groupPants.visible=true;

    this.groupPants.bringToTop(this.pant4);
    this.pant4.visible=true;
    this.pant1.visible=false;
    this.pant2.visible=false;
    this.pant3.visible=false;

  },
  
  changeTop1: function()
   {
    this.groupTops.visible=true;

    this.groupTops.bringToTop(this.top1);
    this.top1.visible=true;
    this.top2.visible=false;
    this.top3.visible=false;
    this.top4.visible=false;
    this.top5.visible=false;
    this.top6.visible=false;
    this.top7.visible=false;

  },
    changeTop2: function()
   {
    this.groupTops.visible=true;
    this.groupTops.bringToTop(this.top2);
    this.top2.visible=true;
    this.top1.visible=false;
    this.top3.visible=false;
    this.top4.visible=false;
    this.top5.visible=false;
    this.top6.visible=false;
    this.top7.visible=false;

  },
  
    changeTop3: function()
   {
    this.groupTops.visible=true;
    this.groupTops.bringToTop(this.top3);
    this.top3.visible=true;
    this.top1.visible=false;
    this.top2.visible=false;
    this.top4.visible=false;
    this.top5.visible=false;
    this.top6.visible=false;
    this.top7.visible=false;

  },
     changeTop4: function()
   {
    this.groupTops.visible=true;
    this.groupTops.bringToTop(this.top4);
    this.top4.visible=true;
    this.top1.visible=false;
    this.top2.visible=false;
    this.top3.visible=false;
    this.top5.visible=false;
    this.top6.visible=false;
    this.top7.visible=false;

  },
  
changeTop5: function()
   {
    this.groupTops.visible=true;
    this.groupTops.bringToTop(this.top5);
    this.top5.visible=true;
    this.top1.visible=false;
    this.top2.visible=false;
    this.top3.visible=false;
    this.top4.visible=false;
    this.top6.visible=false;
    this.top7.visible=false;

  },
  
changeTop6: function()
   {
    this.groupTops.visible=true;
    this.groupTops.bringToTop(this.top6);
    this.top6.visible=true;
    this.top1.visible=false;
    this.top2.visible=false;
    this.top3.visible=false;
    this.top5.visible=false;
    this.top4.visible=false;
    this.top7.visible=false;

  },
  
  changeTop7: function()
   {
    this.groupTops.visible=true;
    this.groupTops.bringToTop(this.top7);
    this.top7.visible=true;
    this.top1.visible=false;
    this.top2.visible=false;
    this.top3.visible=false;
    this.top5.visible=false;
    this.top4.visible=false;
    this.top6.visible=false;
    game.world.bringToTop(this.groupTops);
  },
  
  changeWard: function()    //here
  {
    
    
    game.world.swapChildren(this.mankContainer, this.cub2Cntainer);
    
    if(game.world.getChildIndex(this.mankContainer) < game.world.getChildIndex(this.cub2Cntainer))
    {
      this.mankContainer.visible=false;
            this.cub2Cntainer.visible=true
            this.Rbutton.visible = true;
            this.Lbutton.visible = false;

       //   game.world.bringToTop(this.cub2Cntainer);
    }
    else
    {
      
      this.cub2Cntainer.visible=false;
      this.mankContainer.visible=true;

      this.Rbutton.visible = false;
      this.Lbutton.visible = true;
    }
    
    
  //  this.mankContainer.visible = false;
  

  },
   
  changeLips: function()
  {
      if(this.groupLip.children[4] == this.lipz1)
      {
          game.world.bringToTop(this.lips1);
      }
       if(this.groupLip.children[4] == this.lipz2)
      {
          game.world.bringToTop(this.lips2);
      }
       if(this.groupLip.children[4] == this.lipz3)
      {
          game.world.bringToTop(this.lips3);
      }
       if(this.groupLip.children[4] == this.lipz4)
      {
          game.world.bringToTop(this.lips4);
      }
       if(this.groupLip.children[4] == this.lipz5)
      {
          game.world.bringToTop(this.lips5);
      }
  },
  changeEyeshadow: function()
  {
      
      if(this.groupShadow.children[4] == this.eye_sd1)
      {
          game.world.bringToTop(this.eye_shadow1);
      }
      if(this.groupShadow.children[4] == this.eye_sd2)
      {
          game.world.bringToTop(this.eye_shadow2);
      }
      if(this.groupShadow.children[4] == this.eye_sd3)
      {
          game.world.bringToTop(this.eye_shadow3);
      }
      if(this.groupShadow.children[4] == this.eye_sd4)
      {
          game.world.bringToTop(this.eye_shadow4);
      }
      if(this.groupShadow.children[4] == this.eye_sd5)
      {
          game.world.bringToTop(this.eye_shadow5);
      }
      
  },
  
  changeEyes: function()
  {
    if(this.group1.children[4] == this.eye1)
    {
      game.world.bringToTop(this.test1);
    }
  
/*
    if(this.charContainer.group1.children[4] == this.eye1)
    {
      game.world.bringToTop(this.eyeContainer.children[0]);
    }
    
*/
    
    if(this.group1.children[4] == this.eye2)
    {
      game.world.bringToTop(this.test2);
    }
    if(this.group1.children[4] == this.eye3)
    {
      game.world.bringToTop(this.test3);
    }
    if(this.group1.children[4] == this.eye4)
    {
      game.world.bringToTop(this.test4);
    }
    if(this.group1.children[4] == this.eye5)
    {
      game.world.bringToTop(this.test5);
    }

  },
  Eyes_Hair_Lip: function()
  {
    this.group1.bringToTop(this.group1.children[0]);  // eyes
    this.groupShadow.bringToTop(this.groupShadow.children[0]);  // eye shadow
    this.groupLip.bringToTop(this.groupLip.children[0]); // lip

    this.index_eyes -= 1;
  },
  
   changeCloset: function()
  {
 //   this.skIconGroup.visible = false;
// this.panIconGroup.visible = true;
    for(var i = 1; i < this.cub2Cntainer.length-1; i++)
    {
      this.cub2Cntainer.swapChildren(this.cub2Cntainer.children[i], this.cub2Cntainer.children[i+1]);
      this.cub2Cntainer.children[i].visible = false;
      this.cub2Cntainer.children[i+1].visible = true;
    }
    
    
    
    /*
    this.group1.bringToTop(this.group1.children[0]);
    this.group2.bringToTop(this.group2.children[0]);
    this.group3.bringToTop(this.group3.children[0]);
    this.index_eyes -= 1;
    */
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

