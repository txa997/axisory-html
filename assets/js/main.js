window.addEventListener('load', function(){ 

    function wa_split_text() {

        var wa_st = $(".wa-split-text");
        if (wa_st.length === 0) return;
    
        gsap.registerPlugin(SplitText, ScrollTrigger);
    
        wa_st.each(function (index, wa_el) {
    
            var wa_els = wa_el;
    
            const wa_split = new SplitText(wa_els, {
                type: "lines, words, chars",
                lineThreshold: 0.5,
                linesClass: "split-line",
            });
    
            var split_type_set = wa_split.chars;
    
            gsap.set(wa_els, { perspective: 400 });
    
            var settings = {
                scrollTrigger: {
                    trigger: wa_els,
                    toggleActions: "play none none none",
                    start: "top 86%",
                    once: true,
                },
                duration: 0.35,
                stagger: 0.02,
                ease: "expo.out",
            };
    
            if ($(wa_el).hasClass("split-in-fade")) {
                settings.opacity = 0;
            }
            if ($(wa_el).hasClass("split-in-right")) {
                settings.opacity = 0;
                settings.x = 50;
            }
            if ($(wa_el).hasClass("split-in-left")) {
                settings.opacity = 0;
                settings.x = -50;
            }
            if ($(wa_el).hasClass("split-in-up")) {
                settings.opacity = 0;
                settings.y = 80;
            }
            if ($(wa_el).hasClass("split-in-down")) {
                settings.opacity = 0;
                settings.y = -80;
            }
            if ($(wa_el).hasClass("split-in-rotate")) {
                settings.opacity = 0;
                settings.rotateX = 50;
            }
            if ($(wa_el).hasClass("split-in-scale")) {
                settings.opacity = 0;
                settings.scale = 0.5;
            }
    
            if ($(wa_el).hasClass("split-up")) {
    
                wa_split.split({ type: "words" });
                split_type_set = wa_split.words;
    
                $(split_type_set).each(function (i, elw) {
                    gsap.from(elw, {
                        opacity: 0,
                        duration: 0.65,
                        y: 40,
                        rotate: 10,
                        transformOrigin: "bottom right",
                        filter: "blur(5px)",
                        delay: 0.25 + i * 0.065,
                        ease: "expo.out",
                        scrollTrigger: {
                            trigger: wa_el,
                            start: "top 86%",
                            toggleActions: "play none none none",
                        },
                    });
                });
    
            }
            else if ($(wa_el).hasClass("split-words-scale")) {
    			let atDelay = parseFloat(wa_el.getAttribute("data-delay")) || 0;

                wa_split.split({ type: "words" });
                split_type_set = wa_split.words;
    
                gsap.set(split_type_set, {
                    opacity: 0,
                    scale: (i) => (i % 2 === 0 ? 0 : 2),
                    force3D: true,
                });
    
                gsap.to(split_type_set, {
                    scrollTrigger: {
                        trigger: wa_el,
                        toggleActions: "play reverse play reverse",
                        start: "top 86%",
                    },
                    rotateX: 0,
                    scale: 1,
                    opacity: 1,
                    stagger: 0.03,
                    delay: atDelay,
                });
    
            }
            else {
                var wa_anim = gsap.from(split_type_set, settings);
    
                if ($(wa_el).hasClass("hover-split-text")) {
                    $(wa_el).on("mouseenter", function () {
                        wa_anim.restart();
                    });
                }
            }
    
        });
    }
    wa_split_text();


    const asHero4 = gsap.timeline(); 
    asHero4.from(".as-hero-1-img img", {
        transformOrigin: "100% 50%",
        rotateX: -10, 
        rotateY: 75,
        delay: 1,
        duration: 1.5,
    });
    asHero4.from(".as-hero-1-bg-img img", {
        scale: 1.3,
        duration: 1.5,
    },"<");

    const asHeroScroll4 = gsap.timeline({
        scrollTrigger: {
            trigger: ".as-hero-1-area",
            start: "top 0%",
            end: "top -50%",
            scrub: true,
            markers: false,
        }
    }); 
    asHeroScroll4.to(".as-hero-1-img", {
        yPercent: 10, 
    });


})



