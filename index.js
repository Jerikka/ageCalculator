const btnElement = document.getElementById("button");
const birthdate = document.getElementById("birthday");
const results = document.getElementById("results")

function calculateAge() {
    const birthdayValue = birthdate.value;

    if (birthdayValue === "") {
        alert("Please enter your date of birth")
    } else {
        const age = getAge(birthdayValue);
        const zodiacSign = getSign(birthdayValue);
        console.log(age, zodiacSign)
        results.innerText = `You are ${age} ${age > 1 ? 'years' : 'year'} old and you are a ${zodiacSign}!`
    }
}

function getAge(birthdayValue) {
    const currentDate = new Date();
    const birthdayDate = new Date(birthdayValue);

    let theAge = currentDate.getFullYear() - birthdayDate.getFullYear();
    const mnth = currentDate.getMonth() - birthdayDate.getMonth();
    if (mnth < 0 || (mnth === 0 && currentDate.getDate() < birthdayDate.getDate())){
        theAge--;
    }
    
    return(theAge);
}

function getSign(birthdayValue) {
    const birthdateDate = new Date(birthdayValue);
    const month = birthdateDate.getMonth() + 1

    if (( month === 3 && birthdateDate.getDate() >= 21) || (month === 4 && birthdateDate.getDate() <= 19 )) {
        return "Aries";
    } else if (( month === 4 && birthdateDate.getDate() >= 20) || (month === 5 && birthdateDate.getDate() <= 20)) {
        return "Taurus"
    } else if (( month === 5 && birthdateDate.getDate() >= 21) || (month === 6 && birthdateDate.getDate() <= 20))  {
        return "Gemini"
    } else if (( month === 6 && birthdateDate.getDate() >= 21) || (month === 7 && birthdateDate.getDate() <= 22))  {
        return "Cancer"
    } else if (( month === 7 && birthdateDate.getDate() >= 23) || (month === 8 && birthdateDate.getDate() <= 22))  {
        return "Leo"
    } else if (( month === 8 && birthdateDate.getDate() >= 23) || (month === 9 && birthdateDate.getDate() <= 22))  {
        return "Virgo"
    } else if (( month === 9 && birthdateDate.getDate() >= 23) || (month === 10 && birthdateDate.getDate() <= 22))  {
        return "Libra"
    } else if (( month === 10 && birthdateDate.getDate() >= 23) || (month === 11 && birthdateDate.getDate() <= 21))  {
        return "Scorpio"
    } else if (( month === 11 && birthdateDate.getDate() >= 22) || (month === 12 && birthdateDate.getDate() <= 21))  {
        return "Sagittarius"
    } else if (( month === 12 && birthdateDate.getDate() >= 22) || (month === 1 && birthdateDate.getDate() <= 19))  {
        return "Capricorn"
    } else if (( month === 1 && birthdateDate.getDate() >= 20) || (month === 2 && birthdateDate.getDate() <= 18))  {
        return "Aquarius"
    } else if (( month === 2 && birthdateDate.getDate() >= 19) || (month === 3 && birthdateDate.getDate() <= 20))  {
        return "Pisces"
    }
}

btnElement.addEventListener('click', calculateAge )