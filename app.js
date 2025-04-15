const guardarDatos = {
    nombre: "Víctor Manuel",
    edad: 44,
    correo: null,
    telefono: 1234567890,
  }
  
  localStorage.setItem("datos", JSON.stringify(guardarDatos));
  
  console.log(JSON.parse(localStorage.getItem("datos")));