let asAbout1img = gsap.timeline({
    scrollTrigger: {
      trigger: ".as-about-1-fold-scene",
      start: "top 70%",
      end: "bottom 80%",
      scrub: 1,
      markers: false,
    }
})
.to(".as-about-1-fold-scene .left", {
    rotateY: 0,
    duration: 1.4,
    ease: "power3.out"
})
.to(".as-about-1-fold-scene .right", {
    rotateY: 0,
    duration: 1.4,
    ease: "power3.out"
}, "<")
.from(".as-about-1-fold-scene-line", {
    scaleX: 0,
    duration: 1.4,
    ease: "power3.out"
}, "<")
.from(".as-about-1-progress", {
    yPercent: 10,
    opacity: 0,
    duration: 1,
},"<50%");




if ($('.as_t1_slider').length) {
	var as_t1_slider = new Swiper(".as_t1_slider", {
		loop: true,
		speed: 400,
		spaceBetween: 0,
		slidesPerView: 4,

		autoplay: {
			delay: 5000,
		},

		navigation: {
			nextEl: ".as_t1_slider_next",
			prevEl: ".as_t1_slider_prev",
		},


		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 3,
			},
			1200: {
				slidesPerView: 3,
			},
			1400: {
				slidesPerView: 4,
			},
			1600: {
				slidesPerView: 4,
			},

		},

	});

}







/* 
    marquee-left-nopause
*/

$('.wa_marquee_left_nopause').marquee({
	speed: 20,
	gap: 0,
	delayBeforeStart: 0,
	startVisible:true,
	direction: 'left',
	duplicated: true,
	pauseOnHover: false,
})

$('.wa_marquee_right_nopause').marquee({
	speed: 20,
	gap: 0,
	delayBeforeStart: 0,
	startVisible:true,
	direction: 'right',
	duplicated: true,
	pauseOnHover: false,
})


$('[data-mask-image]').each(function() {
    $(this).css('mask-image', 'url('+ $(this).attr('data-mask-image') + ')');
});





$(document).on('click', '.wa_toggle_active', function () {

	if ($(this).hasClass('active')) {
		$(this).removeClass('active');
	} else {
		$(this).addClass('active').siblings().removeClass('active');
	}

});


document.querySelectorAll('.as-services-1-tabs-btn .nav-link')
.forEach(tab => {

    tab.addEventListener('mouseenter', function () {
        const bsTab = new bootstrap.Tab(this);
        bsTab.show();
    });

});








/* 
    button-animation
*/
if ($(".wa_btn_split_1").length) {
    var wa_btn_split_1 = $(".wa_btn_split_1");
    gsap.registerPlugin(SplitText);

    wa_btn_split_1.each(function (index, el) {
        el.split = new SplitText(el, {
            type: "words,chars",
        });

        $(el).on("mouseenter", function () {
            el.split.chars.forEach((char, i) => {

                gsap.fromTo(
                    char,
                    { x: 10, opacity: 0, },
                    {
                        x: 0,
                        opacity: 1,
                        duration: 0.4,
                        ease: "power2.out",
                        delay: i * 0.03
                    }
                );
            });
        });
    });
}





/* 
	faqs-active-class
*/
$(document).on('click', '.wa_accordion_item', function () {

	if ($(this).hasClass('active')) {
		$(this).removeClass('active');
	} else {
		$(this).addClass('active').siblings().removeClass('active');
	}

});







const cards = document.querySelectorAll('.testimonial-card');
const upBtn = document.getElementById('upBtn');
const downBtn = document.getElementById('downBtn');

let currentIndex = 0;

// Up button click
upBtn.addEventListener('click', () => {
  if (currentIndex < cards.length) {
    cards[currentIndex].style.transform = 'translateY(-100%)';
    currentIndex++;
  }
});

// Down button click
downBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    cards[currentIndex].style.transform = 'translateY(0%)';
  }
});
