import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {SortieProduitItemDto} from '../stock/SortieProduitItem.model';
import {DepotDto} from '../commun/Depot.model';
import {EntrepriseSocieteDto} from '../commun/EntrepriseSociete.model';

export class SortieProduitDto extends BaseDto{

    public reference: string;

   public dateSortieProduit: Date;

    public description: string;

    public depot: DepotDto ;
    public entrepriseSociete: EntrepriseSocieteDto ;
     public sortieProduitItems: Array<SortieProduitItemDto>;
    

    constructor() {
        super();

        this.reference = '';
        this.dateSortieProduit = null;
        this.description = '';
        this.depot = new DepotDto() ;
        this.entrepriseSociete = new EntrepriseSocieteDto() ;
        this.sortieProduitItems = new Array<SortieProduitItemDto>();

        }

}
