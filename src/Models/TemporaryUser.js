export default class TemporaryUser{
    constructor(entity){
        if(entity.idVartotojas){
            this.id = entity.idVartotojas;
        }
        this.vardas = entity.vardas;
        this.pavarde = entity.pavarde;
        this.gimimoData = entity.gimimoMetai;
        this.lytis = entity.lytis;
        this.aprasymas = entity.aprasymas;
        this.asmensKodas = entity.asmensKodas;
        this.saskaitosNr = entity.sasNr;              
    }
}