// set the initial count
let count = 0;


// Refractor the Code

// select value and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

// Looping through an object
btns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        // console.log(e.currentTarget.classList[1]);

        const styles = e.currentTarget.classList;
        if (styles.contains('decrease')) {
            count--;
        }else if(styles.contains('increase')){
            count++;
        } else if(styles.contains('reset')){
            count = 0;
        }

        if(count > 0){
            value.style.color = 'green';
        }
        if(count < 0){
            value.style.color = 'red';
        }
        if(count === 0){
            value.style.color = 'black';
        }

        value.textContent = count;
    });
})


// ! Repeat Codes 
/**
 * 
    const resetBtn = document.querySelector('.reset');
    const decreaseBtn = document.querySelector('.decrease');
    const increaseBtn = document.querySelector('.increase');
    const spanContent = document.getElementById('value');


    resetBtn.addEventListener('click', function() {
        spanContent.textContent = 0;
    });

    decreaseBtn.addEventListener('click', function() {
        spanContent.textContent--;
    });

    increaseBtn.addEventListener('click', function() {
        spanContent.textContent++;
});
 */



