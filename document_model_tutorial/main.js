// Adding Event Listeners.

// var headOne = document.querySelector('#one')
// var headTwo = document.querySelector('#two')
// var headThree = document.querySelector('#three')

// headOne.addEventListener('mouseover', function(){
//     headOne.textContent = "Mouse Currently Over";
//     headOne.style.color = 'red';
// })

// headOne.addEventListener("mouseout", function(){
//     headOne.textContent = "HOVER OVER ME!"
//     headOne.style.color = 'black';
// })

// headTwo.addEventListener("click",function(){
//     headTwo.textContent = 'CLICKED ON';
//     headTwo.style.color = 'blue';
// })

// headThree.addEventListener("dblclick",function(){
//     headThree.textContent = 'I WAS DOUBLE CLICKED!';
//     headThree.style.color = 'yellow';
// })




//Restart Game Button
var restart = document.querySelector('#b')

//Grabs all the squares
var squares = document.querySelectorAll('td')

//Clear all the squares
function clearBoard(){
    for (var i = 0; i < squares.length; i++) {
         squares[i].textContent = '';
        
    }
}

restart.addEventListener('click',clearBoard);

//Check the square marker
//  var cellOne = document.querySelector('#one')

// cellOne.addEventListener("click", function(){
//     if (cellOne.textContent === '') {
//         cellOne.textContent = 'X';
//     }else if (cellOne.textContent === 'X') {
//         cellOne.textContent = 'O'
//     }else {
//         cellOne.textContent = '';
//     }

// })

function changeMaker() {
    if (this.textContent === '') {
        this.textContent = 'X';
    }else if (this.textContent === 'X') {
        this.textContent = 'O'
    }else {
        this.textContent = '';
    }
}

//For loop to add event Listeners to all the squares

for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', changeMaker)
    
}

