var tablaProcesos= document.getElementById('proc_bufer');
for (var a=0; a<memoria.length; a++){
	var elementosTabProcesos= document.createElement("tr");
	var procesoNombre= document.createElement("td");
	var procesoMemoria= document.createElement("td");
	var procesoPrioridad= document.createElement("td");
	var procesoCoeficiente=document.createElement("td");
	//texto
	var textNombre=document.createTextNode(memoria[a].processName);
	var textMemoria=document.createTextNode(memoria[a].memory);
	var textPrioridad=document.createTextNode(memoria[a].priority);
	var textCoeficiente=document.createTextNode(memoria[a].priorityCoeficient);
	//añadiendo el texto a las celdas
	procesoNombre.appendChild(textNombre);
	procesoMemoria.appendChild(textMemoria);
	procesoPrioridad.appendChild(textPrioridad);
	procesoCoeficiente.appendChild(textCoeficiente);
	//añadiendo las celdas a la fila
	elementosTabProcesos.appendChild(procesoNombre);
	elementosTabProcesos.appendChild(procesoMemoria);
	elementosTabProcesos.appendChild(procesoPrioridad);
	elementosTabProcesos.appendChild(procesoCoeficiente);
	//añadiendo la fila a la tabla
	tablaProcesos.appendChild(elementosTabProcesos);

}
var memData=document.createElement("tr");
var memDisp=document.createElement("td");
var memOcu= document.createElement("td");
var textMemDisp=document.createTextNode("Memoria disponible: " + limiteMemoria + " bytes");
var textMemOcu=document.createTextNode("Memoria ocupada: " + memoriaOcupada + " bytes");
memDisp.appendChild(textMemDisp);
memOcu.appendChild(textMemOcu);
memData.appendChild(memDisp);
memData.appendChild(memOcu);
tablaProcesos.appendChild(memData);


var tablaNoProcesos= document.getElementById('proc_not_bufer');
for (var b=0; b<notInMemory.length; b++){
	var elementosNoTabProcesos= document.createElement("tr");
	var procesoNoNombre= document.createElement("td");
	var procesoNoMemoria= document.createElement("td");
	var procesoNoPrioridad= document.createElement("td");
	var procesoNoCoeficiente=document.createElement("td");
	//textNoo
	var textNoNombre=document.createTextNode(notInMemory[b].processName);
	var textNoMemoria=document.createTextNode(notInMemory[b].memory);
	var textNoPrioridad=document.createTextNode(notInMemory[b].priority);
	var textNoCoeficiente=document.createTextNode(notInMemory[b].priorityCoeficient);
	//añadiendo el textNoo b las celdas
	procesoNoNombre.appendChild(textNoNombre);
	procesoNoMemoria.appendChild(textNoMemoria);
	procesoNoPrioridad.appendChild(textNoPrioridad);
	procesoNoCoeficiente.appendChild(textNoCoeficiente);
	//añadiendo las celdas b la fila
	elementosNoTabProcesos.appendChild(procesoNoNombre);
	elementosNoTabProcesos.appendChild(procesoNoMemoria);
	elementosNoTabProcesos.appendChild(procesoNoPrioridad);
	elementosNoTabProcesos.appendChild(procesoNoCoeficiente);
	//añadiendo la fila b la tabla
	tablaNoProcesos.appendChild(elementosNoTabProcesos);

}