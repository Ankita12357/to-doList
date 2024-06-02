const input=document.getElementById("inputbox");
let last=1;
let list=document.getElementById("list");

function addTask(){
   
    if(input.value === ''){
        //console.log(input.value);
        alert("You must write something");
    }
    else{
        
        let taskDiv = document.createElement("div");
        taskDiv.className = "mains";
        let div=document.createElement("div");
        div.className="right";
        let p=document.createElement("p");
        p.innerHTML=input.value;

        let img=document.createElement("li");
        img.className="fa-solid fa-trash delete";
        img.onclick = function() {
            taskDiv.remove();
        };
        let n=1;
        div.onclick=function(){
             if(n===1){
                let rt=document.createElement("i");
                rt.className="fa-solid fa-circle-check check";
                div.appendChild(rt);
                n=0;
             }
             else{
               let rt=document.querySelector(".check");
               rt.remove()
               n=1;
                
             }
        }
        taskDiv.appendChild(div);
        taskDiv.appendChild(p);
        taskDiv.appendChild(img);
        list.appendChild(taskDiv);

    }
    input.value="";
    saveData();
}

let mode=document.getElementById("icon");
// let bck=document.querySelector(".todo");
// let dlt=document.querySelector(".delete");

mode.onclick=function(){
    document.body.classList.toggle("darkmode");
    let dlt = document.querySelectorAll(".delete");

    if (last === 1) {
        mode.src = "3.png";
        last = 0;
        
    } else {
        mode.src = "4.png";
        last = 1;
    }
  
    
};

let ph=document.getElementById("ph");
ph.onclick=function(){
        while (list.firstChild) {
            list.removeChild(list.firstChild);
        }
        saveData();
       
  
}
function saveData(){
    localStorage.setItem("data",list.innerHTML);
}
function show() {
    list.innerHTML = localStorage.getItem("data");
    const deleteButtons = list.querySelectorAll(".delete");
    deleteButtons.forEach(button => {
        button.onclick = function () {
            button.parentElement.remove();
            saveData();
        };
    });
    const rightDivs = list.querySelectorAll(".right");
    rightDivs.forEach(div => {
        let n = div.querySelector(".check") ? 0 : 1;
        div.onclick = function () {
            if (n === 1) {
                const rt = document.createElement("i");
                rt.className = "fa-solid fa-circle-check check";
                div.appendChild(rt);
                n = 0;
            } else {
                const rt = div.querySelector(".check");
                if (rt) {
                    rt.remove();
                }
                n = 1;
            }
            saveData();
        };
    });
}


show();