gsap.registerPlugin(ScrollTrigger);
console.log("hoi");


const infoText = new SplitType('.info p:nth-of-type(1), .info p:nth-of-type(2)', { types: 'lines' })
const lines = infoText.lines;

gsap.fromTo(
    lines,
    { 
      y: 100,
      opacity: 0
    },
    {
      y: 0,
      opacity: 1,
      stagger: 0.05,
      duration: 1.5,
      ease: 'power4.out',
    }
  )


 // GSAP animation for .photocard
const photocard = document.querySelector('.photocard');

const photocardTimeline = gsap.timeline({ repeat: -1, repeatDelay: 5 });

photocardTimeline.to(photocard, {
  scale: 0.85,
  rotation: -5,
  duration: 0.35,
})

.to(photocard, {
  scale: 1,
  rotation: 5,
  duration: 0.35,
});

// Hover animation
photocard.addEventListener('mouseenter', () => {
  photocardTimeline.pause(); // Pause the repeating animation on hover
});

photocard.addEventListener('mouseleave', () => {
  photocardTimeline.play(); // Resume the repeating animation on mouse leave
});


const init = () => {
  const marquees = document.querySelectorAll('.marquee');
  
  marquees.forEach(marquee => {
    const marqueeInner = marquee.querySelector('.marquee-inner');
    const marqueeContent = marqueeInner.querySelector('.marquee-inner ul');
    
    // Duration
    const duration = marquee.getAttribute('data-marquee-duration');
    
    // Element Clone
    const marqueeContentClone = marqueeContent.cloneNode(true);
    marqueeInner.appendChild(marqueeContentClone); // Append the clone
    
    // Marquee animation for original content
    gsap.to(marqueeContent, {
      x: "-101%",
      repeat: -1,
      duration: duration,
      ease: 'linear'
    });

    // Marquee animation for cloned content
    gsap.to(marqueeContentClone, {
      x: "-101%",
      repeat: -1,
      duration: duration,
      ease: 'linear'
    });
  });
};

document.addEventListener('DOMContentLoaded', init);


function slideCarousel () {
  const slides = document.querySelectorAll(".projects ul li"); // "slides" carousel
  const slideDatum = document.querySelector(".projects h3") // h3, data events

  const observer = new IntersectionObserver(entries => 
      {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.classList.add("show");
      
                  slideDatum.textContent = entry.target.dataset.date;
                  
              } else {
                  entry.target.classList.remove("show");
              }
          });
      },
      { // percentage of li in threshold
          root: document.querySelector('.projects ul'),

          threshold: 0.5
      }
  )
  
  // observe each slide
  slides.forEach(slide => {
      observer.observe(slide)
  })

 console.log(observer)

}

slideCarousel();
