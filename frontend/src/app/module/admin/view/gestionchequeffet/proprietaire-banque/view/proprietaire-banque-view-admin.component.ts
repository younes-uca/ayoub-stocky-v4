import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {ProprietaireBanqueAdminService} from 'src/app/controller/service/admin/gestionchequeffet/ProprietaireBanqueAdmin.service';
import {ProprietaireBanqueDto} from 'src/app/controller/model/gestionchequeffet/ProprietaireBanque.model';
import {ProprietaireBanqueCriteria} from 'src/app/controller/criteria/gestionchequeffet/ProprietaireBanqueCriteria.model';

import {CompteDto} from 'src/app/controller/model/gestionchequeffet/Compte.model';
import {CompteAdminService} from 'src/app/controller/service/admin/gestionchequeffet/CompteAdmin.service';
import {ProprietaireDto} from 'src/app/controller/model/gestionchequeffet/Proprietaire.model';
import {ProprietaireAdminService} from 'src/app/controller/service/admin/gestionchequeffet/ProprietaireAdmin.service';
import {BanqueDto} from 'src/app/controller/model/gestionchequeffet/Banque.model';
import {BanqueAdminService} from 'src/app/controller/service/admin/gestionchequeffet/BanqueAdmin.service';
@Component({
  selector: 'app-proprietaire-banque-view-admin',
  templateUrl: './proprietaire-banque-view-admin.component.html'
})
export class ProprietaireBanqueViewAdminComponent extends AbstractViewController<ProprietaireBanqueDto, ProprietaireBanqueCriteria, ProprietaireBanqueAdminService> implements OnInit {


    constructor(private proprietaireBanqueService: ProprietaireBanqueAdminService, private compteService: CompteAdminService, private proprietaireService: ProprietaireAdminService, private banqueService: BanqueAdminService){
        super(proprietaireBanqueService);
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
    get compte(): CompteDto {
       return this.compteService.item;
    }
    set compte(value: CompteDto) {
        this.compteService.item = value;
    }
    get comptes(): Array<CompteDto> {
       return this.compteService.items;
    }
    set comptes(value: Array<CompteDto>) {
        this.compteService.items = value;
    }


}
