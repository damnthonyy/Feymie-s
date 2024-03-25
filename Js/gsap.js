/* gsap.registerPlugin(ScrollTrigger);

const $Acc = document.querySelector("#Accueil");
const $Wrapper = document.querySelector("#wrapper");
const $Propos = document.querySelector("#A-propos");
const $a = document.querySelectorAll("#scrollY");


gsap.to($Wrapper, {
    y: "+=-100vh",
    scrollTrigger: {
        trigger: $Acc,
        markers: false,
        start: "20%; 20%",
        end: "55%; 45%",
        scrub: 2,
        toggleActions: "play reverse play reverse",

    }
})

gsap.to($a, {
    color: "black",
    scrollTrigger: {
        trigger: $Acc,
        start: "20%; 20%",
        markers: false,
        end: "20%",
        duration: "1s",
        toggleActions: "play none reverse none",
    }
}
) */
