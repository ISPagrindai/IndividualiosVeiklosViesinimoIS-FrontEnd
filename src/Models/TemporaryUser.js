export default class TemporaryUser{
    constructor(entity){
        if(entity.IdVartotojas){
            this.id = entity.IdVartotojas;
        }
        this.vardas = entity.Vardas;
        this.pavarde = entity.Pavarde;
        this.gimimoData = entity.GimimoMetai;
        this.lytis = entity.Lytis;
        this.aprasymas = entity.Aprasymas;
        this.asmensKodas = entity.AsmensKodas;
        this.saskaitosNr = entity.SasNr;              
    }
}