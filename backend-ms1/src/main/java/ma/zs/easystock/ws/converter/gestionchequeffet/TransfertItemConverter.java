package  ma.zs.easystock.ws.converter.gestionchequeffet;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import ma.zs.easystock.ws.converter.commun.DepotConverter;
import ma.zs.easystock.ws.converter.gestionchequeffet.TransfertConverter;
import ma.zs.easystock.ws.converter.stock.ProduitConverter;

import ma.zs.easystock.bean.core.stock.Produit;
import ma.zs.easystock.bean.core.gestionchequeffet.Transfert;


import ma.zs.easystock.zynerator.util.StringUtil;
import ma.zs.easystock.zynerator.converter.AbstractConverter;
import ma.zs.easystock.zynerator.util.DateUtil;
import ma.zs.easystock.bean.core.gestionchequeffet.TransfertItem;
import ma.zs.easystock.ws.dto.gestionchequeffet.TransfertItemDto;

@Component
public class TransfertItemConverter extends AbstractConverter<TransfertItem, TransfertItemDto> {

    @Autowired
    private DepotConverter depotConverter ;
    @Autowired
    private TransfertConverter transfertConverter ;
    @Autowired
    private ProduitConverter produitConverter ;
    private boolean fromDepot;
    private boolean toDepot;
    private boolean produit;
    private boolean transfert;

    public  TransfertItemConverter(){//Depot depotTransfert transfertProduit produit,){
        super(TransfertItem.class, TransfertItemDto.class);
        //this.depot =  depot ;
        //this.transfert =  transfert ;
        //this.produit =  produit ;
    }

    @Override
    public TransfertItem toItem(TransfertItemDto dto) {
        if (dto == null) {
            return null;
        } else {
        TransfertItem item = new TransfertItem();
            if(StringUtil.isNotEmpty(dto.getId()))
                item.setId(dto.getId());
            if(StringUtil.isNotEmpty(dto.getQuantite()))
                item.setQuantite(dto.getQuantite());
            if(this.fromDepot && dto.getFromDepot()!=null &&  dto.getFromDepot().getId() != null)
                item.setFromDepot(depotConverter.toItem(dto.getFromDepot())) ;

            if(this.toDepot && dto.getToDepot()!=null &&  dto.getToDepot().getId() != null)
                item.setToDepot(depotConverter.toItem(dto.getToDepot())) ;

            if(dto.getProduit() != null && dto.getProduit().getId() != null){
                item.setProduit(new Produit());
                item.getProduit().setId(dto.getProduit().getId());
                item.getProduit().setDesignation(dto.getProduit().getDesignation());
            }

            if(dto.getTransfert() != null && dto.getTransfert().getId() != null){
                item.setTransfert(new Transfert());
                item.getTransfert().setId(dto.getTransfert().getId());
                item.getTransfert().setId(dto.getTransfert().getId());
            }




        return item;
        }
    }

    @Override
    public TransfertItemDto toDto(TransfertItem item) {
        if (item == null) {
            return null;
        } else {
            TransfertItemDto dto = new TransfertItemDto();
            if(StringUtil.isNotEmpty(item.getId()))
                dto.setId(item.getId());
            if(StringUtil.isNotEmpty(item.getQuantite()))
                dto.setQuantite(item.getQuantite());
        if(this.fromDepot && item.getFromDepot()!=null) {
            dto.setFromDepot(depotConverter.toDto(item.getFromDepot())) ;
        }
        if(this.toDepot && item.getToDepot()!=null) {
            dto.setToDepot(depotConverter.toDto(item.getToDepot())) ;
        }
        if(this.produit && item.getProduit()!=null) {
            dto.setProduit(produitConverter.toDto(item.getProduit())) ;
        }
        if(this.transfert && item.getTransfert()!=null) {
            dto.setTransfert(transfertConverter.toDto(item.getTransfert())) ;
        }


        return dto;
        }
    }


    public void initObject(boolean value) {
        this.fromDepot = value;
        this.toDepot = value;
        this.produit = value;
        this.transfert = value;
    }


    public DepotConverter getDepotConverter(){
        return this.depotConverter;
    }
    public void setDepotConverter(DepotConverter depotConverter ){
        this.depotConverter = depotConverter;
    }
    public TransfertConverter getTransfertConverter(){
        return this.transfertConverter;
    }
    public void setTransfertConverter(TransfertConverter transfertConverter ){
        this.transfertConverter = transfertConverter;
    }
    public ProduitConverter getProduitConverter(){
        return this.produitConverter;
    }
    public void setProduitConverter(ProduitConverter produitConverter ){
        this.produitConverter = produitConverter;
    }
    public boolean  isFromDepot(){
        return this.fromDepot;
    }
    public void  setFromDepot(boolean fromDepot){
        this.fromDepot = fromDepot;
    }
    public boolean  isToDepot(){
        return this.toDepot;
    }
    public void  setToDepot(boolean toDepot){
        this.toDepot = toDepot;
    }
    public boolean  isProduit(){
        return this.produit;
    }
    public void  setProduit(boolean produit){
        this.produit = produit;
    }
    public boolean  isTransfert(){
        return this.transfert;
    }
    public void  setTransfert(boolean transfert){
        this.transfert = transfert;
    }
}
