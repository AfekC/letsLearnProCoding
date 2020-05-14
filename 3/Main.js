let cages = ["box", "prison type", "in the open air"]


let animalsJSON = [{"id":1, "fullName": "חזי מנישמע", "cage": cages[2], "legs": 4, "toDelete": false},
               {"id":2, "fullName": "מיצי מיאוו", "cage": cages[1], "legs": 4, "toDelete": false},
               {"id":3, "fullName": "אבי ביטון", "cage": cages[0], "legs": 2, "toDelete": false}];


window.onload = () => {
    time = new Date();
    this.document.getElementsByClassName("time")[0].innerHTML = getTime();
};

menuButton = (indx) => {
    for(button of document.getElementsByClassName("itemButton")){
        button.style = "background-color: rgb(109, 215, 230);";
    }
    document.getElementsByClassName("itemButton")[indx].style = "background-color: rgb(32, 154, 170);";
}

allAnimals = () => {
    menuButton(0);

    animalsJSON.forEach(animal => animal.toDelete = false);
    document.getElementsByClassName("specificData")[0].innerHTML = '';
    animals = document.getElementsByClassName("optionData")[0];
    let table = `
    <table>
        <thead>
            <tr>
                <th>מספר מזהה</th>
                <th>שם מלא</th>
            </tr>
        </thead>
        <tbody>`;
    for(animal of animalsJSON){
        table += 
               `
            <tr id="${animal.id}" onclick="showAnimalDetails(${animal.id})">
                <td>${animal.id}</td>
                <td>${animal.fullName}</td>
                <td><i class="fa fa-trash" onClick="trashClicked(${animal.id})"></i></td>
            </tr>`;
    }
    table +=`
        </tbody>
    </table>
    <button class="save" style="visibility: hidden;" onclick="saveClicked()">שמור</button>`;
    animals.innerHTML = table;
}

saveClicked = () => {
    animalsJSON = animalsJSON.filter(function( animal ) {
        return animal.toDelete !== true;
    });

    allAnimals();
}

showAnimalDetails = (id) =>{
    let animal = animalsJSON.find(animal => animal.id === id);
    document.getElementsByClassName("specificData")[0].innerHTML = `
    <h4>נבחרה חיה מספר ${id}</h4>
    <p class="animalExtraData">שם החיה: ${animal.fullName},  נמצאת בכלוב: ${animal.cage},  מספר רגליים ${animal.legs}</p>`;
}

newAnimal = () => {
    menuButton(1);

    document.getElementsByClassName("specificData")[0].innerHTML = '';
    this.document.getElementsByClassName("optionData")[0].innerHTML = `
    <table class="newAnimal">
        <tr><td>מספר חיה: <input type="number" id="id"></input></td></tr>
        <tr><td>שם החיה: <input type="text" id="name"></input></td></tr>
        <tr><td>נמצאת בכלוב: 
        <select id="cage">
        ${cagesAsOptionsHTML()}        
        </select>
        </td></tr>
        <tr><td>מספר רגליים<input type="number" id="legs"></input></td></tr>
    <table>
    <button onclick="addNewAnimal()">הוסף</button>`;
}

cagesAsOptionsHTML = () =>{
    let options;
    for (cage of cages){
        options += `<option value="${cage}">${cage}</option>`;
    }
    return options;
}

addNewAnimal = () => {
    let id = parseInt(document.getElementById("id").value);
    let name = document.getElementById("name").value;
    let cage = document.getElementById("cage").value;
    let legs = document.getElementById("legs").value;
    if(animalsJSON.find(animal => animal.id === id) === undefined)
        animalsJSON.push({"id":id, "fullName": name, "cage": cage, "legs": legs, "toDelete": false});
}

trashClicked = (id) => {
    let animal = animalsJSON.find(animal => animal.id === id);
    if(!animal.toDelete){
        document.getElementById(id).style = "text-decoration: line-through";
    } else{
        document.getElementById(id).style = "";
    }
    animal.toDelete = !animal.toDelete;

    if (animalsJSON.find(animal => animal.toDelete === true) != undefined){
        document.getElementsByClassName("save")[0].style.visibility="visible";
    } else {
        document.getElementsByClassName("save")[0].style.visibility="hidden";
    }
} 

let runner;

clicked = () => {
    let button = this.document.getElementsByClassName("btn")[0];

    if(button.innerHTML === "הפעל"){
        this.document.getElementsByClassName("time")[0].innerHTML = getTime();
        runner = setInterval(function(){
            this.document.getElementsByClassName("time")[0].innerHTML = getTime();
          }, 1000);
        button.innerHTML = "עצור";
    } else {
        button.innerHTML = "הפעל";
        clearInterval(runner);
    }
}

getTime = () => {
    time = new Date();
    return padding(time.getHours()) + ":" + padding(time.getMinutes()) + ":" + padding(time.getSeconds());
}

padding = (number) => {
    if (number.toString().length === 1){
        return '0' + number;
    }
    return number;
}
