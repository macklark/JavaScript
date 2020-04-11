const id = "e4edebabae00e05fed04";
const secret = "e47c92f14ba345ddcc76c8365f397bbfdc2e6567";

const button = document.getElementById("but0");
const input = document.getElementById("inp0");
const picture = document.getElementById("pic-git");
const list = document.getElementById("list-grp");
const head = document.getElementById("heading");
const link = document.getElementById("links");

button.addEventListener("click", function(){
    const user_input = input.value;
    fetch(`https://api.github.com/users/${user_input}?client_id = ${id}&client_secret = ${secret}`).then(function(res){
        return (res.json());
    })

    .then(function(data){
        picture.innerHTML = `<img src="${data.avatar_url}"  class="img-thumbnail">`

        head.innerHTML = `<h1>${data.login}</h1>`

        list.innerHTML = `
        <li class="list-group-item">Type : ${data.type}</li>
        <li class="list-group-item">Name : ${data.name}</li>
        <li class="list-group-item">Email : ${data.email}</li>
        <li class="list-group-item">Location : ${data.location}</li>
        <li class="list-group-item">Bio : ${data.bio}</li>
        <li class="list-group-item">Company : ${data.company}</li>
        <li class="list-group-item">Reposoteries : ${data.public_repos}</li>
        <li class="list-group-item">Gists : ${data.public_gists}</li>
        <li class="list-group-item">Followers : ${data.followers}</li>
        <li class="list-group-item">Following : ${data.following}</li>
        `

        link.innerHTML = `
        <a href=${data.followers_url} class="list-group-item">Followers</a>
        <a href=${data.following_url} class="list-group-item">Following</a>
        <a href=${data.gists_url} class="list-group-item">Gists</a>
        <a href=${data.starred_url} class="list-group-item">Starred</a>
        <a href=${data.subscriptions_url} class="list-group-item">Subscriptions</a>
        <a href=${data.organizations_url} class="list-group-item">Organizations</a>
        <a href=${data.repos_url} class="list-group-item">Reposoteries</a>
        
        
        
        `
        window.console.log(data);
    })

})
