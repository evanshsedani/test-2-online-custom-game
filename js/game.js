class Game {
    constructor(){}
  //goto firebase and fetch value of the child gamestate
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  //gp to firebase and fetch value of playercount
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
          
               }
        form = new Form()
        form.display();
      }
      play1 = createSprite(250, 300)
      play2 = createSprite(400, 400)
      play3 = createSprite(300, 300)
      play4 = createSprite(200, 200)
      play1.addImage(car1)
      play2.addImage(car2)
      play3.addImage(car3)
      play4.addImage(car4)
      cars = [play1, play2, play3, play4] 
    }
  
    play()
    { form.hide();
      
        background(map);
      for(var plr in allPlayers){
          //add 1 to the index for every loop
          index = index + 1 ;
                  
          //position the cars a little away from each other in x direction
          x = x + 200;
          y = displayHeight - allPlayers[plr].distance;
            cars[index-1].x = x;
            cars[index-1].y = y;
      
              if (index === player.index)
              {
                
                 camera.position.x = displayWidth/2;
              camera.position.y = cars[index-1].y; } 
    
              //textSize(15);
                //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position) 
              }
    if(keyIsDown(DOWN_ARROW) && player.index !== null)
    { player.distance -=10
    player.update(); } 
drawSprites();
                }}
              