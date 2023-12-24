import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';

import {EtatVenteDto} from 'src/app/controller/model/commun/EtatVente.model';
import {EtatVenteCriteria} from 'src/app/controller/criteria/commun/EtatVenteCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class EtatVenteAdminService extends AbstractService<EtatVenteDto, EtatVenteCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/etatVente/');
    }

    public constrcutDto(): EtatVenteDto {
        return new EtatVenteDto();
    }

    public constrcutCriteria(): EtatVenteCriteria {
        return new EtatVenteCriteria();
    }
}
