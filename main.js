console.log("hey");

// My Info

const kellyInfo = {}

kellyInfo.general = [];
kellyInfo.people = [];
kellyInfo.communication = [];


const general_profile = {
    agreeWith: [
        "Creative",

        "Perfectionistic",

        "Determined and Passionate"
    ],
    disagreeWith: [
        "Can Burn Out Easily",
        "Altruistic",
        "Extremely Private",
    ]
}

document.getElementById("creative").innerHTML = "Creative: I have been playing guitar and writing songs since I was fourteen so I certainly would agree with this assessment."
document.getElementById("perfectionistic").innerHTML = "Perfectionistic: Sometimes when writing songs I spend TOO much time on them; trying to get every little thing just perfect. I have really tried to let go as far as song completion goes"
document.getElementById("determined").innerHTML = "Determined: While I definitely get down on myself for not understanding something, I work my way through the task until completion, hopefully learning something in the process"

document.getElementById("burn-out").innerHTML = "Career Choice: The website said that Advocates are counselors, psychologists, doctors, life coaches. Dawg, I NEED those people. I don't need to be one"
document.getElementById("altruistic").innerHTML = "Altruistic: The 16 Personalities website describes me as altruistic which I do not necessarily believe because I do not feel as though I am fighting for something"
document.getElementById("private").innerHTML = "Private:"

const people_like_me = {
    firstPerson: "MLK",
    secondPerson: "Nelson Mandela",
    thirdPerson: "Desmond Hume",
    fourthPerson: "Alanis Morisette"
}

document.getElementById("Alanis-Card-Text").innerHTML = "She's a musician, so it sounds about right."
document.getElementById("Desmond-Card-Text").innerHTML = "I love LOST so ya boy can't complain."
document.getElementById("MLK-Card-Text").innerHTML = "I am honestly surprised that I have the same personality as someone way cooler than me"
document.getElementById("Mandela-Card-Text").innerHTML = "Very cool. Can't complain."

const communication = {
    little_sib: "I would best commmunicate in-person, but I would also like to be available via email and slack!",
    instructors: "I would like to my instructors to communicate with me respectfully as they have been",
    teammates: "I know I may not seem approachable at times, so I definitely would like them to know they can speak to me whenever they would like!"

}

kellyInfo.communication.push(communication);
kellyInfo.people.push(people_like_me);
kellyInfo.general.push(general_profile);

////Saving to Local Storage

function savingToLocalStorage (dataBaseObject, localStorageKey) {
    const strigifiedDatabase = JSON.stringify(dataBaseObject);
    localStorage.setItem(localStorageKey, strigifiedDatabase);

}

savingToLocalStorage(kellyInfo, "kellyInfo");


console.log(kellyInfo);