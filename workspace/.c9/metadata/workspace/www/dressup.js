{"changed":true,"filter":false,"title":"dressup.js","tooltip":"/www/dressup.js","value":"\n\nvar game = new Phaser.Game(480, 320, Phaser.AUTO, '', {\n  preload: function(){\n    this.scale.pageAlignHorizontally = true;\n    this.game.load.image('hueso', huesoURI);\n    this.game.load.image('flecha', flechaURI);\n  },\n  create: function(){\n    this.game.physics.startSystem(Phaser.Physics.ARCADE);\n    this.hueso = this.game.add.sprite(this.game.world.centerX, this.game.world.height, 'hueso');\n    this.hueso.anchor.setTo(0.5, 1);\n    this.game.physics.arcade.enable(this.hueso);\n    this.hueso.tint= 0xff00ff;\n    \n    this.huesoCopy = this.game.add.sprite(this.game.world.centerX, 0, this.hueso.key, this.hueso.frame);\n    this.huesoCopy.anchor.x = 0.5;\n    this.game.physics.arcade.enable(this.huesoCopy);\n    this.huesoCopy.inputEnabled = true;\n    this.huesoCopy.input.enableDrag();\n    this.huesoCopy.originalPosition = this.huesoCopy.position.clone();\n    this.huesoCopy.events.onDragStop.add(function(currentSprite){\n      this.stopDrag(currentSprite, this.hueso);\n    }, this);\n    \n    this.flecha = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'flecha');\n    this.flecha.anchor.set(0.5);\n  },\n  stopDrag: function(currentSprite, endSprite){\n    if (!this.game.physics.arcade.overlap(currentSprite, endSprite, function() {\n    currentSprite.input.draggable = false;\n    currentSprite.position.copyFrom(endSprite.position); \n    currentSprite.anchor.setTo(endSprite.anchor.x, endSprite.anchor.y); \n  })) { currentSprite.position.copyFrom(currentSprite.originalPosition);\n  }\n  }\n});","undoManager":{"mark":0,"position":2,"stack":[[{"start":{"row":0,"column":0},"end":{"row":34,"column":3},"action":"insert","lines":["var game = new Phaser.Game(480, 320, Phaser.AUTO, '', {","  preload: function(){","    this.scale.pageAlignHorizontally = true;","    this.game.load.image('hueso', huesoURI);","    this.game.load.image('flecha', flechaURI);","  },","  create: function(){","    this.game.physics.startSystem(Phaser.Physics.ARCADE);","    this.hueso = this.game.add.sprite(this.game.world.centerX, this.game.world.height, 'hueso');","    this.hueso.anchor.setTo(0.5, 1);","    this.game.physics.arcade.enable(this.hueso);","    this.hueso.tint= 0xff00ff;","    ","    this.huesoCopy = this.game.add.sprite(this.game.world.centerX, 0, this.hueso.key, this.hueso.frame);","    this.huesoCopy.anchor.x = 0.5;","    this.game.physics.arcade.enable(this.huesoCopy);","    this.huesoCopy.inputEnabled = true;","    this.huesoCopy.input.enableDrag();","    this.huesoCopy.originalPosition = this.huesoCopy.position.clone();","    this.huesoCopy.events.onDragStop.add(function(currentSprite){","      this.stopDrag(currentSprite, this.hueso);","    }, this);","    ","    this.flecha = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'flecha');","    this.flecha.anchor.set(0.5);","  },","  stopDrag: function(currentSprite, endSprite){","    if (!this.game.physics.arcade.overlap(currentSprite, endSprite, function() {","    currentSprite.input.draggable = false;","    currentSprite.position.copyFrom(endSprite.position); ","    currentSprite.anchor.setTo(endSprite.anchor.x, endSprite.anchor.y); ","  })) { currentSprite.position.copyFrom(currentSprite.originalPosition);","  }","  }","});"],"id":1}],[{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"insert","lines":["",""],"id":2}],[{"start":{"row":1,"column":0},"end":{"row":2,"column":0},"action":"insert","lines":["",""],"id":3}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":2,"column":0},"end":{"row":2,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1503067839957}