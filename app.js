let year = document.querySelector('input').value

function entered() {
    if (year % 100 !=0 && year % 4 == 0) {
    alert(`Your entered year ${year} is a Leap Year!`)
} else if (year % 400 == 0) {
    alert(`Your entered year ${year} is a Leap Year!`)
} else {
    alert(`Your entered year ${year} isn't a Leap Year!`)
}
}


document.querySelector('input').addEventListener ('keydown', function(event) {
    if (event.key == 'Enter'){
        entered()
    }
}) 




