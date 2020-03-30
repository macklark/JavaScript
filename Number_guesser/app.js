const but_1 = document.getElementById("btn1");
const input_number = document.getElementById("input");
const but_2 = document.getElementById("btn2");
const but_3 = document.getElementById("btn3");

but_1.addEventListener("click", generate);
but_2.addEventListener("click", validate);



const random = Math.floor(Math.random() * 11);

function generate(e){

    
    window.console.log(random);
    M.toast({html: 'Number generated, good luck!'})
    e.preventDefault();
}

function validate(e){

    

    if(input_number.value == random){
        document.getElementById("result").innerHTML = `<h5>Your guess is correct</h5>`
        document.getElementById("buttons").innerHTML = `<a  id = "btn3" style = "background-color: #D6ED17FF;margin-left: 15px;" class="waves-effect waves-light btn">Play again</a>`;
        const but_3 = document.getElementById("btn3");
        but_3.addEventListener("click", clear);
        function clear(){
            window.location.reload();
        }
    }else{
        
        document.getElementById("result").innerHTML = `<h5>Your guess is wrong</h5>`
        M.toast({html: `Generated number ${random}`, classes: 'rounded'});
        document.getElementById("buttons").innerHTML = `<a  id = "btn3" style = "background-color: #D6ED17FF;margin-left: 15px;" class="waves-effect waves-light btn">Play again</a>`;
        const but_3 = document.getElementById("btn3");
        but_3.addEventListener("click", clear);
        
        function clear(){
            window.location.reload();
        }
        
    }



    e.preventDefault();
}
