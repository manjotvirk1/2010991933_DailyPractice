var weight;
function calWeight(){
    weight=document.getElementById("inputWeight").value;
    // console.log(weight);
}
var pName;
var finalWeight;
function sun(){
    // console.log('Sun');
    pName="Sun";
    finalWeight=27.07*weight;
    if(weight==undefined)alert('Enter the weight');
    else{
        document.getElementById("planetName").innerHTML=pName;
        document.getElementById("finalWeight").innerHTML=finalWeight;
    }
};
function mercury(){
    // console.log('Mercury');
    pName="Mercury";
    finalWeight=0.38*weight;
    if(weight==undefined)alert('Enter the weight');
    else{
        document.getElementById("planetName").innerHTML=pName;
        document.getElementById("finalWeight").innerHTML=finalWeight;
    }
}
function venus(){
    // console.log('Venus');
    pName="Venus";
    if(weight==undefined)alert('Enter the weight');
    else{
        finalWeight=0.91*weight;
        document.getElementById("planetName").innerHTML=pName;
        document.getElementById("finalWeight").innerHTML=finalWeight;
    }
}
function earth(){
    // console.log('Earth');
    pName="Earth";
    finalWeight=weight;
    if(weight==undefined)alert('Enter the weight');
    else{
        document.getElementById("planetName").innerHTML=pName;
        document.getElementById("finalWeight").innerHTML=finalWeight;
    }
}
function moon(){
    // console.log('Moon');
    pName="Moon";
    finalWeight=0.166*weight;
    if(weight==undefined)alert('Enter the weight');
    else{
        document.getElementById("planetName").innerHTML=pName;
        document.getElementById("finalWeight").innerHTML=finalWeight;
    }
}
function mars(){
    // console.log('Mars');
    pName="Mars";
    finalWeight=0.38*weight;
    if(weight==undefined)alert('Enter the weight');
    else{
        document.getElementById("planetName").innerHTML=pName;
        document.getElementById("finalWeight").innerHTML=finalWeight;
    }
}
function jupiter(){
    // console.log('Jupiter');
    pName="Jupiter";
    finalWeight=2.34*weight;
    if(weight==undefined)alert('Enter the weight');
    else{
        document.getElementById("planetName").innerHTML=pName;
        document.getElementById("finalWeight").innerHTML=finalWeight;
    }
}
function saturn(){
    // console.log('Saturn');
    pName="Saturn";
    finalWeight=1.06*weight;
    if(weight==undefined)alert('Enter the weight');
    else{
        document.getElementById("planetName").innerHTML=pName;
        document.getElementById("finalWeight").innerHTML=finalWeight;
    }
}
function uranus(){
    // console.log('Uranus');
    pName="Uranus";
    finalWeight=0.92*weight;
    if(weight==undefined)alert('Enter the weight');
    else{
        document.getElementById("planetName").innerHTML=pName;
        document.getElementById("finalWeight").innerHTML=finalWeight;
    }
}
function neptune(){
    // console.log('Neptune');
    pName="Neptune";
    finalWeight=1.19*weight;
    if(weight==undefined)alert('Enter the weight');
    else{
        document.getElementById("planetName").innerHTML=pName;
        document.getElementById("finalWeight").innerHTML=finalWeight;
    }
}
function pluto(){
    // console.log("Pluto");
    pName="Pluto";
    finalWeight=0.06*weight;
    if(weight==undefined)alert('Enter the weight');
    else{
        document.getElementById("planetName").innerHTML=pName;
        document.getElementById("finalWeight").innerHTML=finalWeight;
    }
}
