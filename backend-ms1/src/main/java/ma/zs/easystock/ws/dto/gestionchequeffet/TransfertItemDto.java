package  ma.zs.easystock.ws.dto.gestionchequeffet;

import ma.zs.easystock.zynerator.audit.Log;
import ma.zs.easystock.zynerator.dto.AuditBaseDto;
import com.fasterxml.jackson.annotation.JsonInclude;

import java.math.BigDecimal;


import ma.zs.easystock.ws.dto.commun.DepotDto;
import ma.zs.easystock.ws.dto.stock.ProduitDto;


@JsonInclude(JsonInclude.Include.NON_NULL)
public class TransfertItemDto  extends AuditBaseDto {

    private BigDecimal quantite  ;

    private DepotDto fromDepot ;
    private DepotDto toDepot ;
    private ProduitDto produit ;
    private TransfertDto transfert ;



    public TransfertItemDto(){
        super();
    }



    @Log
    public BigDecimal getQuantite(){
        return this.quantite;
    }
    public void setQuantite(BigDecimal quantite){
        this.quantite = quantite;
    }


    public DepotDto getFromDepot(){
        return this.fromDepot;
    }

    public void setFromDepot(DepotDto fromDepot){
        this.fromDepot = fromDepot;
    }
    public DepotDto getToDepot(){
        return this.toDepot;
    }

    public void setToDepot(DepotDto toDepot){
        this.toDepot = toDepot;
    }
    public ProduitDto getProduit(){
        return this.produit;
    }

    public void setProduit(ProduitDto produit){
        this.produit = produit;
    }
    public TransfertDto getTransfert(){
        return this.transfert;
    }

    public void setTransfert(TransfertDto transfert){
        this.transfert = transfert;
    }






}
