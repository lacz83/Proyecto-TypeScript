import {Curso} from './curso.js';


export enum NivelEducativo{
    BACHILLERATO = "Bachillerato",
    UNIVERSITARIO = "Universitario",
    POSGRADO = "Posgrado"
}


export class Aprendiz{
    
    constructor(public nombres: string, public apellidos:string, public avatar: string, public edad: number, public nivelEducativo: NivelEducativo, public cursos: Curso[])
    {

    }

    public darCursosCertificados():number{
        let totalCursosC:number = 0;
        for(let i=0; i < this.cursos.length; i++)
        {
            let curso: Curso = this.cursos[i];
            if(curso.certificado)
            {
                totalCursosC+=1;
            }
        }
        return totalCursosC;
    }
}