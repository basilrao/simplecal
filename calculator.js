var inputvalue=document.getElementById("result");
function show(val){
    inputvalue.value+=val;

}
function clr(){
    inputvalue.value=null;
}
function solve(){
    
    for (let i = 0; i < inputvalue.value.length; i++) {
    
        if(inputvalue.value.charAt(i)==="-"){
            
            
            var store=inputvalue.value.slice(0,i);
            
            var store1=inputvalue.value.slice(i+1,inputvalue.value.length);
            var answer=store-store1;
            inputvalue.value=answer;
            
            
        }else if(inputvalue.value.charAt(i)==="+"){
            var store=inputvalue.value.slice(0,i);
            var num1=parseFloat(store);
            var store1=inputvalue.value.slice(i+1,inputvalue.value.length);
            var num2=parseFloat(store1);
            var answer=num1 + num2;
            inputvalue.value=answer;

        }else if(inputvalue.value.charAt(i)==="/"){
            var store=inputvalue.value.slice(0,i);
            
            var store1=inputvalue.value.slice(i+1,inputvalue.value.length);
            var answer=store/store1;
            inputvalue.value=answer;

        }else if(inputvalue.value.charAt(i)==="*"){
            var store=inputvalue.value.slice(0,i);
            
            var store1=inputvalue.value.slice(i+1,inputvalue.value.length);
            var answer=store*store1;
            inputvalue.value=answer;

        }else{
            inputvalue.value=inputvalue.value;
        }
            
            
        
        
    }
   
}

















/*var input="33-48";

for (let i = 0; i < input.length; i++) {
    
    if(input.charAt(i)==="-"){
        
        
        var store=input.slice(0,i);
        console.log(store);
        var store1=input.slice(i+1,input.length);
        var answer=store-store1;
        console.log(answer);
        
        
    }
        
        
    
    
}*/