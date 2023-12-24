import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

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
  selector: 'app-sortie-produit-create-admin',
  templateUrl: './sortie-produit-create-admin.component.html'
})
export class SortieProduitCreateAdminComponent extends AbstractCreateController<SortieProduitDto, SortieProduitCriteria, SortieProduitAdminService>  implements OnInit {

    private _sortieProduitItemsElement = new SortieProduitItemDto();


   private _validSortieProduitReference = true;
    private _validDepotLibelle = true;
    private _validEntrepriseSocieteNom = true;
    private _validSortieProduitItemsProduit = true;
    private _validSortieProduitItemsQuantite = true;

    constructor( private sortieProduitService: SortieProduitAdminService , private sortieProduitItemService: SortieProduitItemAdminService, private depotService: DepotAdminService, private entrepriseSocieteService: EntrepriseSocieteAdminService, private produitService: ProduitAdminService) {
        super(sortieProduitService);
    }

    ngOnInit(): void {
        this.sortieProduitItemsElement.produit = new ProduitDto();
        this.produitService.findAll().subscribe((data) => this.produits = data);
        this.depot = new DepotDto();
        this.depotService.findAll().subscribe((data) => this.depots = data);
        this.entrepriseSociete = new EntrepriseSocieteDto();
        this.entrepriseSocieteService.findAll().subscribe((data) => this.entrepriseSocietes = data);
    }



    validateSortieProduitItems(){
        this.errorMessages = new Array();
        this.validateSortieProduitItemsProduit();
        this.validateSortieProduitItemsQuantite();
    }


    public setValidation(value: boolean){
        this.validSortieProduitReference = value;
        this.validSortieProduitItemsProduit = value;
        this.validSortieProduitItemsQuantite = value;
    }

    public addSortieProduitItems() {
        if( this.item.sortieProduitItems == null )
            this.item.sortieProduitItems = new Array<SortieProduitItemDto>();
       this.validateSortieProduitItems();
       if (this.errorMessages.length === 0) {
              this.item.sortieProduitItems.push({... this.sortieProduitItemsElement});
              this.sortieProduitItemsElement = new SortieProduitItemDto();
       }else{
            this.messageService.add({severity: 'error',summary: 'Erreurs',detail: 'Merci de corrigé les erreurs suivant : ' + this.errorMessages});
       }
    }


    public deletesortieProduitItems(p: SortieProduitItemDto) {
        this.item.sortieProduitItems.forEach((element, index) => {
            if (element === p) { this.item.sortieProduitItems.splice(index, 1); }
        });
    }

    public editsortieProduitItems(p: SortieProduitItemDto) {
        this.sortieProduitItemsElement = {... p};
        this.activeTab = 0;
    }


    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateSortieProduitReference();
    }

    public validateSortieProduitReference(){
        if (this.stringUtilService.isEmpty(this.item.reference)) {
        this.errorMessages.push('Reference non valide');
        this.validSortieProduitReference = false;
        } else {
            this.validSortieProduitReference = true;
        }
    }

    public validateSortieProduitItemsProduit(){
        if (this.sortieProduitItemsElement.produit == null) {
            this.errorMessages.push('Produit de la sortieProduitItem est  invalide');
            this.validSortieProduitItemsProduit = false;
        } else {
            this.validSortieProduitItemsProduit = true;
        }
    }
    public validateSortieProduitItemsQuantite(){
        if (this.sortieProduitItemsElement.quantite == null) {
            this.errorMessages.push('Quantite de la sortieProduitItem est  invalide');
            this.validSortieProduitItemsQuantite = false;
        } else {
            this.validSortieProduitItemsQuantite = true;
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
    get createDepotDialog(): boolean {
       return this.depotService.createDialog;
    }
    set createDepotDialog(value: boolean) {
        this.depotService.createDialog= value;
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
    get createEntrepriseSocieteDialog(): boolean {
       return this.entrepriseSocieteService.createDialog;
    }
    set createEntrepriseSocieteDialog(value: boolean) {
        this.entrepriseSocieteService.createDialog= value;
    }



    get validSortieProduitReference(): boolean {
        return this._validSortieProduitReference;
    }

    set validSortieProduitReference(value: boolean) {
         this._validSortieProduitReference = value;
    }

    get validDepotLibelle(): boolean {
        return this._validDepotLibelle;
    }
    set validDepotLibelle(value: boolean) {
        this._validDepotLibelle = value;
    }
    get validEntrepriseSocieteNom(): boolean {
        return this._validEntrepriseSocieteNom;
    }
    set validEntrepriseSocieteNom(value: boolean) {
        this._validEntrepriseSocieteNom = value;
    }
    get validSortieProduitItemsProduit(): boolean {
        return this._validSortieProduitItemsProduit;
    }
    set validSortieProduitItemsProduit(value: boolean) {
        this._validSortieProduitItemsProduit = value;
    }
    get validSortieProduitItemsQuantite(): boolean {
        return this._validSortieProduitItemsQuantite;
    }
    set validSortieProduitItemsQuantite(value: boolean) {
        this._validSortieProduitItemsQuantite = value;
    }

    get sortieProduitItemsElement(): SortieProduitItemDto {
        if( this._sortieProduitItemsElement == null )
            this._sortieProduitItemsElement = new SortieProduitItemDto();
        return this._sortieProduitItemsElement;
    }

    set sortieProduitItemsElement(value: SortieProduitItemDto) {
        this._sortieProduitItemsElement = value;
    }

}
