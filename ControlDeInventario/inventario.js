
class Inventory{
    constructor() {
        this.list = new Array();
    }

    listar() {
        return this.list;
    }

    add(producto) {
        this.list.push(producto);
    }
    
    del(posicion) {
        let pos = posicion;
        for(let i=0;i<this.list.length;i++) {
            let producto = this.list[i];
            if(this.list.length == 1) {
                this.list = [];
            } else {
                if(pos != i) {
                    this.list[i-1]=producto;
                }
            }
        }
        //Elimina la ultima posicion del vector
        this.list.length = this.list.length - 1;
    }

    find(posicion) {
        let pos = posicion;
        for(let i = 0; i < this.list.length; i++) {
            let producto = this.list[i];
            if(pos == i) {
                return producto;
            }
        }
    }
    
    
    editar() {
        code = gi("editCodigo").value;
        for(let i=0;i<productos.length;i++) {
            prod = productos[i];
            if(code == prod.code) {
                agregarProducto(gi("editCodigo").value);
                gi("txtCodigo").value = prod.code;
                gi("txtNombre").value = prod.name;
                gi("txtCantidad").value = prod.amount;
                gi("txtCosto").value = prod.cost;
                eliminar(gi("editCodigo").value);
            }
        }
    }
}
