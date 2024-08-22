// --------------------------------------------- welcome animation ----------------------------------------------

const welcomeInR = anime({
    targets: '.welcome .right',
    translateX: ['150%', '0%'],
    easing: 'easeOutCirc',
    duration: 500,
    loop: 1,
    autoplay: false,
    delay: 500,
});

// ------------------------------------------- aboutme animation ----------------------------------------------
const textWrapper = document.querySelector('.aboutMe .aboutMeTitle');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({autoplay: true}).add(
    {
        targets: ".aboutMe .aboutMeTitle .letter",
        opacity: [0,1],
        easing: "easeInOutQuad",
        duration: 500,
        delay: (el, i) => 50 * (i+1)
    }
).add({
    targets: ".aboutMe .aboutMeTitle",
    keyframes: [
        {
            delay: 100,
            fontSize: ["3rem","1.50rem"],
            duration: 300,
            easing: "easeInSine"
        },

    ]
})

anime.timeline({autoplay:true}).add(
    {
        targets: ".aboutMe .aboutMeP",
        delay: 500,
        keyframes: [{
                width: ["0%", "70%"],
                duration: 500,
                easing: "easeInSine"
            },{
                height: ["0%", "70%"],
                duration: 300,
                easing: "easeInSine"
            }
        ]
    }
)

anime({
    targets: '.hexagon',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInCirc',
    duration: 5000,
    loop: 1,
});

// ------------------------------------------ animating MACHIVES SVG --------------------------------------

anime({
    targets: '.machives',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInCirc',
    duration: 2500,
    direction: 'alternate',
    loop: 1,
    complete: welcomeInR.play,
});

anime({
    targets: '.blink',
    keyframes:[
        {
            delay: 1500,
            easing: 'linear',
            opacity: 0,
            direction: 'reverse',
            duration: 100,
        },
        {
            delay: 200,
            easing: 'linear',
            opacity: 100,
            direction: 'reverse',
            duration: 100,
        },
        {
            easing: 'linear',
            opacity: 0,
            direction: 'reverse',
            duration: 100,
        },
        {
            delay: 400,
            easing: 'linear',
            opacity: 100,
            direction: 'reverse',
            duration: 100,
        },
    ],
})

