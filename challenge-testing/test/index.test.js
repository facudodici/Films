const CarritoCompra = require("../index");

describe("CarritoCompra", () => {
    it("Es una clase", () => {
        expect(typeof CarritoCompra.prototype.constructor).toBe("function");
    });

    it("Debe inicializarse con una lista vacia de productos", () => {
        const newShoppingCart = new CarritoCompra();
        expect(newShoppingCart.products).toEqual([]);
    });

    it("Debe tener la funcion 'agregarProducto(producto)'", () => {
        expect(typeof CarritoCompra.prototype.agregarProducto).toBe("function");
    });

    it("Debe agregar un producto correctamente", () => {
        const shoppingCart = new CarritoCompra();
        const productA = {nombre: "Producto A", precio: 100};
        const productB = {nombre: "Producto B", precio: 100};
        
        shoppingCart.agregarProducto(productA);
        expect(shoppingCart.products).toEqual([productA]);

        shoppingCart.agregarProducto(productB);
        expect(shoppingCart.products).toEqual([productA, productB]);
    });

    it("Debe tener una funcion 'calcularTotal()'", () => {
        expect(typeof CarritoCompra.prototype.calcularTotal).toBe("function");
    });

    it("calcularTotal debe sumar el precio de todos los productos", () => {
        const shoppingCart = new CarritoCompra();
        const productA = {nombre: "Producto A", precio: 100};
        const productB = {nombre: "Producto B", precio: 100};

        shoppingCart.agregarProducto(productA);
        expect(shoppingCart.calcularTotal()).toBe(100);

        shoppingCart.agregarProducto(productB);
        expect(shoppingCart.calcularTotal()).toBe(200);
    });

    it("Debe tener una funcion 'aplicarDescuento()'", () => {
        expect(typeof CarritoCompra.prototype.aplicarDescuento).toBe("function"); 
    })

    it("aplicarDescuento debe descontar el porcentaje del total", () => {
        const shoppingCart = new CarritoCompra();
        const productA = {nombre: "Producto A", precio: 100};

        shoppingCart.agregarProducto(productA);
        expect(shoppingCart.aplicarDescuento(10)).toBe(90);
        expect(shoppingCart.aplicarDescuento(50)).toBe(50);
        expect(shoppingCart.aplicarDescuento(25)).toBe(75);
        expect(() => shoppingCart.aplicarDescuento(-10)).toThrowError("Porcentaje de descuento no valido");
    });
})