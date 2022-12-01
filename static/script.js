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
const listItems = document.getElementsByClassName('items')
for (let i = 0; i < listItems.length; i++) {
    new ScrollMagic.Scene({
        triggerElement: listItems[i], // y value not modified, so we can use element as trigger as well
        offset: 400,												 // start a little later
        triggerHook: 10,
    })
        .setClassToggle(listItems[i], "show") // add class toggle
        .addTo(controller);
}

// change the image of certain images
const plateImg = document.querySelector('.plateImage')
const plateImgSrc = 'static/assets/plate-02.svg'
const giftImgSrc = 'static/assets/gift_box-02.svg'
let toggleImg = false
setInterval(() => {
    if (!toggleImg) {
        plateImg.src = giftImgSrc
        currImg = 'giftImg'
        toggleImg = true
    } else {
        toggleImg = false
        plateImg.src = plateImgSrc

    }
}, 2000)

const popUp = document.getElementById('popUp')
const openForm = () => {
    popUp.classList.add('show')
}
const closeForm = () => {
    popUp.classList.remove('show')
}


const here = () => {
    console.log('here')
}