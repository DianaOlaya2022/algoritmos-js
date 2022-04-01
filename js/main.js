function operacionesmatematicas(){
 var a;
var b;
var R;
var t;

a = parseInt(prompt("POR FAVOR INGRESE EL PRIMER VALOR"));
b =parseInt (prompt("POR FAVOR INGRESE EL SEGUNDO VALOR"));


t= parseInt(prompt("POR FAVOR INGRESAR LA OPERACION QUE DESEA : 1.suma/2.resta/3.multiplicacion/4.division"));

switch (t){
case 1: 
R=a+b;  
alert ("El resultado de la suma es: "+R);
break;
 case 2:   
 R=a-b;  
 alert ("El resultado de la resta es: "+R);
 break;
 case 3:
     
 R=a*b;  
 alert ("El resultado de la multiplicacion es: "+R);
     break;
     case 4:
         
 R=a/b;  
 alert ("El resultado de la division es: "+R);
     break;
     default:
    alert("ERROR");
}
}
function mayordos (){
    var a;
    var b;
     
a = parseInt(prompt("POR FAVOR INGRESE EL PRIMER VALOR"));
b =parseInt (prompt("POR FAVOR INGRESE EL SEGUNDO VALOR"));

if (a==b){
    alert(a+ "  es igual a :  " +b)
}else if(a>b){
    alert(a+ "  es mayor que :  " +b)
}else {
    alert (b+ "  es mayor que :  "+a)
}


}

function menortres(){

    var a;
    var b;
    var c;

a = parseInt(prompt("POR FAVOR INGRESE EL PRIMER VALOR"));
b =parseInt (prompt("POR FAVOR INGRESE EL SEGUNDO VALOR"));
c=parseInt (prompt("POR FAVOR INGRESE EL TERCER VALOR"));

if (a==b && a==c){
alert("Los tres numeros son iguales")
}else if (a<b && a<c){
alert(a+ "  es el numero menor")
}else if (b<a && b<c){
    alert(b+ "  es el numero menor")
}else{
    alert(c+ "  es el numero menor")
}
}

function parimpar(){
var a;

a = parseInt(prompt("POR FAVOR INGRESE UN VALOR"));

if (a%2==0){
    alert("El numero  " +a+ " es par")
}else{
    alert("El numero  " +a+ " es impar")
}

}

function numcuadrado(){

    var a;
    var r;

    a = parseInt(prompt("POR FAVOR INGRESE UN VALOR"));
r= a*a;
 alert ("El numero elevado al cuadrado es :"+r)

}

function areatriangulo () {
var a;
var b;
var h;

b = parseInt(prompt("POR FAVOR INGRESE EL VALOR DE BASE PARA REALIZAR LA OPERACION"));
h =parseInt (prompt("POR FAVOR INGRESE EL VALOR DE ALTURA PARA REALIZAR LA OPERACION"));
 a= (b*h)/2
 alert("El area del triangulo es :"+a)

}

function centimetros(){
    var m;
    var c;
    m = parseInt(prompt("POR FAVOR INGRESE EL VALOR EN MESTROS"));
 c= m*100/1
 alert("Los centimetros de  "  +m +  "metros son : "+c)
}

function edad(){
    var e;

    e = parseInt(prompt("POR FAVOR INGRESE SU EDAD PARA CALCULAR EL AÑO DE NACIMIENTO"));
e=2022-e
alert("El año de nacimiento es"+e)
}

function  invertir(){
    var i;
    var g;
    var a;
    i = parseInt(prompt("POR FAVOR INGRESE EL VALOR QUE DESEA INVERTIR PARA SABER CUALES SERIAN SUS GANANCIAS"));
    a =parseInt (prompt("POR FAVOR INGRESE EL NUMERO DE AÑOS DE SU INVERSION"));

    g= (i*0.02)*(a*12)
    alert("Las ganancias por "+a+ " años es "+g)

    i=g+i;
    alert("Lo que ganara por su inversion es "+i)

}
function promedio(){
    var p;
    var c1;
    var c2;
    var c3;
    var c4;
    var c5;

 c1 = parseInt(prompt("POR FAVOR INGRESE LA CALIFICACION 1"));
c2 =parseInt (prompt("POR FAVOR INGRESE LA CALIFICACION 2"));
c3=parseInt (prompt("POR FAVOR INGRESE LA CALIFICACION 3"));
c4 = parseInt(prompt("POR FAVOR INGRESE LA CALIFICACION 4"));
c5 =parseInt (prompt("POR FAVOR INGRESE LA CALIFICACION 5"));

p=(c1+c2+c3+c4+c5)/5

if (p>1 && p<2.9){
    alert("Reprueba con " +p+ " la materia de ingles")
}else if (p>=3&&p<=5){
    alert("Aprueba con " +p+ "  la materia de ingles")
}


}
 function fruteria(){

    
    var k;
    var d;
    var t;

    k =parseInt (prompt("POR FAVOR INGRESE EL NUMERO DE KILOS QUE DESEA COMPRAR"));
 if (k<=2){
     t=k*4500
     alert("No aplica descuento su valor total es : "+t)
 }else if(k>=3&&k<=5){
     t=k*4500
     d=t*0.1
     d=t-d
     alert("El valor total con descuento del 10% incluido es :"+d)
 }else if(k>=6&&k<=10){
    t=k*4500
    d=t*0.15
    d=t-d

    alert("El valor total con el descuento del 15% incluido es:  "+d)
 }else if(k>10){
    t=k*4500
    d=t*0.2
    d=t-d

    alert("El valor total con el descuento del 20% incluido es:  "+d)
 }




}  
