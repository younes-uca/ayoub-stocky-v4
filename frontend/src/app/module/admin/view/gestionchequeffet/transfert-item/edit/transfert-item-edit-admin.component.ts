import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

import {TransfertItemAdminService} from 'src/app/controller/service/admin/gestionchequeffet/TransfertItemAdmin.service';
import {TransfertItemDto} from 'src/app/controller/model/gestionchequeffet/TransfertItem.model';
import {TransfertItemCriteria} from 'src/app/controller/criteria/gestionchequeffet/TransfertItemCriteria.model';


import {DepotDto} from 'src/app/controller/model/commun/Depot.model';
import {DepotAdminService} from 'src/app/controller/service/admin/commun/DepotAdmin.service';
import {TransfertDto} from 'src/app/controller/model/gestionchequeffet/Transfert.model';
import {TransfertAdminService} from 'src/app/controller/service/admin/gestionchequeffet/TransfertAdmin.service';
import {ProduitDto} from 'src/app/controller/model/stock/Produit.model';
import {ProduitAdminService} from 'src/app/controller/service/admin/stock/ProduitAdmin.service';

@Component({
  selector: 'app-transfert-item-edit-admin',
  templateUrl: './transfert-item-edit-admin.component.html'
})
export class TransfertItemEditAdminComponent extends AbstractEditController<TransfertItemDto, TransfertItemCriteria, TransfertItemAdminService>   implements OnInit {


    private _validTransfertItemQuantite = true;

    private _validFromDepotLibelle = true;
    private _validToDepotLibelle = true;
    private _validProduitReference = true;
    private _validProduitBarCode = true;
    private _validProduitDesignation = true;
    private _validProduitPrixVente = true;
    private _validProduitSeuilAlerte = true;
    private _validTransfertDateTransfert = true;



    constructor( private transfertItemService: TransfertItemAdminService , private depotService: DepotAdminService, private transfertService: TransfertAdminService, private produitService: ProduitAdminService) {
        super(transfertItemService);
    }

    ngOnInit(): void {
        this.fromDepot = new DepotDto();
        this.depotService.findAll().subscribe((data) => this.fromDepots = data);
        this.toDepot = new DepotDto();
        this.depotService.findAll().subscribe((data) => this.toDepots = data);
        this.produit = new ProduitDto();
        this.produitService.findAll().subscribe((data) => this.produits = data);
        this.transfert = new TransfertDto();
        this.transfertService.findAll().subscribe((data) => this.transferts = data);
    }


    public setValidation(value: boolean){
        this.validTransfertItemQuantite = value;
        }
    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateTransfertItemQuantite();
    }
    public validateTransfertItemQuantite(){
        if (this.stringUtilService.isEmpty(this.item.quantite)) {
            this.errorMessages.push('Quantite non valide');
            this.validTransfertItemQuantite = false;
        } else {
            this.validTransfertItemQuantite = true;
        }
    }



   public async openCreateTransfert(transfert: string) {
        const isPermistted = await this.roleService.isPermitted('Transfert', 'edit');
        if (isPermistted) {
             this.transfert = new TransfertDto();
             this.createTransfertDialog = true;
        }else {
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
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
   get createProduitDialog(): boolean {
       return this.produitService.createDialog;
   }
  set createProduitDialog(value: boolean) {
       this.produitService.createDialog= value;
   }
   get transfert(): TransfertDto {
       return this.transfertService.item;
   }
  set transfert(value: TransfertDto) {
        this.transfertService.item = value;
   }
   get transferts(): Array<TransfertDto> {
        return this.transfertService.items;
   }
   set transferts(value: Array<TransfertDto>) {
        this.transfertService.items = value;
   }
   get createTransfertDialog(): boolean {
       return this.transfertService.createDialog;
   }
  set createTransfertDialog(value: boolean) {
       this.transfertService.createDialog= value;
   }
   get fromDepot(): DepotDto {
       return this.depotService.item;
   }
  set fromDepot(value: DepotDto) {
        this.depotService.item = value;
   }
   get fromDepots(): Array<DepotDto> {
        return this.depotService.items;
   }
   set fromDepots(value: Array<DepotDto>) {
        this.depotService.items = value;
   }
   get createFromDepotDialog(): boolean {
       return this.depotService.createDialog;
   }
  set createFromDepotDialog(value: boolean) {
       this.depotService.createDialog= value;
   }
   get toDepot(): DepotDto {
       return this.depotService.item;
   }
  set toDepot(value: DepotDto) {
        this.depotService.item = value;
   }
   get toDepots(): Array<DepotDto> {
        return this.depotService.items;
   }
   set toDepots(value: Array<DepotDto>) {
        this.depotService.items = value;
   }
   get createToDepotDialog(): boolean {
       return this.depotService.createDialog;
   }
  set createToDepotDialog(value: boolean) {
       this.depotService.createDialog= value;
   }


    get validTransfertItemQuantite(): boolean {
        return this._validTransfertItemQuantite;
    }
    set validTransfertItemQuantite(value: boolean) {
        this._validTransfertItemQuantite = value;
    }

    get validFromDepotLibelle(): boolean {
        return this._validFromDepotLibelle;
    }
    set validFromDepotLibelle(value: boolean) {
        this._validFromDepotLibelle = value;
    }
    get validToDepotLibelle(): boolean {
        return this._validToDepotLibelle;
    }
    set validToDepotLibelle(value: boolean) {
        this._validToDepotLibelle = value;
    }
    get validProduitReference(): boolean {
        return this._validProduitReference;
    }
    set validProduitReference(value: boolean) {
        this._validProduitReference = value;
    }
    get validProduitBarCode(): boolean {
        return this._validProduitBarCode;
    }
    set validProduitBarCode(value: boolean) {
        this._validProduitBarCode = value;
    }
    get validProduitDesignation(): boolean {
        return this._validProduitDesignation;
    }
    set validProduitDesignation(value: boolean) {
        this._validProduitDesignation = value;
    }
    get validProduitPrixVente(): boolean {
        return this._validProduitPrixVente;
    }
    set validProduitPrixVente(value: boolean) {
        this._validProduitPrixVente = value;
    }
    get validProduitSeuilAlerte(): boolean {
        return this._validProduitSeuilAlerte;
    }
    set validProduitSeuilAlerte(value: boolean) {
        this._validProduitSeuilAlerte = value;
    }
    get validTransfertDateTransfert(): boolean {
        return this._validTransfertDateTransfert;
    }
    set validTransfertDateTransfert(value: boolean) {
        this._validTransfertDateTransfert = value;
    }
}
