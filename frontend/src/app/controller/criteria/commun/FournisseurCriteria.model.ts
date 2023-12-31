import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';

export class FournisseurCriteria  extends BaseCriteria  {

    public id: number;
    public ice: string;
    public iceLike: string;
    public nom: string;
    public nomLike: string;
    public telephone: string;
    public telephoneLike: string;
    public adresse: string;
    public adresseLike: string;
     public creance: number;
     public creanceMin: number;
     public creanceMax: number;
    public description: string;
    public descriptionLike: string;

}
