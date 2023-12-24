import {Component, OnInit} from '@angular/core';
import {TagAdminService} from 'src/app/controller/service/admin/commun/TagAdmin.service';
import {TagDto} from 'src/app/controller/model/commun/Tag.model';
import {TagCriteria} from 'src/app/controller/criteria/commun/TagCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-tag-list-admin',
  templateUrl: './tag-list-admin.component.html'
})
export class TagListAdminComponent extends AbstractListController<TagDto, TagCriteria, TagAdminService>  implements OnInit {

    fileName = 'Tag';



    constructor( private tagService: TagAdminService  ) {
        super(tagService);
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
