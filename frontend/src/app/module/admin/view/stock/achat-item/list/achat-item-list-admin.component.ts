import {Component, OnInit} from '@angular/core';
import {AchatItemAdminService} from 'src/app/controller/service/admin/stock/AchatItemAdmin.service';
import {AchatItemDto} from 'src/app/controller/model/stock/AchatItem.model';
import {AchatItemCriteria} from 'src/app/controller/criteria/stock/AchatItemCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';

import {AchatDto} from 'src/app/controller/model/stock/Achat.model';
import {AchatAdminService} from 'src/app/controller/service/admin/stock/AchatAdmin.service';
import {DepotDto} from 'src/app/controller/model/commun/Depot.model';
import {DepotAdminService} from 'src/app/controller/service/admin/commun/DepotAdmin.service';
import {TaxeDto} from 'src/app/controller/model/stock/Taxe.model';
import {TaxeAdminService} from 'src/app/controller/service/admin/stock/TaxeAdmin.service';
import {EntrepriseSocieteDto} from 'src/app/controller/model/commun/EntrepriseSociete.model';
import {EntrepriseSocieteAdminService} from 'src/app/controller/service/admin/commun/EntrepriseSocieteAdmin.service';
import {ProduitDto} from 'src/app/controller/model/stock/Produit.model';
import {ProduitAdminService} from 'src/app/controller/service/admin/stock/ProduitAdmin.service';


@Component({
  selector: 'app-achat-item-list-admin',
  templateUrl: './achat-item-list-admin.component.html'
})
export class AchatItemListAdminComponent extends AbstractListController<AchatItemDto, AchatItemCriteria, AchatItemAdminService>  implements OnInit {

    fileName = 'AchatItem';

    entrepriseSocietes: Array<EntrepriseSocieteDto>;
    produits: Array<ProduitDto>;
    taxes: Array<TaxeDto>;
    achats: Array<AchatDto>;
    depots: Array<DepotDto>;


    constructor( private achatItemService: AchatItemAdminService  , private achatService: AchatAdminService, private depotService: DepotAdminService, private taxeService: TaxeAdminService, private entrepriseSocieteService: EntrepriseSocieteAdminService, private produitService: ProduitAdminService) {
        super(achatItemService);
    }

    ngOnInit(): void {
        this.findPaginatedByCriteria();
        this.initExport();
        this.initCol();
        this.loadEntrepriseSociete();
        this.loadProduit();
        this.loadTaxe();
        this.loadAchat();
        this.loadDepot();
    }


    public initCol() {
        this.cols = [
            {field: 'barCode', header: 'Bar code'},
            {field: 'footerBarCode', header: 'Footer bar code'},
            {field: 'entrepriseSociete?.nom', header: 'Entreprise societe'},
            {field: 'produit?.designation', header: 'Produit'},
            {field: 'quantite', header: 'Quantite'},
            {field: 'quantiteAvoir', header: 'Quantite avoir'},
            {field: 'quantiteDisponible', header: 'Quantite disponible'},
            {field: 'prixUnitaireHt', header: 'Prix unitaire ht'},
            {field: 'taxe?.libelle', header: 'Taxe'},
            {field: 'prixUnitaireTtc', header: 'Prix unitaire ttc'},
            {field: 'remise', header: 'Remise'},
            {field: 'montantHt', header: 'Montant ht'},
            {field: 'montantTtc', header: 'Montant ttc'},
            {field: 'achat?.id', header: 'Achat'},
            {field: 'depot?.libelle', header: 'Depot'},
        ];
    }


    public async loadEntrepriseSociete(){
       this.entrepriseSocieteService.findAllOptimized().subscribe(entrepriseSocietes => this.entrepriseSocietes = entrepriseSocietes, error => console.log(error))
    }
    public async loadProduit(){
       this.produitService.findAllOptimized().subscribe(produits => this.produits = produits, error => console.log(error))
    }
    public async loadTaxe(){
       this.taxeService.findAllOptimized().subscribe(taxes => this.taxes = taxes, error => console.log(error))
    }
    public async loadAchat(){
       this.achatService.findAll().subscribe(achats => this.achats = achats, error => console.log(error))
    }
    public async loadDepot(){
       this.depotService.findAllOptimized().subscribe(depots => this.depots = depots, error => console.log(error))
    }



