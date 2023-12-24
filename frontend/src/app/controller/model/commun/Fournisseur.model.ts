import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class FournisseurDto extends BaseDto{

    public ice: string;

    public nom: string;

    public telephone: string;

    public adresse: string;

    public creance: null | number;

    public description: string;

    

    constructor() {
        super();

        this.ice = '';
        this.nom = '';
        this.telephone = '';
        this.adresse = '';
        this.creance = null;
        this.description = '';

        }

}
