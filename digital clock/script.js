function updateTime(){
    const now = new Date();
    let hours = now.getHours();
    const meredium = hours>=12 ? "PM" : "AM";
    if(meredium=="PM" && hours==12){
        hours = 12;
    }
    hours %= 12;
    hours = hours.toString().padStart(2,0);
    const minutes = now.getMinutes().toString().padStart(2,0);
    const seconds = now.getSeconds().toString().padStart(2,0);
    const currentTime = `${hours}:${minutes}:${seconds} ${meredium}`;
    document.getElementById("clock").textContent = currentTime;
}

updateTime();
setInterval(updateTime,1000)