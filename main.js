
var counterbutton=document.querySelectorAll(".drum").length;
    for(var i=0;i<counterbutton; i++){

        document.querySelectorAll(".drum")[i].addEventListener("click",function(){
           
            
        var buttonclick=this.innerHTML;
        savesound(buttonclick);



 
});
} 
   document.addEventListener("keydown", function(event){
    savesound(event.key);
   });


function animation(currentKey){
    
}















function savesound(buttonclick){

    switch (buttonclick) {
        case "w":
            var audio = new Audio("sounds/tom-2.mp3");
                audio.play();
            break;
        case "a":
            var kick = new Audio("sounds/kick-bass.mp3");
                kick.play();
            break;
        case "s":
            var crash = new Audio("sounds/crash.mp3");
                crash.play();
            break;
        case "d":
            var ton1 = new Audio("sounds/tom-1.mp3");
                ton1.play();
            break;
        case "j":
            var ton2 = new Audio("sounds/tom-2.mp3");
                ton2.play();
            break;
        case "k":
            var ton3 = new Audio("sounds/tom-3.mp3");
                ton3.play();
            break;
        case "l":
            var ton4 = new Audio("sounds/tom-4.mp3");
                ton4.play();
            break;
    
        default:
            console.log(" error")
            break;
    }
    



}











    
// var element= document.querySelectorAll(".drum")[0].addEventListener("click",function callback(){
//     console.log("well done")});

    // var elements= document.querySelectorAll(".drum")