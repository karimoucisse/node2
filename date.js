var tableMonths = require("months")

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
}
formatDate()

// 04 - Age 
