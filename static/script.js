window.onload = () => {

    const controller = new ScrollMagic.Controller();
    TweenLite.defaultEase = Linear.easeNone;
    const tl = new TimelineMax()
    tl.from("section.panel.benefits__CashBack", 1, { y: "-100%" }, { y: "0%", ease: Linear.easeNone })
    tl.from("section.panel.benefits__Mobile", 1, { xPercent: -100 })
    tl.from("section.panel.ending_benefits", 1, { xPercent: 100 })


    new ScrollMagic.Scene({
        triggerElement: "#container",
        triggerHook: "onLeave",
        duration: "700%"
    })
        .setPin("#container")
        .setTween(tl)
        // .addIndicators({
        // colorTrigger: "white",
        // colorStart: "white",
        // colorEnd: "white",
        //     indent: 40
        // })
        .addTo(controller);

    // change the image of certain images
    const plateImg = document.querySelector('.plateImage')
    const plateImgSrc = new Image()
    plateImgSrc.src = 'static/assets/plate-02.svg'
    const giftImgSrc = new Image()
    giftImgSrc.src = 'static/assets/gift_box-02.svg'
    let toggleImg = false
    setInterval(() => {
        if (!toggleImg) {
            plateImg = giftImgSrc
            currImg = 'giftImg'
            toggleImg = true
        } else {
            toggleImg = false
            plateImg = plateImgSrc

        }
    }, 2000)



}