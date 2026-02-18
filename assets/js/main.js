window.addEventListener('load', function(){ 

    // title-animation
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

    // button-animation
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


    // hero-1-animation
    const asHero4 = gsap.timeline(); 
    asHero4.from(".as-hero-1-img img", {
        transformOrigin: "100% 50%",
        rotateX: -10, 
        rotateY: 75,
        delay: 1,
        duration: 1.5,
    });
    asHero4.to(".as-hero-1-bg-img img", {
        scale: 1.2,
        duration: 15,
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

    /* 
		add-active-class
	*/
	const waAddClass = gsap.utils.toArray('.wa_add_class');
	waAddClass.forEach(waAddClassItem => {
		gsap.to(waAddClassItem, {
			scrollTrigger: {
				trigger: waAddClassItem,
				start: "top 90%",
				end: "bottom bottom",
				toggleActions: "play none none reverse",
				toggleClass: "active",
				once: true,
				markers: false,
			}
		});
	});


    
    // hero-2-slider
    if ($('.as_hero2_slider').length) {
        var as_hero2_slider = new Swiper(".as_hero2_slider", {
            loop: true,
            speed: 400,
            spaceBetween: 0,

            // autoplay: {
            // 	delay: 5000,
            // },


        });

    }

})


// about-1-img-animation
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


// achieve-1-circle
let asAh1circle = gsap.timeline({
	scrollTrigger: {
		trigger: ".as-achieve-1-award ",
        start: "top 70%",
		toggleActions: "play none none reverse",
		markers: false,
	},
});

asAh1circle.from(".as-achieve-1-award .bg-shape-2 img", { 
    rotate: 90,
    duration: 2,
});

// achieve-1-shape
let asAh1shpe = gsap.timeline({
	scrollTrigger: {
		trigger: ".as-achieve-1-projects ",
        start: "top 70%",
		toggleActions: "play none none reverse",
		markers: false,
	},
});

asAh1shpe.from(".as-achieve-1-projects .img-elm-single-clr", { 
    yPercent: 100,
    duration: 1,
});
asAh1shpe.from(".as-achieve-1-projects .img-elm-single", { 
    yPercent: 100,
    duration: 1,
},"<50%");




// achieve-1-bg-shape
let asAchiBgShape = gsap.timeline({
	scrollTrigger: {
		trigger: ".as-achieve-1-bg-img",
		toggleActions: "play none none reverse",
        scrub: true,
		markers: false,
	},
});
asAchiBgShape.from(".as-achieve-1-bg-img img", { 
    yPercent: -40,
});

// footer-1-shape
let asFooter1shape = gsap.timeline({
	scrollTrigger: {
		trigger: ".as-footer-1-favicon",
		toggleActions: "play none none reverse",
        scrub: true,
		markers: false,
	},
});

asFooter1shape.from(".as-footer-1-favicon img", { 
    yPercent: -100,
});

// footer-1-btn
let asFooter1Btn = gsap.timeline({
	scrollTrigger: {
		trigger: ".as-footer-1-lets-btn-ani",
		toggleActions: "play none none reverse",
		markers: false,
	},
});

asFooter1Btn.from(".as-footer-1-lets-btn-ani", { 
    duration:2.5,
    ease: "elastic.out(1,0.3)",
    scale: 0,
});

// faqs-big-title
let asFaqs1 = gsap.timeline({
	scrollTrigger: {
		trigger: ".as-faqs-1-big-title",
        end: "top 60%", 
		toggleActions: "play none none reverse",
        scrub: true,
		markers: false,
	},
});

asFaqs1.from(".as-faqs-1-big-title", { 
    y: 200,
});





// team-1-slider
if ($('.as_t1_slider').length) {
	var as_t1_slider = new Swiper(".as_t1_slider", {
		loop: true,
		speed: 400,
		spaceBetween: 0,
		slidesPerView: 4,

		// autoplay: {
		// 	delay: 5000,
		// },

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


// services-1-tabs-btn
document.querySelectorAll('.as-services-1-tabs-btn .nav-link')
.forEach(tab => {

    tab.addEventListener('mouseenter', function () {
        const bsTab = new bootstrap.Tab(this);
        bsTab.show();
    });

});



// projects-1-slider
if ($('.as_p1_slider_preview').length) {

	let as_p1_slider_preview = new Swiper('.as_p1_slider_preview', {
		speed: 1000,
	});
  
	let as_p1_slider_main = new Swiper('.as_p1_slider_main', {
		speed: 1000,

        navigation: {
			nextEl: ".as_p1_slider_main_next",
			prevEl: ".as_p1_slider_main_prev",
		},

		thumbs: {
			swiper: as_p1_slider_preview,
		},
	});
  
}
 




if($(".as-testimonial-1-card-all").length) {
    function initStackCards() {

        const container = document.querySelector('.as-testimonial-1-card-all');
        const cards = container.querySelectorAll('.as-testimonial-1-card-single');
    
        const offset = 44; // gap between cards
        const baseHeight = cards[0].offsetHeight;
        let maxHeight = 0;
    
    
        cards.forEach((card, index) => {
            card.style.bottom = `${index * offset}px`;
    
            // optional: different background shade
            // const darkness = 15 + (index * 8);
            // card.style.backgroundColor = `rgb(${darkness}, ${darkness}, ${darkness + 10})`;
    
            const cardHeight = card.offsetHeight;
            if (cardHeight > maxHeight) {
                maxHeight = cardHeight;
            }
    
            card.style.zIndex =  index;
        });
    
        const totalHeight = baseHeight + (cards.length - 1) * offset;
    
        container.style.height = totalHeight + 'px';
    }
    
    window.addEventListener('load', initStackCards);
    window.addEventListener('resize', initStackCards);
}






/* 
    data-mask-image
*/
$('[data-mask-image]').each(function() {
    $(this).css('mask-image', 'url('+ $(this).attr('data-mask-image') + ')');
});


/* 
    add-class-remove-class
*/
$(document).on('click', '.wa_toggle_active', function () {

	if ($(this).hasClass('active')) {
		$(this).removeClass('active');
	} else {
		$(this).addClass('active').siblings().removeClass('active');
	}

});


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


if ($(".as-testimonial-1-card-single").length) {
    const cards = document.querySelectorAll('.as-testimonial-1-card-single');
    const upBtn = document.querySelector('.up-button');
    const downBtn = document.querySelector('.down-button');
    let currentIndex = cards.length - 1;
    upBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            cards[currentIndex].style.transform = 'translateY(-150%)';
            currentIndex--;
        }
    });
    downBtn.addEventListener('click', () => {
        if (currentIndex < cards.length - 1) {
            currentIndex++;
            cards[currentIndex].style.transform = 'translateY(0%)';
        }
    });
}


// price-1-class
if($(".wa_hover_class_toggle").length) {
    const wa_hover_class = document.querySelectorAll(".wa_hover_class_toggle");
    const defaultActive = document.querySelector(".wa_hover_class_toggle.active");
    wa_hover_class.forEach(card => {
        card.addEventListener("mouseenter", function () {
            wa_hover_class.forEach(c => c.classList.remove("active"));
            this.classList.add("active");
        });
        card.addEventListener("mouseleave", function () {
            wa_hover_class.forEach(c => c.classList.remove("active"));
            if (defaultActive) {
                defaultActive.classList.add("active");
            }

        });
    });
};

// choose-1-class
if($(".as-choose-1-features-single").length) {
    const ch1_hover_class = document.querySelectorAll(".as-choose-1-features-single");
    const ch1_defaultActive = document.querySelector(".as-choose-1-features-single.active2");
    ch1_hover_class.forEach(card2 => {
        card2.addEventListener("mouseenter", function () {
            ch1_hover_class.forEach(c => c.classList.remove("active2"));
            this.classList.add("active2");
        });
        card2.addEventListener("mouseleave", function () {
            ch1_hover_class.forEach(c => c.classList.remove("active2"));
            if (ch1_defaultActive) {
                ch1_defaultActive.classList.add("active2");
            }

        });
    });
};


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
