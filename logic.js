const button = document.querySelector('.btn')
const h1 = document.querySelector('h1')
const body = document.body

function pickRandomColor(){
   const red = Math.floor(Math.random() * 256)
   const blue = Math.floor(Math.random() * 256)
   const green = Math.floor(Math.random() * 256)
   const randomColor = `RGB(${red}, ${green} ,${blue})`
   return randomColor
}

 button.addEventListener('click',(e)=>{
   const randomColor =  pickRandomColor();
    h1.textContent =  randomColor
    body.style.backgroundColor = randomColor
//     h1.style.color = pickRandomColor();
  })


