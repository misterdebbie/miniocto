console.log('nugget');
let theDate = new Date;
let displayThis = theDate.toDateString();

let theResult = document.getElementById('timetarget');
theResult.textContent =displayThis;
