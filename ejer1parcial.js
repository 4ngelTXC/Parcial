// Angel Gustavo Pimentel Amaya

let gastosMensuales = [
    { categoria: 'Vivienda', valor: 300 },
    { categoria: 'Alimentos', valor: 400 },
    { categoria: 'Transporte', valor: 250 },
    { categoria: 'Entretenimiento', valor: 100 }
  ];
  
  let ingresoMensual = 1095;
  
  let totalGastos = gastosMensuales.reduce((total, gasto) => total + gasto.valor, 0);
  
  if (totalGastos < ingresoMensual) {
    console.log(`El presupuesto está equilibrado y tienes un ahorro de: $${ingresoMensual - totalGastos}`);
  } else if (totalGastos === ingresoMensual) {
    console.log('El presupuesto está equilibrado y no tienes ahorros');
  } else {
    console.log(`El presupuesto está excedido. Te faltan $${totalGastos - ingresoMensual} para cubrir los gastos.`);
  }
  
