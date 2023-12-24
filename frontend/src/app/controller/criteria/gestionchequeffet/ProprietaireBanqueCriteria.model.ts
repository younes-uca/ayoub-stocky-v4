import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';
import {CompteCriteria} from './CompteCriteria.model';
import {ProprietaireCriteria} from './ProprietaireCriteria.model';
import {BanqueCriteria} from './BanqueCriteria.model';

export class ProprietaireBanqueCriteria  extends BaseCriteria  {

    public id: number;
  public proprietaire: ProprietaireCriteria ;
  public proprietaires: Array<ProprietaireCriteria> ;
  public banque: BanqueCriteria ;
  public banques: Array<BanqueCriteria> ;
  public compte: CompteCriteria ;
  public comptes: Array<CompteCriteria> ;

}