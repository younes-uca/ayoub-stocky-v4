import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {SortieProduitAdminService} from 'src/app/controller/service/admin/entree/SortieProduitAdmin.service';
import {SortieProduitDto} from 'src/app/controller/model/entree/SortieProduit.model';
import {SortieProduitCriteria} from 'src/app/controller/criteria/entree/SortieProduitCriteria.model';

import {SortieProduitItemDto} from 'src/app/controller/model/stock/SortieProduitItem.model';
import {SortieProduitItemAdminService} from 'src/app/controller/service/admin/stock/SortieProduitItemAdmin.service';
import {DepotDto} from 'src/app/controller/model/commun/Depot.model';
import {DepotAdminService} from 'src/app/controller/service/admin/commun/DepotAdmin.service';
import {EntrepriseSocieteDto} from 'src/app/controller/model/commun/EntrepriseSociete.model';
import {EntrepriseSocieteAdminService} from 'src/app/controller/service/admin/commun/EntrepriseSocieteAdmin.service';
import {ProduitDto} from 'src/app/controller/model/stock/Produit.model';
import {ProduitAdminService} from 'src/app/controller/service/admin/stock/ProduitAdmin.service';
@Component({
  selector: 'app-sortie-produit-view-admin',
  templateUrl: './sortie-produit-view-admin.component.html'
})
export class SortieProduitViewAdminComponent extends AbstractViewController<SortieProduitDto, SortieProduitCriteria, SortieProduitAdminService> implements OnInit {

    sortieProduitItems = new SortieProduitItemDto();
    sortieProduitItemss: Array<SortieProduitItemDto> = [];

    constructor(private sortieProduitService: SortieProduitAdminService, private sortieProduitItemService: SortieProduitItemAdminService, private depotService: DepotAdminService, private entrepriseSocieteService: EntrepriseSocieteAdminService, private produitService: ProduitAdminService){
        super(sortieProduitService);
    }

    ngOnInit(): void {
    }


    get produit(): ProduitDto {
       return this.produitService.item;
    }
    set produit(value: ProduitDto) {
        this.produitService.item = value;
    }
    get produits(): Array<ProduitDto> {
       return this.produitService.items;
    }
    set produits(value: Array<ProduitDto>) {
        this.produitService.items = value;
    }
    get depot(): DepotDto {
       return this.depotService.item;
    }
    set depot(value: DepotDto) {
        this.depotService.item = value;
    }
    get depots(): Array<DepotDto> {
       return this.depotService.items;
    }
    set depots(value: Array<DepotDto>) {
        this.depotService.items = value;
    }
    get entrepriseSociete(): EntrepriseSocieteDto {
       return this.entrepriseSocieteService.item;
    }
    set entrepriseSociete(value: EntrepriseSocieteDto) {
        this.entrepriseSocieteService.item = value;
    }
    get entrepriseSocietes(): Array<EntrepriseSocieteDto> {
       return this.entrepriseSocieteService.items;
    }
    set entrepriseSocietes(value: Array<EntrepriseSocieteDto>) {
        this.entrepriseSocieteService.items = value;
    }


}
