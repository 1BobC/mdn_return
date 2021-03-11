
//number input
const input = document.querySelector('.numberInput');
const para = document.querySelector('p');

function squared(num) {
    return num * num;
}
    function cubed(num) {
        return num * num * num;
}
     function factorial(num) {
        if(num <  0) return undefined;
        if(num == 0) return 1;
        let x= num -1;
        while (x > 1) {
            num *= x;
            x--;
        }
         return num;
      }

input.onchange= function(){
    const num= input.value;
    if (isNaN(num)) {
        para.textContent= "You'll need to enter a number!";    
    }else{
        para.textContent= '  ' + num + ' squared = ' + squared(num) + '.' +
        '  ' + num + ' cubed = ' + cubed (num) + '.' +
        '  ' + num + ' factorial = ' + factorial(num) + '.';
    }
}

//What are return values?
// let myText= "The weather is brightening up!";
// let newString= myText.replace("brightening up!", "dulling down.");  //replace takes a string function
// console.log(newString);     //newString is the returned value when function completes running 

//Random canvas circles
// const btn= document.querySelector('button');
// const canvas= document.querySelector('canvas');
// const ctx= canvas.getContext('2d');

// let WIDTH= document.documentElement.clientWidth;
// let HEIGHT= document.documentElement.clientHeight;

// canvas.width= WIDTH;
// canvas.height= HEIGHT;

// function random(number) {
//     return Math.floor(Math.random()*number);
// }

// function draw() {
//     ctx.clearRect(0, 0, WIDTH, HEIGHT);
//     for(let i = 0; i < 100; i++) {
//         ctx.beginPath();
//         ctx.fillStyle= 'rgba(255, 0, 0, 0.5)';
//         ctx.arc(random(WIDTH), random(HEIGHT), random(75), 0, 2 * Math.PI);
//         ctx.fill();
//     }
// }
//     btn.addEventListener('click', draw);

