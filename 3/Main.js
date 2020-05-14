let cages = ["box", "prison type", "in the open air"]


let animalsJSON = [{"id":"1", "fullName": "חזי מנישמע", "cage": cages[2], "legs": 4, "toDelete": false},
               {"id":"2", "fullName": "מיצי מיאוו", "cage": cages[1], "legs": 4, "toDelete": false},
               {"id":"3", "fullName": "אבי ביטון", "cage": cages[0], "legs": 2, "toDelete": false}];

let runner;


window.onload = () => {
    $(".time").html(getTime());
};

menuButton = (indx) => {
    for(button of $(".itemButton")){
        button.style = "background-color: rgb(109, 215, 230);";
    }
    $(".itemButton")[indx].style = "background-color: rgb(32, 154, 170);";
}

allAnimals = () => {
    menuButton(0);

    animalsJSON.forEach(animal => animal.toDelete = false);
    $(".specificData").html('');
    let animals = $(".optionData");
    let table = `
    <table>
        <thead>
            <tr>
                <th>מספר מזהה</th>
                <th>שם מלא</th>
                <th></th>
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
    animals.html(table);
}

saveClicked = () => {
    animalsJSON = animalsJSON.filter(function( animal ) {
        return animal.toDelete !== true;
    });

    allAnimals();
}

showAnimalDetails = (id) =>{
    $("tr").css("background-color", "")
    $("#" + id).css("background-color", "rgb(109, 215, 230)")
    let animal = animalsJSON.find(animal => animal.id === id.toString());
    $(".specificData").html( `
    <h4>נבחרה חיה מספר ${id}</h4>
    <p class="animalExtraData">שם החיה: ${animal.fullName},  נמצאת בכלוב: ${animal.cage},  מספר רגליים ${animal.legs}</p>`);
}

newAnimal = () => {
    menuButton(1);

    $(".specificData").html('');
    $(".optionData").html(`
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
    <button onclick="addNewAnimal()">הוסף</button>`);
}

cagesAsOptionsHTML = () =>{
    let options;
    for (cage of cages){
        options += `<option value="${cage}">${cage}</option>`;
    }
    return options;
}

addNewAnimal = () => {
    let id = $("#id").val();
    let name = $("#name").val();
    let cage = $("#cage").val();
    let legs = $("#legs").val();
    if(parseInt(id) > 0 && name.length > 0 && cage.length > 0 && legs >= 0
        && animalsJSON.find(animal => animal.id === id) === undefined){
        animalsJSON.push({"id":id, "fullName": name, "cage": cage, "legs": legs, "toDelete": false});
        alert('החיה הוספה בהצלחה');
    } else{
        alert('שגיאה בפרטי החיה החדשה');
    }

}

trashClicked = (id) => {
    let animal = animalsJSON.find(animal => animal.id === id.toString());
    if(!animal.toDelete){
        $("#" + id).addClass("strikeout");
    } else{
        $("#" + id).removeClass("strikeout");
    }
    animal.toDelete = !animal.toDelete;

    if (animalsJSON.find(animal => animal.toDelete === true) != undefined){
        $(".save").css("visibility","visible");
    } else {
        $(".save").css("visibility","hidden");
    }
} 



clicked = () => {
    let button = $(".btn")[0];

    if(button.html === "הפעל"){
        $(".time").html(getTime());
        runner = setInterval(function(){
            $(".time").html(getTime());
          }, 1000);
        button.html("עצור");
    } else {
        button.html("הפעל");
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
