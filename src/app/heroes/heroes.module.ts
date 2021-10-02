import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { heroeComponent } from "./heroe/heroe.component";
import { ListadoComponent } from "./listado/listado.component";

@NgModule({
    //-------------- Notas Generales observa que cada configuracion es un arreglo-------------

// Las declaraciones le dice  a angular que cosas contiene  este modulo desde componentes a pipes 
// estan invisibles para toda la  aplicacion exceptuando los componentes que estan definidos dentro de este 
// modulo
    declarations:[
heroeComponent,
ListadoComponent
],
// Los exports son lo que me permite hacer publico  o visible algun componente fuera de este modulo 
exports:[
    ListadoComponent
],
// En los imports usualmente solo se importan modulos
imports:[
    CommonModule

]

})



export class heroesModule{

} 