let alumnos = JSON.parse(localStorage.getItem("alumnos")) || [];

function mostrarAlumnos(){
  let lista = document.getElementById("lista");
  lista.innerHTML = "";

  let total = 0;

  alumnos.forEach((alumno, index) => {
    lista.innerHTML += `
      <tr>
        <td>${alumno.nombre}</td>
        <td>$${alumno.pago}</td>
        <td>
          <button onclick="eliminarAlumno(${index})">Eliminar</button>
        </td>
      </tr>
    `;
    total += parseInt(alumno.pago) || 0;
  });

  console.log("Total:", total);
  
  // Actualizar el header con el total
  let header = document.querySelector("th#pagos-header");
  console.log("Header encontrado:", header);
  if(header) {
    header.textContent = `PAGOS = ${total}`;
    console.log("Header actualizado");
  }
}

function agregarAlumno(){
  let nombre = document.getElementById("nombre").value;
  let pago = document.getElementById("pago").value;

  if(nombre == "" || pago == ""){
    alert("Completar datos");
    return;
  }

  alumnos.push({
    nombre: nombre,
    pago: pago
  });

  localStorage.setItem("alumnos", JSON.stringify(alumnos));

  mostrarAlumnos();

  document.getElementById("nombre").value = "";
  document.getElementById("pago").value = "";
}

function eliminarAlumno(index){
  alumnos.splice(index, 1);
  localStorage.setItem("alumnos", JSON.stringify(alumnos));
  mostrarAlumnos();
}

mostrarAlumnos();