function scrollTrigger(selector, options = {}) {
    let els = document.querySelectorAll(selector)
    els = Array.from(els)
    els.forEach(el => {
      addObserver(el, options)
    })
  }
  function addObserver(el, options) {
    // Check if `IntersectionObserver` is supported
    if(!('IntersectionObserver' in window)) {
      // Simple fallback
      // The animation/callback will be called immediately so
      // the scroll animation doesn't happen on unsupported browsers
      if(options.cb){
        options.cb(el)
      } else{
        entry.target.classList.add('active')
      }
      return
    }
    let observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          if(options.cb) {
            options.cb(el)
          } else{
            entry.target.classList.add('active')
          }
          observer.unobserve(entry.target)
        }
      })
    }, options)
    observer.observe(el)
  }
  
  // scrollTrigger('#rap-text')
  scrollTrigger('#rap-text', {
    rootMargin: '-200px',
  })

  
  scrollTrigger('.misery', {
    rootMargin: '-200px',
  })

  
  scrollTrigger('.enemy', {
    rootMargin: '-200px',
  })

  
  scrollTrigger('.look', {
    rootMargin: '-200px',
  })

  /*
  scrollTrigger('.loader', {
    rootMargin: '-200px',
    cb: function(el){
      el.innerText = 'Loading...'
      setTimeout(() => {
        el.innerText = 'Task Complete!'
      }, 1000)
    }
  })
  */