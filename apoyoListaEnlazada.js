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
            lista+=temp.text+" ";
            temp=temp.next;
        }
        console.log(lista);
    }

    extraer(posicion) {
        let temp=this.primero;
        let aux=null;
        for(let i=1;i<=posicion;i++) {
            if(posicion==i) {
                aux.next=temp.next;
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

lista.listar();
console.log(lista.extraer(5));
lista.listar();