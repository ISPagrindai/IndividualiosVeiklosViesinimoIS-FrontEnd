export default class TemporaryReview{
    constructor(entity){
        if(entity.id_Atsiliepimas){
            this.id = entity.id_Atsiliepimas;
        }
        this.komentaras = entity.komentaras;
        this.ivertinimas = entity.ivertinimas;
        this.siuntejo_tipas = entity.siuntejoTipas
        this.siuntejo_id = entity.siuntejo_id;

        this.vartotojasId = entity.fkVartotojasidVartotojas;
        this.imoneId = entity.fk_Imoneid_Imone;
        this.veiklaId = entity.fk_Individuali_veiklaid_Individuali_veikla;
    }
}