let tl1 = gsap.timeline(
    {
        scrollTrigger:{
            trigger:'.main',
            start:'13% 50%',
            end:'25% 50%',
            scrub:true,
            markers:false
        }
    }
);
let tl2 = gsap.timeline(
    {
        scrollTrigger:{
            trigger:'.main',
            start:'32% 50%',
            end:'45% 50%',
            scrub:true,
            markers:false
        }
    }
);
let tl3 = gsap.timeline(
    {
        scrollTrigger:{
            trigger:'.main',
            start:'56% 50%',
            end:'70% 50%',
            scrub:true,
            markers:false
        }
    }
);
let tl4 = gsap.timeline(
    {
        scrollTrigger:{
            trigger:'.main',
            start:'74% 50%',
            end:'90% 50%',
            scrub:true,
            markers:false
        }
    }
);
let tl5 = gsap.timeline(
    {
        scrollTrigger:{
            trigger:'.main',
            start:'78% 50%',
            end:'85% 50%',
            scrub:true,
            markers:false
        }
    }
);

tl1.to(
    '.one',
    {
        scale:'0.5'
    }
)

tl2.to(
    '.two',{
        scale:'0.4'
    }
)

tl3.to(
    '.three',{
        scale:'0.5'
})

tl4.to(
    '.four',{
        scale:'0.5',
    }
)

tl5.from('.five',{
    marginLeft:'200%'
})