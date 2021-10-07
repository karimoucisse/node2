var tableMonths = require("months")
var moment = require ("moment")

// 01 - Aujourd'hui
function whatDayIsToday (day){
    var tableDays = ["dimanche","lundi","mardi","mercredi","jeudi","vendredi",
"samedi"]
    var day= tableDays[new Date().getDay()]
    console.log(`Aujourd'hui nous sommes ${day}`);
    return day
}
whatDayIsToday()
//day = whatDayIsToday()

// 02 - Mois courant
function whatMonthIsIt(month){
    var month = tableMonths[new Date().getMonth()]
    console.log(`Nous sommes au mois de ${month}`);
    return month
}
 whatMonthIsIt()
 //month = whatMonthIsIt()
 //console.log(month);

// 03 - Format 
function formatDate(date){
    var year = new Date().getFullYear();
    var month = new Date().getMonth() + 1;
    var monthDate= new Date().getDate()
    var zero = 0;
    if(monthDate <10){
        monthDate = `${zero}${monthDate}`;
    }
    date = `${monthDate}/${month}/${year}`
    //date = `${day} ${month} ${year}`
    console.log(date);
    return [year, month, monthDate]
}
formatDate()


// 04 - Age 
function calculateAge(birthDay,birthMounth,birthYear){
    year =formatDate();
    var age = parseInt(year[0]) - birthYear;
    var month= tableMonths[birthMounth - 1]
    if (birthMounth < year[1]){
        console.log(`tu as ${age} et tu es né(e) le ${birthDay}/${month}/${birthYear}`);
    }else {
        console.log(`tu as ${age-1} et tu es né(e) le ${birthDay}/${month}/${birthYear}`);
    }
    //if(birthDay)
    //console.log(year[0]);
    //console.log(`tu as ${age} et tu es né(e) le ${birthDay}/${birthMounth}/${birthYear}`);
}
calculateAge(01,12,2001)

console.log("");
console.log("");

// bonus

// 01 - bonus
function whatDayIsToday2 (day){
    var day= moment().format("dddd"); 
    console.log(`today we are ${day}`);
}
whatDayIsToday2()

// 02 - bonus 
function whatMonthIsIt2(month){
    var month = moment().format("MMMM");  
    console.log(`we are in the month of ${month}`);
}
 whatMonthIsIt2()

 // 03 - bonus 
 function formatDate2(date){
     var date = moment().format("L");
    console.log(`${date}`);
}
formatDate2()

// 04 - bonus
function calculateAge2(birthDay){
    age = moment(birthDay, "YYYYMMDD").fromNow();
    console.log(parseInt(age));
    
}
calculateAge2(20010501)



