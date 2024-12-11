gsap.registerPlugin(ScrollTrigger)

const spanOne = document.querySelectorAll(".line-one span")
const spanO = document.querySelector(".line-two span:first-child")
const spanR = document.querySelector(".line-two span:last-child")
const spanTwo = document.querySelectorAll(".line-two span")
const spanThree = document.querySelectorAll(".line-three span")

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".line-one",
        start: "center center",
        pin: true,
        endTrigger: ".container",
        end: "bottom bottom",
        scrub: 1,
    }})
tl.from(spanOne,{y: "100vh", duration: 1, stagger: 0.2})
tl.to(".line-one", {backgroundColor: "yellow", duration: 1})
tl.from(".sun", {x: "100vw", duration: 1})
tl.to(spanOne, {x: "100vw", duration: 1, delay: 1})
tl.to(".sun", {x: "-100vw", duration: 1}, "<")
tl.to(".line-one", {backgroundColor: "white", duration: 1}, "<")

const tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".line-two",
        start: "center, top",
        pin: true,
        endTrigger: ".container",
        end: "bottom bottom",
        scrub: 1
    }
})
tl2.from(spanO, {scale: 20, x: "-100vw", duration: 1})
tl2.from(spanR, {scale: 20, x: "100vw", duration: 1}, "<")
tl2.to(spanTwo, {y: -20, duration: 1, stagger: 0.8})
tl2.to(spanTwo, {y: 0, duration: 1, stagger: 0.8}, "-=0.8")

const tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".line-three",
        start: "center center",
        pin: true,
        scrub: 1
    }
})
tl3.from(spanThree, {y: "100vh",duration: 1, stagger: 0.2})
tl3.to(".line-three", {backgroundPositionX: 0, color: "white", duration: 1})
tl3.from(".moon", {x: "100vw", duration: 1}, "-=1")


