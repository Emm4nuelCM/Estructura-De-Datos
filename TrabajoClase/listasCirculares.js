class Base{
    constructor(nombre, minutos) {
        this.nombre=nombre;
        this.minutos=minutos;
        this.next=null;
        this.prev=null;
    }
}

class listaBases{
    constructor() {
        this.primero=null;
        this.ultimo=null;
    }
    agregar(nuevo) {
        if(this.primero==null) {
            this.primero=nuevo;
            this.ultimo=nuevo;
        } else {
            this.ultimo.next=nuevo;
            nuevo.prev=this.ultimo;
            nuevo.next=this.primero;
            this.ultimo=nuevo;
        }
    }
    buscar() {

    }
    eliminar() {

    }
    imprimir() {
        let list = "";
        let aux=this.primero;
        while(aux!=this.ultimo) {
            list+=`[${aux.nombre}-${aux.minutos} min], `;
            aux=aux.next;
        }
        list+=`[${aux.nombre}-${aux.minutos} min]`;
        return list;
    }

    recorrido(baseInicio, horaInicio, minutoInicio, horaFin, minutoFin) {

    }
}

let bases=new listaBases();
let base = new Base("UDC", 15);
bases.agregar(base);
base=new Base("San Fernando", 15);
bases.agregar(base);
base=new Base("Liverpool", 15);
bases.agregar(base);
base=new Base("Centro", 10);
bases.agregar(base);
base=new Base("Central Rojos", 16);
bases.agregar(base);
base=new Base("Parque Hidalgo", 19);
bases.agregar(base);

console.log(bases.imprimir());