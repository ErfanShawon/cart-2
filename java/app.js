const incrementbtn = document.querySelector ('.counter .increment')
const cartValue = document.querySelector('.counter input')

const increment = () => {
    let oldValue = Number ( cartValue.value);
    let newValue = oldValue + 1;
    decrementbtn.classList.remove('disable')

    cartValue.value = newValue

}

incrementbtn.addEventListener('click', increment)

const decrementbtn = document.querySelector('.counter .decrement')

const decrement = () => {
    let oldValue = Number(cartValue.value);
    if(oldValue > 1){
    let newValue = oldValue - 1;
    cartValue.value = newValue
    }
if (cartValue.value <= 1) {
    decrementbtn.classList.add('disable');
}

};

decrementbtn.addEventListener('click', decrement)