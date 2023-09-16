let preguntas = [
    { p: "¿Apagar los dispositivos electrónicos cuando no se utilizan ayuda a ahorrar energía?"},//1
    { p: "¿Cambiar las bombillas incandescentes por bombillas LED reduce el consumo de energía?"},//2
    { p: "¿Dejar los electrodomésticos en modo de espera consume la misma energía que cuando están encendidos?"},//3
    { p: "¿Utilizar cortinas o persianas térmicas puede ayudar a mantener la temperatura de tu hogar y reducir el uso de calefacción o aire acondicionado?"},//4
    { p: "¿Descongelar regularmente el congelador puede aumentar su eficiencia energética?"},//5
    { p: "¿Dejar correr el agua caliente innecesariamente consume más energía que calentar solo la cantidad de agua necesaria?"},//6
    { p: "¿Los paneles solares son una forma efectiva de generar energía limpia y reducir los costos de electricidad a largo plazo?"},//7
    { p: "¿Dejar la nevera abierta por un tiempo corto no afecta significativamente su eficiencia energética?"},//8
    { p: "¿Apagar y encender las luces con frecuencia consume más energía que dejarlas encendidas constantemente?"},//9
    { p: "¿Utilizar electrodomésticos con etiqueta de eficiencia energética A+ consume menos electricidad?"},//10
    { p: "¿El reciclaje de papel ayuda a ahorrar energía en comparación con la producción de papel nuevo?"},//11
    { p: "¿Dejar cargadores de dispositivos enchufados sin usarlos consume energía?"},//12
    { p: "¿Cerrar las puertas y ventanas durante el invierno ayuda a mantener la temperatura interior y a ahorrar energía en calefacción?"},//13
    { p: "¿Dejar encendidos los electrodomésticos en modo de espera es una práctica eficiente desde el punto de vista energético?"},//14
    { p: "¿Los automóviles híbridos tienden a ser menos eficientes en términos de consumo de combustible que los automóviles convencionales?"},
  ];
  
  let respuestas = [
    { r: "si" },//--1
    { r: "si" },//--2
    { r: "no" },//--3
    { r: "si" },//--4  
    { r: "si" },//--5
    { r: "si" },//--6
    { r: "si" },//--7
    { r: "no" },//--8
    { r: "no" },//--9
    { r: "si" },//--10  
    { r: "si" },//--11
    { r: "si" },//--12
    { r: "si" },//--13
    { r: "no" },//--14
    { r: "no" },//--15
    { r: ""},

  ];
  
  let imagenes = [
    { im: './Fotos/Foto1.jpg'},
    { im: './Fotos/Foto2.jpg'},
    { im: './Fotos/Foto3.jpg'},
    { im: './Fotos/Foto4.jpg'},
    { im: './Fotos/Foto5.jpg'},
    { im: './Fotos/Foto6.jpg'},
    { im: './Fotos/Foto7.jpg'},
    { im: './Fotos/Foto8.jpg'},
    { im: './Fotos/Foto9.jpg'},
    { im: './Fotos/Foto10.jpg'},
    { im: './Fotos/Foto11.jpg'},
    { im: './Fotos/Foto12.jpg'},
    { im: './Fotos/Foto13.jpg'},
    { im: './Fotos/Foto14.jpg'},
    { im: './Fotos/Foto15.jpg'},
   
  ];
  
  let explicaciones = [
    {e: ""},
    {e: ""},
    {e: " INCORRECTO -- Apagar los dispositivos electrónicos cuando no se utilizan ayuda a ahorrar energía."},
    {e: " INCORRECTO -- Cambiar las bombillas incandescentes por bombillas LED reduce el consumo de energía."},
    {e: " INCORRECTO -- Dejar los electrodomésticos en modo de espera consume algo de energía."},
    {e: " INCORRECTO -- Utilizar cortinas o persianas térmicas puede ayudar a mantener la temperatura de tu hogar y reducir el uso de calefacción o aire acondicionado."},
    {e: " INCORRECTO -- Descongelar regularmente el congelador puede aumentar su eficiencia energética."},
    {e: " INCORRECTO -- Dejar correr el agua caliente innecesariamente consume más energía que calentar solo la cantidad de agua necesaria."},
    {e: " INCORRECTO -- Los paneles solares son una forma efectiva de generar energía limpia y reducir los costos de electricidad a largo plazo."},
    {e: " INCORRECTO -- Dejar la nevera abierta por un tiempo corto afecta significativamente su eficiencia energética."},
    {e: " INCORRECTO -- Apagar y encender las luces con frecuencia no consume más energía que dejarlas encendidas constantemente."},
    {e: " INCORRECTO -- Utilizar electrodomésticos con etiqueta de eficiencia energética A+ consume menos electricidad."},
    {e: " INCORRECTO -- El reciclaje de papel ayuda a ahorrar energía en comparación con la producción de papel nuevo."},
    {e: " INCORRECTO -- Dejar cargadores de dispositivos enchufados sin usarlos consume una pequeña cantidad de energía."},
    {e: " INCORRECTO -- Cerrar las puertas y ventanas durante el invierno ayuda a mantener la temperatura interior y a ahorrar energía en calefacción."},
    {e: " INCORRECTO -- Dejar encendidos los electrodomésticos en modo de espera no es una práctica eficiente desde el punto de vista energético."},
    {e: " INCORRECTO -- Los automóviles híbridos tienden a ser más eficientes en términos de consumo de combustible que los automóviles convencionales."},

];
  
  let puntaje = 0;
  let i = 0;
  
  

  //Puntaje
  function actualizarPuntaje(respuesta) {
    if (respuesta === respuestas[i].r) {
      puntaje += 100;
    }
    document.getElementById("puntaje").textContent = puntaje;
  }
  
  //Función para mostrar mensajes en el div de corrección
  function mostrarMensaje(mensaje, esCorrecto) {
    const mensajeDiv = document.getElementById("mensaje");
    mensajeDiv.textContent = esCorrecto ? "Bien respondido BRO - segui asi" : mensaje;
    mensajeDiv.style.backgroundColor = esCorrecto ? "green" : "red";
    
}

//Función para manejar la respuesta "No"
function BotonNo() {
  if (i < preguntas.length) {
      const respuesta = respuestas[i].r;
      document.getElementById("objeto").textContent = preguntas[i].p;
      actualizarPuntaje("no");
      i++;
      if (i < imagenes.length) {
          document.getElementById("imagen").src = imagenes[i].im;
      }
      mostrarMensaje(explicaciones[i].e, respuesta === "no");
  } else {
      document.getElementById("objeto").textContent = "Nos quedamos sin preguntas";
      alert("Juego terminado");
  }
}

//Función para manejar la respuesta "Si"
function BotonSi() {
  if (i < preguntas.length) {
      const respuesta = respuestas[i].r;
      document.getElementById("objeto").textContent = preguntas[i].p;
      actualizarPuntaje("si");
      i++;
      if (i < imagenes.length) {
          document.getElementById("imagen").src = imagenes[i].im;
      }
      mostrarMensaje(explicaciones[i].e, respuesta === "si");
  } else {
    document.getElementById("objeto").textContent = "Nos quedamos sin preguntas";
    alert("Juego terminado");
  }
}

//Pone la primera pregunta
document.getElementById("objeto").textContent = preguntas[i].p;
document.getElementById("imagen").src = imagenes[i].im;
  