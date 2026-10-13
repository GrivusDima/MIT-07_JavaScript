// Завдання 1. Каталог вебінарів

let topics = ["JavaScript", "HTML", "CSS", "Git", "WebStorm", "Vue"];
let seats = [12, 8 , 15, 0, 6, 10];
let personalNum;
let name;
let birthday;
let birthmonth;

while(true) {
    name = prompt("Enter your name: ").trim();
    if (name === "")
    {
        alert("Enter your name");
        continue;
    }
    birthday = +prompt("Enter your birthday day: ");
    if (birthday < 1 || birthday > 31)
    {
        alert("Enter a valid birthday day");
        continue;
    }
    birthmonth = +prompt("Enter your birthday month: ");
    if (birthmonth < 1 && birthmonth > 12)
    {
        alert("Enter a valid birthday month");
        continue;
    }
    personalNum = (name.length + birthday + birthmonth) % topics.length;
    alert(`Your recommended webinar is "${topics[personalNum]}"!`);
    break;
}

let status;
if (seats[personalNum] > 0) { status = "Набір відкрито"; }
else { status = "Місць немає"; }
alert(`Webinar "${topics[personalNum]}": free seats – ${seats[personalNum]}, status – ${status}`);
let matches;

while(true) {
    let min = +prompt("Enter min seats count: ");
    if (min === -1) { break; }
    matches = [];
    let i = 0;
    seats.forEach((seat) => {
        if (seat >= min){
            matches.push(" "+topics[i]);
        }
        i++;
    })
    alert(`Here are the matching webinars: ${matches}`)
}


// Завдання 2. Пошук та запис

let title = prompt("Webinar title? - ");
let success = false;
for (let i = 0; i < topics.length; i++) {
    if(topics[i] === title && seats[i] > 0){
        if(confirm(`Do you want to sign up for "${title}"?`)) {
            seats[i] = seats[i]-1;
            alert(`Success! The seat count of this webinar is now ${seats[i]}`);
            success = true;
            break;
        }else{
            alert("Okay!")
            success = true;
            break;
        }
    }
}
if (!success) {
    alert("Such course either doesn't exist or is already full!");
}


// Завдання 3. Список учасників

let participants = [];
participants.push(name)
for(let i = 0; i < 4; i++){
    let inputName = prompt("Enter a name or 'Cancel': ");
    if (inputName === null || inputName === "Cancel"){
        alert("okay");
        break;
    }
    inputName = inputName.trim();
    if (inputName === "") {
        alert("Name cant be empty!");
        i--;
    }
    else{
        participants.push(inputName)
    }
}

let listMsg = "Participants:\n";
for(let i = 0; i < participants.length; i++){
    listMsg += `${i + 1}. ${participants[i]}\n`;
}
alert(listMsg);

let myLen = participants[0].length;
let longerCount = 0;
for(let i = 0; i < participants.length; i++){
    if(participants[i].length > myLen){
        longerCount++;
    }
}
alert(`Personal threshold is ${myLen}, people with longer names: ${longerCount}`);

if(confirm("Do you wanna change a name?")) {
    let changeIdx = +prompt(`Enter participant number (1-${participants.length}): `) - 1;
    if(changeIdx >= 0 && changeIdx < participants.length) {
        while(true) {
            let newName = prompt("Enter new name: ");
            if (newName && newName.trim() !== "") {
                participants[changeIdx] = newName.trim();
                break;
            }
            alert("Name cant be blank!");
        }
        let updated = "Updated list:\n";
        for(let i = 0; i < participants.length; i++){
            updated += `${i + 1}. ${participants[i]}\n`;
        }
        alert(updated);
    } else {
        alert("Wrong number!");
    }
}


// Завдання 4. Статистика відвідувань

let visits = [24, 18, 32, 0, 15, 27, 9, 21];
let bonus = (birthday + birthmonth) % 7;
let personalVisits = [];

for(let i = 0; i < visits.length; i++) {
    personalVisits.push(visits[i] + bonus);
}

function getVisitStats(values) {
    let sum = 0;
    let max = values[0];
    let min = values[0];
    for(let i = 0; i < values.length; i++){
        sum += values[i];
        if(values[i] > max) { max = values[i]; }
        if(values[i] < min) { min = values[i]; }
    }
    let avg = sum / values.length;
    return [sum, avg, max, min];
}

let stats = getVisitStats(personalVisits);
let thresh = +prompt("Enter visit threshold: ");

if(isNaN(thresh) || thresh < 0) {
    alert("Invalid threshold!");
} else {
    let countAbove = 0;
    for(let i = 0; i < personalVisits.length; i++) {
        if(personalVisits[i] >= thresh) {
            countAbove++;
        }
    }
    alert(`Bonus: ${bonus}\nSum: ${stats[0]}\nAvg: ${stats[1]}\nMax: ${stats[2]}\nMin: ${stats[3]}\nAbove threshold: ${countAbove}`);

    if(confirm("Show webinars that hit the threshold?")) {
        let reached = [];
        for(let i = 0; i < personalVisits.length; i++) {
            if(personalVisits[i] >= thresh) {
                reached.push(" " + (i + 1));
            }
        }
        if(reached.length > 0) {
            alert(`Webinars reaching threshold:${reached}`);
        } else {
            alert("None of them reached it :(");
        }
    }
}


