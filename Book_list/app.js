class books{
    constructor(){
        this.button = document.getElementById("btn-form");
        this.input1 = document.getElementById("form-1");
        this.input2 = document.getElementById("form-2");
        this.input3 = document.getElementById("form-3");
        this.uno = document.querySelector(".collection")

        this.inputs = [this.input1, this.input2, this.input3];
    };

    bttn_event = () => {
        this.button.addEventListener("click", (e) => {
            const target = this.input1.value;
            const target1 = this.input2.value;
            const target2 = this.input3.value;

            const li = document.createElement("li");

            li.className = "collection-item";

            li.appendChild(document.createTextNode(target));

            const li1 = document.createElement("li");

            li1.className = "collection-item";

            li1.appendChild(document.createTextNode(target1));

            const li2 = document.createElement("li");

            li2.className = "collection-item";

            li2.appendChild(document.createTextNode(target2));

            this.uno.appendChild(li);
            this.uno.appendChild(li1);
            this.uno.appendChild(li2);

            target  = "";
            target1 = "";
            target2 = "";

            this.validating()
            e.preventDefault();
        });


    }

    validating = () => {
        this.inputs.forEach(any => {
            if(any.value === ""){
                console.log("Fill all the fields !")
            }
        })
    }

    
}

const init = new books();

init.bttn_event();
