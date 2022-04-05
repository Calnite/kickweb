gsap.registerPlugin(ScrollTrigger);

/*
gsap.from('.misery', {
    x: -1000,
    duration: 3,
    scrollTrigger: {
        trigger: '.lookout',
        start: 'center 30%',
        end: 'center 10%',
        scrub: true,
        // if put a value it gets smoother
        toggleActions: 'restart none none none', 
        markers: true, 

    }
})*/


// gsap.to('.box', {x: 500, duration: 5})
// gsap.to('.box', {y: 200, duration: 3, delay: 2})
// gsap.to('.box', {x: 0, duration: 2, delay: 5})

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.lookout',
        start: 'center 60%',
        end: 'center 0',
        scrub: true,
    }
});

tl.to('.lookout', {opacity: 0, duration: 2})
    .to('.lookout', {opacity: 1, duration: 5})
    .to('.lookout', {opacity: 0, duration: 5});

const huh = gsap.timeline({
        scrollTrigger: {
            trigger: '.huh',
            start: 'center 80%',
            end: 'center 0',
            scrub: true,
        }
    });

huh.to('.huh', {opacity: 0, duration: 2})
    .to('.huh', {opacity: 1, duration: 5})
    .to('.huh', {opacity: 0, duration: 5});


gsap.from('.misery', {x:-1400, duration: 10,
    scrollTrigger: {
        trigger: '.misery',
        start: 'top 90%',
        end: 'top 0%',
        scrub: true,
        // if put a value it gets smoother
        toggleActions: 'restart none none none', 
    }
})

gsap.to('.enemy', {x:-1400, duration: 10,
    scrollTrigger: {
        trigger: '.enemy',
        start: 'top 90%',
        end: 'top 0%',
        scrub: true,
        // if put a value it gets smoother
        toggleActions: 'restart none none none',
    }
})

gsap.from('.look', {x:-1400, duration: 10,
    scrollTrigger: {
        trigger: '.look',
        start: 'top 90%',
        end: 'top 0%',
        scrub: true,
        // if put a value it gets smoother
        toggleActions: 'restart none none none', 
    }
})

gsap.to('.ty', {opacity:0, duration: 10,
    scrollTrigger: {
        trigger: '.ty',
        start: 'top 80%',
        end: 'top 40%',
        scrub: true,
        // if put a value it gets smoother
        toggleActions: 'restart none none none', 
    }
})

gsap.from('.bo', {opacity:0, duration: 10,
    scrollTrigger: {
        trigger: '.bo',
        start: 'top 40%',
        end: 'top 0%',
        scrub: true,
        // if put a value it gets smoother
        toggleActions: 'restart none none none', 
    }
})

let st = ScrollTrigger.create({
    trigger: ".char",
    start: "top 20%",
    end: "bottom 0%",
  });

