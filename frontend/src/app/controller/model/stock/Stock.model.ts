import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {DepotDto} from '../commun/Depot.model';
import {EntrepriseSocieteDto} from '../commun/EntrepriseSociete.model';
import {ProduitDto} from './Produit.model';

export class StockDto extends BaseDto{

    public quantite: null | number;

    public entrepriseSociete: EntrepriseSocieteDto ;
    public depot: DepotDto ;
    public produit: ProduitDto ;
    

    constructor() {
        super();

        this.quantite = null;
        this.entrepriseSociete = new EntrepriseSocieteDto() ;
        this.depot = new DepotDto() ;
        this.produit = new ProduitDto() ;

        }

}
