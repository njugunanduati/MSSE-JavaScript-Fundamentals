let time = 5;
const message = "Wake Up!";

for (let i = 0; i <= time; i++) {
    if (i == time) {
        setTimeout(alert, time*1000, message);
    }else{
        setTimeout(console.log, i*1000, i);
    }
}
