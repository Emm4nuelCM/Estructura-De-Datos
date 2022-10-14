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
          nodo.next = null;
          return temp;
        }
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

  let first = datos.extraerPrimero();
  console.log(first.numero);
  console.log(datos.listar());

  let last = datos.extraerUltimo();
  console.log(last.numero);
  console.log(datos.listar());
