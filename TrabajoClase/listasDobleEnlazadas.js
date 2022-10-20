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

    listar() {
      let list = "";
      let int = this.primero;
      while (int!=null) {
        list += int.numero + " ";
        int=int.next;
      }
      return list;
    }

    invertir() {
      let temp=this.primero;
      let aux=null;
      while(temp) {
        aux=temp.prev;
        temp.prev=temp.next;
        temp.next=aux;
        temp=temp.prev;
      }
      if(aux) {
        this.primero=aux.prev;
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
 
  datos.invertir();
  console.log(datos.listar());