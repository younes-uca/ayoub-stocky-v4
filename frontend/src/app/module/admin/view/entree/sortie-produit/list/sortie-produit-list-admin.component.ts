import {Component, OnInit} from '@angular/core';
import {SortieProduitAdminService} from 'src/app/controller/service/admin/entree/SortieProduitAdmin.service';
import {SortieProduitDto} from 'src/app/controller/model/entree/SortieProduit.model';
import {SortieProduitCriteria} from 'src/app/controller/criteria/entree/SortieProduitCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';

import {SortieProduitItemDto} from 'src/app/controller/model/stock/SortieProduitItem.model';
import {SortieProduitItemAdminService} from 'src/app/controller/service/admin/stock/SortieProduitItemAdmin.service';
import {DepotDto} from 'src/app/controller/model/commun/Depot.model';
import {DepotAdminService} from 'src/app/controller/service/admin/commun/DepotAdmin.service';
import {EntrepriseSocieteDto} from 'src/app/controller/model/commun/EntrepriseSociete.model';
import {EntrepriseSocieteAdminService} from 'src/app/controller/service/admin/commun/EntrepriseSocieteAdmin.service';
import {ProduitDto} from 'src/app/controller/model/stock/Produit.model';
import {ProduitAdminService} from 'src/app/controller/service/admin/stock/ProduitAdmin.service';


@Component({
  selector: 'app-sortie-produit-list-admin',
  templateUrl: './sortie-produit-list-admin.component.html'
})
export class SortieProduitListAdminComponent extends AbstractListController<SortieProduitDto, SortieProduitCriteria, SortieProduitAdminService>  implements OnInit {

    fileName = 'SortieProduit';

    depots: Array<DepotDto>;
    entrepriseSocietes: Array<EntrepriseSocieteDto>;


    constructor( private sortieProduitService: SortieProduitAdminService  , private sortieProduitItemService: SortieProduitItemAdminService, private depotService: DepotAdminService, private entrepriseSocieteService: EntrepriseSocieteAdminService, private produitService: ProduitAdminService) {
        super(sortieProduitService);
    }

    ngOnInit(): void {
        this.findPaginatedByCriteria();
        this.initExport();
        this.initCol();
        this.loadDepot();
        this.loadEntrepriseSociete();
    }


    public initCol() {
        this.cols = [
            {field: 'reference', header: 'Reference'},
            {field: 'dateSortieProduit', header: 'Date sortie produit'},
            {field: 'depot?.libelle', header: 'Depot'},
            {field: 'entrepriseSociete?.nom', header: 'Entreprise societe'},
        ];
    }


    public async loadDepot(){
       this.depotService.findAllOptimized().subscribe(depots => this.depots = depots, error => console.log(error))
    }
    public async loadEntrepriseSociete(){
       this.entrepriseSocieteService.findAllOptimized().subscribe(entrepriseSocietes => this.entrepriseSocietes = entrepriseSocietes, error => console.log(error))
    }

	public initDuplicate(res: SortieProduitDto) {
        if (res.sortieProduitItems != null) {
             res.sortieProduitItems.forEach(d => { d.sortieProduit = null; d.id = null; });
        }
	}


   public prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                 'Reference': e.reference ,
                'Date sortie produit': this.datePipe.transform(e.dateSortieProduit , 'dd/MM/yyyy hh:mm'),
                'Depot': e.depot?.libelle ,
                'Entreprise societe': e.entrepriseSociete?.nom ,
                 'Description': e.description ,
            }
        });

        this.criteriaData = [{
            'Reference': this.criteria.reference ? this.criteria.reference : environment.emptyForExport ,
            'Date sortie produit Min': this.criteria.dateSortieProduitFrom ? this.datePipe.transform(this.criteria.dateSortieProduitFrom , this.dateFormat) : environment.emptyForExport ,
            'Date sortie produit Max': this.criteria.dateSortieProduitTo ? this.datePipe.transform(this.criteria.dateSortieProduitTo , this.dateFormat) : environment.emptyForExport ,
        //'Depot': this.criteria.depot?.libelle ? this.criteria.depot?.libelle : environment.emptyForExport ,
        //'Entreprise societe': this.criteria.entrepriseSociete?.nom ? this.criteria.entrepriseSociete?.nom : environment.emptyForExport ,
            'Description': this.criteria.description ? this.criteria.description : environment.emptyForExport ,
        }];
      }
}
