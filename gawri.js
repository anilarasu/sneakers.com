let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick =() =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

let slides = document.querySelectorAll('.slide-container');
let index = 0;

function next(){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}

document.querySelectorAll('.featured-image-1').forEach(image_1 =>{
    image_1.addEventListener('click', () =>{
        var src = image_1.getAttribute('src');
        document.querySelector('.big-image-1').src = src;
    });
});

document.querySelectorAll('.featured-image-2').forEach(image_2 =>{
    image_2.addEventListener('click', () =>{
        var src = image_2.getAttribute('src');
        document.querySelector('.big-image-2').src = src;
    });
});

document.querySelectorAll('.featured-image-3').forEach(image_3 =>{
    image_3.addEventListener('click', () =>{
        var src = image_3.getAttribute('src');
        document.querySelector('.big-image-3').src = src;
    });
});
document.querySelectorAll('.featured-image-4').forEach(image_3 =>{
    image_3.addEventListener('click', () =>{
        var src = image_3.getAttribute('src');
        document.querySelector('.big-image-4').src = src;
    });
});
document.querySelectorAll('.featured-image-5').forEach(image_3 =>{
    image_3.addEventListener('click', () =>{
        var src = image_3.getAttribute('src');
        document.querySelector('.big-image-5').src = src;
    });
});
document.querySelectorAll('.featured-image-6').forEach(image_3 =>{
    image_3.addEventListener('click', () =>{
        var src = image_3.getAttribute('src');
        document.querySelector('.big-image-6').src = src;
    });
});
document.querySelectorAll('.featured-image-7').forEach(image_3 =>{
    image_3.addEventListener('click', () =>{
        var src = image_3.getAttribute('src');
        document.querySelector('.big-image-7').src = src;
    });
});
// 
const cartIncrement = document.getElementById('cart-increment');
const cartDecrement = document.getElementById('cart-decrement');
let inCartNum = document.getElementById('in-cart-number');


 cartIncrement.addEventListener('click', () => {
    if(parseInt(inCartNum.textContent) < 20) {
        inCartNum.textContent =  parseInt(inCartNum.textContent) + 1
    }		
})

cartDecrement.addEventListener('click', () => {
    if (parseInt(inCartNum.textContent) > 0) {
        inCartNum.textContent =  parseInt(inCartNum.textContent) - 1
    }
})