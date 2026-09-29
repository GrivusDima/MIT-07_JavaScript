//================= T i c k e t F l o w ==================================== = = = = = = =  =   =     =        =

let event;
let price;
while(true){
    event = +prompt("Choose event:\n" +
        "1 - Cinema\n" +
        "2 - Theatre\n" +
        "3 - Concert\n");
    switch(event){
        case 1: price = 150; break;
        case 2: price = 220; break;
        case 3: price = 350; break;
        default: alert("Invalid event"); continue;
    }
    break;
}

let weekend_discount = -15;
while(true){
    let day = +prompt("Choose the type of day:\n" +
        "1 - Workday\n" +
        "2 - Weekend\n");
    switch(day){
        case 1: break;
        case 2: price = price/100*(100-weekend_discount); break;
        default: alert("Invalid event"); continue;
    }
    break;
}

let t_num = 0;
while(true){
    t_num = +prompt("Enter the number of tickets (1 - 6): ")
    if(t_num < 1 || t_num > 6) { alert("Invalid number of tickets"); continue; }
    break;
}

let age;
let total = 0;
let ft_num = 0;
let dt_num = 0;
let fpt_num = 0;
let age_discount;
for(let i = 0; i < t_num; i++){
    age_discount = 0;
    while(true){
        age = +prompt("Enter age of the ticket owner: ")
        if(age === -1) { break; }
        if(age < 0 || age > 125) { alert("Invalid age"); continue; }

        if(age >= 60) { age_discount += 25; break;}
        if(age >= 18){
            if(age <= 25){
                while(true){
                    let pass = prompt("Does the owner have a Student's Pass? (Yes or No): ")
                    switch(pass){
                        case "Yes": age_discount += 10; break;
                        case "No": break;
                        default: alert("Yes or No?"); continue;
                    }
                    break;
                }
            }
            break;
        }
        if(age >= 13) { age_discount += 20; break;}
        if(age >= 6) { age_discount += 50; break; }
        else { age_discount = 100; break;}
    }
    if(age === -1) { break; }
    if(age_discount >= 100) { ft_num++; continue; }
    else{
        if(age_discount > 0) { dt_num++; }
        else { fpt_num++; }
        total += price/100*(100-age_discount);
    }
}

if(total > 1000) { total = total/100*(100-5)}
alert(`Your total is – ${total} moneys for ${fpt_num+dt_num+ft_num} tickets: ${fpt_num} full price tickets; ${dt_num} discounted tickets; ${ft_num} free tickets`);