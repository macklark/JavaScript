document.getElementById('click').addEventListener('click',clicked);

function clicked(){
    const xml = new XMLHttpRequest();

    xml.open('GET',"http://api.icndb.com/jokes/random/",true);
   

    xml.onload = function(){
        
         if(xml.status === 200){
            
        //   document.getElementById('card1').innerHTML = `<h6>${xml.responseText}</h6>`;

        const jokes = JSON.parse(this.responseText);

        let output = `<h6>${jokes.value.joke}</h6>`;
        document.querySelector('.card-header').innerHTML = `<h5>${"Featured"}</h5>`;

        document.getElementById('card1').innerHTML = output;    
            window.console.log(this.responseURL);

         };

        
    };
xml.send();

};

// Thanks to bootstrap for styling

const a = document.getElementById('jar');

a.style.marginTop = "40px";

const b = document.getElementById('jar1');

b.style.marginTop = "30px";

document.getElementById('click1').addEventListener('click',clicked1);

function clicked1(){
    document.getElementById('card1').innerHTML = "";
    document.querySelector('.card-header').innerHTML = "";

};

const c = document.getElementById('click1');

c.style.marginLeft = "40px";

// const bodyColor = document.getElementById("jar");
// bodyColor.style.backgroundColor = "black";

document.body.style.backgroundColor = "black";