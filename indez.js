const calculateAge = () => {
    let date = document.getElementById("datessss").value;
    let month = document.getElementById("monthssss").value;
    let year = document.getElementById("yearssss").value;

    console.log(date);
    console.log(month);
    console.log(year);

    if (date > 31) {
        alert("Input valid date");
        return;
    }

    let dob = new Date(`${date} ${month} ${year}`);
    let now = new Date(); //now here he takes present date autometicaly
   
    let difference = now-dob;  // here they give me result on miliseconds
    console.log(difference);   //so now we convert it into days
    
    let days = Math.round(difference / (1000*60*60*24));   //here we convert the miliseconds into the days.

    console.log(days);
    alert(`your age is ${days} days`);
};
