
export default class TemporaryNewEmployer{
    constructor(entity){
        if(entity.idImone){
            this.id = entity.idImone;
        }
        this.pavadinimas = entity.pavadinimas;
        this.aprasymas = entity.aprasymas;
        this.imonesKodas = entity.imonesKodas;
        this.vadovas = entity.vadovas;        
        this.tinklalapis = entity.tinklalapis;
        this.telNr = entity.telNr;
        this.elPastas = entity.elPastas;
        this.miestas = entity.miestas;
        this.adresas = entity.adresas; 
        this.arUzsaldytas = entity.arUzsaldytas;
    }
}