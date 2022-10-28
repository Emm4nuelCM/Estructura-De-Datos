class Nodo{
  constructor(dato){
    this.dato=dato;
    this.sig=null;
    this.ant=null;
  }
}
class ListaCirc{
  constructor(){
    this.primero=null;
  }

  agregar(nuevo){
    if(this.primero=null) {
      this.primero=nuevo;
      nuevo.sig=nuevo;
      nuevo.ant=nuevo;
    } else {
      nuevo.ant=this.primero.ant;
      nuevo.sig=this.primero;
      this.primero.ant.sig=nuevo;
      this.primero.ant=nuevo;
    }
  }

  extraerInicio(){
    
  }
}
