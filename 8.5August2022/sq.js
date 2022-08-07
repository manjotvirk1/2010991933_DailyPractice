function createSq(){
    var n=document.getElementById("num").value;
    var p=n;
    var sum=0;
    const len=p.toString().length;
    // alert(len);
    if(len!=5)alert("Please enter the 5 digit number");
    else{
        while(n!=0){
            sum=sum+(n%10);
            n=parseInt(n/10)
        }
        sq(sum);
        var ll=sum/5;
        // alert(ll);
        document.getElementById("ans").innerHTML="<h1>ll</h1>";
    }
}

function sq(sum){

}

// const res=document.getElementById("ans");
// res.innerHTML="hi i am res";    

// document.getElementById("ans").style.width="300px";
// document.getElementById("ans").style.height="300px";
