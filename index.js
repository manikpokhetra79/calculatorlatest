var buttons= document.getElementsByClassName("button");
var display= document.getElementById("screen");
function isOperator(value){
    return value == "+" || value == "-" || value == "*" ||
    value == "/";
}
for(var i = 0;i<buttons.length;i++){

    buttons[i].addEventListener('click', function () {
        var value = this.getAttribute('data-value');
         var text = display.textContent.trim();
        var n = text.length;
         if(value == 'ac'){
            display.textContent = " ";
         }else if( value == 'X'){
             let newText = text.substr(0,n-1);
             display.textContent = newText;
         }else if(value == '%'){
            let newText = text.substr(0,n);
            for(let i in newText){
                if(newText[i] =='+' || newText[i] =='-'){
                    let num1 = text.substr(0,i);
                    let num2 =  newText.substr(i);
                    num2 = num2.slice(1);
                    num2 = '*' + num2; 
                    let num3 = num1 + num2;
                    num3 = eval(num3)/100;
                    num1 = eval(num1);
                   console.log(num1 +" "+num3);
                   num1 = parseFloat(num1);
                   num3 = parseFloat(num3);
                    if(newText[i] =='+'){
                   let result = num1 + num3;
                      display.textContent = result;
                    }
                    if(newText[i] =='-'){
                        let result = num1 - num3;
                        display.textContent = result;
                    }
                }else if(newText[i] =='/' || newText[i] =='*'){
                    let result = eval(text);
                    result = result/100;
                     if(result){
                         display.textContent = result;
                        }
                }
            }
         }else if( value == '='){
            let result = eval(text);
            display.textContent = result;
         }else{
            display.textContent +=value;
         }
    })
}
