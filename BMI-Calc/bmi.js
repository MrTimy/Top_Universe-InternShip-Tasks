 
let buttons = document.getElementById('btn');

buttons.addEventListener("click", (event) => {
    event.preventDefault();
    
    const heightM = document.getElementById('height1').value;
    const heightIn = document.getElementById('height2').value;
    const weight = document.getElementById('weight').value; 

     let MetricR=(weight/(heightM * heightM))
     let ImperialR = (703 * (weight/(heightIn * heightIn)))

     document.getElementById("Metric").textContent = MetricR;
     document.getElementById("Imperial").textContent =ImperialR;
})


