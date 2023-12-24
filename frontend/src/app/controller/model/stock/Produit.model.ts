import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {UniteMesureDto} from '../commun/UniteMesure.model';
import {TagDto} from '../commun/Tag.model';
import {MarqueDto} from '../commun/Marque.model';
import {CategorieDto} from '../commun/Categorie.model';
import {StockDto} from './Stock.model';

export class ProduitDto extends BaseDto{

    public reference: string;

    public barCode: string;

    public designation: string;

    public quantiteTotal: null | number;

    public prixAchatMoyen: null | number;

    public prixVente: null | number;

    public pathPhoto: string;

    public seuilAlerte: null | number;

    public description: string;

    public tag: TagDto ;
    public categorie: CategorieDto ;
    public marque: MarqueDto ;
    public uniteMesure: UniteMesureDto ;
     public stocks: Array<StockDto>;
    

    constructor() {
        super();

        this.reference = '';
        this.barCode = '';
        this.designation = '';
        this.quantiteTotal = null;
        this.prixAchatMoyen = null;
        this.prixVente = null;
        this.pathPhoto = '';
        this.seuilAlerte = null;
        this.description = '';
        this.tag = new TagDto() ;
        this.categorie = new CategorieDto() ;
        this.marque = new MarqueDto() ;
        this.uniteMesure = new UniteMesureDto() ;
        this.stocks = new Array<StockDto>();

        }

}
