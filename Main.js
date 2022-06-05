const pa = new Palabras();
let letra="";
let letraMayus;
let continuar=true;
let usuario="____";
let scoreFinal;

//Compara si quieres jugar o no
if(confirm("¡¡¡Bienvenido!!!\n¿Desea jugar?")){

    usuario=prompt("Escriba su nombre: ");

    //Repite hasta que el usuario ya no quiera continuar o halla perdido
    while(continuar!=false){

        //Llama al metodo para seleccionar una palabra y su caso de está misma
        pa.MostrarPalabra();

        //leer la letra faltante
        letra = prompt("Ingrese la letra que falta");

        //convertir letra a mayuscula
        letraMayus=letra.toUpperCase();

        //mandar letra mayuscula a la clase 
        pa.setLetra(letraMayus);

        console.clear();

        //Comparar que la letra sea la correcta
        pa.ResponderPalabra();

        //mostrar el puntaje actual
        console.log("Su puntaje es de: "+pa.getScore());
        
        //Compara que no has perdido
        if(pa.Juegoperdido()==false){

            continuar=confirm("¿Desea volver a jugar?");
            console.clear();
        }else{
            alert("\t¡¡¡Fin del juego!!!");
            continuar=false;
        }
    }
}
//mostrar el puntaje final junto con el usuario
scoreFinal=pa.getScore();
alert("El puntaje final de "+usuario+" es de: "+scoreFinal);
console.log("¡¡Hasta luego!!");