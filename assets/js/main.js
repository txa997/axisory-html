

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


$('[data-mask-image]').each(function() {
    $(this).css('mask-image', 'url('+ $(this).attr('data-mask-image') + ')');
});
gsap.registerPlugin(ScrollTrigger);

gsap.timeline({
  scrollTrigger: {
    trigger: ".as-about-1-fold-scene",
    start: "top 75%",

    markers: false,
    scrub: 1,
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
}, "<");


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
        bsTab.show(); // hover এ tab change
    });

});