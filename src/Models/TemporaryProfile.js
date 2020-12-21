export default class TemporaryProfile{
    constructor(entity){
        if(entity.idVartotojas){
            this.id = entity.idVartotojas;
        }
        this.vardas = entity.vardas;
        this.pavarde = entity.pavarde;
        this.gimimoMetai = entity.gimimoMetai.substring(0,10);
        this.lytis = entity.lytis;
        this.aprasymas = entity.aprasymas;
        this.asmensKodas = entity.asmensKodas;
        this.saskaitosNr = entity.sasNr;
        this.sasNr = entity.sasNr;    
        this.atsiliepimai = entity.atsiliepimas;       
    }
}