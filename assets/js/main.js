

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
    trigger: ".fold-scene",
    start: "top 75%",

    markers: false,
    scrub: 1,
  }
})
.to(".left", {
  rotateY: 0,
  duration: 1.4,
  ease: "power3.out"
})
.to(".right", {
  rotateY: 0,
  duration: 1.4,
  ease: "power3.out"
}, "<");