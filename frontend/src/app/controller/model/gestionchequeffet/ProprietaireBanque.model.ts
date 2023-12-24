import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {CompteDto} from './Compte.model';
import {ProprietaireDto} from './Proprietaire.model';
import {BanqueDto} from './Banque.model';

export class ProprietaireBanqueDto extends BaseDto{

    public proprietaire: ProprietaireDto ;
    public banque: BanqueDto ;
    public compte: CompteDto ;
    

    constructor() {
        super();

        this.proprietaire = new ProprietaireDto() ;
        this.banque = new BanqueDto() ;
        this.compte = new CompteDto() ;

        }

}
