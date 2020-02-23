document.getElementById('button').addEventListener('click',data_retrieve);

function data_retrieve(){
    // Creating an XHR object

    const xhr = new XMLHttpRequest();

    // Every object have its methods and this one too : 

    xhr.open('GET', "JS_n.txt", true);
    // window.console.log(xhr.readyState);

    // Checking weather this worked or not

    xhr.onload = function(){  
       //  window.console.log(xhr.readyState);
        if(xhr.status === 200){
            // window.console.log("Everything is fine");
            // window.console.log(xhr.responseText);

            document.getElementById('output').innerHTML = `<h3>${xhr.responseText}</h3>`
        };

    } // At this stage we are just consoling but we can do other things

    // This method is used while something is loading
    xhr.onprogress = function(){
        document.getElementById('output').innerHTML = "<h3> Progressing </h3>";
        // window.console.log("progressing")
    };

    // This method is used whenever there is a error and what to do with the error. 
    xhr.onerror = function(){
        window.console.log("The page has been retrieved to blank - error page");
    };

    xhr.send();
};      
