import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

import {TagAdminService} from 'src/app/controller/service/admin/commun/TagAdmin.service';
import {TagDto} from 'src/app/controller/model/commun/Tag.model';
import {TagCriteria} from 'src/app/controller/criteria/commun/TagCriteria.model';



@Component({
  selector: 'app-tag-edit-admin',
  templateUrl: './tag-edit-admin.component.html'
})
export class TagEditAdminComponent extends AbstractEditController<TagDto, TagCriteria, TagAdminService>   implements OnInit {


    private _validTagLibelle = true;




    constructor( private tagService: TagAdminService ) {
        super(tagService);
    }

    ngOnInit(): void {
    }


    public setValidation(value: boolean){
        this.validTagLibelle = value;
        }
    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateTagLibelle();
    }
    public validateTagLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
            this.errorMessages.push('Libelle non valide');
            this.validTagLibelle = false;
        } else {
            this.validTagLibelle = true;
        }
    }






    get validTagLibelle(): boolean {
        return this._validTagLibelle;
    }
    set validTagLibelle(value: boolean) {
        this._validTagLibelle = value;
    }

}
