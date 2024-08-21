anime({
    targets: '.machives',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInCirc',
    duration: 2500,
    direction: 'alternate',
    loop: 1,
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
