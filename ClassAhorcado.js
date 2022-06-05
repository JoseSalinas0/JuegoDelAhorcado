class Ahor{
    constructor(){
        this.fallo=0;
        this.perdiste=false;
        this.i=0;
        this.j=0;
        this.k=0;
        this.l=0;
        this.m=0;
    }
    
    //metodo que muestra al ahorcado dependiendo de los fallos del usuario
    Mostrar(f){
        this.fallo=f;
        switch(this.fallo){
            //Ahorcado completo
            case 0:
                console.log("┌───────┐");
                console.log("│       ☻");
                console.log("│      \\│/");
                console.log("│       │");
                console.log("│      / "+"\\");
                console.log("│");
                console.log("└──────────────");
                break;
            //Ahorcado sin una pierna (fallo 1)
            case 1:
                console.log("┌───────┐");
                console.log("│       ☻");
                console.log("│      \\│/");
                console.log("│       │");
                console.log("│      / ");
                console.log("│");             
                console.log("└──────────────");
                this.i++;
                if(this.i==1){
                    alert("¡¡¡Fallaste!!!\nPerdio un pierna :c ");
                }
            break;
            //Ahorcado sin dos piernas (fallo 2)
            case 2:
                console.log("┌───────┐");
                console.log("│       ☻");
                console.log("│      \\│/");
                console.log("│       │");
                console.log("│");
                console.log("│");             
                console.log("└──────────────");
                this.j++;
                if(this.j==1){
                    alert("¡¡¡Fallaste!!!\nPerdio ambas piernas :c ");
                }
            break;
            //Ahorcado sin torso (fallo 3)
            case 3:
                console.log("┌───────┐");
                console.log("│       ☻");
                console.log("│      \\│/");
                console.log("│");
                console.log("│");
                console.log("│");             
                console.log("└──────────────");
                this.k++;
                if(this.k==1){
                    alert("¡¡¡Fallaste!!!\nPerdio el torso :'c ");
                }
            break;
            //Ahorcado sin una mano (fallo 4)
            case 4:
                console.log("┌───────┐");
                console.log("│       ☻");
                console.log("│      \\│");
                console.log("│");
                console.log("│");
                console.log("│");             
                console.log("└──────────────");
                this.l++;
                if(this.l==1){
                    alert("¡¡¡Fallaste!!!\nPerdio un brazo :''c ");
                }
            break;
            //Ahorcado sin dos manos ni cuello (fallo 5)
            case 5:
                console.log("┌───────┐");
                console.log("│       ☻");
                console.log("│");
                console.log("│");
                console.log("│");
                console.log("│");             
                console.log("└──────────────");
                this.m++;
                if(this.m==1){
                    alert("¡¡¡Fallaste!!!\nPerdio ambos brazos :'''c ");
                }
            break;
            //Ahorcado Vacio (has perdido, fallo 6)
            case 6:
                console.log("┌───────┐");
                console.log("│");
                console.log("│");
                console.log("│");
                console.log("│");
                console.log("│");             
                console.log("└──────────────");
                alert("¡¡¡Ha perdido!!!\nNo queda nada...");
                this.perdiste=true;
            break;
            default:
                alert("Opcion incorrecta");
            break;
        }
    }
}
