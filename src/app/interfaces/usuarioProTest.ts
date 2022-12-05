export interface UsuarioProtest{
    dni:number,    
    nombre:string,
    tipoViolencia:string,
    riesgo:string,
    motivacionCambioE:string,
    copersmithE:string,
    tomaDecisionesE:number,
    nivelTomaDecisionesE:string, //incipiente de capacidad - capacidad en proceso - capacidad suficiente
    sensacionControlPoE:number,
    sensacionControlNeE:number,
    deseoControlE:number,
    controlInternoE:number,
    controlExternoE:number,
    autonomiaE:string, //control positiva - control negativa -deseo de control - agente de control interno - agente de control externo
    }