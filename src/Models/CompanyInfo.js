
export default class CompanyInfo{
    constructor(entity){       
        this.pavadinimas = entity.pavadinimas;
        this.skelbimuSk = entity.skelbimuSk;
        this.kandidatuSk = entity.kandidatuSk;
        this.atsiliepimuSk = entity.atsiliepimuSk;
        this.ivertis = entity.ivertis
    }
}