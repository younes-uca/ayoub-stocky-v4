import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {ClientAdminService} from 'src/app/controller/service/admin/commun/ClientAdmin.service';
import {ClientDto} from 'src/app/controller/model/commun/Client.model';
import {ClientCriteria} from 'src/app/controller/criteria/commun/ClientCriteria.model';
@Component({
  selector: 'app-client-create-admin',
  templateUrl: './client-create-admin.component.html'
})
export class ClientCreateAdminComponent extends AbstractCreateController<ClientDto, ClientCriteria, ClientAdminService>  implements OnInit {



   private _validClientCin = true;
   private _validClientNom = true;
   private _validClientTelephone = true;

    constructor( private clientService: ClientAdminService ) {
        super(clientService);
    }

    ngOnInit(): void {
    }





    public setValidation(value: boolean){
        this.validClientCin = value;
        this.validClientNom = value;
        this.validClientTelephone = value;
    }



    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateClientCin();
        this.validateClientNom();
        this.validateClientTelephone();
    }

    public validateClientCin(){
        if (this.stringUtilService.isEmpty(this.item.cin)) {
        this.errorMessages.push('Cin non valide');
        this.validClientCin = false;
        } else {
            this.validClientCin = true;
        }
    }
    public validateClientNom(){
        if (this.stringUtilService.isEmpty(this.item.nom)) {
        this.errorMessages.push('Nom non valide');
        this.validClientNom = false;
        } else {
            this.validClientNom = true;
        }
    }
    public validateClientTelephone(){
        if (this.stringUtilService.isEmpty(this.item.telephone)) {
        this.errorMessages.push('Telephone non valide');
        this.validClientTelephone = false;
        } else {
            this.validClientTelephone = true;
        }
    }






    get validClientCin(): boolean {
        return this._validClientCin;
    }

    set validClientCin(value: boolean) {
         this._validClientCin = value;
    }
    get validClientNom(): boolean {
        return this._validClientNom;
    }

    set validClientNom(value: boolean) {
         this._validClientNom = value;
    }
    get validClientTelephone(): boolean {
        return this._validClientTelephone;
    }

    set validClientTelephone(value: boolean) {
         this._validClientTelephone = value;
    }



}
