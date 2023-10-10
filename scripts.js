let x=document.getElementById("display");
let y='';
let z='';
let 
function add(val){
console.log(val);
x.value=val;
y=y+val;
x.value=y;
}
function calcu(){
    z= eval(y);
    x.value=z;

}
function clearcu(){
    x.value="";
    y="";

}