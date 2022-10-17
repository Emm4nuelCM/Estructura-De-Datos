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
        let temp=this.primero;
        while (temp.next!=null)
          temp=temp.next;
        temp.next=nuevo;
      }
    }
    agregarInicio(nuevo){
      if (this.primero==null)
        this.primero=nuevo;
      else{
          nuevo.next = this.primero;
          this.primero=nuevo;
      }
    }
    listar() {
      let list = "";
      let int = this.primero;
      while (int!=null) {
        list += int.numero + " ";
        int=int.next;
      }
      console.log(list);
    }
    
    listarInverso() {
      let list = "";
      let int = this.primero;
      while (int!=null) {
        list = int.numero + " " + list;
        int=int.next;
      }
      console.log(list);
  }
}
  
  
  let datos=new Lista();

  let num=new Nodo(1);
  datos.agregarInicio(num);
  num=new Nodo(2);
  datos.agregarInicio(num);
  num=new Nodo(3);
  datos.agregarInicio(num);
  num=new Nodo(4);
  datos.agregarInicio(num);
  num=new Nodo(5);
  datos.agregarInicio(num);
  num=new Nodo(6);
  datos.agregarInicio(num);
  num=new Nodo(7);
  datos.agregarInicio(num);
  datos.listar();
  datos.listarInverso();