import {Component, OnInit} from '@angular/core';
import {RaisonAdminService} from 'src/app/controller/service/admin/transfert/RaisonAdmin.service';
import {RaisonDto} from 'src/app/controller/model/transfert/Raison.model';
import {RaisonCriteria} from 'src/app/controller/criteria/transfert/RaisonCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-raison-list-admin',
  templateUrl: './raison-list-admin.component.html'
})
export class RaisonListAdminComponent extends AbstractListController<RaisonDto, RaisonCriteria, RaisonAdminService>  implements OnInit {

    fileName = 'Raison';



    constructor( private raisonService: RaisonAdminService  ) {
        super(raisonService);
    }

    ngOnInit(): void {
        this.findPaginatedByCriteria();
        this.initExport();
        this.initCol();
    }


    public initCol() {
        this.cols = [
            {field: 'libelle', header: 'Libelle'},
        ];
    }





   public prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                 'Libelle': e.libelle ,
            }
        });

        this.criteriaData = [{
            'Libelle': this.criteria.libelle ? this.criteria.libelle : environment.emptyForExport ,
        }];
      }
}
