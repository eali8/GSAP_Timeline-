
// set initial position

    gsap.set(".girl",{x:500}); 
    gsap.set("#h1", {scale:0.9});

    const h1 = new SplitType('#h1')
    gsap.to('.char', {y:0, stagger:0.05, delay: 0.3, duration: .5});

 //controller

    var anim = gsap.to(".girl", {x:-500, duration:4, paused:true, repeat:-1,}); 
    var playBtn=document.querySelector("#play"); 
    var pauseBtn=document.querySelector("#pause"); 
    var reverseBtn=document.querySelector("#reverse"); 
    var restartBtn=document.querySelector("#restart"); 

    playBtn.onclick = function(){anim.play()}; 
    pauseBtn.onclick = function(){anim.pause()}; 
    reverseBtn.onclick = function(){anim.reverse()}; 
    restartBtn.onclick = function(){anim.restart()}; 

 // timeline 
 
 gsap.timeline()
 .from(".girl", {duration:0.5, opacity:0})
 .from("#h1", {opacity:0, scale:0, ease:"back"})
 .from(".btn", {y:160, stagger:0.1, duration:0.8, ease:"back"})
