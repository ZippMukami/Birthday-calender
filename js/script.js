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

let userDate = new Date (form["year"].value, form["month"].value, form["days"].value);
let userDay = userDate.getDay();
 
const days = ["Sunday", "Monday", "Tuesday", "Wednesday","Thursday", "Friday", "Saturday"];
const akanFemales = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
const akanMales = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwa"];

let name = "";
let birthday = days[userDay];

if(form["gender"].value == 1){
    name = akanFemales[userDay];
} else {
    name = akanMales[userDay];
}
 

fill_form.style.display = "none";
results.style.display = "block";


let userName = document.querySelector(".user-name");
let bornDay = document.querySelector(".user-day");

userName.innerHTML = name;
bornDay.innerHTML = birthday;

// console.log("Your Akan name is " + name + " and the day of the week you were born is " + birthday);




});

