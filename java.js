var ans=0;
var s="";

document.getElementById("add").onclick=function()
{
    var a=parseInt(document.getElementById("number").value);
    ans=ans+a;
    if(s.length==0)
    s=s+a;
    else
    s=s+("+"+a);
    document.getElementById("result").textContent=ans;
}


document.getElementById("sub").onclick=function()
{
    var a=parseInt(document.getElementById("number").value);
    ans=(ans-a);
    if(s.length==0)
    s=s+a;
    else
    s=s+("-"+a);
    document.getElementById("result").textContent=ans;
}

document.getElementById("mul").onclick=function()
{
    var a=parseInt(document.getElementById("number").value);
    ans=ans*a;
    if(s.length==0)
    s=s+a;
    else
    s=s+("x"+a);
    document.getElementById("result").textContent=ans;
}

document.getElementById("div").onclick=function()
{
    var a=parseInt(document.getElementById("number").value);
    ans=ans/a;
    if(s.length==0)
    s=s+a;
    else
    s=s+("/"+a);
    document.getElementById("result").textContent=ans;
}

document.getElementById("eq").onclick=function()
{
    document.getElementById("wait").textContent=s;
}






