
class Nodo{
    constructor(producto){
        this.producto= producto;
        this.next=null;
    }
}

class Inventory{
    constructor() {
        this.listPrimero = null;
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

    listInvert() {
        let listInvert = [];

        for (let i = this.list.length - 1; i >= 0; i--) {
            listInvert.push(this.list[i]);
        }
        return listInvert;
    }

    add(nuevo) {
        if (this.listPrimero==null)
        this.listPrimero=nuevo;
      else{
        let temp=this.listPrimero;
        while (temp.next!=null)
          temp=temp.next;
          temp.next=nuevo;
        }
    }
    
    del(codigo) {
        for(let i=0;i<this.list.length;i++) {
            if(codigo == this.list[i].code) {
                if(this.list.length == 1) {
                    this.list = [];
                    return true;
                } else {
                    for(let j=i;j<this.list.length;j++) {
                        this.list[j]=this.list[j+1];
                    }
                    this.list.length = this.list.length - 1;
                    return true;
                }
            }
        }
    }

    find(codigo) {
        let l = 0;
        let r = this.list.length-1;
        while(l<=r){
            let m = Math.floor((l+r)/2);
            if(codigo == this.list[m].code) {
                return this.list[m];
            }
            if(codigo > this.list[m].code) {
                l=m+1;
            } else if(codigo < this.list[m].code) {
                r=m-1;
            }
        }
        return null;

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

//Clase NODO agregada
//Lista Contructor Agregado
//lista agregar agregado
//lista listar agregado