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
    let now = new Date();
   
    let difference = now-dob;  
    console.log(difference);   
    
    let days = Math.round(difference / (1000*60*60*24));   

    console.log(days);
    alert(`your age is ${days} days`);
};
