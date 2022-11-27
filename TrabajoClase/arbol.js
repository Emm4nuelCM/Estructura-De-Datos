//NODOS  //NODOS  //NODOS  //NODOS  //NODOS  //NODOS 
class Nodo {
    constructor(numero) {
        this.numero=numero;
        this.left=null;
        this.right=null;
    }
}
class NodoLista {
    constructor(nodo) {
        this.nodo=nodo;
        this.next=null;
        this.prev=null;
    }
}

//ARBOL  //ARBOL  //ARBOL  //ARBOL  //ARBOL  //ARBOL  //ARBOL
class Arbol {
    constructor() {
        this.root=null;
    }

    toList(string, startEnd) {
        let tmp=string.split(""), list=null, listLast=null;
        while(tmp.length != 0) {
            if(list==null) {
                list=new NodoLista(new Nodo(tmp[0]));
                listLast=list;
            } else {
                let nodo=new NodoLista(new Nodo(tmp[0]));
                listLast.next=nodo;
                nodo.prev=listLast;
                listLast=nodo;
            }
            tmp.shift();
        }
    
        if(startEnd) {
            return listLast;
        } else {
            return list;
        }
    }

    generate(string) {
        function create(loop) {
            let val1, val2;
            if(!loop) {
                val1="*";
                val2="/";
            } else {
                val1="+";
                val2="-";
            }
            let i=list;
            while(i) {
                let actual=i.nodo;
                if(actual.numero==val1 || actual.numero==val2) {
                actual.left=i.prev.nodo;
                actual.right=i.next.nodo;
                    if(i.prev.prev!=null) {
                        i.prev.prev.next=i;
                        i.prev=i.prev.prev;
                    } else {
                        list=i;
                        i.prev=null;
                    }
                    if(i.next.next!=null) {
                        i.next.next.prev=i;
                        i.next=i.next.next;
                    } else {
                        i.next=null;
                    }
                }
                i=i.next;
            }
            if(!loop) {
                create("change");
            }
        }
        let list=this.toList(string);
        create();
        this.root=list.nodo;
        list=null;
    }

    resolve(mode) {
        let list=null, tmp=[];
        if(mode == "pre") {
            list=this.toList(this.order("pre"), "true");
            while(list) {
                tmp.push(list.nodo.numero);
                console.log(tmp);
                switch(list.nodo.numero) {
                    case "*":
                        tmp[tmp.length-3]=parseInt(tmp[tmp.length-2])*parseInt(tmp[tmp.length-3]);
                        tmp.pop();
                        tmp.pop();
                        list=list.prev;
                        break;
                    case "/":
                        tmp[tmp.length-3]=parseInt(tmp[tmp.length-2])/parseInt(tmp[tmp.length-3]);
                        tmp.pop();
                        tmp.pop();
                        list=list.prev;
                        break;
                    case "+":
                        tmp[tmp.length-3]=parseInt(tmp[tmp.length-2])+parseInt(tmp[tmp.length-3]);
                        tmp.pop();
                        tmp.pop();
                        list=list.prev;
                        break;
                    case "-":
                        tmp[tmp.length-3]=parseInt(tmp[tmp.length-2])-parseInt(tmp[tmp.length-3]);
                        tmp.pop();
                        tmp.pop();
                        list=list.prev;
                        break;
                    default :
                    list=list.prev;
                }
            }
        } else {
            list=this.toList(this.order("post"));
            while(list) {
                tmp.push(list.nodo.numero);
                console.log(tmp);
                switch(list.nodo.numero) {
                    case "*":
                        tmp[tmp.length-3]=parseInt(tmp[tmp.length-3])*parseInt(tmp[tmp.length-2]);
                        tmp.pop();
                        tmp.pop();
                        list=list.next;
                        break;
                    case "/":
                        tmp[tmp.length-3]=parseInt(tmp[tmp.length-3])/parseInt(tmp[tmp.length-2]);
                        tmp.pop();
                        tmp.pop();
                        list=list.next;
                        break;
                    case "+":
                        tmp[tmp.length-3]=parseInt(tmp[tmp.length-3])+parseInt(tmp[tmp.length-2]);
                        tmp.pop();
                        tmp.pop();
                        list=list.next;
                        break;
                    case "-":
                        tmp[tmp.length-3]=parseInt(tmp[tmp.length-3])-parseInt(tmp[tmp.length-2]);
                        tmp.pop();
                        tmp.pop();
                        list=list.next;
                        break;
                    default :
                    list=list.next;
                }
            }
        }
        console.log(`Resultado: ${tmp[0]}`);
    }

    order(mode) {
        let tmp = "", option="";
        function listIn(nodo, list) {
            tmp = list;
            if(!nodo) return;
            listIn(nodo.left, tmp);
            tmp+=nodo.numero;
            listIn(nodo.right, tmp);
        }
        function listPre(nodo, list) {
            tmp = list;
            if(!nodo) return;
            tmp+=nodo.numero;
            listPre(nodo.left, tmp);
            listPre(nodo.right, tmp);
        }
        function listPost(nodo, list) {
            tmp = list;
            if(!nodo) return;
            listPost(nodo.left, tmp);
            listPost(nodo.right, tmp);
            tmp+=nodo.numero;
        }
        if(this.root==null) {
            console.log(".");
        } else if(mode=="in") {
            listIn(this.root, tmp);
            option="INORDER";
        } else if(mode=="pre") {
            listPre(this.root, tmp);
            option="PREORDER";
        } else if(mode=="post") {
            listPost(this.root, tmp);
            option="POSTORDER"
        }
        console.log(`${option}: ${tmp}`);
        return tmp;
    }
}

//LLAMADA A LAS FUNCIONES  //LLAMADA A LAS FUNCIONES  //LLAMADA A LAS FUNCIONES
let arbol = new Arbol();
arbol.generate("3+5+6*7+5*4/2");
arbol.resolve("pre");
arbol.resolve("post");

//DEPURADOR
/*
let t=list;
let tl="";
while(t!=null) {
    tl+=t.nodo.numero;
    t=t.next;
}
console.log(tl);
*/