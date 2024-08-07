const btn = document.getElementById("btn");
const birthday = document.getElementById("birthday");
const result = document.getElementById("result");

function calculateAge () {
    const birthdayValue = birthday.value;
    if (birthdayValue === "")
        alert("Please enter your birthday!");
    else {
        let age = getAge(birthdayValue);
        result.innerText = `Your age is ${age} year(s) old.`;
    }
}

function getAge (birthdayValue) {
    const currentDate = new Date();
    const birthdayDate = new Date(birthdayValue);
    if (currentDate < birthdayDate){
       alert("Please enter your correct dob!");
       throw new Error("Something went badly wrong!");
    }

    let years = currentDate.getFullYear() - birthdayDate.getFullYear();
    const month = currentDate.getMonth() - birthdayDate.getMonth();

    if (month < 0 || (month === 0 && currentDate.getDate() < birthdayDate.getDate()))
        years--;
    return years;
}

btn.addEventListener("click", calculateAge);