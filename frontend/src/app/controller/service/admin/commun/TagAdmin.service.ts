import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';

import {TagDto} from 'src/app/controller/model/commun/Tag.model';
import {TagCriteria} from 'src/app/controller/criteria/commun/TagCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class TagAdminService extends AbstractService<TagDto, TagCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/tag/');
    }

    public constrcutDto(): TagDto {
        return new TagDto();
    }

    public constrcutCriteria(): TagCriteria {
        return new TagCriteria();
    }
}
