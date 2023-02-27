class tareas{
    //Sumar dos numeros siempre cuando el promero sea mayor al segundo
    ejercicio1(){
        //declaracion de variables
        let num1=9
        let num2=3
        let suma=0
        if (num1 > num2) {
            let ops="+"
            let  estado=true
            suma=num1+num2
            console.log(num1,ops,num2,"=",suma)
        }else{
            if(num2 > num1){
                console.log("el numero 1 no es el mayor")
            }
        }
    }
    //Realizar una operacion segun el operador(+,-,*,/,%) realizar la suma, resta, multiplicacion, division y reciduo
    ejercicio2(){
        //declaracion de variables
        let num1=10
        let num2=10
        let suma=0,resta=0,multiplicacion=1,division=0,residuo=0
        let ops="+",opr="-",opm="*",opd="/",opre="%"
        let estado=true
        //operaciones aritmeticas
        suma=num1+num2
        resta=num1-num2
        multiplicacion=num1*num2
        division=num1/num2
        residuo=num1%num2
        console.log(num1,ops,num2,"=",suma,num1,opr,num2,"=",resta,num1,opm,num2,"=",multiplicacion,num1,opd,num2,"=",division,num1,opre,num2,"=",residuo)
    }
    //Presentar el mayor de dos numeros
    ejercicio3(){
        //declaracion de variables
        let num1=20
        let num2=5
        if(num1 > num2){
            console.log("el numero mayor es",num1)
        }else{
            if(num2 > num1){
                console.log("el numero mayor es",num2)
            }
        }

    }
    //Dado un nombre presentarlo
    ejercicio4(){
        let nombre="josue"
        console.log("el nombre es:",nombre)
    }
    //Dado un valor de compra presentar el total considerando un 12% de iva
    ejercicio5(){
        let valor=100
        let iva=0.12
        let  ops="+",opm="*"
        let valor_del_iva
        valor_del_iva=valor*iva
        let suma=0
        suma=valor+valor_del_iva
        console.log("el valor total incluido el iva es:",suma)
    }
    //Presentar 5 veces un nombre
    ejercicio6(){
        let nombre=" Josue "
        let repetir=nombre.repeat(5)
        console.log(repetir)
    }
    //Presentar los numeros multiplos de 3 del 3 al 21
    ejercicio7(){
        let numeros=[3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]
        let longitud=numeros.length,c=0,residuo=0
        console.log(numeros,numeros[0],numeros[longitud-1])
        while(c < longitud){
            if(numeros[c]%3 == 0){
                console.log(numeros[c],"son divisibles para 3")
            }
            c=c+1
        }
    }
    //Presentar los numeros multiplos de 3 del 21 al 3
    ejercicio8(){
        let numeros=[21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]
        let longitud=numeros.length,c=0,residuo=0
        console.log(numeros,numeros[0],numeros[longitud-1])
        while(c < longitud){
            if(numeros[c]%3 == 0){
                console.log(numeros[c],"son divisibles para 3")
            }
            c=c+1
        }
    }
    //Dados dos nombres indicar si son iguales o diferentes
    ejercicio9(){
        let nombre1=" josue "
        let nombre2=" fernando "
        if(nombre1 == nombre2){
            console.log("los nombres son iguales")
        }else{
            if(nombre1 || nombre2){
                console.log("los nombres no son iguales")
            }
        }
    }
    //Dado diez numeros en un arreglo presentar los que tengan menos de 5 caracteres
    ejercicio10(){
        let numeros = [10, 34500000, 280000, 90, 1234, 5, 67, 789, 1200000, 6];
        for (let c = 0; c < numeros.length; c++) {
          let numeroString = numeros[c].toString();
          if (numeroString.length < 5) {
              console.log(numeros[c]);
           }
        }
    }
    // Dado un arreglo presentar sus elementos
    ejercicio11(){
        let numerosarreglo=[1,2,3,4,5,6,7]
        let longitud=numerosarreglo.length,c=0
        console.log(numerosarreglo,numerosarreglo[0],numerosarreglo[longitud-1])
    }
    //Dado un arreglo de numeros presentar los menores a 10
    ejercicio12(){
        let numeros=[1,2,3,4,20,25]
        let  longitud=numeros.length,c=0
        while(c < longitud){
            if(numeros[c]<10){
                console.log("los numeros menos a 10 son:",numeros[c])
            }
            c=c+1
        }
    }
    // Dado un arreglo de numeros presentar los impares y al final la suma de los pares
    ejercicio13(){
        const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const impares = [];
        let sumaPares = 0;
        for (let i = 0; i < numeros.length; i++) {
           if (numeros[i] % 2 === 0) {
             sumaPares += numeros[i];
            }else {
             impares.push(numeros[i]);
            }
        }
         console.log("Impares:", impares);
         console.log("Suma de pares:", sumaPares);

    }
    //Presentar el primero el medio y el ultimo valor de un arreglo
    ejercicio14(){
     const arreglo = [1, 2, 3, 4, 5];
     const primerValor = arreglo[0];
     console.log(primerValor); // output: 1
     const longitud = arreglo.length;
     const indiceMedio = Math.floor(longitud / 2);
     let valorMedio;
      if (longitud % 2 === 0) {
          valorMedio = (arreglo[indiceMedio - 1] + arreglo[indiceMedio]) / 2;
        } else {
            valorMedio = arreglo[indiceMedio];
        }
       console.log(valorMedio); // output: 3
       const ultimoValor = arreglo[arreglo.length - 1];
       console.log(ultimoValor); // output: 5
    }
    //Calcular el vuelto de un a compra dado el costo y el pago
    ejercicio15(){
        let pago=100
        let costo=50
        let vuelto
        vuelto=pago-costo
        console.log("su vuelto es:",vuelto)
    }
    //Presentar la tabla de multiplicar de cualquier numero del 1 al 12
    ejercicio16(){
     const numero = 7;
      for (let i = 1; i <= 12; i++) {
         const resultado = i * numero;
            console.log(`${i} x ${numero} = ${resultado}`);
        }
    }
    //Realizar la multiplicacion de dos numeros por medio de sumas sucesivas
    ejercicio17(){
       const num1 = 5;
      const num2 = 3;
      let resultado = 0;
     for (let i = 0; i < num2; i++) {
          resultado += num1;
        }
        console.log(`${num1} x ${num2} = ${resultado}`);
    }
    //Realizar la division de dos numeros por medio de restas sucesivas
    ejercicio18(){
        function dividir(dividendo, divisor) {
            let cociente = 0;
            while (dividendo >= divisor) {
              dividendo -= divisor;
              cociente++;
            }
            return [cociente, dividendo];
          }
          
          // Ejemplo de uso
          console.log(dividir(10, 3)); // [3, 1]
          console.log(dividir(20, 5)); // [4, 0]
          console.log(dividir(15, 4)); // [3, 3]
    }
    //Calcular el factorial de un numero
    ejercicio19(){
     const numero = 5;
     let resultado = 1;
      for (let i = 1; i <= numero; i++) {
          resultado *= i;
        }
        console.log(`El factorial de ${numero} es ${resultado}`);
    }
    //Calcular el exponente de un numero
    ejercicio20(){
     const base = 2;
     const exponente = 4;
     const resultado = Math.pow(base, exponente);
     console.log(`${base} elevado a la ${exponente} es igual a ${resultado}`);
    }
    //Calcular la serie de fibonacci dado un numero
    ejercicio21(){
     const numero = 10;
     let num1 = 0, num2 = 1;
     console.log(num1);
     console.log(num2);
     for (let i = 2; i <= numero; i++) {
         const num3 = num1 + num2;
         console.log(num3);
         num1 = num2;
         num2 = num3;
        }
    }
    //Dado un numero invertirlo
    ejercicio22(){
     let numero = 12345;
     numero = parseInt(numero.toString().split('').reverse().join(''));
     console.log(numero);
    }
    //Presentar los divisores de un numero
    ejercicio23(){
      const numero = 24;
       const divisores = [];
     for (let i = 1; i <= numero; i++) {
          if (numero % i === 0) {
             divisores.push(i);
           }
       }
       console.log(divisores);
    }
    //Presentar si un numero es perfecto o no (Perfecto:cuando la suma de los divisores incluidos el 1 y excluido el propio numero dada igual al numero
    ejercicio24(){
      const numero = 28;
        let sumaDivisores = 0;
       for (let i = 1; i < numero; i++) {
         if (numero % i === 0) {
             sumaDivisores += i;
           }
        }
        if (sumaDivisores === numero) {
          console.log(numero + " es un número perfecto");
        } else{
        console.log(numero + " no es un número perfecto");
        }
    }
    // Verfificar si un numero es primo o no(Primo cuando solo es divsivible para 1 y el propio numero, es decir no tenga divisores
    ejercicio25(){
     const numero = 13;
     let contadorDivisores = 0;
     for (let i = 2; i < numero; i++) {
          if (numero % i === 0) {
             contadorDivisores++;
            }
        }
     if (contadorDivisores > 0) {
          console.log(numero + " no es un número primo");
        }else{
          console.log(numero + " es un número primo");
       }
    }
}
//instancia de una variable que contiene todos los metodos
let tareas1= new tareas()
tareas1.ejercicio1()
tareas1.ejercicio2()
tareas1.ejercicio3()
tareas1.ejercicio4()
tareas1.ejercicio5()
tareas1.ejercicio6()
tareas1.ejercicio7()
tareas1.ejercicio8()
tareas1.ejercicio9()
tareas1.ejercicio10()
tareas1.ejercicio11()
tareas1.ejercicio12()
tareas1.ejercicio13()
tareas1.ejercicio14()
tareas1.ejercicio15()
tareas1.ejercicio16()
tareas1.ejercicio17()
tareas1.ejercicio18()
tareas1.ejercicio19()
tareas1.ejercicio20()
tareas1.ejercicio21()
tareas1.ejercicio22()
tareas1.ejercicio23()
tareas1.ejercicio24()
tareas1.ejercicio25()
