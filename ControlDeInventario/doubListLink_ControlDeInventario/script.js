
class Nodo{
    constructor(producto){
        this.producto= producto;
        this.next=null;
        this.prev=null;	
    }
}

class Inventory{
    constructor() {
        this.listPrimero = null;
        this.listUltimo = null;
    }

    listar() {
        let list = [];
        let int = this.listPrimero;
        while (int!=null) {
            list.push(int.producto);
            int=int.next;
        }
        return list;
    }

    listInvert() {
        let listInvert = [];
        let int = this.listUltimo;
        while (int!=null) {
            listInvert.push(int.producto);
            int=int.prev;
        }
        return listInvert;
    }

    add(nuevo) {
        if (this.listPrimero==null) {
            this.listPrimero=nuevo;
            this.listUltimo=nuevo;
        }
        else{
            let temp=this.listPrimero;
            if(this.listPrimero.producto.code>nuevo.producto.code) {
                temp.prev=nuevo;
                nuevo.next=temp;
                this.listPrimero=nuevo;
                return;
            }
            while (temp.next!=null) {
                temp=temp.next;
                if(temp.producto.code>nuevo.producto.code) {
                    nuevo.next=temp;
                    nuevo.prev=temp.prev;
                    temp.prev.next=nuevo;
                    temp.prev=nuevo;
                    return;
                }
            }
            temp.next=nuevo;
            nuevo.prev=temp;
            this.listUltimo=nuevo;
        }
    }

    del(codigo) {
        let nodo = this.listPrimero;
        if(codigo == nodo.producto.code) {
            this.listPrimero = nodo.next;
            return true;
        }
        while(nodo!=null) {
            if(codigo!=nodo.producto.code) {
                nodo = nodo.next;
            } else if(codigo == nodo.producto.code) {
                nodo.prev.next=nodo.next;
                nodo.next.prev=nodo.prev;
                return true;
            }
        }
    }

    find(codigo) {
        let nodo = this.listPrimero;
        while(nodo!=null) {
            if(codigo!=nodo.producto.code) {
                nodo = nodo.next;
            } else if(codigo == nodo.producto.code) {
                return nodo.producto;
            }
        }
    }
    
    edit(codigo) {
         return this.find(codigo);
    }
}

class Product{
    constructor(code, name, amount, cost) {
        this.code = code;
        this.name = name;
        this.amount = amount;
        this.cost = cost;
    }

    info() {
        return `Codigo: ${this.code} Nombre: ${this.name} Cantidad: ${this.amount} Costo: ${this.cost}`
    }   
}