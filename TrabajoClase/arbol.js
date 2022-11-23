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

    inOrder() {
        let tmp = [];
        function listIn(nodo, array) {
            tmp = array;
            if(!nodo) return;
            listIn(nodo.left, tmp);
            tmp.push(nodo.numero);
            listIn(nodo.right, tmp);
        }
        if(this.root==null) {
            console.log(".");
        } else {
            listIn(this.root, tmp);
        }
        console.log(tmp);
    }

    preOrder() {
        let tmp = [];
        function listPre(nodo, array) {
            tmp = array;
            if(!nodo) return;
            tmp.push(nodo.numero);
            listPre(nodo.left, tmp);
            listPre(nodo.right, tmp);
        }
        if(this.root==null) {
            console.log(".");
        } else {
            listPre(this.root, tmp);
        }
        console.log(tmp);
    }

    postOrder() {
        let tmp = [];
        function listPost(nodo, array) {
            tmp = array;
            if(!nodo) return;
            listPost(nodo.left, tmp);
            listPost(nodo.right, tmp);
            tmp.push(nodo.numero);
        }
        if(this.root==null) {
            console.log(".");
        } else {
            listPost(this.root, tmp);
        }
        console.log(tmp);
    }
}

let arbol = new Arbol();
let nodo=new Nodo(5);
arbol.add(nodo);
nodo=new Nodo(4);
arbol.add(nodo);
nodo=new Nodo(6);
arbol.add(nodo);
nodo=new Nodo(7);
arbol.add(nodo);
nodo=new Nodo(3);
arbol.add(nodo);
nodo=new Nodo(8);
arbol.add(nodo);

arbol.inOrder();
arbol.preOrder();
arbol.postOrder();