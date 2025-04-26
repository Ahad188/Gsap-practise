// console.log("hello Gsap")


let tl = gsap.timeline()
 tl.from(".logo ",{
     y:-40,
     opacity:0,
     duration:1.5,
     delay:0.5,
     stagger:0.3,
 })
 tl.from(".menu li ",{
     y:-40,
     opacity:0,
     duration:0.5,
     delay:0,
     stagger:.2,
 })
// banner section animation
tl.from(".banner-left h3",{
     x:-500,
     duration:1.2,
     // delay:0.1,
     opacity:0,
},"anim")
tl.from(".banner-left p",{
     y:200,
     duration:1.2,
     delay:0,
     opacity:0,
},"anim")
tl.to(".banner-left #btn",{
     x:0,
     duration:1.2,
     // delay:.2,
     opacity:1,
},'anim')
tl.from(".banner-right .img",{
     x: 900,          // From left side
     opacity: 1,
     duration: 1.7,
     // delay: 1,
     
},'anim')
// page 2
gsap.from("#page2 .box2",{
     scale:0,
     duration:1,
     opacity:0,
     rotate:360,
     scrollTrigger: {
          trigger: "#page2 .box2",
          scroll:"body",
          markers: true,
          start: "top 80%"
      }
})





























// gsap.to("#box1",{
//      x:900,
//      duration:2,
//      delay:2,
//      rotate:360,
//      backgroundColor:"blue",
// })
// gsap.from("#box2",{
//      x:900,
//      duration:2,
//      delay:2,
//      rotate:360,
//      borderRadius:"50%",
//      yoyo: true,
//      repeat:1
// })

// gsap.from("h1",{
//      y:30,
//      x:50,
//      color:"white",
//      opacity:0,
//      duration:2,
//      delay:1,
//      color:"white",
//      stagger:-1,
//      repeat:-1
// })

// var tl = gsap.timeline();

// tl.to("#box4",{
//      x:900,
//      duration:1,
//      delay:1.2,
// })

     