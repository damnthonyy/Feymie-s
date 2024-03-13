gsap.registerPlugin(ScrollTrigger);

const $Acc = document.querySelector("#Accueil");
const $Propos = document.querySelector("#A-propos");

gsap.to($Propos, {
    y: "+=-100vh",
    scrollTrigger: {
        trigger: $Acc,
        /* markers: true, */
        start: "30%; 20%",
        end: "60%; 45%",
        scrub: 2,
        toggleActions: "play reverse play reverse",

    }
})

