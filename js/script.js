let landing_page = document.querySelector(".landing-page");
let fill_form = document.getElementById('fill-form');
let results = document.getElementById('results');
let btn1 = document.querySelector('.button');


btn1.addEventListener("click", function () {
    landing_page.style.display = "none";
    fill_form.style.display = "block";
});


const form = document.forms["form1"];

form.addEventListener("submit", function (e) {
    e.preventDefault();
   
    if (form["month"].value == "") {
        alert("Month is required");
        return false;
    };

    if(form["month"].value <= 0 || form["month"].value > 12){
        alert("wrong month format");
        return false;
    }


    if(form["days"].value == ""){
        alert("Day is required");
        return false;
    }

    if(form["days"].value <= 0 || form["days"].value > 31){
        alert("wrong day format");
        return false;
    }


if(form["year"].value == ""){
    alert("Year is required");
    return false;
}


    if (form["gender"].value == "") {
        alert("Gender field is required");
        return false;
    };

});