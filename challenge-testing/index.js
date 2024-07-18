class CarritoCompras {
  constructor() {
    this.products = [];
  }

  agregarProducto(producto) {
    if (producto.precio > 0);
    this.products.push(producto);
  }

  calcularTotal() {
    let total = 0;

    for (let i = 0; i < this.products.length; i++) {
      total += this.products[i].precio;
    }
    return total;
  }

  aplicarDescuento(porcentaje) {
    if (porcentaje < 1) throw "Porcentaje de descuento no valido";

    let total = this.calcularTotal();
    return total - total * (porcentaje / 100);
  }
}

module.exports = CarritoCompras;
