function displayDate(day,month,year,seperator,format){
  format = format.split('');
  console.log(format);
  let formattedDate = [];
  format.forEach((val)=>{
    switch (val) {
      case "d":
        formattedDate.push(day);
        break;
      case "m":
        formattedDate.push(month);
        break;
      case "y":
        formattedDate.push(year);
        break;
    }
  })
  return formattedDate.join(seperator);
}
function appendZero(numb){
  return numb < 10? '0' + numb : numb;
}
let dateTime = new Date();
let currentMonth = dateTime.getMonth()+1;
let currentYear = dateTime.getFullYear();
let currentDay = dateTime.getDate();
console.log(displayDate(currentDay, currentMonth, currentYear, '-','mdy'))