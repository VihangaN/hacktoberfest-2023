const calculateTemp = () => {
    const inputTemp = document.getElementById('temp').value;
    const tempSelected = document.getElementById('temp_diff');
    const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;

    const celTOFah = (cel) => {
        let fahrenheit = ((cel*(9/5))+32).toFixed(1);
        return fahrenheit;
    }

    const fahToCel = (fah) => {
        let celcius = ((fah-32)*(5/9)).toFixed(1);
        return celcius;
    }

    if(valueTemp == `cel`){
        document.getElementById("result").innerHTML = celTOFah(inputTemp)+"&#176;Fahrenheit";
    }
    else{
        document.getElementById("result").innerHTML = fahToCel(inputTemp)+"&#176;Celsius";
    }

} 