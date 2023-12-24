import {Component, OnInit} from '@angular/core';
import {TransfertItemAdminService} from 'src/app/controller/service/admin/gestionchequeffet/TransfertItemAdmin.service';
import {TransfertItemDto} from 'src/app/controller/model/gestionchequeffet/TransfertItem.model';
import {TransfertItemCriteria} from 'src/app/controller/criteria/gestionchequeffet/TransfertItemCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';

import {DepotDto} from 'src/app/controller/model/commun/Depot.model';
import {DepotAdminService} from 'src/app/controller/service/admin/commun/DepotAdmin.service';
import {TransfertDto} from 'src/app/controller/model/gestionchequeffet/Transfert.model';
import {TransfertAdminService} from 'src/app/controller/service/admin/gestionchequeffet/TransfertAdmin.service';
import {ProduitDto} from 'src/app/controller/model/stock/Produit.model';
import {ProduitAdminService} from 'src/app/controller/service/admin/stock/ProduitAdmin.service';


@Component({
  selector: 'app-transfert-item-list-admin',
  templateUrl: './transfert-item-list-admin.component.html'
})
export class TransfertItemListAdminComponent extends AbstractListController<TransfertItemDto, TransfertItemCriteria, TransfertItemAdminService>  implements OnInit {

    fileName = 'TransfertItem';

    fromDepots: Array<DepotDto>;
    toDepots: Array<DepotDto>;
    produits: Array<ProduitDto>;
    transferts: Array<TransfertDto>;


    constructor( private transfertItemService: TransfertItemAdminService  , private depotService: DepotAdminService, private transfertService: TransfertAdminService, private produitService: ProduitAdminService) {
        super(transfertItemService);
    }

    ngOnInit(): void {
        this.findPaginatedByCriteria();
        this.initExport();
        this.initCol();
        this.loadFromDepot();
        this.loadToDepot();
        this.loadProduit();
        this.loadTransfert();
    }


    public initCol() {
        this.cols = [
            {field: 'fromDepot?.libelle', header: 'From depot'},
            {field: 'toDepot?.libelle', header: 'To depot'},
            {field: 'produit?.designation', header: 'Produit'},
            {field: 'quantite', header: 'Quantite'},
            {field: 'transfert?.id', header: 'Transfert'},
        ];
    }


    public async loadFromDepot(){
       this.depotService.findAllOptimized().subscribe(fromDepots => this.fromDepots = fromDepots, error => console.log(error))
    }
    public async loadToDepot(){
       this.depotService.findAllOptimized().subscribe(toDepots => this.toDepots = toDepots, error => console.log(error))
    }
    public async loadProduit(){
       this.produitService.findAllOptimized().subscribe(produits => this.produits = produits, error => console.log(error))
    }
    public async loadTransfert(){
       this.transfertService.findAll().subscribe(transferts => this.transferts = transferts, error => console.log(error))
    }



   public prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                'From depot': e.fromDepot?.libelle ,
                'To depot': e.toDepot?.libelle ,
                'Produit': e.produit?.designation ,
                 'Quantite': e.quantite ,
                'Transfert': e.transfert?.id ,
            }
        });

        this.criteriaData = [{
        //'From depot': this.criteria.fromDepot?.libelle ? this.criteria.fromDepot?.libelle : environment.emptyForExport ,
        //'To depot': this.criteria.toDepot?.libelle ? this.criteria.toDepot?.libelle : environment.emptyForExport ,
        //'Produit': this.criteria.produit?.designation ? this.criteria.produit?.designation : environment.emptyForExport ,
            'Quantite Min': this.criteria.quantiteMin ? this.criteria.quantiteMin : environment.emptyForExport ,
            'Quantite Max': this.criteria.quantiteMax ? this.criteria.quantiteMax : environment.emptyForExport ,
        //'Transfert': this.criteria.transfert?.id ? this.criteria.transfert?.id : environment.emptyForExport ,
        }];
      }
}
