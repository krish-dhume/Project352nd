class Player{
    constructor(){

    }
    getCount(){
        var playerCountRef=database.ref("playercount");
        playerCountRef.on("value",function(data){
             playerCount=data.val();
        })

        

        
    }
    updateCount(){
        database.ref("/").update({
         playerCount:count
        })
    }

     update(){
         var playerIndex="player" + playerCount;
         database.ref(playerIndex).set({
             name:name
         });
     }   
    
}