let landing_page = document.querySelector(".landing-page");
let fill_form = document.getElementById('fill-form');
let results = document.getElementById('results');
let btn1 = document.querySelector('.button');


btn1.addEventListener("click", function(){
    landing_page.style.display = "none";
    fill_form.style.display = "block";
});


const form = document.querySelector("form");
form.addEventListener("submit", function(e){
    e.preventDefault();
});
