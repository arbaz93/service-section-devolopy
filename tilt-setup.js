const tiltItems = document.querySelectorAll('.services-container .item');

console.log(tiltItems)
const tiltConfig = {
    max: 6,
    speed: 10,
    transition: true,
    reverse: true
}
tiltItems.forEach(item => {
    VanillaTilt.init(item, tiltConfig)
})