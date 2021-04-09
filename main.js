
/*aprovechar el loop de creación para obtener el menor y el mayor de la memoria y la prioridad*/
var listaPrioridades=[1,2,3,4,5];
var procesos=[];
for (var i=0; i<1000; i++){

	var nombreProceso=(i).toString(16);
	while (nombreProceso.length<=4){
		nombreProceso="0" + nombreProceso;
	}
	var memoria = gaussian(156, 46);

	var prioridadAleatoria=listaPrioridades[elemAleatorioLista(listaPrioridades)];
	var prioridad= prioridadAleatoria;
	listaPrioridades=removeItemFromArr(listaPrioridades, prioridadAleatoria);
	if (listaPrioridades.length==0){
		listaPrioridades=[1,2,3,4,5];
	}
	
	var proceso= new Proceso(nombreProceso, memoria(), prioridad);
	procesos.push(proceso);

	//obtener mayor y menor para la memoria
	if (procesos.length==1){
		var mayorMemoria=procesos[0].memory;
		var menorMemoria=procesos[0].memory;
	}
	else{
		if (procesos[i].memory>mayorMemoria){
			mayorMemoria=procesos[i].memory;
		}
		if (procesos[i].memory<menorMemoria){
			menorMemoria=procesos[i].memory;
		}
	}
}

/*
console.log(procesos);
console.log(mayorMemoria);
console.log(menorMemoria);
*/

//crear el coeficiente de prioridad relacionado con su tamaño en memoria
for (var j=0; j<procesos.length; j++){
	//restar entre el mas chico, sumar uno y dividir entre el mas grande
	//memoria
	var denominadorPeso=((procesos[j].memory-menorMemoria)/mayorMemoria)+1;
	//prioridad
	var nominadorPrioridad=((procesos[j].priority-1)/5)+1;
	procesos[j].priorityCoeficient= nominadorPrioridad/denominadorPeso;
}

var sortedProcess= QS(procesos);
//console.log(sortedProcess);

//vaciar la lista de procesos en una pila en orden inverso
//12kb=12,288 bytes
var limiteMemoria=12288

//mientas la memoria no esté llena o los procesos terminados de ejecutar
var memoria= [];
var memoriaOcupada=0;
var notInMemory=[];
for (var k=0; k<sortedProcess.length;k++){
	var backwardsIndex=sortedProcess.length-k-1;
	//console.log(backwardsIndex);

	if (((sortedProcess[backwardsIndex].memory)+memoriaOcupada)<=limiteMemoria){
		memoria.push(sortedProcess[backwardsIndex]);
		memoriaOcupada+=sortedProcess[backwardsIndex].memory;
	}
	else{
		notInMemory.push(sortedProcess[backwardsIndex]);
	}

}

/*
console.log(memoriaOcupada);
console.log(memoria);
console.log(notInMemory);
*/

