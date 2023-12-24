import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {AchatDto} from './Achat.model';
import {DepotDto} from '../commun/Depot.model';
import {TaxeDto} from './Taxe.model';
import {EntrepriseSocieteDto} from '../commun/EntrepriseSociete.model';
import {ProduitDto} from './Produit.model';

export class AchatItemDto extends BaseDto{

    public barCode: string;

    public footerBarCode: string;

    public quantite: null | number;

    public quantiteAvoir: null | number;

    public quantiteDisponible: null | number;

    public prixUnitaireHt: null | number;

    public prixUnitaireTtc: null | number;

    public remise: null | number;

    public montantHt: null | number;

    public montantTtc: null | number;

    public entrepriseSociete: EntrepriseSocieteDto ;
    public produit: ProduitDto ;
    public taxe: TaxeDto ;
    public achat: AchatDto ;
    public depot: DepotDto ;
    

    constructor() {
        super();

        this.barCode = '';
        this.footerBarCode = '';
        this.quantite = null;
        this.quantiteAvoir = null;
        this.quantiteDisponible = null;
        this.prixUnitaireHt = null;
        this.prixUnitaireTtc = null;
        this.remise = null;
        this.montantHt = null;
        this.montantTtc = null;
        this.entrepriseSociete = new EntrepriseSocieteDto() ;
        this.produit = new ProduitDto() ;
        this.taxe = new TaxeDto() ;
        this.achat = new AchatDto() ;
        this.depot = new DepotDto() ;

        }

}
