function gaussian(mean, stdev) {
    var y2;
    var use_last = false;
    return function() {
        var y1;
        if(use_last) {
           y1 = y2;
           use_last = false;
        }
        else {
            var x1, x2, w;
            do {
                 x1 = 2.0 * Math.random() - 1.0;
                 x2 = 2.0 * Math.random() - 1.0;
                 w  = x1 * x1 + x2 * x2;               
            } while( w >= 1.0);
            w = Math.sqrt((-2.0 * Math.log(w))/w);
            y1 = x1 * w;
            y2 = x2 * w;
            use_last = true;
       }

       var retval = mean + stdev * y1;
       if(retval > 0) 
           return retval;
       return -retval;
   }
}

/*var standard = gaussian(2.5, 2.5);
var data=[]
for(i=0; i<100; i++) {
    data.push(standard());
    console.log(data[i]);
  }*/

//guarda todas las caracteristicas del proceso
class Proceso {
  constructor(processName, memory, priority) {
    this.processName=processName;
    this.memory=memory;
    this.priority=priority;
    this.priorityCoeficient=null;
  }

  readMemorySize(){
    return this.memory;
  }
}
//remueve un item de una lista
var removeItemFromArr = ( arr, item ) => {
    return arr.filter( e => e !== item );
};
//elige un indice aleatorio de una lista dada
function elemAleatorioLista(lista) {
  var longitud=lista.length
  return Math.floor(Math.random() * (longitud - 0)) +0;
}




//quick sort implementado a una lista contenedora de clase "proceso"
function QS(lista) {
  //console.log("original")
  //console.log(lista)
  var pivote=lista[0].priorityCoeficient; 
  var listaMenores=[];
  var listaMayores=[];
  var enMedio=[];
  

  for (var k=0; k<lista.length; k++){
    if (lista[k].priorityCoeficient<pivote){
      listaMenores.push(lista[k]);
    }
    else if (lista[k].priorityCoeficient>pivote){
      listaMayores.push(lista[k]);
    }
    else if (lista[k].priorityCoeficient==pivote){
      enMedio.push(lista[k]);
    }
  }
  
  /*
  console.log(contador);
  contador++;
  console.log(listaMenores);
  console.log("----------");
  console.log(enMedio);
  console.log("----------");
  console.log(listaMayores);
  console.log("----------");
  */


  if (lista.length<=1){
    return (lista);
  }
  
  if (listaMenores.length>1){
    //console.log("menores");
    //console.log(listaMenores);
    listaMenores=QS(listaMenores);
    //console.log("menores procesados");
    //console.log(listaMenores);
    
  } 
  if (listaMayores.length>1){
    //console.log("mayores");
    //console.log(listaMayores);
    listaMayores=QS(listaMayores);
    //console.log("mayores procesados");
    //console.log(listaMayores);
    
  }
  
  if (typeof(listaMenores)==='undefined'){
    var sorted=enMedio.concat(listaMayores);  
  }
  else if (typeof(listaMayores)==='undefined'){
    var sorted=listaMenores.concat(enMedio);  
  }
  else if (typeof(enMedio)==='undefined'){
    var sorted=listaMenores.concat(listaMayoresist);  
  }
  else{
    sorted=listaMenores.concat(enMedio, listaMayores);    
/*  console.log("ordenado");
  console.log(sorted);*/
  return (sorted);  
  }
}
