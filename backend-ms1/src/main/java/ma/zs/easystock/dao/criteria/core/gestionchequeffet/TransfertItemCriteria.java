package  ma.zs.easystock.dao.criteria.core.gestionchequeffet;


import ma.zs.easystock.dao.criteria.core.commun.DepotCriteria;
import ma.zs.easystock.dao.criteria.core.stock.ProduitCriteria;

import ma.zs.easystock.zynerator.criteria.BaseCriteria;
import java.util.List;

public class TransfertItemCriteria extends  BaseCriteria  {

    private String quantite;
    private String quantiteMin;
    private String quantiteMax;

    private DepotCriteria fromDepot ;
    private List<DepotCriteria> fromDepots ;
    private DepotCriteria toDepot ;
    private List<DepotCriteria> toDepots ;
    private ProduitCriteria produit ;
    private List<ProduitCriteria> produits ;
    private TransfertCriteria transfert ;
    private List<TransfertCriteria> transferts ;


    public TransfertItemCriteria(){}

    public String getQuantite(){
        return this.quantite;
    }
    public void setQuantite(String quantite){
        this.quantite = quantite;
    }   
    public String getQuantiteMin(){
        return this.quantiteMin;
    }
    public void setQuantiteMin(String quantiteMin){
        this.quantiteMin = quantiteMin;
    }
    public String getQuantiteMax(){
        return this.quantiteMax;
    }
    public void setQuantiteMax(String quantiteMax){
        this.quantiteMax = quantiteMax;
    }
      

    public DepotCriteria getFromDepot(){
        return this.fromDepot;
    }

    public void setFromDepot(DepotCriteria fromDepot){
        this.fromDepot = fromDepot;
    }
    public List<DepotCriteria> getFromDepots(){
        return this.fromDepots;
    }

    public void setFromDepots(List<DepotCriteria> fromDepots){
        this.fromDepots = fromDepots;
    }
    public DepotCriteria getToDepot(){
        return this.toDepot;
    }

    public void setToDepot(DepotCriteria toDepot){
        this.toDepot = toDepot;
    }
    public List<DepotCriteria> getToDepots(){
        return this.toDepots;
    }

    public void setToDepots(List<DepotCriteria> toDepots){
        this.toDepots = toDepots;
    }
    public ProduitCriteria getProduit(){
        return this.produit;
    }

    public void setProduit(ProduitCriteria produit){
        this.produit = produit;
    }
    public List<ProduitCriteria> getProduits(){
        return this.produits;
    }

    public void setProduits(List<ProduitCriteria> produits){
        this.produits = produits;
    }
    public TransfertCriteria getTransfert(){
        return this.transfert;
    }

    public void setTransfert(TransfertCriteria transfert){
        this.transfert = transfert;
    }
    public List<TransfertCriteria> getTransferts(){
        return this.transferts;
    }

    public void setTransferts(List<TransfertCriteria> transferts){
        this.transferts = transferts;
    }
}
