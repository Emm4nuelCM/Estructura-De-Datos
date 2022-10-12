class Nodo{
    constructor(numero){
      this.numero=numero;
      this.next=null;
    }
  }
  
   
  class Lista{
    constructor(){
      this.primero=null;
    }
    agregar(nuevo){
      if (this.primero==null)
        this.primero=nuevo;
      else{
          nuevo.next = this.primero;
          this.primero=nuevo;
      }
    }
    
    listarInverso() {
      while (this.primero!=null)
        return this.primero.next;
    }
  }
  
  let datos=new Lista();

  let num=new Nodo(2);
  datos.agregar(num);
  num=new Nodo(3);
  datos.agregar(num);
  num=new Nodo(4);
  datos.agregar(num);
  num=new Nodo(5);
  datos.agregar(num);
  console.log(datos.listarInverso());
  num=new Nodo(1);
  datos.agregar(num);
  console.log(datos.listarInverso());
