class Nodo{
    constructor(numero){
      this.numero=numero;
      this.next=null;
      this.prev=null;
    }
  }
  
  class ListaDoble{
    constructor(){
      this.primero=null;
      this.ultimo=null;
    }
    agregar(nuevo){
      if (!this.primero){
        this.primero=nuevo;
        this.ultimo=nuevo;
      }else{
        this.ultimo.next=nuevo;
        nuevo.prev=this.ultimo;
        this.ultimo=nuevo;
      }
    }
    /*
    agregarInicio(nuevo){
      if (this.primero==null)
        this.primero=nuevo;
      else{
          nuevo.next = this.primero;
          this.primero=nuevo;
      }
    }*/
    
    /*
    extraerPrimero() {
      let temp = this.primero;
      this.primero=this.primero.next;
      return temp;
    }
    extraerUltimo() {
      let nodo = this.primero;
      while(nodo.next.next != null) {
        nodo = nodo.next;
        if(nodo.next.next == null) {
          let temp = nodo.next;
          nodo.next = null;S
          return temp;
        }
      }*/

    listar() {
      let list = "";
      let int = this.primero;
      while (int!=null) {
        list += int.numero + " ";
        int=int.next;
      }
      return list;
    }

    listarInverso() {
      let list = "";
      let int = this.ultimo;
      while (int!=null) {
        list += int.numero + " ";
        int=int.prev;
      }
      return list;
    }

    invertir() {
      let temp=this.ultimo;
      let aux = temp.prev;
      while(aux!=this.primero) {
        aux.next=null;
        aux.prev.next=temp;
        temp.prev=aux.prev;
        temp.next=aux;
        aux.prev=temp;
        this.ultimo=aux;
      }
    }
}
  
  let datos=new ListaDoble();

  let num=new Nodo(1);
  datos.agregar(num);
  num=new Nodo(2);
  datos.agregar(num);
  num=new Nodo(3);
  datos.agregar(num);
  num=new Nodo(4);
  datos.agregar(num);
  num=new Nodo(5);
  datos.agregar(num);
  num=new Nodo(6);
  datos.agregar(num);
  num=new Nodo(7);
  datos.agregar(num);
  console.log(datos.listar());
  console.log(datos.listarInverso());

  console.log(datos.invertir());
  console.log(datos.listar());

  

  /*
  let first = datos.extraerPrimero();
  console.log(first.numero);
  console.log(datos.listar());

  let last = datos.extraerUltimo();
  console.log(last.numero);
  console.log(datos.listar());*/
