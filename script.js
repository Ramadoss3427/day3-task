//question1
let obj1={name:"person1",age:5}
let obj2={age:5,name:"person1"}
let a=(Object.keys(obj1),(obj2))
let b=(Object.values(obj1),(obj2))
let c=(a==b)
console.log(c)
//question2
var request =new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send();
request.onload=function(){
    var data=request.response;
    var result= JSON.parse(data);
    for(var i=0;i<result.length;i++){
        console.log(result[i].flags.png);
    }
};
//question3
var request =new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send();
request.onload=function(){
    var data1=request.response;
    var result1= JSON.parse(data1);
   for(var i=0;i<result1.length;i++){
        console.log(result1[i].name.common,result1[i].region,result1[i].subregion,result1[i].population);
    }
};
