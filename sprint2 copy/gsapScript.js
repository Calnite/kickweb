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
        start: 'center 90%',
        end: 'bottom 0',
        scrub: true,
    }
});

tl.to('.lookout', {opacity: 0, duration: 5})
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

huh.to('.huh', {opacity: 0, duration: 3})
    .to('.huh', {opacity: 1, duration: 5})
    .to('.huh', {opacity: 0, duration: 5});


gsap.from('.left', {opacity: 0,x:-100, duration: 10,
    scrollTrigger: {
        trigger: '.left',
        start: 'top 90%',
        end: 'top 20%',
        scrub: true,
        // if put a value it gets smoother
        toggleActions: 'restart none none none', 
    }
})

gsap.from('.right', {opacity: 0,x:100, duration: 10,
    scrollTrigger: {
        trigger: '.right',
        start: 'top 90%',
        end: 'top 20%',
        scrub: true,
        // if put a value it gets smoother
        toggleActions: 'restart none none none', 
    }
})

gsap.from('.left2', {opacity: 0,x:-100, duration: 10,
    scrollTrigger: {
        trigger: '.left2',
        start: 'top 90%',
        end: 'top 20%',
        scrub: true,
        // if put a value it gets smoother
        toggleActions: 'restart none none none', 
    }
})

gsap.from('.right2', {opacity: 0,x:100, duration: 10,
    scrollTrigger: {
        trigger: '.right2',
        start: 'top 90%',
        end: 'top 20%',
        scrub: true,
        // if put a value it gets smoother
        toggleActions: 'restart none none none', 
    }
})

gsap.from('.misery, .look', {x:-1400, duration: 10,
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

gsap.to('.ty2', {opacity:0, duration: 10,
    scrollTrigger: {
        trigger: '.ty2',
        start: 'top 80%',
        end: 'top 40%',
        scrub: true,
        // if put a value it gets smoother
        toggleActions: 'restart none none none', 
    }
})

gsap.from('.bo2', {opacity:0, duration: 10,
    scrollTrigger: {
        trigger: '.bo2',
        start: 'top 40%',
        end: 'top 0%',
        scrub: true,
        // if put a value it gets smoother
        toggleActions: 'restart none none none', 
    }
})


gsap.from('.look1', {opacity:0, duration: 10,
    scrollTrigger: {
        trigger: '.lookbox',
        start: 'top 80%',
        end: 'center 0%',
        scrub: true,
        // if put a value it gets smoother
        toggleActions: 'restart none none none', 
    }
})

gsap.from('.look2', {opacity:0, y:-300, duration: 10,
    scrollTrigger: {
        trigger: '.lookbox',
        start: 'top 40%',
        end: 'top 20%',
        scrub: true,
        // if put a value it gets smoother
        toggleActions: 'restart none none none', 
    }
})

gsap.from('.look3', {opacity:0, y:-200, duration: 10,
    scrollTrigger: {
        trigger: '.lookbox',
        start: 'top 20%',
        end: 'top 0%',
        scrub: true,
        // if put a value it gets smoother
        toggleActions: 'restart none none none', 
    }
})


gsap.to('.end', {opacity:0, y:-100, duration: 10,
    scrollTrigger: {
        trigger: '.end',
        start: 'top 80%',
        end: 'top 20%',
        scrub: true,
        // if put a value it gets smoother
        toggleActions: 'restart none none none', 
    }
})

/*
let st = ScrollTrigger.create({
    trigger: ".char",
    start: "top 20%",
    end: "bottom 0%",
    onUpdate: self => {
        console.log("progress:0", self.progress);
    }
  });

gsap.to('#rap-text', {visibility:visible, duration: 10,
    scrollTrigger: {
        trigger: '.rap-box',
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: true,
        markers:true,
        // if put a value it gets smoother
        toggleActions: 'restart none none none', 
    }
})
*/


