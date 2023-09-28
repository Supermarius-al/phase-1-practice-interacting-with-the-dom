let minusButton = document.getElementById("minus");
let plusButton = document.getElementById("plus");
let heartButton = document.getElementById("heart");
let pauseButton = document.getElementById("pause");
let counter = document.getElementById('counter')
let likes = document.querySelector('.likes')
let number = 0;
function counting (){
    counter.innerHTML = number
    number++
    return number
};
addNumber = setInterval(counting, 1000)
addNumber()

let pauseFtn = function (){
    if (pauseButton.innerText == 'pause') {
                clearInterval(nIntervId)   
                pauseButton.innerText = 'resume'
            }
    else if (pauseButton.innerText == 'resume') {
            addNumber()
            pauseButton.innerText = 'pause'}
}

addNumber = setInterval(counting, 1000)

//let clickCounter = (heartButton) =>{




//let pausing = (pauseButton) =>{
  //  pauseButton.innerText = "pause" ? (pauseButton.innerText ="resume", clearInterval(counting)) : (pauseButton.innerText = ////"pause", setInterval(counting(), 1000))}


minusButton.addEventListener("click", () => {
    Number(count)
    count--
    toString(count)
    counter.innerHTML = count;
    })
plusButton.addEventListener("click", () => {
    Number(count)
    count++
    toString(count)
    counter.innerHTML = count})
heartButton.addEventListener("click", () => {
    let likeAmount = 1
    let liked = document.createElement('li')
    liked.innerHTML = `${count} has been liked ${likeAmount} times`
    likes.appendChild(liked)
}
)
pauseButton.addEventListener("click", () => pauseFtn())
document.addEventListener("DOMContentLoaded", () => {})


