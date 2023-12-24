import {Component, OnInit} from '@angular/core';
import {ProduitAdminService} from 'src/app/controller/service/admin/stock/ProduitAdmin.service';
import {ProduitDto} from 'src/app/controller/model/stock/Produit.model';
import {ProduitCriteria} from 'src/app/controller/criteria/stock/ProduitCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';

import {UniteMesureDto} from 'src/app/controller/model/commun/UniteMesure.model';
import {UniteMesureAdminService} from 'src/app/controller/service/admin/commun/UniteMesureAdmin.service';
import {DepotDto} from 'src/app/controller/model/commun/Depot.model';
import {DepotAdminService} from 'src/app/controller/service/admin/commun/DepotAdmin.service';
import {TagDto} from 'src/app/controller/model/commun/Tag.model';
import {TagAdminService} from 'src/app/controller/service/admin/commun/TagAdmin.service';
import {MarqueDto} from 'src/app/controller/model/commun/Marque.model';
import {MarqueAdminService} from 'src/app/controller/service/admin/commun/MarqueAdmin.service';
import {EntrepriseSocieteDto} from 'src/app/controller/model/commun/EntrepriseSociete.model';
import {EntrepriseSocieteAdminService} from 'src/app/controller/service/admin/commun/EntrepriseSocieteAdmin.service';
import {CategorieDto} from 'src/app/controller/model/commun/Categorie.model';
import {CategorieAdminService} from 'src/app/controller/service/admin/commun/CategorieAdmin.service';
import {StockDto} from 'src/app/controller/model/stock/Stock.model';
import {StockAdminService} from 'src/app/controller/service/admin/stock/StockAdmin.service';


@Component({
  selector: 'app-produit-list-admin',
  templateUrl: './produit-list-admin.component.html'
})
export class ProduitListAdminComponent extends AbstractListController<ProduitDto, ProduitCriteria, ProduitAdminService>  implements OnInit {

    fileName = 'Produit';

    tags: Array<TagDto>;
    categories: Array<CategorieDto>;
    marques: Array<MarqueDto>;
    uniteMesures: Array<UniteMesureDto>;


    constructor( private produitService: ProduitAdminService  , private uniteMesureService: UniteMesureAdminService, private depotService: DepotAdminService, private tagService: TagAdminService, private marqueService: MarqueAdminService, private entrepriseSocieteService: EntrepriseSocieteAdminService, private categorieService: CategorieAdminService, private stockService: StockAdminService) {
        super(produitService);
    }

    ngOnInit(): void {
        this.findPaginatedByCriteria();
        this.initExport();
        this.initCol();
        this.loadTag();
        this.loadCategorie();
        this.loadMarque();
        this.loadUniteMesure();
    }


    public initCol() {
        this.cols = [
            {field: 'reference', header: 'Reference'},
            {field: 'barCode', header: 'Bar code'},
            {field: 'tag?.libelle', header: 'Tag'},
            {field: 'categorie?.libelle', header: 'Categorie'},
            {field: 'designation', header: 'Designation'},
            {field: 'marque?.libelle', header: 'Marque'},
            {field: 'uniteMesure?.libelle', header: 'Unite mesure'},
            {field: 'quantiteTotal', header: 'Quantite total'},
            {field: 'prixAchatMoyen', header: 'Prix achat moyen'},
            {field: 'prixVente', header: 'Prix vente'},
            {field: 'pathPhoto', header: 'Path photo'},
            {field: 'seuilAlerte', header: 'Seuil alerte'},
        ];
    }


    public async loadTag(){
       this.tagService.findAllOptimized().subscribe(tags => this.tags = tags, error => console.log(error))
    }
    public async loadCategorie(){
       this.categorieService.findAllOptimized().subscribe(categories => this.categories = categories, error => console.log(error))
    }
    public async loadMarque(){
       this.marqueService.findAllOptimized().subscribe(marques => this.marques = marques, error => console.log(error))
    }
    public async loadUniteMesure(){
       this.uniteMesureService.findAllOptimized().subscribe(uniteMesures => this.uniteMesures = uniteMesures, error => console.log(error))
    }

	public initDuplicate(res: ProduitDto) {
        if (res.stocks != null) {
             res.stocks.forEach(d => { d.produit = null; d.id = null; });
        }
	}


   public prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                 'Reference': e.reference ,
                 'Bar code': e.barCode ,
                'Tag': e.tag?.libelle ,
                'Categorie': e.categorie?.libelle ,
                 'Designation': e.designation ,
                'Marque': e.marque?.libelle ,
                'Unite mesure': e.uniteMesure?.libelle ,
                 'Quantite total': e.quantiteTotal ,
                 'Prix achat moyen': e.prixAchatMoyen ,
                 'Prix vente': e.prixVente ,
                 'Path photo': e.pathPhoto ,
                 'Seuil alerte': e.seuilAlerte ,
                 'Description': e.description ,
            }
        });

        this.criteriaData = [{
            'Reference': this.criteria.reference ? this.criteria.reference : environment.emptyForExport ,
            'Bar code': this.criteria.barCode ? this.criteria.barCode : environment.emptyForExport ,
        //'Tag': this.criteria.tag?.libelle ? this.criteria.tag?.libelle : environment.emptyForExport ,
        //'Categorie': this.criteria.categorie?.libelle ? this.criteria.categorie?.libelle : environment.emptyForExport ,
            'Designation': this.criteria.designation ? this.criteria.designation : environment.emptyForExport ,
        //'Marque': this.criteria.marque?.libelle ? this.criteria.marque?.libelle : environment.emptyForExport ,
        //'Unite mesure': this.criteria.uniteMesure?.libelle ? this.criteria.uniteMesure?.libelle : environment.emptyForExport ,
            'Quantite total Min': this.criteria.quantiteTotalMin ? this.criteria.quantiteTotalMin : environment.emptyForExport ,
            'Quantite total Max': this.criteria.quantiteTotalMax ? this.criteria.quantiteTotalMax : environment.emptyForExport ,
            'Prix achat moyen Min': this.criteria.prixAchatMoyenMin ? this.criteria.prixAchatMoyenMin : environment.emptyForExport ,
            'Prix achat moyen Max': this.criteria.prixAchatMoyenMax ? this.criteria.prixAchatMoyenMax : environment.emptyForExport ,
            'Prix vente Min': this.criteria.prixVenteMin ? this.criteria.prixVenteMin : environment.emptyForExport ,
            'Prix vente Max': this.criteria.prixVenteMax ? this.criteria.prixVenteMax : environment.emptyForExport ,
            'Path photo': this.criteria.pathPhoto ? this.criteria.pathPhoto : environment.emptyForExport ,
            'Seuil alerte Min': this.criteria.seuilAlerteMin ? this.criteria.seuilAlerteMin : environment.emptyForExport ,
            'Seuil alerte Max': this.criteria.seuilAlerteMax ? this.criteria.seuilAlerteMax : environment.emptyForExport ,
            'Description': this.criteria.description ? this.criteria.description : environment.emptyForExport ,
        }];
      }
}
