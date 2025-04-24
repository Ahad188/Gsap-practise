console.log("hello Gsap")

gsap.to("#box1",{
     x:900,
     duration:2,
     delay:2,
     rotate:380,
     backgroundColor:"blue",
})
gsap.from("#box2",{
     x:900,
     duration:2,
     delay:2,
     rotate:360,
     borderRadius:50,
     yoyo: true,
     repeat:1
})

gsap.from("h1",{
     y:30,
     x:50,
     color:"white",
     opacity:0,
     duration:2,
     delay:1,
     color:"white",
     stagger:-1,
     repeat:-1
})