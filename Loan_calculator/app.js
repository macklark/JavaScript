const a = document.getElementById("btn");

a.addEventListener("click",data);

const input1 = document.getElementById("input-form-1");
const input2 = document.getElementById("input-form-2");
const input3 = document.getElementById("input-form-3");
const result1 = document.getElementById("result-1");
const result2 = document.getElementById("result-2");
const result3 = document.getElementById("result-3")

function data(e){
    if(input1.value === "" ){
        M.toast({html: 'Complete the input !', classes: 'rounded'});
    }else{

        // Testing
        
        // result1.innerHTML = `
        // <label>Monthly payments</label>
        // <p class = ".container"}>   ${input1.value}</p>`;

        // result2.innerHTML = `
        // <label>Monthly payments</label>
        // <p class = ".container"}>   ${input2.value}</p>`

        // result3.innerHTML = `
        // <label>Monthly payments</label>
        // <p class = ".container"}>   ${input3.value}</p>`

        const principal = parseFloat(input1.value);
        const intrest = parseFloat(input2.value) / 100 / 12;
        const payment = parseFloat(input3.value) * 12;

        const b = Math.pow(1 + intrest, payment);

        const month = (principal * b * intrest) / (b-1);

        if(isFinite(month)){
            result1.innerHTML = `
            <label>Monthly payment</label>
            <p class = ".container">${month.toFixed(3)}</p>`

            result2.innerHTML = `
            <label>Total payment</label>
            <p class = ".container">${((month.toFixed(3)) * payment).toFixed(1)}</p>`

            result3.innerHTML = `
            <label>Total interest</label>
            <p class = ".container">${((month * payment) - principal).toFixed(2)}</p>`

        }else{

        }

    }
    e.preventDefault();
}

const c = document.getElementById("btn1");

c.addEventListener("click", data1 = () => {
    result1.innerText = "";
    result2.innerText = "";
    result3.innerText  = "";

    input1.value = "";
    input2.value = "";
    input3.value = "";
});
