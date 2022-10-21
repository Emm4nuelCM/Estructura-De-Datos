class Nodo {
    constructor(texto) {
        this.text=texto;
        this.next=null;
    }
}

class Lista{
    constructor() {
        this.primero=null;
    }
    agregar(nuevo) {
        if(this.primero==null) {
            this.primero=nuevo;
        } else {
            let temp=this.primero;
            while(temp.next!=null) {
                temp=temp.next;
            } temp.next=nuevo;
        }
    }

    listar() {
        let lista="";
        let temp=this.primero;
        while(temp) {
            lista+=temp.text+", ";
            temp=temp.next;
        }
        console.log(lista);
    }

    extraer(posicion) {
        let temp=this.primero;
        let aux=null;
        for(let i=1;i<=posicion;i++) {
            if(posicion==i) {
                if(posicion==1) {
                    this.primero=this.primero.next;
                } else {
                    aux.next=temp.next;
                }
                return temp;
            } else {
                if(i==posicion-1) {
                    aux=temp;
                }
                temp=temp.next;
                if(temp==null) {
                    return null;
                }
            }
        }
        return null;
    }

    /*
    intercambiar(dato1, dato2) {
        let temp=this.primero;
        let temp2=null;
        let aux=null;
        let aux2=null;
        while(aux2.next==temp2) {
            
        }
    }*/

    eliminarDatoUltimo(dato) {
        let temp=this.primero;
        let aux=null;
        let int=null;
        while(temp.next!=null) {
            if(this.primero.next==null && this.primero.text==dato) {
                this.primero=null;
                return;
            } else if(this.primero.text==dato) {
                this.primero=this.primero.next;
                return;
            }
            if(temp.next!=null) {
                aux=temp;
                temp=temp.next;
                if(temp.text==dato) {
                    int=aux;
                }
            }
        }
        if(int==null) {
            return;
        } else {
            int.next=int.next.next;
        }
    }
}

let lista=new Lista();

let nodo=new Nodo("Hola");
lista.agregar(nodo);
nodo=new Nodo("Mundo!");
lista.agregar(nodo);
nodo=new Nodo("Emmanuel");
lista.agregar(nodo);
nodo=new Nodo("Camacho");
lista.agregar(nodo);
nodo=new Nodo("Moctezuma");
lista.agregar(nodo);
nodo=new Nodo("3H");
lista.agregar(nodo);

lista.extraer(1);
lista.eliminarDatoUltimo("Mundo!");

lista.listar();