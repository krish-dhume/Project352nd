class Form{
    constructor(){



    }
    display(){
        var title=createElement("h2")
        title.html("CarGame")
        title.position(200,200)

        var input=createInput("name")
        var button=createButton("Start")
        var greeting=createElement("h3")
        input.position(200,300)
        button.position(200,350)
        

        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name=input.value();

            playerCount+=1;
            player.update(name);
            player.update(playerCount)

            greeting.html("Hello"+ name)
            greeting.position(130,160)
        });
    }
}