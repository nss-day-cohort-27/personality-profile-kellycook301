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



const people_like_me = {
    firstPerson: "MLK",
    secondPerson: "Nelson Mandela",
    thirdPerson: "Desmond Hume",
    fourthPerson: "Alanis Morisette"
}

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