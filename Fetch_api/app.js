const a = document.getElementById('button1');

a.addEventListener('click',text_ret);

function text_ret(){
    fetch('sample.txt').then(function(response){
        return response.text();
    })

    .then(function(data){
        document.getElementById("card2").innerHTML = `<p>${data}</p>`
    })
    .catch(function(error){
        window.console.log(error)
    })

};

const b = document.getElementById('button2');

b.addEventListener('click',data_ret);

function data_ret(){
    fetch('sample.json').then(function(response){
        return (response.json());
    })

    .then(function(data){
        let output = '';

        data.forEach(function(post){
            output += [`<li>${post.id}</li>`,`<li>${post.model}</li>`,`<li>${post.mfg}</li>`]

            

        });

        document.getElementById("card2").innerHTML = output
    })
};

const c = document.getElementById("button3");

c.addEventListener('click', github_api);

function github_api(){
    fetch('https://api.github.com/users').then(function(response){
        return (response.json());
    })

    .then(function(data){
        let output1 = "";

        data.forEach(function(random){
            output1 += [`<li>${random.id}</li>`,`<li>${random.login}</li>`,`<li>${random.node_id}</li>`,`<image src = ${random.avatar_url}>`]
        });

        document.getElementById("card2").innerHTML = output1;
    })
}
