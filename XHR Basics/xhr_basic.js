document.getElementById('click1').addEventListener('click',func1);

const c = document.getElementById('jar');

const d = document.getElementById('button1');

d.style.marginBottom = "100px";
c.style.marginTop = "100px";
c.style.marginLeft = "100px";

function func1(){
    const b = new XMLHttpRequest()


    b.open('GET','new.json',true);

    b.onload = function(){
        // window.console.log(this.responseText);
        const car = JSON.parse(this.responseText);

        const output2 = `
            <ul>
               <li>ID : ${car.id} </li>
               <li>Name : ${car.model} </li>
               <li>mfg : ${car.mfg} </li>
            
            </ul>
        
        `;

        document.getElementById('output').innerHTML = output2

       // document.getElementsByClassName()
    }
    b.send();
};

document.getElementById('click2').addEventListener('click',func);

function func(){
    const a = new XMLHttpRequest();


    a.open('GET','new1.json',true);

    a.onload = function(){
        const car1 = JSON.parse(this.responseText);

        const output3 = `
            <ul>
               <li>ID : ${car1.id} </li>
               <li>Name : ${car1.model} </li>
               <li>mfg : ${car1.mfg} </li>
            
            </ul>
        
        `;

        document.getElementById('output').innerHTML = output3;
  
    }

    a.send();
};
