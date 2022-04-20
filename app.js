const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const text = intro.querySelector("h1");
//END SECTION
const section = document.querySelector("#revo");
const end = section.querySelector("h1");

//SCROLLMAGIC
const controller = new ScrollMagic.Controller();

//Scenes
let scene = new ScrollMagic.Scene({
  duration: 3000, //durée de la video
  offset: -59,
  triggerElement: intro,
  triggerHook: 0
})
  .setPin(intro)
  .addTo(controller);

const textAnim = TweenMax.fromTo(text, 3, {opacity:1}, {opacity:0});

let scene2 = new ScrollMagic.Scene({
    duration: 1500,
    triggerElement: intro,
    triggerHook: 0
})
    .setTween(textAnim)
    .addTo(controller);

let accelAmount = 0.3;
let scrollPos =0;
let delay = 0;

scene.on('update', e=> {
    scrollPos = e.scrollPos / 1000;
   
});

setInterval(() => {
    delay += (scrollPos - delay) * accelAmount;
    video.currentTime = delay;
}, 33); // 33.3 = 1s (en ms) /nb fps ds video (ici 1000/30)

