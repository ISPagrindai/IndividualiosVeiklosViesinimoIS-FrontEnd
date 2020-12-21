
export default class TemporaryJob{
    constructor(entity){
        if(entity.idTrumpalaikisDarbas){
            this.id = entity.idTrumpalaikisDarbas;
        }
        this.pavadinimas = entity.pavadinimas;
        this.aprasymas = entity.aprasymas;
        this.uzmokestis = entity.uzmokestis;
        this.miestas = entity.miestas;
        this.adresas = entity.adresas
        this.tipas = entity.fkVeiklosTipasidVeiklosTipas;
    }
}