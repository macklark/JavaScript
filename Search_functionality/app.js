const list = document.getElementById("list");
const inp = document.getElementById("inp");
const btn = document.getElementById("btn");
const nofound = document.getElementById("nofound");


btn.addEventListener("click", (e) => {
    e.preventDefault()
    database.collection("dummy_data").where(
        "Name", "==", `${inp.value}`
    ).get().then(
        res => {
            res.docs.forEach(el => {
                list.innerHTML += `<li id = "list-item">${el.data().Name}</li>`
            })

        }
    ).catch(
        err => {console.log(err)}
    )

})
