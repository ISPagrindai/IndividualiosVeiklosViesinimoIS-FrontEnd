
export default class TemporaryWorker{
    constructor(entity){
        if(entity.idIndividualiVeikla){
            this.id = entity.idIndividualiVeikla;
        }
        this.pavadinimas = entity.pavadinimas;
        this.aprasymas = entity.aprasymas;
        this.kaina = entity.kaina;
        this.grafikas = entity.grafikas;
        this.miestas = entity.miestas
        this.veiklosTipas = entity.fkVeiklosTipasidVeiklosTipas;
        this.vartotojoId = entity.fkVartotojasidVartotojas;
        this.atsiliepimai = entity.atsiliepimas
    }
}