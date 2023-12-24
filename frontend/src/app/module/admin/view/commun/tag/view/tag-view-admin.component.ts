import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {TagAdminService} from 'src/app/controller/service/admin/commun/TagAdmin.service';
import {TagDto} from 'src/app/controller/model/commun/Tag.model';
import {TagCriteria} from 'src/app/controller/criteria/commun/TagCriteria.model';

@Component({
  selector: 'app-tag-view-admin',
  templateUrl: './tag-view-admin.component.html'
})
export class TagViewAdminComponent extends AbstractViewController<TagDto, TagCriteria, TagAdminService> implements OnInit {


    constructor(private tagService: TagAdminService){
        super(tagService);
    }

    ngOnInit(): void {
    }




}
