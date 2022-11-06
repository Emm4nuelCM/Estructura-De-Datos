class Proceso{
  constructor(ciclos){
    this.ciclos=ciclos;
    this.sig=null;
  }
}

class ListaSimple{
  constructor(){
    this.primero=null;
    this.ultimo=null;
  }
  agregar(nuevo){
    if (this.primero==null){
      this.primero=nuevo;
      this.ultimo=nuevo;
    }else{
      this.ultimo.sig=nuevo;
      this.ultimo=nuevo;
    }
  }

  actual() {
    return this.primero;
  }
  pasaAlSiguiente() {
    this.primero=this.primero.sig;
  }
}

let misProcesos=new ListaSimple();
let ciclosVacios=0;
let procesosAtendidos=0;
let procesosTotales=0;
let ciclosTotales=0;
for (let i=1; i<=300; i++){
  let probabilidad=Math.floor(Math.random()*100)+1;
  if(probabilidad<=35){
    let ciclos=Math.floor(Math.random()*11)+4;
    let nuevo=new Proceso(ciclos);
    misProcesos.agregar(nuevo);
    procesosTotales++;
    ciclosTotales+=ciclos;
    console.log(`Ciclo ${i}: Nuevo Proceso con ${ciclos} ciclos recibido`);
  }
  if(misProcesos.actual()==null){
    ciclosVacios++;
    console.log(`Ciclo ${i}: Sin Procesos Actuales`);
  }else{
    misProcesos.actual().ciclos--;
    if(misProcesos.actual().ciclos==0){
      misProcesos.pasaAlSiguiente();
      procesosAtendidos++;
      console.log(`Ciclo ${i}: Se Termino de Antender un Proceso`);
    }
  }  
}
console.log(`Ciclos Vacios: ${ciclosVacios}`);
console.log(`Procesos Atendidos: ${procesosAtendidos}`);
console.log(`Procesos Pendientes: ${procesosTotales-procesosAtendidos}`);
console.log(`Ciclos Pendientes: ${ciclosTotales-(300-ciclosVacios)}`);