// Завдання 5. Меню керування списком

function showWebinars() {
    if(topics.length === 0) {
        alert("Webinar list is empty!");
        return;
    }
    let msg = "Webinars:\n";
    for(let i = 0; i < topics.length; i++) {
        msg += `${i + 1}. ${topics[i]} - seats: ${seats[i]}\n`;
    }
    alert(msg);
}

function searchWebinar() {
    let query = prompt("Webinar to search: ");
    if(!query) {
        alert("Cancelled search");
        return;
    }
    query = query.trim();
    let found = false;
    for(let i = 0; i < topics.length; i++) {
        if(topics[i] === query) {
            alert(`Found "${topics[i]}"! Seats left: ${seats[i]}`);
            found = true;
            break;
        }
    }
    if(!found) {
        alert("No such webinar!");
    }
}

let choice;
do {
    choice = prompt("Menu:\n1 - Show webinars\n2 - Add webinar\n3 - Rename by number\n4 - Find webinar\n5 - Delete last webinar\n0 - Exit");

    switch(choice) {
        case "1":
            showWebinars();
            break;

        case "2": {
            let newTopic = prompt("Enter new webinar name: ");
            if(!newTopic || newTopic.trim() === "") {
                alert("Name cant be empty!");
                break;
            }
            let newSeats = +prompt("Seats count: ");
            if(isNaN(newSeats) || newSeats < 0) {
                alert("Invalid seats count!");
                break;
            }
            topics.push(newTopic.trim());
            seats.push(newSeats);
            alert(`Added "${newTopic.trim()}" successfully!`);
            break;
        }

        case "3": {
            let num = +prompt(`Enter webinar number to rename (1-${topics.length}): `) - 1;
            if(num >= 0 && num < topics.length) {
                let renameTitle = prompt("New title: ");
                if(renameTitle && renameTitle.trim() !== "") {
                    topics[num] = renameTitle.trim();
                    alert(`Webinar #${num + 1} renamed to "${topics[num]}"`);
                } else {
                    alert("Title cant be blank!");
                }
            } else {
                alert("Wrong number!");
            }
            break;
        }

        case "4":
            searchWebinar();
            break;

        case "5":
            if(topics.length === 0) {
                alert("Nothing to delete!");
                break;
            }
            if(confirm(`Delete last webinar "${topics[topics.length - 1]}"?`)) {
                topics.pop();
                seats.pop();
                alert("Deleted last one!");
            }
            break;

        case "0":
            if(!confirm("Are you sure you want to exit?")) {
                choice = "stay";
            }
            break;

        default:
            if(choice !== null) {
                alert("Invalid choice!");
            }
            break;
    }
} while(choice !== "0");


// Завдання 6. Розподіл заявок

let requestScores = [72, 95, 41, 86, 60, 100, 53, 88, 29];
let personalScore = (birthday * birthmonth + name.length) % 101;
requestScores.push(personalScore);

function distributeRequests(scores) {
    let high = [];
    let medium = [];
    let low = [];

    for(let i = 0; i < scores.length; i++) {
        if(scores[i] >= 85) {
            high.push(scores[i]);
        } else if(scores[i] >= 50) {
            medium.push(scores[i]);
        } else {
            low.push(scores[i]);
        }
    }
    return [high, medium, low];
}

while(true) {
    let inputScore = prompt("Enter score (0-100): ");
    if(inputScore === null) break;
    let s = +inputScore;
    if(inputScore.trim() === "" || isNaN(s) || s < 0 || s > 100) {
        alert("Must be a number from 0 to 100!");
    } else {
        requestScores.push(s);
        alert(`Score ${s} added!`);
    }

    if(!confirm("Add another score?")) {
        break;
    }
}

let groups = distributeRequests(requestScores);
let highGroup = groups[0];
let medGroup = groups[1];
let lowGroup = groups[2];

function getAvg(arr) {
    if(arr.length === 0) return 0;
    let total = 0;
    for(let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total / arr.length;
}

let highAvg = getAvg(highGroup);
let medAvg = getAvg(medGroup);
let lowAvg = getAvg(lowGroup);

let maxLen = highGroup.length;
if(medGroup.length > maxLen) { maxLen = medGroup.length; }
if(lowGroup.length > maxLen) { maxLen = lowGroup.length; }

let biggest = [];
if(highGroup.length === maxLen) { biggest.push(" High"); }
if(medGroup.length === maxLen) { biggest.push(" Medium"); }
if(lowGroup.length === maxLen) { biggest.push(" Low"); }

let myGroup = "Low";
if(personalScore >= 85) { myGroup = "High"; }
else if(personalScore >= 50) { myGroup = "Medium"; }

alert(
    `High group: [${highGroup}]\nCount: ${highGroup.length}, Avg: ${highAvg}\n\n` +
    `Medium group: [${medGroup}]\nCount: ${medGroup.length}, Avg: ${medAvg}\n\n` +
    `Low group: [${lowGroup}]\nCount: ${lowGroup.length}, Avg: ${lowAvg}\n\n` +
    `Largest group(s):${biggest}\n` +
    `Personal score: ${personalScore} (went into ${myGroup} group)`
);