try {
    balidaredad (edad);
    console.log("Holi"); //Esta linea no se ejecuta
    throw "Orden 66"; //Genera una excepcion -- consultar
} catch (error) {
    console.info("Esto no existe");
} finally {
    console.warn("Tu crush no te quiere :c"); //Se ejecuta SIEMPRE al final 
}

try {
    throw "Orden 66"; //Genera una excepcion
} catch (error) {
    console.info("Esto no existe");
} finally {
    console.warn("Tu crush no te quiere :c"); //Se ejecuta SIEMPRE al final 
}