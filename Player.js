class Player {
    constructor(){
this.name= null
this.index = 0 
this.distance = 0 
this.rank = null 
}
 getCount(){
     database.ref('playerCount').on("value",function (data){
playerCount=data.val();
     })
 }
updateCount (count){
database.ref('/').update({
    playerCount : count 
})
}
update (){
var playerIndex = "players/player"+player.index;
    database.ref(playerIndex).set({
        name : this.name,
        distance: this.distance  
    
    })
    }
static getPlayerInfo (){
    database.ref('players').on("value",  (data)=>{
allPlayers=data.val()

        
    })
}

    getCarsAtEnd(){
        console.log("get");
        database.ref('CarsAtEnd').on("value", (data)=>{
   this.rank=data.val();
   
        })
    }

static updateCarsAtEnd(rank){
    console.log("update");
    database.ref('/').update({
        CarsAtEnd:rank 
    })
}

}
