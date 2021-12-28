// Se utiliza la clase persona y se crea un array con varios objetos de tipo Persona
const personas = [
    // new Persona('Alexis', 'Guanique'),
    // new Persona('Carla', 'Lara'),
    // new Persona('Juan', 'Perez')
]

// Funcion que mostrara a las personas iterando sobre el array personas con un for
function mostrarPersonas(){
    console.log('Mostrar Personas ...')
    let texto = '';

    for(let persona of personas){
        console.log(persona)
        texto += `<li>${persona.nombre} ${persona.apellido}</li>`;
    }

    document.getElementById('personas').innerHTML = texto;
}

// Funcion que agrega los datos escritos en el formulario 'forma' y los utiliza como parametros para la clase Persona y crea los objetos
function agregarPersona(){
    const forma = document.forms['forma'];

    const nombre = forma['nombre'];
    const apellido = forma['apellido'];

    // Validacion que no permite agregar campos vacios en el array personas
    if(nombre.value != '' && apellido.value != ''){
        const persona = new Persona(nombre.value, apellido.value);
        console.log(persona);
    
        personas.push(persona)
    
        mostrarPersonas();
    }
    else{
        console.log('No hay informacion que agregar')
    }

}