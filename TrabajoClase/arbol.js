class Nodo {
    constructor(numero) {
        this.numero=numero;
        this.left=null;
        this.right=null;
    }
}
class Arbol {
    constructor() {
        this.root=null;
    }
    add(nuevo, nodo) {
        if(!nodo) {
            if(this.root==null) {
                this.root=nuevo;
            } else {
                this.add(nuevo,this.root);
            }
        } else {
            if(nodo.numero>nuevo.numero) {
                if(nodo.left==null) {
                    nodo.left=nuevo;
                } else {
                    this.add(nuevo,nodo.left);
                }
            } else {
                if(nodo.right==null) {
                    nodo.right=nuevo;
                } else {
                    this.add(nuevo,nodo.right);
                }
            }
        }
    }

    inOrder(nodo) {
        if(!nodo) {
            if(this.root==null) {
                console.log(".");
            } else {
                this.inOrder(this.root)
            }
        } else {
            if(nodo.left!=null) {
                this.inOrder(nodo.izq);
                console.log(nodo.numero);
            } 
        }
    }
}

let arbol = new Arbol();
let nodo=new Nodo(5);
arbol.add(nodo);
nodo=new Nodo(4);
arbol.add(nodo);
nodo=new Nodo(6);
arbol.add(nodo);
console.log(arbol.root);