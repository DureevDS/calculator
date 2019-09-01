var decimalAdded = false,
    signAdded = false,
    plusmnAdded = false;

window.addEventListener("load",function(){
    document.log.text.value = localStorage.getItem('saveLog');
});


function clean(){
    document.form1.textview1.value = "";
    decimalAdded = false;
    signAdded = false;
}

function MC(){
    localStorage.removeItem('saveItem');
}
function MR(){
    document.form2.textview2.value = localStorage.getItem('saveItem');
}
function MS(){
    localStorage.setItem('saveItem', document.form1.textview1.value);
}

function f_clear(){
    document.log.text.value = "";
    localStorage.removeItem('saveLog');
}

function f_save_as(){
    var data = document.log.text.value;
    var filename = 'file.txt';
    var type = 'text/plain';
    var a = document.createElement("a"),
    file = new Blob([data], { type: type });
    var url = URL.createObjectURL(file);
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
}

function equal(){
    signAdded = false;
    decimalAdded = false;
    
    var res = document.form1.textview1.value;
    if(res == "")return;
    if(plusmnAdded){
        res = res.slice(1);
        document.log.text.value += -1*eval(res).toFixed(2) + " = " + "-("+ res +")"+ "\n";
    }
    else{
        document.log.text.value += eval(res).toFixed(2) + " = " + res + "\n";
    }
    localStorage.setItem('saveLog', document.log.text.value);
}

function sin(){
    var res = document.form1.textview1.value, s1;
    if(res == "")return;
    s1 = document.form1.textview1.value;
    document.form1.textview1.value = Math.sin(eval(res)).toFixed(2);
    document.log.text.value += document.form1.textview1.value + " = sin("+s1+")"+"\n";
    localStorage.setItem('saveLog', document.log.text.value);
}

function cos(){
    var res = document.form1.textview1.value, s1;
    if(res == "")return;
    s1 = document.form1.textview1.value;
    document.form1.textview1.value = Math.cos(eval(res)).toFixed(2);
    document.log.text.value += document.form1.textview1.value + " = cos("+s1+")"+"\n";
    localStorage.setItem('saveLog', document.log.text.value);
}

function tan(){
    var res = document.form1.textview1.value, s1;
    if(res == "")return;
    s1 = document.form1.textview1.value;
    document.form1.textview1.value = Math.tan(eval(res)).toFixed(2);
    document.log.text.value += document.form1.textview1.value + " = tan("+s1+")"+"\n";
    localStorage.setItem('saveLog', document.log.text.value);
}

function fact(n) {
    return (n != 1) ? n * fact(n - 1) : 1;
  }

function factorial(){
    var res = document.form1.textview1.value, s1;
    if(res == "")return;
    s1 = document.form1.textview1.value;
    document.form1.textview1.value = fact(eval(res)).toFixed(2);
    document.log.text.value += document.form1.textview1.value + " = fact("+s1+")"+"\n";
    localStorage.setItem('saveLog', document.log.text.value);
}

function popBox() {
    var ex1;
    return ex1=prompt("Введите Y:", "");
 }

function xy(){
    var res = document.form1.textview1.value,x,y;
    if(res == "")return;
    x = document.form1.textview1.value;
    y = popBox();
    document.form1.textview1.value = Math.pow(x,y).toFixed(2);
    document.log.text.value += document.form1.textview1.value + " = pow("+x+","+y+")"+"\n";
    localStorage.setItem('saveLog', document.log.text.value);
}

function yqx(){
    var res = document.form1.textview1.value,x,y;
    if(res == "")return;
    x = document.form1.textview1.value;
    y = popBox();
    document.form1.textview1.value = Math.pow(x,1/y).toFixed(2);
    document.log.text.value += document.form1.textview1.value + " = pow("+x+",1/"+y+")"+"\n";
    localStorage.setItem('saveLog', document.log.text.value);
}

function plusmn(){
    var str = document.form1.textview1.value;
    if(str == "")return;
    
    if(plusmnAdded)plusmnAdded = false;
    else plusmnAdded = true;
    
    if(str[0] == "-"){
        document.form1.textview1.value = str.slice(1);
    }
    else document.form1.textview1.value = "-"+str;
}

function insert(num){
    var str = document.form1.textview1.value;
    switch (num) {
        case '.':
            if(!decimalAdded) decimalAdded = true;
            else return;
        break
        case '+':
            decimalAdded = false;
            if(!signAdded) signAdded = true;
            else return;
        break
        case '-':
            decimalAdded = false;
            if(!signAdded) signAdded = true;
            else return;
        break
        case '*':
            decimalAdded = false;
            if(!signAdded) signAdded = true;
            else return;
        break
        case '/':
            decimalAdded = false;
            if(!signAdded) signAdded = true;
            else return;
        break
        default:
            signAdded = false;
    }
    document.form1.textview1.value = str + num;
    str = document.form1.textview1.value;
    switch (str) {
        case '.':
            document.form1.textview1.value = "0"+str;
        break
        case '+':
            document.form1.textview1.value = "";
        break
        case '-':
            document.form1.textview1.value = "";
        break
        case '*':
            document.form1.textview1.value = "";
        break
        case '/':
            document.form1.textview1.value = "";
        break
        case '0':
            document.form1.textview1.value = "";
        break
    }
}