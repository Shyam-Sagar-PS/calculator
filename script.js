// display
function display(num){
    output.value += num ;
    // id.value=to get value
}

// clear AC

function clearAll(){
    output.value="";

}

function evaluateExp(){
    // method1
    // exp=output.value; exp=7+7
    // result=eval(exp); result=14
    // output.value=result; display(14)

    output.value=eval(output.value)
}

function removeLast(){
    currentExp=output.value;
    output.value=currentExp.slice(0,-1);
}