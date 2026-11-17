let nameInput = document.querySelector("#nameInput");
let eventInput = document.querySelector("#eventInput");
let addBtn = document.querySelector("#addBtn");
let errorText = document.querySelector("#errorText");

let totalCounter = document.querySelector("#totalCounter");
let confirmedCounter = document.querySelector("#confirmedCounter");
let emptyText = document.querySelector("#emptyText");
let requestList = document.querySelector("#requestList");
let clearBtn = document.querySelector("#clearBtn");

let total = 0;
let confirmed = 0;

function updateCounters(){
    totalCounter.textContent = total;
    confirmedCounter.textContent = confirmed;

    if(total === 0){
        emptyText.classList.remove("hidden");
    } else{
        emptyText.classList.add("hidden");
    }
}

function addRequest(){
    let userName = nameInput.value.trim();
    let eventName = eventInput.value.trim();

    if(userName === "" || eventName === ""){
        errorText.classList.remove("hidden");
        return;
    }
    errorText.classList.add("hidden");

    let li = document.createElement("li");
    li.classList.add("request-item");
    let infoDiv = document.createElement("div");
    infoDiv.classList.add("item-info");
    let title = document.createElement("h3");
    title.textContent = userName;
    let subtitle = document.createElement("p");
    subtitle.textContent = eventName;
    let statusBadge = document.createElement("span");
    statusBadge.classList.add("badge");
    statusBadge.textContent = "Очікує";

    infoDiv.append(title, subtitle, statusBadge);

    let actionsDiv = document.createElement("div");
    actionsDiv.classList.add("item-actions");
    let confirmBtn = document.createElement("button");
    confirmBtn.textContent = "Підтвердити";
    confirmBtn.classList.add("confirm-btn");
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Видалити";
    deleteBtn.classList.add("delete-btn");

    confirmBtn.addEventListener("click", function(){
        li.classList.toggle("confirmed");
        if(li.classList.contains("confirmed")){
            statusBadge.textContent = "Підтверджено";
            confirmBtn.textContent = "Скасувати";
            confirmed++;
        } else{
            statusBadge.textContent = "Очікує";
            confirmBtn.textContent = "Підтвердити";
            confirmed--;
        }
        updateCounters();
    });

    deleteBtn.addEventListener("click", function(){
        if(li.classList.contains("confirmed")){
            confirmed--;
        }
        total--;
        li.remove();
        updateCounters();
    });

    actionsDiv.append(confirmBtn, deleteBtn);
    li.append(infoDiv, actionsDiv);
    requestList.append(li);

    total++;
    updateCounters();
    nameInput.value = "";
    eventInput.value = "";
}

addBtn.addEventListener("click", addRequest);

clearBtn.addEventListener("click", function(){
    if(total === 0){
        return;
    }
    let check = confirm("Ви дійсно хочете очистити всі заявки?");
    if(check){
        requestList.innerHTML = "";
        total = 0;
        confirmed = 0;
        updateCounters();
    }
});