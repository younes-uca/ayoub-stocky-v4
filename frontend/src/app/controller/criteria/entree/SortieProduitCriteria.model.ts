import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';
import {SortieProduitItemCriteria} from '../stock/SortieProduitItemCriteria.model';
import {DepotCriteria} from '../commun/DepotCriteria.model';
import {EntrepriseSocieteCriteria} from '../commun/EntrepriseSocieteCriteria.model';

export class SortieProduitCriteria  extends BaseCriteria  {

    public id: number;
    public reference: string;
    public referenceLike: string;
    public dateSortieProduit: Date;
    public dateSortieProduitFrom: Date;
    public dateSortieProduitTo: Date;
    public description: string;
    public descriptionLike: string;
  public depot: DepotCriteria ;
  public depots: Array<DepotCriteria> ;
  public entrepriseSociete: EntrepriseSocieteCriteria ;
  public entrepriseSocietes: Array<EntrepriseSocieteCriteria> ;
      public sortieProduitItems: Array<SortieProduitItemCriteria>;

}