   public prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                 'Bar code': e.barCode ,
                 'Footer bar code': e.footerBarCode ,
                'Entreprise societe': e.entrepriseSociete?.nom ,
                'Produit': e.produit?.designation ,
                 'Quantite': e.quantite ,
                 'Quantite avoir': e.quantiteAvoir ,
                 'Quantite disponible': e.quantiteDisponible ,
                 'Prix unitaire ht': e.prixUnitaireHt ,
                'Taxe': e.taxe?.libelle ,
                 'Prix unitaire ttc': e.prixUnitaireTtc ,
                 'Remise': e.remise ,
                 'Montant ht': e.montantHt ,
                 'Montant ttc': e.montantTtc ,
                'Achat': e.achat?.id ,
                'Depot': e.depot?.libelle ,
            }
        });

        this.criteriaData = [{
            'Bar code': this.criteria.barCode ? this.criteria.barCode : environment.emptyForExport ,
            'Footer bar code': this.criteria.footerBarCode ? this.criteria.footerBarCode : environment.emptyForExport ,
        //'Entreprise societe': this.criteria.entrepriseSociete?.nom ? this.criteria.entrepriseSociete?.nom : environment.emptyForExport ,
        //'Produit': this.criteria.produit?.designation ? this.criteria.produit?.designation : environment.emptyForExport ,
            'Quantite Min': this.criteria.quantiteMin ? this.criteria.quantiteMin : environment.emptyForExport ,
            'Quantite Max': this.criteria.quantiteMax ? this.criteria.quantiteMax : environment.emptyForExport ,
            'Quantite avoir Min': this.criteria.quantiteAvoirMin ? this.criteria.quantiteAvoirMin : environment.emptyForExport ,
            'Quantite avoir Max': this.criteria.quantiteAvoirMax ? this.criteria.quantiteAvoirMax : environment.emptyForExport ,
            'Quantite disponible Min': this.criteria.quantiteDisponibleMin ? this.criteria.quantiteDisponibleMin : environment.emptyForExport ,
            'Quantite disponible Max': this.criteria.quantiteDisponibleMax ? this.criteria.quantiteDisponibleMax : environment.emptyForExport ,
            'Prix unitaire ht Min': this.criteria.prixUnitaireHtMin ? this.criteria.prixUnitaireHtMin : environment.emptyForExport ,
            'Prix unitaire ht Max': this.criteria.prixUnitaireHtMax ? this.criteria.prixUnitaireHtMax : environment.emptyForExport ,
        //'Taxe': this.criteria.taxe?.libelle ? this.criteria.taxe?.libelle : environment.emptyForExport ,
            'Prix unitaire ttc Min': this.criteria.prixUnitaireTtcMin ? this.criteria.prixUnitaireTtcMin : environment.emptyForExport ,
            'Prix unitaire ttc Max': this.criteria.prixUnitaireTtcMax ? this.criteria.prixUnitaireTtcMax : environment.emptyForExport ,
            'Remise Min': this.criteria.remiseMin ? this.criteria.remiseMin : environment.emptyForExport ,
            'Remise Max': this.criteria.remiseMax ? this.criteria.remiseMax : environment.emptyForExport ,
            'Montant ht Min': this.criteria.montantHtMin ? this.criteria.montantHtMin : environment.emptyForExport ,
            'Montant ht Max': this.criteria.montantHtMax ? this.criteria.montantHtMax : environment.emptyForExport ,
            'Montant ttc Min': this.criteria.montantTtcMin ? this.criteria.montantTtcMin : environment.emptyForExport ,
            'Montant ttc Max': this.criteria.montantTtcMax ? this.criteria.montantTtcMax : environment.emptyForExport ,
        //'Achat': this.criteria.achat?.id ? this.criteria.achat?.id : environment.emptyForExport ,
        //'Depot': this.criteria.depot?.libelle ? this.criteria.depot?.libelle : environment.emptyForExport ,
        }];
      }
}
