class Nodo{
    constructor(texto) {
        this.text=texto;
        this.next=null;
    }
}

class Lista{
    constructor() {
        this.primero=null;
    }
    agregarInicio(nuevo) {
        if(this.primero==null) {
            this.primero=nuevo;
        } else {
            nuevo.next=this.primero;
            this.primero=nuevo;
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

    intercambiar(dato1, dato2) { //Error al elegir el primero valor
        let temp=this.primero;
        let aux=temp;
        let temp2=this.primero;
        let aux2=null;
        let stop = false;;
        while(stop==false) {
            if(temp.text!=dato1) {
                aux=temp;
                temp=temp.next;
            }
            if(temp2.text!=dato2) {
                aux2=temp2;
                temp2=temp2.next;
            }
            if(temp.text==dato1 && temp2.text==dato2) {
                stop=true;
            }
        }
        aux.next=temp2;
        aux2.next=temp;
        aux=temp.next;
        aux2=temp2.next;
        temp.next=aux2;
        temp2.next=aux;
    }

    eliminarDeAtras(dato) {
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

let lista = new Lista();

lista.agregarInicio(new Nodo("Hola"));
lista.agregarInicio(new Nodo("Mundo!"));
lista.agregarInicio(new Nodo("esta"));
lista.agregarInicio(new Nodo("es"));
lista.agregarInicio(new Nodo("una"));
lista.agregarInicio(new Nodo("prueba"));
lista.agregarInicio(new Nodo("es"));
lista.agregarInicio(new Nodo("simple"));

lista.listar();

lista.extraer(8);
lista.listar();

lista.eliminarDeAtras("es");
lista.listar();

lista.intercambiar("es","esta");
lista.listar();
