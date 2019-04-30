
const app = new Vue({
  el: '#app',
  data() {
    return {
      productos: [
        { descripcion: 'Mouse logitech', cantidad: 5, precio: 50000 },
        { descripcion: 'Monitor LG', cantidad: 1, precio: 730000 },
        { descripcion: 'Tarjeta grafica MSI 8Gb', cantidad: 1, precio: 1800000 }
      ],
      cliente: [
        { nombre: "Alejandro Piamba", cedula: "1061999000", telefono: 3207861123, direccion: "Nueva Granada" }
      ],

      empresa: [{
        nombre: "MacroComputo", nit: "123.456.789 1", direccion: "centro historico"
      }],

      descripcion: '', precio: 0, cantidad: 0
    }
  },
  methods: {
    agregarFila(desc, can, pre) {
      this.productos.push({ descripcion: desc, cantidad: can, precio: pre });
    },
    exportarPdf() {
      var vm = this
      var datosProducto = [
        { title: "Descripcion", dataKey: "descripcion" },
        { title: "Cantidad", dataKey: "cantidad" },
        { title: "Precio", dataKey: "precio" }

      ];
      var datosCliente = [
        { title: "Cliente", dataKey: "nombre" },
        { title: "Cedula", dataKey: "cedula" },
        { title: "Telefono", dataKey: "telefono" },
        { title: "Direccion", dataKey: "direccion" }

      ];
      var datosEmpresa = [
        { title: "Empresa", dataKey: "nombre" },
        { title: "Nit", dataKey: "nit" },
        { title: "Direccion", dataKey: "direccion" }

      ];
      var resultado = [{
        title: "SubTotal:", dataKey: "subtotal",
        title: "I.V.A:", dataKey: "iva",
        title: "Total:", dataKey: "total"
      }]
      var doc = new jsPDF('p', 'pt', 'letter');
      doc.text('Factura de compra 0012', 10, 12)
      doc.autoTable(datosEmpresa, vm.empresa);
      doc.autoTable(datosCliente, vm.cliente);
      doc.autoTable(datosProducto, vm.productos);
      /* doc.autoTable(resultado, vm.acc); */
      doc.save('factura.pdf');
    }
  },

  computed: {
    total() {
      return this.productos.reduce(
        (acc, item) => parseFloat(acc) + parseFloat(item.precio) * parseFloat(item.cantidad),
        0
      );

    },

  },
  /* filters: {
    currency(value) {
      return value.toFixed(2);
    }
  } */
});


