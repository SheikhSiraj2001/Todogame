
let btn=document.querySelector('button');
let ul=document.querySelector("ul");
let inp=document.querySelector("input");
btn.addEventListener("click",function(){
    // let lis=document.querySelectorAll("li");
    if(inp.value !=""){
    let li=document.createElement("li");
    let delbtn=document.createElement("button");
    delbtn.innerText="delete";
    li.innerText=inp.value;
    li.classList.add("delete");
    li.appendChild(delbtn);
    ul.appendChild(li);
    inp.value="";
    }
    
});
ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON")
    {
        let el=event.target.parentElement;
        el.remove();
    }
})




  // let delbtns=document.querySelectorAll(".delete");
        // for(let delbtn of delbtns){
        // delbtn.addEventListener("click",function(){
        // let par=this.parentElement;
        // console.log(par);
        //  par.remove();
     