//Lógica para el funcionamiento de la calculadora de vidrio//


function calculo() {

    let alto = document.getElementById("alturaVidrio").value;
    let ancho = document.getElementById("anchoVidrio").value;
    let espesor = document.getElementById("espesorVidrio").value;

    densidadVidrio = 2500;
    areaVidrio = alto*ancho;
    volumenVidrio = alto*ancho*(espesor/1000);
    pesoVidrio = densidadVidrio*volumenVidrio;

    document.getElementById("pesoFinal").innerHTML = pesoVidrio;
    document.getElementById("areaFinal").innerHTML = areaVidrio;

    console.log("La altura es: " + alto);
    console.log("El ancho es: " + ancho);
    console.log("El espesor es: " + espesor);
    console.log("El área del vidrio es: " + areaVidrio);
    console.log("El volumen del vidrio es: " + volumenVidrio);
    console.log("El peso del vidrio es: " + pesoVidrio);

};

