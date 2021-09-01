const base = document.querySelector('#base');
const number = document.querySelector('#number');
const output = document.querySelector('#ans');
number.addEventListener('input', function () {
    let num = parseFloat(number.value);
    let bas = parseFloat(base.value);
    
    if (isNaN(Math.log10(num)) === true || isNaN(Math.log(num) === true)) {
        output.value = 'enter a valid number';
    }

    else if (parseInt(bas) >= 1) {
        if (bas === 10) {
            if (Number.isInteger(Math.log10(num))===true) {
                output.value = Math.log10(num)
            }
            else {
                output.value = Math.log10(num).toFixed(5)

            }
        }
       else if (Number.isInteger(Math.log(num) / Math.log(bas))===true  ) {
            output.value = Math.ceil(Math.log(num) / Math.log(bas));
        }
        else {
            output.value =  (Math.log(num) / Math.log(bas)).toFixed(5)
        }
    }
    else if (base.value === 'e') {
        output.value = Math.log(num).toFixed(3);
    }
})

base.addEventListener('input', function () {
    if (base.value === 'e' || parseInt(base.value) >= 1 ) {
        if (base.value === 'e' && parseFloat(number.value)>=0) {
            output.value=(Math.log(parseFloat(number.value))).toFixed(5);
        }

        else if (output.value === 'NaN') {
            output.value='enter a valid number'
        }

        
        else if (parseInt(base.value) >= 1) {
            if (parseInt(base.value) === 10) {
                if (Number.isInteger(Math.log10(parseFloat(number.value)))===true) {
                    output.value = Math.log10(parseFloat(number.value))
                }
                else {
                    output.value= Math.log10(parseFloat(number.value)).toFixed(5)
                }
            }

            else if (Number.isInteger(Math.log(parseFloat(number.value)) / Math.log(parseInt(base.value)))){
                output.value = Math.ceil(Math.log(parseInt(number.value)) / Math.log(parseFloat(base.value)))
            }
            else {
                output.value = (Math.log(parseFloat(number.value)) / Math.log(parseInt(base.value))).toFixed(5)
            }
        }

        
    }
})

output.addEventListener('input', function () {
    alert('Only for result');
    output.value =''
});
