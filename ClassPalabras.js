class Palabras{
    constructor() {
        this.Letra;
        this.Palabra;
        this.Opcionpalabra;
        this.fallos=0;
        this.ah = new Ahor();
        this.score=0;
    }

    //Metodo que verifica si la partida se ha perdido
    Juegoperdido(){
        if(this.ah.perdiste==true){
            return true;
        }else{
            return false;
        }
    }

    //Metodo que arroja un número random pero pide el limite del rango del que debe obtener ese número
    Random(tam){
        return Math.floor(Math.random()*(tam-1)+1);
    }

    setLetra(l){
        this.Letra=l;
    }
    getScore(){
        return this.score;
    }

    //Seleccion ramdon de una palabra para el juego
    MostrarPalabra(){
        this.Palabra= this.Random(16);
        switch(this.Palabra){
            case 1:
                this.Opcionpalabra = this.Random(5);
                console.log(this.Pato(this.Opcionpalabra));
                this.ah.Mostrar(this.fallos);
                break;
            case 2:
                this.Opcionpalabra = this.Random(5);
                console.log(this.Lobo(this.Opcionpalabra));
                this.ah.Mostrar(this.fallos);
                break;
            case 3:
                this.Opcionpalabra = this.Random(6);
                console.log(this.Color(this.Opcionpalabra));
                this.ah.Mostrar(this.fallos);
                break;
            case 4:
                this.Opcionpalabra = this.Random(5);
                console.log(this.Palo(this.Opcionpalabra));
                this.ah.Mostrar(this.fallos);
                break;
            case 5:
                this.Opcionpalabra = this.Random(5);
                console.log(this.Gato(this.Opcionpalabra));
                this.ah.Mostrar(this.fallos);
                break;
            case 6:
                this.Opcionpalabra = this.Random(5);
                console.log(this.Polo(this.Opcionpalabra));
                this.ah.Mostrar(this.fallos);
                break;
            case 7:              
                this.Opcionpalabra = this.Random(6);
                console.log(this.Calor(this.Opcionpalabra));
                this.ah.Mostrar(this.fallos);
                break;
            case 8:
                this.Opcionpalabra = this.Random(5);
                console.log(this.Casa(this.Opcionpalabra));
                this.ah.Mostrar(this.fallos);
                break;
            case 9:
                this.Opcionpalabra = this.Random(5);
                console.log(this.Cosa(this.Opcionpalabra));
                this.ah.Mostrar(this.fallos);
                break;
            case 10:
                this.Opcionpalabra = this.Random(5);
                console.log(this.Pasa(this.Opcionpalabra));
                this.ah.Mostrar(this.fallos);
                break;
            case 11:
                this.Opcionpalabra = this.Random(5);
                console.log(this.Pala(this.Opcionpalabra));
                this.ah.Mostrar(this.fallos);
                break;
            case 12:
                this.Opcionpalabra = this.Random(5);
                console.log(this.Masa(this.Opcionpalabra));
                this.ah.Mostrar(this.fallos);
                break;
            case 13:
                this.Opcionpalabra = this.Random(5);
                console.log(this.Maso(this.Opcionpalabra));
                this.ah.Mostrar(this.fallos);
                break;
            case 14:
                this.Opcionpalabra = this.Random(5);
                console.log(this.Pelo(this.Opcionpalabra));
                this.ah.Mostrar(this.fallos);
                break;
            case 15:
                this.Opcionpalabra = this.Random(5);
                console.log(this.Bala(this.Opcionpalabra));
                this.ah.Mostrar(this.fallos);
                break;
        }
    }

    //Palabras que se mostraran
    //La palabra Pato pero en diferentes casos para que el usuario lo resuelva
    Pato(r){
        switch(r){
            case 1:
                console.log("P _ T O");
                break;
            case 2:
                console.log("P A _ O");
                break
            case 3:
                console.log("P A T _");
                break;
            case 4:
                console.log("_ A T O");
                break;
        }
    }
    //La palabra Lobo pero en diferentes casos para que el usuario lo resuelva
    Lobo(r){
        switch(r){
            case 1:
                console.log("L O B _");
                break;
            case 2:
                console.log("L O _ O");
                break
            case 3:
                console.log("L _ B O");
                break;
            case 4:
                console.log("_ O B O");
                break;
        }
    }
    //La palabra Color pero en diferentes casos para que el usuario lo resuelva
    Color(r){
        switch(r){
            case 1:
                console.log("C O L O _");
                break;
            case 2:
                console.log("C O L _ R");
                break
            case 3:
                console.log("C O _ O R");
                break;
            case 4:
                console.log("C _ L O R");
                break;
            case 5:
                console.log("_ O L O R");
                break;
        }
    }
    //La palabra Palo pero en diferentes casos para que el usuario lo resuelva
    Palo(r){
        switch(r){
            case 1:
                console.log("P _ L O");
                break;
            case 2:
                console.log("P A _ O");
                break
            case 3:
                console.log("P A L _");
                break;
            case 4:
                console.log("_ A L O");
                break;
        }
    }
    //La palabra Gato pero en diferentes casos para que el usuario lo resuelva
    Gato(r){
        switch(r){
            case 1:
                console.log("G _ T O");
                break;
            case 2:
                console.log("G A _ O");
                break
            case 3:
                console.log("G A T _");
                break;
            case 4:
                console.log("_ A T O");
                break;
        }
    }
    
    //La palabra Polo pero en diferentes casos para que el usuario lo resuelva
    Polo(r){
        switch(r){
            case 1:
                console.log("P _ L O");
                break;
            case 2:
                console.log("P O _ O");
                break
            case 3:
                console.log("P O L _");
                break;
            case 4:
                console.log("_ O L O");
                break;
        }
    }
    //La palabra Calor pero en diferentes casos para que el usuario lo resuelva
    Calor(r){
        switch(r){
            case 1:
                console.log("C A L O _");
                break;
            case 2:
                console.log("C A L _ R");
                break
            case 3:
                console.log("C A _ O R");
                break;
            case 4:
                console.log("C _ L O R");
                break;
            case 5:
                console.log("_ A L O R");
                break;
        }
    }
    //La palabra Casa pero en diferentes casos para que el usuario lo resuelva
    Casa(r){
        switch(r){
            case 1:
                console.log("C A S _");
                break;
            case 2:
                console.log("C A _ A");
                break
            case 3:
                console.log("C _ S A");
                break;
            case 4:
                console.log("_ A S A");
                break;
        }
    }
    //La palabra Cosa pero en diferentes casos para que el usuario lo resuelva
    Cosa(r){
        switch(r){
            case 1:
                console.log("C O S _");
                break;
            case 2:
                console.log("C O _ A");
                break
            case 3:
                console.log("C _ S A");
                break;
            case 4:
                console.log("_ O S A");
                break;
        }
    }
    //La palabra Pasa pero en diferentes casos para que el usuario lo resuelva
    Pasa(r){
        switch(r){
            case 1:
                console.log("P A S _");
                break;
            case 2:
                console.log("P A _ A");
                break
            case 3:
                console.log("P _ S A");
                break;
            case 4:
                console.log("_ A S A");
                break;
        }
    }
    //La palabra Pala pero en diferentes casos para que el usuario lo resuelva
    Pala(r){
        switch(r){
            case 1:
                console.log("P A L _");
                break;
            case 2:
                console.log("P A _ A");
                break
            case 3:
                console.log("P _ L A");
                break;
            case 4:
                console.log("_ A L A");
                break;
        }
    }
    //La palabra Masa pero en diferentes casos para que el usuario lo resuelva
    Masa(r){
        switch(r){
            case 1:
                console.log("M A S _");
                break;
            case 2:
                console.log("M A _ A");
                break
            case 3:
                console.log("M _ S A");
                break;
            case 4:
                console.log("_ A S A");
                break;
        }
    }
    //La palabra Maso pero en diferentes casos para que el usuario lo resuelva
    Maso(r){
        switch(r){
            case 1:
                console.log("M A S _");
                break;
            case 2:
                console.log("M A _ O");
                break
            case 3:
                console.log("M _ S O");
                break;
            case 4:
                console.log("_ A S O");
                break;
        }
    }
    Pelo(r){
        switch(r){
            case 1:
                console.log("P E L _");
                break;
            case 2:
                console.log("P E _ O");
                break
            case 3:
                console.log("P _ L O");
                break;
            case 4:
                console.log("_ E L O");
                break;
        }
    }
    //La palabra Polo pero en diferentes casos para que el usuario lo resuelva
    Bala(r){
        switch(r){
            case 1:
                console.log("B A L _");
                break;
            case 2:
                console.log("B A _ A");
                break
            case 3:
                console.log("B _ L A");
                break;
            case 4:
                console.log("_ A L A");
                break;
        }
    }
    
    //Con la seleccion de la palabra anterior, se llamara a la funcion correspondiente
    ResponderPalabra(){
        switch(this.Palabra){
            case 1:
                this.RespuestaPato(this.Opcionpalabra);
                break;
            case 2:
                this.RespuestaLobo(this.Opcionpalabra);
                break;
            case 3:
                this.RespuestaColor(this.Opcionpalabra);
                break;
            case 4:
                this.RespuestaPalo(this.Opcionpalabra);
                break;
            case 5:
                this.RespuestaGato(this.Opcionpalabra);
                break;
            case 6:
                this.RespuestaPolo(this.Opcionpalabra);
                break;
            case 7:
                this.RespuestaCalor(this.Opcionpalabra);
                break;
            case 8:
                this.RespuestaCasa(this.Opcionpalabra);
                break;  
            case 9:
                this.RespuestaCosa(this.Opcionpalabra);
                break;              
            case 10:
                this.RespuestaPasa(this.Opcionpalabra);
                break;
            case 11:
                this.RespuestaPala(this.Opcionpalabra);
                break;
            case 12:
                this.RespuestaMasa(this.Opcionpalabra);
                break;
            case 13:
                this.RespuestaMaso(this.Opcionpalabra);
                break;
            case 14:
                this.RespuestaPelo(this.Opcionpalabra);
                break;
            case 15:
                this.RespuestaBala(this.Opcionpalabra);
                break;
        }
    }

    /*Palabras que se responderan al dato ingresado por el usuario, en caso de ser correcta se mostrara la palabra completa
    en caso contrario se le aumentara en 1 a los fallos y se mostrara el muñeco dependiendo de la cantidad de estos mismos fallos*/
    //Solucion de la palabra Pato con sus respectivos casos
    RespuestaPato(r){
        console.log("Respuesta correcta: P A T O");
        switch(r){
            case 1:
                if(this.Letra =="A"){
                    alert("Lo has logrado");
                    this.score = this.score + 25;
                }else{
                    alert("Has fallado");
                    this.fallos=this.fallos+1;
                }
                this.ah.Mostrar(this.fallos);
                break;
            case 2:
                if(this.Letra =="T"){
                    alert("Lo has logrado");
                    this.score = this.score + 25;
                }else{
                    alert("Has fallado");
                    this.fallos=this.fallos+1;
                }
                this.ah.Mostrar(this.fallos);
                break
            case 3:
                if(this.Letra =="O"){
                    alert("Lo has logrado");
                    this.score = this.score + 25;
                }else{
                    alert("Has fallado");
                    this.fallos=this.fallos+1;
                }
                this.ah.Mostrar(this.fallos);
                break;
            case 4:
                if(this.Letra =="P"){
                    alert("Lo has logrado");
                    this.score = this.score + 25;
                }else{
                    alert("Has fallado");
                    this.fallos=this.fallos+1;
                }
                this.ah.Mostrar(this.fallos);
                break;
        }
    }
    //Solucion de la palabra Lobo con sus respectivos casos
    RespuestaLobo(r){
        console.log("Respuesta correcta: L O B O");
        switch(r){
            case 1:
                if(this.Letra =="O"){
                    alert("Lo has logrado");
                    this.score = this.score + 25;
                }else{
                    alert("Has fallado");
                    this.fallos=this.fallos+1;
                }
                this.ah.Mostrar(this.fallos);
                break;
            case 2:
                if(this.Letra =="B"){
                    alert("Lo has logrado");
                    this.score = this.score + 25;
                }else{
                    alert("Has fallado");
                    this.fallos=this.fallos+1;
                }
                this.ah.Mostrar(this.fallos);
                break
            case 3:
                if(this.Letra =="O"){
                    alert("Lo has logrado");
                    this.score = this.score + 25;
                }else{
                    alert("Has fallado");
                    this.fallos=this.fallos+1;
                }
                this.ah.Mostrar(this.fallos);
                break;
            case 4:
                if(this.Letra =="L"){
                    alert("Lo has logrado");
                    this.score = this.score + 25;
                }else{
                    alert("Has fallado");
                    this.fallos=this.fallos+1;
                }
                this.ah.Mostrar(this.fallos);
                break;
        }
    }
    //Solucion de la palabra Color con sus respectivos casos
    RespuestaColor(r){
        console.log("Respuesta correcta: C O L O R");
        switch(r){
            case 1:
                if(this.Letra =="R"){
                    alert("Lo has logrado");
                    this.score = this.score + 25;
                }else{
                    alert("Has fallado");
                    this.fallos=this.fallos+1;
                }
                this.ah.Mostrar(this.fallos);
                break;
            case 2:
                if(this.Letra =="O"){
                    alert("Lo has logrado");
                    this.score = this.score + 25;
                }else{
                    alert("Has fallado");
                    this.fallos=this.fallos+1;
                }
                this.ah.Mostrar(this.fallos);
                break
            case 3:
                if(this.Letra =="L"){
                    alert("Lo has logrado");
                    this.score = this.score + 25;
                }else{
                    alert("Has fallado");
                    this.fallos=this.fallos+1;
                }
                this.ah.Mostrar(this.fallos);
                break;
            case 4:
                if(this.Letra =="O"){
                    alert("Lo has logrado");
                    this.score = this.score + 25;
                }else{
                    alert("Has fallado");
                    this.fallos=this.fallos+1;
                }
                this.ah.Mostrar(this.fallos);
                break;
            case 5:
                if(this.Letra =="C"){
                    alert("Lo has logrado");
                    this.score = this.score + 25;
                }else{
                    alert("Has fallado");
                    this.fallos=this.fallos+1;
                }
                this.ah.Mostrar(this.fallos);
                break;
        }
    }
    //Solucion de la palabra Palo con sus respectivos casos
    RespuestaPalo(r){
        console.log("Respuesta correcta: P A L O");
        switch(r){
            case 1:
                if(this.Letra =="A"){
                    alert("Lo has logrado");
                    this.score = this.score + 25;
                }else{
                    alert("Has fallado");
                    this.fallos=this.fallos+1;
                }
                this.ah.Mostrar(this.fallos);
                break;
            case 2:
                if(this.Letra =="L"){
                    alert("Lo has logrado");
                    this.score = this.score + 25;
                }else{
                    alert("Has fallado");
                    this.fallos=this.fallos+1;
                }
                this.ah.Mostrar(this.fallos);
                break
            case 3:
                if(this.Letra =="O"){
                    alert("Lo has logrado");
                    this.score = this.score + 25;
                }else{
                    alert("Has fallado");
                    this.fallos=this.fallos+1;
                }
                this.ah.Mostrar(this.fallos);
                break;
            case 4:
                if(this.Letra =="P"){
                    alert("Lo has logrado");
                    this.score = this.score + 25;
                }else{
                    alert("Has fallado");
                    this.fallos=this.fallos+1;
                }
                this.ah.Mostrar(this.fallos);
                break;
        }
    }
    //Solucion de la palabra Gato con sus respectivos casos
    RespuestaGato(r){
        console.log("Respuesta correcta: G A T O");
        switch(r){
            case 1:
                if(this.Letra =="A"){
                    alert("Lo has logrado");
                    this.score = this.score + 25;
                }else{
                    alert("Has fallado");
                    this.fallos=this.fallos+1;
                }
                this.ah.Mostrar(this.fallos);
                break;
            case 2:
                if(this.Letra =="T"){
                    alert("Lo has logrado");
                    this.score = this.score + 25;
                }else{
                    alert("Has fallado");
                    this.fallos=this.fallos+1;
                }
                this.ah.Mostrar(this.fallos);
                break
            case 3:
                if(this.Letra =="O"){
                    alert("Lo has logrado");
                    this.score = this.score + 25;
                }else{
                    alert("Has fallado");
                    this.fallos=this.fallos+1;
                }
                this.ah.Mostrar(this.fallos);
                break;
            case 4:
                if(this.Letra =="G"){
                    alert("Lo has logrado");
                    this.score = this.score + 25;
                }else{
                    alert("Has fallado");
                    this.fallos=this.fallos+1;
                }
                this.ah.Mostrar(this.fallos);
                break;
        }
    }
    //Solucion de la palabra Polo con sus respectivos casos
    RespuestaPolo(r){
        console.log("Respuesta correcta: P O L O");
        switch(r){
            case 1:
                if(this.Letra =="O"){
                    alert("Lo has logrado");
                    this.score = this.score + 25;
                }else{
                    alert("Has fallado");
                    this.fallos=this.fallos+1;
                }
                this.ah.Mostrar(this.fallos);
                break;
            case 2:
                if(this.Letra =="L"){
                    alert("Lo has logrado");
                    this.score = this.score + 25;
                }else{
                    alert("Has fallado");
                    this.fallos=this.fallos+1;
                }
                this.ah.Mostrar(this.fallos);
                break
            case 3:
                if(this.Letra =="O"){
                    alert("Lo has logrado");
                    this.score = this.score + 25;
                }else{
                    alert("Has fallado");
                    this.fallos=this.fallos+1;
                }
                this.ah.Mostrar(this.fallos);
                break;
            case 4:
                if(this.Letra =="P"){
                    alert("Lo has logrado");
                    this.score = this.score + 25;
                }else{
                    alert("Has fallado");
                    this.fallos=this.fallos+1;
                }
                this.ah.Mostrar(this.fallos);
                break;
        }
    }
    //Solucion de la palabra Calor con sus respectivos casos
    RespuestaCalor(r){
        console.log("Respuesta correcta: C A L O R");
        switch(r){
            case 1:
                if(this.Letra =="R"){
                    alert("Lo has logrado");
                    this.score = this.score + 25;
                }else{
                    alert("Has fallado");
                    this.fallos=this.fallos+1;
                }
                this.ah.Mostrar(this.fallos);
                break;
            case 2:
                if(this.Letra =="O"){
                    alert("Lo has logrado");
                    this.score = this.score + 25;
                }else{
                    alert("Has fallado");
                    this.fallos=this.fallos+1;
                }
                this.ah.Mostrar(this.fallos);
                break
            case 3:
                if(this.Letra =="L"){
                    alert("Lo has logrado");
                    this.score = this.score + 25;
                }else{
                    alert("Has fallado");
                    this.fallos=this.fallos+1;
                }
                this.ah.Mostrar(this.fallos);
                break;
            case 4:
                if(this.Letra =="A"){
                    alert("Lo has logrado");
                    this.score = this.score + 25;
                }else{
                    alert("Has fallado");
                    this.fallos=this.fallos+1;
                }
                this.ah.Mostrar(this.fallos);
                break;
            case 5:
                if(this.Letra =="C"){
                    alert("Lo has logrado");
                    this.score = this.score + 25;
                }else{
                    console.log("|X| A L O R");
                    alert("Has fallado");
                    this.fallos=this.fallos+1;
                }
                this.ah.Mostrar(this.fallos);
                break;
        }
    }
    //Solucion de la palabra Casa con sus respectivos casos
    RespuestaCasa(r){
        console.log("Respuesta correcta: C A S A");
        switch(r){
            case 1:
                if(this.Letra =="A"){
                    alert("Lo has logrado");
                    this.score = this.score + 25;
                }else{
                    alert("Has fallado");
                    this.fallos=this.fallos+1;
                }
                this.ah.Mostrar(this.fallos);
                break;
            case 2:
                if(this.Letra =="S"){
                    alert("Lo has logrado");
                    this.score = this.score + 25;
                }else{
                    alert("Has fallado");
                    this.fallos=this.fallos+1;
                }
                this.ah.Mostrar(this.fallos);
                break
            case 3:
                if(this.Letra =="A"){
                    alert("Lo has logrado");
                    this.score = this.score + 25;
                }else{
                    alert("Has fallado");
                    this.fallos=this.fallos+1;
                }
                this.ah.Mostrar(this.fallos);
                break;
            case 4:
                if(this.Letra =="C"){
                    alert("Lo has logrado");
                    this.score = this.score + 25;
                }else{
                    alert("Has fallado");
                    this.fallos=this.fallos+1;
                }
                this.ah.Mostrar(this.fallos);
                break;
        }
    }
    //Solucion de la palabra Cosa con sus respectivos casos
    RespuestaCosa(r){
        console.log("Respuesta correcta: C O S A");
        switch(r){
            case 1:
                if(this.Letra =="A"){
                    alert("Lo has logrado");
                    this.score = this.score + 25;
                }else{
                    alert("Has fallado");
                    this.fallos=this.fallos+1;
                }
                this.ah.Mostrar(this.fallos);
                break;
            case 2:
                if(this.Letra =="S"){
                    alert("Lo has logrado");
                    this.score = this.score + 25;
                }else{
                    alert("Has fallado");
                    this.fallos=this.fallos+1;
                }
                this.ah.Mostrar(this.fallos);
                break
            case 3:
                if(this.Letra =="O"){
                    alert("Lo has logrado");
                    this.score = this.score + 25;
                }else{
                    alert("Has fallado");
                    this.fallos=this.fallos+1;
                }
                this.ah.Mostrar(this.fallos);
                break;
            case 4:
                if(this.Letra =="C"){
                    alert("Lo has logrado");
                    this.score = this.score + 25;
                }else{
                    alert("Has fallado");
                    this.fallos=this.fallos+1;
                }
                this.ah.Mostrar(this.fallos);
                break;
        }
    }
    //Solucion de la palabra Pasa con sus respectivos casos
    RespuestaPasa(r){
        console.log("Respuesta correcta: P A S A");
        switch(r){
            case 1:
                if(this.Letra =="A"){
                    alert("Lo has logrado");
                    this.score = this.score + 25;
                }else{
                    alert("Has fallado");
                    this.fallos=this.fallos+1;
                }
                this.ah.Mostrar(this.fallos);
                break;
            case 2:
                if(this.Letra =="S"){
                    alert("Lo has logrado");
                    this.score = this.score + 25;
                }else{
                    alert("Has fallado");
                    this.fallos=this.fallos+1;
                }
                this.ah.Mostrar(this.fallos);
                break
            case 3:
                if(this.Letra =="A"){
                    alert("Lo has logrado");
                    this.score = this.score + 25;
                }else{
                    alert("Has fallado");
                    this.fallos=this.fallos+1;
                }
                this.ah.Mostrar(this.fallos);
                break;
            case 4:
                if(this.Letra =="P"){
                    alert("Lo has logrado");
                    this.score = this.score + 25;
                }else{
                    alert("Has fallado");
                    this.fallos=this.fallos+1;
                }
                this.ah.Mostrar(this.fallos);
                break;
        }
    }
    //Solucion de la palabra Pala con sus respectivos casos
    RespuestaPala(r){
        console.log("Respuesta correcta: P A L A");
        switch(r){
            case 1:
                if(this.Letra =="A"){
                    alert("Lo has logrado");
                    this.score = this.score + 25;
                }else{
                    alert("Has fallado");
                    this.fallos=this.fallos+1;
                }
                this.ah.Mostrar(this.fallos);
                break;
            case 2:
                if(this.Letra =="L"){
                    alert("Lo has logrado");
                    this.score = this.score + 25;
                }else{
                    alert("Has fallado");
                    this.fallos=this.fallos+1;
                }
                this.ah.Mostrar(this.fallos);
                break
            case 3:
                if(this.Letra =="A"){
                    alert("Lo has logrado");
                    this.score = this.score + 25;
                }else{
                    alert("Has fallado");
                    this.fallos=this.fallos+1;
                }
                this.ah.Mostrar(this.fallos);
                break;
            case 4:
                if(this.Letra =="P"){
                    alert("Lo has logrado");
                    this.score = this.score + 25;
                }else{
                    alert("Has fallado");
                    this.fallos=this.fallos+1;
                }
                this.ah.Mostrar(this.fallos);
                break;
        }
    }
    //Solucion de la palabra Masa con sus respectivos casos
    RespuestaMasa(r){
        console.log("Respuesta correcta: M A S A");
        switch(r){
            case 1:
                if(this.Letra =="A"){
                    alert("Lo has logrado");
                    this.score = this.score + 25;
                }else{
                    alert("Has fallado");
                    this.fallos=this.fallos+1;
                }
                this.ah.Mostrar(this.fallos);
                break;
            case 2:
                if(this.Letra =="S"){
                    alert("Lo has logrado");
                    this.score = this.score + 25;
                }else{
                    alert("Has fallado");
                    this.fallos=this.fallos+1;
                }
                this.ah.Mostrar(this.fallos);
                break
            case 3:
                if(this.Letra =="A"){
                    alert("Lo has logrado");
                    this.score = this.score + 25;
                }else{
                    alert("Has fallado");
                    this.fallos=this.fallos+1;
                }
                this.ah.Mostrar(this.fallos);
                break;
            case 4:
                if(this.Letra =="M"){
                    alert("Lo has logrado");
                    this.score = this.score + 25;
                }else{
                    alert("Has fallado");
                    this.fallos=this.fallos+1;
                }
                this.ah.Mostrar(this.fallos);
                break;
        }
    }
    //Solucion de la palabra Maso con sus respectivos casos
    RespuestaMaso(r){
        console.log("Respuesta correcta: M A S O");
        switch(r){
            case 1:
                if(this.Letra =="O"){
                    alert("Lo has logrado");
                    this.score = this.score + 25;
                }else{
                    alert("Has fallado");
                    this.fallos=this.fallos+1;
                }
                this.ah.Mostrar(this.fallos);
                break;
            case 2:
                if(this.Letra =="S"){
                    alert("Lo has logrado");
                    this.score = this.score + 25;
                }else{
                    alert("Has fallado");
                    this.fallos=this.fallos+1;
                }
                this.ah.Mostrar(this.fallos);
                break
            case 3:
                if(this.Letra =="A"){
                    alert("Lo has logrado");
                    this.score = this.score + 25;
                }else{
                    alert("Has fallado");
                    this.fallos=this.fallos+1;
                }
                this.ah.Mostrar(this.fallos);
                break;
            case 4:
                if(this.Letra =="M"){
                    alert("Lo has logrado");
                    this.score = this.score + 25;
                }else{
                    alert("Has fallado");
                    this.fallos=this.fallos+1;
                }
                this.ah.Mostrar(this.fallos);
                break;
        }
    }
    //Solucion de la palabra Pelo con sus respectivos casos
    RespuestaPelo(r){
        console.log("Respuesta correcta: P E L O");
        switch(r){
            case 1:
                if(this.Letra =="O"){
                    alert("Lo has logrado");
                    this.score = this.score + 25;
                }else{
                    alert("Has fallado");
                    this.fallos=this.fallos+1;
                }
                this.ah.Mostrar(this.fallos);
                break;
            case 2:
                if(this.Letra =="L"){
                    alert("Lo has logrado");
                    this.score = this.score + 25;
                }else{
                    alert("Has fallado");
                    this.fallos=this.fallos+1;
                }
                this.ah.Mostrar(this.fallos);
                break
            case 3:
                if(this.Letra =="E"){
                    alert("Lo has logrado");
                    this.score = this.score + 25;
                }else{
                    alert("Has fallado");
                    this.fallos=this.fallos+1;
                }
                this.ah.Mostrar(this.fallos);
                break;
            case 4:
                if(this.Letra =="P"){
                    alert("Lo has logrado");
                    this.score = this.score + 25;
                }else{
                    alert("Has fallado");
                    this.fallos=this.fallos+1;
                }
                this.ah.Mostrar(this.fallos);
                break;
        }
    }
    //Solucion de la palabra Bala con sus respectivos casos
        RespuestaBala(r){
            console.log("Respuesta correcta: B A L A");
            switch(r){
                case 1:
                    if(this.Letra =="A"){
                        alert("Lo has logrado");
                        this.score = this.score + 25;
                    }else{
                        alert("Has fallado");
                        this.fallos=this.fallos+1;
                    }
                    this.ah.Mostrar(this.fallos);
                    break;
                case 2:
                    if(this.Letra =="L"){
                        alert("Lo has logrado");
                        this.score = this.score + 25;
                    }else{
                        alert("Has fallado");
                        this.fallos=this.fallos+1;
                    }
                    this.ah.Mostrar(this.fallos);
                    break
                case 3:
                    if(this.Letra =="A"){
                        alert("Lo has logrado");
                        this.score = this.score + 25;
                    }else{
                        alert("Has fallado");
                        this.fallos=this.fallos+1;
                    }
                    this.ah.Mostrar(this.fallos);
                    break;
                case 4:
                    if(this.Letra =="B"){
                        alert("Lo has logrado");
                        this.score = this.score + 25;
                    }else{
                        alert("Has fallado");
                        this.fallos=this.fallos+1;
                    }
                    this.ah.Mostrar(this.fallos);
                    break;
            }
        }
}