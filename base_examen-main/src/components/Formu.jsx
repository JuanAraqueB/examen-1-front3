import { useState } from "react"
import Card from "./Card"

const Formulario = () => {
    const [nombre, setNombre]= useState("")
    const [edad, setEdad]= useState(0)
    const [libroFavorito, setLibroFavorito]= useState("")
    const [mostrarTarjeta, setMostrarTarjeta] = useState(false);

    const handlerSubmit = (e) => {
        e.preventDefault();
        
        if([nombre, edad, libroFavorito].includes("") ){
            alert("Tiene que ingresar datos válidos")
        }
        else if (nombre.trim().length < 3) {
            alert(`El nombre debe tener al menos 3 caracteres`)
        }
        else if (nombre.startsWith(' ')) {
            alert(`El nombre no puede comenzar con un espacio en blanco`)
        }
        else if (libroFavorito.trim().length < 6) {
            alert(`El nombre del libro debe tener al menos 6 caracteres`)
        }
        else {
            setMostrarTarjeta(true);
        }
        

    }
    return (
        <>
        <form onSubmit = {handlerSubmit} >
            <label htmlFor="nombre">
                Nombre:
            </label> 
            <input id="nombre" type="text" value={nombre} 
                onChange={e => setNombre(e.target.value)}
            />

            <label htmlFor="edad">
                Edad:
            </label> 
            <input id="edad" type="number" value={edad} 
                onChange={e => setEdad(e.target.value)}
            />

            <label htmlFor="libroFavorito">
                Libro Favorito:
            </label> 
            <input id="libroFavorito" type="text" value={libroFavorito} 
                onChange={e => setLibroFavorito(e.target.value)}
            />
            

            <button type="Submit">
                Enviar Formulario
            </button>
        </form>
        
        <Card nombre={nombre} edad={edad} libroFavorito={libroFavorito}/>

        {mostrarTarjeta && (
        <TarjetaUsuario
          nombre={nombre}
          edad={edad}
          libroFavorito={libroFavorito}
        />
      )}
        

        </>
    )

}
export default Formulario 