

// alert("Nakul");
for (i = 0; i <= 6; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;
makeSound(buttonInnerHTML);
buttonAnimation(buttonInnerHTML);
  });
}

document.addEventListener("keypress",function(event){
  makeSound(event.key);
  buttonAnimation(event.key);
})

function makeSound(key){

  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      var kickbass = new Audio("sounds/kick-bass.mp3");
      kickbass.play();
      break;

    default: console.log(buttonInnerHTML);

  }
};

function buttonAnimation(currnetKey){

  var activeButton= document.querySelector("."+currnetKey);
  activeButton.classList.add("pressed");

setTimeout(function(){activeButton.classList.remove("pressed")},1000);
};
//
// var houseKeeper1 ={
// name: ,
// age: 24,
// gender: "F",
// workExperience: "8 years",
// typeOfCleaning: ["Mopping","bathroom","kitchen"],
// expectedSalary: 15000,
// }

//
// function ApniHaveli(members,caste,adults,kidoo){
//   this.members= members;
//   this.caste= caste;
//   this.adults= adults;
//   this.kidoo= kidoo;
//   this.maid= function(){
//     alert("hi I'm Veena.")}
//   }
// ;
//
// var banaHaveli= new ApniHaveli("8 members","Rajput",5,4);
// banaHaveli.maid();
