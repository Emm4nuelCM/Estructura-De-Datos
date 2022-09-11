
class Inventory{
    constructor() {
        this.list = new Array();
    }

    listar() {
        return this.list;
    }

    guardar(producto) {
        this.list.push(producto);
    }
    
    eliminar(posicion) {
        let update = new Array();
        let pos = posicion;
        for(let i=0;i<this.list.length;i++) {
            let producto = this.list[i];
            if(pos != i) {
               update.push(producto);
            }
        }
        this.list = update;
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
