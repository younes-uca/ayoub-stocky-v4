import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';
import {DepotCriteria} from '../commun/DepotCriteria.model';
import {TransfertCriteria} from './TransfertCriteria.model';
import {ProduitCriteria} from '../stock/ProduitCriteria.model';

export class TransfertItemCriteria  extends BaseCriteria  {

    public id: number;
     public quantite: number;
     public quantiteMin: number;
     public quantiteMax: number;
  public fromDepot: DepotCriteria ;
  public fromDepots: Array<DepotCriteria> ;
  public toDepot: DepotCriteria ;
  public toDepots: Array<DepotCriteria> ;
  public produit: ProduitCriteria ;
  public produits: Array<ProduitCriteria> ;
  public transfert: TransfertCriteria ;
  public transferts: Array<TransfertCriteria> ;

}
