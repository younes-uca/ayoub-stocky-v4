import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {CompteAdminService} from 'src/app/controller/service/admin/gestionchequeffet/CompteAdmin.service';
import {CompteDto} from 'src/app/controller/model/gestionchequeffet/Compte.model';
import {CompteCriteria} from 'src/app/controller/criteria/gestionchequeffet/CompteCriteria.model';

import {ProprietaireDto} from 'src/app/controller/model/gestionchequeffet/Proprietaire.model';
import {ProprietaireAdminService} from 'src/app/controller/service/admin/gestionchequeffet/ProprietaireAdmin.service';
import {BanqueDto} from 'src/app/controller/model/gestionchequeffet/Banque.model';
import {BanqueAdminService} from 'src/app/controller/service/admin/gestionchequeffet/BanqueAdmin.service';
@Component({
  selector: 'app-compte-view-admin',
  templateUrl: './compte-view-admin.component.html'
})
export class CompteViewAdminComponent extends AbstractViewController<CompteDto, CompteCriteria, CompteAdminService> implements OnInit {


    constructor(private compteService: CompteAdminService, private proprietaireService: ProprietaireAdminService, private banqueService: BanqueAdminService){
        super(compteService);
    }

    ngOnInit(): void {
    }


    get proprietaire(): ProprietaireDto {
       return this.proprietaireService.item;
    }
    set proprietaire(value: ProprietaireDto) {
        this.proprietaireService.item = value;
    }
    get proprietaires(): Array<ProprietaireDto> {
       return this.proprietaireService.items;
    }
    set proprietaires(value: Array<ProprietaireDto>) {
        this.proprietaireService.items = value;
    }
    get banque(): BanqueDto {
       return this.banqueService.item;
    }
    set banque(value: BanqueDto) {
        this.banqueService.item = value;
    }
    get banques(): Array<BanqueDto> {
       return this.banqueService.items;
    }
    set banques(value: Array<BanqueDto>) {
        this.banqueService.items = value;
    }


}
