// let day = document.getElementById("day");

// let numbersDay = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

// let selectList = document.createElement("select");
// selectList.setAttribute("id", "mySelect");
// day.appendChild(selectList);

// for (let i = 0; i < numbersDay.length; i++) {
//     let option = document.createElement("option");
//     option.setAttribute("value", numbersDay[i]);
//     option.text = numbersDay[i];
//     selectList.appendChild(option);
// }

// // // ---------------------------------------------------------------

// let month = document.getElementById("month");

// let numbersMonth = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// let select = document.createElement("select");
// select.setAttribute("id", "mySelect");
// month.appendChild(select);

// for (let i = 0; i < numbersMonth.length; i++) {
//     let option = document.createElement("option");
//     option.setAttribute("value", numbersMonth[i]);
//     option.text = numbersMonth[i];
//     select.appendChild(option);
// }

// // // ---------------------------------------------------------------

// let hour = document.getElementById("hour");

// let numbersHour = [10, 11, 12, 13, 14, 15, 16, 17, 18];

// let sel = document.createElement("sel");
// sel.setAttribute("id", "mySelect");
// hour.appendChild(sel);

// for (let i = 0; i < numbersHour.length; i++) {
//     let option = document.createElement("option");
//     option.setAttribute("value", numbersHour[i]);
//     option.text = numbersHour[i];
//     sel.appendChild(option);
// }

// // ---------------------------------------------------------------












let day = document.getElementById("day");
let month = document.getElementById("month");
let hour = document.getElementById("hour");

let numbersDay = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
let numbersMonth = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let numbersHour = [10, 11, 12, 13, 14, 15, 16, 17, 18];



let selectListDay = document.createElement("select");
selectListDay.setAttribute("id", "mySelect");
day.appendChild(selectListDay);

for (let i = 0; i < numbersDay.length; i++) {
    let option = document.createElement("option");
    option.setAttribute("value", numbersDay[i]);
    option.text = numbersDay[i];
    selectListDay.appendChild(option);
}



let selectListMonth = document.createElement("select");
selectListMonth.setAttribute("id", "mySelect");
month.appendChild(selectListMonth);

for (let i = 0; i < numbersMonth.length; i++) {
    let option = document.createElement("option");
    option.setAttribute("value", numbersMonth[i]);
    option.text = numbersMonth[i];
    selectListMonth.appendChild(option);
}




let selectListHour = document.createElement("select");
selectListHour.setAttribute("id", "mySelect");
hour.appendChild(selectListHour);

for (let i = 0; i < numbersHour.length; i++) {
    let option = document.createElement("option");
    option.setAttribute("value", numbersHour[i]);
    option.text = numbersHour[i];
    selectListHour.appendChild(option);
}



















// // pegar a data atual, acrescentar 14 dias e colocar em um array

// let atualDate = new Date().toLocaleDateString();
// console.log(atualDate);

// // let fifteenDays = atualDate + 1;
// // console.log(fifteenDaysdate);


// function getfifteenDays(atualDate) {
//     for (let index = 0; index < atualDate.length; index++) {
//         let fifteenDays = atualDate[index];
        
//     }
// }
// console.log(fifteenDays, 'oi');

// // ---------------------------------------------------------------

// function daysInMonth(month,year) {
//     return new Date(year, month, 0).getDate();
// }

// function myFunction()
// {var b=[],weekday = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],month=7,year=2000;
// for(var i=1,l=daysInMonth(month,year);i<l;i++){
// var d = new Date(year,month-1,i);
// b.push(i+"."+weekday[d.getDay()]);
// }
// console.log(b);}//b is the desired array


// // schedule.create(tasks, resources, projectAvailability, startDate);

// $(".form_datetime").datetimepicker({
//     format: "dd MM yyyy - hh:ii",
//     autoclose: true,
//     todayBtn: true,
//     pickerPosition: "bottom-left"
// });

// $(function() {
//     $('#datetimepicker1').datetimepicker();
// });