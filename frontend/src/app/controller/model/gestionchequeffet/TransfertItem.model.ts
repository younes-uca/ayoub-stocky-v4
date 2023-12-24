import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {DepotDto} from '../commun/Depot.model';
import {TransfertDto} from './Transfert.model';
import {ProduitDto} from '../stock/Produit.model';

export class TransfertItemDto extends BaseDto{

    public quantite: null | number;

    public fromDepot: DepotDto ;
    public toDepot: DepotDto ;
    public produit: ProduitDto ;
    public transfert: TransfertDto ;
    

    constructor() {
        super();

        this.quantite = null;
        this.fromDepot = new DepotDto() ;
        this.toDepot = new DepotDto() ;
        this.produit = new ProduitDto() ;
        this.transfert = new TransfertDto() ;

        }

}
