
window.onload = function() {
    time = new Date()
    this.document.getElementsByClassName("time")[0].innerHTML = getTime()
};

let runner

clicked = () => {
    let button = this.document.getElementsByClassName("btn")[0]

    if(button.innerHTML === "הפעל"){
        this.document.getElementsByClassName("time")[0].innerHTML = getTime()
        runner = setInterval(function(){
            this.document.getElementsByClassName("time")[0].innerHTML = getTime()
          }, 1000);
        button.innerHTML = "עצור"
    } else {
        button.innerHTML = "הפעל"
        clearInterval(runner)
    }
}

getTime = () => {
    time = new Date()
    return time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds()
}
