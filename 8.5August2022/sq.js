function createSq(){
    document.getElementById("ans").style.width="0px";
    document.getElementById("ans").style.display="block";
    var n=document.getElementById("num").value;
    var p=n;
    var sum=0;
    const len=p.toString().length;
    if(len!=5)alert("Please enter the 5 digit number");
    else{
        while(n!=0){
            sum=sum+(n%10);
            n=parseInt(n/10)
        }
        var ll=sum/5;
        document.getElementById("ans").style.width=ll+"vw";
        document.getElementById("ans").style.height=ll+"vw";
    }
};

function reset(){
    document.getElementById("num").value="";
    document.getElementById("ans").style.display="none";
};