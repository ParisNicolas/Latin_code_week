let preguntas = [
    { p: "¿Apagar los dispositivos electrónicos cuando no se utilizan ayuda a ahorrar energía?"},
    { p: "¿Cambiar las bombillas incandescentes por bombillas LED reduce el consumo de energía?"},
    { p: "¿Dejar los electrodomésticos en modo de espera consume la misma energía que cuando están encendidos?"},
    { p: "¿Utilizar cortinas o persianas térmicas puede ayudar a mantener la temperatura de tu hogar y reducir el uso de calefacción o aire acondicionado?"},
    { p: "¿Descongelar regularmente el congelador puede aumentar su eficiencia energética?"},
    { p: "¿Dejar correr el agua caliente innecesariamente consume más energía que calentar solo la cantidad de agua necesaria?"},
    { p: "¿Los paneles solares son una forma efectiva de generar energía limpia y reducir los costos de electricidad a largo plazo?"},
    { p: "¿Dejar la nevera abierta por un tiempo corto no afecta significativamente su eficiencia energética?"},
    { p: "¿Apagar y encender las luces con frecuencia consume más energía que dejarlas encendidas constantemente?"},
    { p: "¿Utilizar electrodomésticos con etiqueta de eficiencia energética A+ consume menos electricidad?"},
    { p: "¿El reciclaje de papel ayuda a ahorrar energía en comparación con la producción de papel nuevo?"},
    { p: "¿Dejar cargadores de dispositivos enchufados sin usarlos consume energía?"},
    { p: "¿Cerrar las puertas y ventanas durante el invierno ayuda a mantener la temperatura interior y a ahorrar energía en calefacción?"},
    { p: "¿Dejar encendidos los electrodomésticos en modo de espera es una práctica eficiente desde el punto de vista energético?"},
    { p: "¿Los automóviles híbridos tienden a ser menos eficientes en términos de consumo de combustible que los automóviles convencionales?"},
  ];
  
  let respuestas = [
    { r: ""},
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
    

  ];
  
  let imagenes = [
    { im: ''}, 
    { im: '/Images/Foto1.jpg'},
    { im: '/Images/Foto2.jpg'},
    { im: '/Images/Foto3.jpg'},
    { im: '/Images/Foto4.png'},
    { im: '/Images/Foto5.png'},
    { im: '/Images/Foto6.png'},
    { im: '/Images/Foto7.png'},
    { im: '/Images/Foto8.png'},
    { im: '/Images/Foto9.png'},
    { im: '/Images/Foto10.jpg'},
    { im: '/Images/Foto11.jpg'},
    { im: '/Images/Foto12.png'},
    { im: '/Images/Foto13.jpg'},
    { im: '/Images/Foto14.png'},
    { im: '/Images/Foto15.jpg'},
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
  
  //Boton no
  function BotonNo() {
    if (i < preguntas.length) {
      document.getElementById("objeto").textContent = preguntas[i].p;
      actualizarPuntaje("no");
      i++;
      if (i < imagenes.length) {
        document.getElementById("imagen").src = imagenes[i].im;
      }
    } else {
      document.getElementById("objeto").textContent = "Nos quedamos sin preguntas";
      alert("Juego terminado");
    }
    console.log(imagenes[i]);
  }
  
  //Boton si
  function BotonSi() {
    if (i < preguntas.length) {
      document.getElementById("objeto").textContent = preguntas[i].p;
      actualizarPuntaje("si");
      i++;
      if (i < imagenes.length) {
        document.getElementById("imagen").src = imagenes[i].im;
      }
    } else {
      document.getElementById("objeto").textContent = "Juego terminado";
    }
    console.log(imagenes[i]);
  }
  
  // pone la primera pregunta
  if (preguntas.length > 0) {
    document.getElementById("objeto").textContent = preguntas[i].p;
  }
  