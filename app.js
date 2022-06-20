const checkbox = document.querySelector('.checkbox');
console.log(checkbox);


checkbox.addEventListener('click',toggleClick);

function toggleClick() {
    document.body.classList.toggle('dark');
    console.log('Working!');
}