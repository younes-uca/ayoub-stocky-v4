package  ma.zs.easystock.dao.criteria.core.stock;


import ma.zs.easystock.dao.criteria.core.commun.UniteMesureCriteria;
import ma.zs.easystock.dao.criteria.core.commun.TagCriteria;
import ma.zs.easystock.dao.criteria.core.commun.MarqueCriteria;
import ma.zs.easystock.dao.criteria.core.commun.CategorieCriteria;

import ma.zs.easystock.zynerator.criteria.BaseCriteria;
import java.util.List;

public class ProduitCriteria extends  BaseCriteria  {

    private String reference;
    private String referenceLike;
    private String barCode;
    private String barCodeLike;
    private String designation;
    private String designationLike;
    private String quantiteTotal;
    private String quantiteTotalMin;
    private String quantiteTotalMax;
    private String prixAchatMoyen;
    private String prixAchatMoyenMin;
    private String prixAchatMoyenMax;
    private String prixVente;
    private String prixVenteMin;
    private String prixVenteMax;
    private String pathPhoto;
    private String pathPhotoLike;
    private String seuilAlerte;
    private String seuilAlerteMin;
    private String seuilAlerteMax;
    private String description;
    private String descriptionLike;

    private TagCriteria tag ;
    private List<TagCriteria> tags ;
    private CategorieCriteria categorie ;
    private List<CategorieCriteria> categories ;
    private MarqueCriteria marque ;
    private List<MarqueCriteria> marques ;
    private UniteMesureCriteria uniteMesure ;
    private List<UniteMesureCriteria> uniteMesures ;


    public ProduitCriteria(){}

    public String getReference(){
        return this.reference;
    }
    public void setReference(String reference){
        this.reference = reference;
    }
    public String getReferenceLike(){
        return this.referenceLike;
    }
    public void setReferenceLike(String referenceLike){
        this.referenceLike = referenceLike;
    }

    public String getBarCode(){
        return this.barCode;
    }
    public void setBarCode(String barCode){
        this.barCode = barCode;
    }
    public String getBarCodeLike(){
        return this.barCodeLike;
    }
    public void setBarCodeLike(String barCodeLike){
        this.barCodeLike = barCodeLike;
    }

    public String getDesignation(){
        return this.designation;
    }
    public void setDesignation(String designation){
        this.designation = designation;
    }
    public String getDesignationLike(){
        return this.designationLike;
    }
    public void setDesignationLike(String designationLike){
        this.designationLike = designationLike;
    }

    public String getQuantiteTotal(){
        return this.quantiteTotal;
    }
    public void setQuantiteTotal(String quantiteTotal){
        this.quantiteTotal = quantiteTotal;
    }   
    public String getQuantiteTotalMin(){
        return this.quantiteTotalMin;
    }
    public void setQuantiteTotalMin(String quantiteTotalMin){
        this.quantiteTotalMin = quantiteTotalMin;
    }
    public String getQuantiteTotalMax(){
        return this.quantiteTotalMax;
    }
    public void setQuantiteTotalMax(String quantiteTotalMax){
        this.quantiteTotalMax = quantiteTotalMax;
    }
      
    public String getPrixAchatMoyen(){
        return this.prixAchatMoyen;
    }
    public void setPrixAchatMoyen(String prixAchatMoyen){
        this.prixAchatMoyen = prixAchatMoyen;
    }   
    public String getPrixAchatMoyenMin(){
        return this.prixAchatMoyenMin;
    }
    public void setPrixAchatMoyenMin(String prixAchatMoyenMin){
        this.prixAchatMoyenMin = prixAchatMoyenMin;
    }
    public String getPrixAchatMoyenMax(){
        return this.prixAchatMoyenMax;
    }
    public void setPrixAchatMoyenMax(String prixAchatMoyenMax){
        this.prixAchatMoyenMax = prixAchatMoyenMax;
    }
      
    public String getPrixVente(){
        return this.prixVente;
    }
    public void setPrixVente(String prixVente){
        this.prixVente = prixVente;
    }   
    public String getPrixVenteMin(){
        return this.prixVenteMin;
    }
    public void setPrixVenteMin(String prixVenteMin){
        this.prixVenteMin = prixVenteMin;
    }
    public String getPrixVenteMax(){
        return this.prixVenteMax;
    }
    public void setPrixVenteMax(String prixVenteMax){
        this.prixVenteMax = prixVenteMax;
    }
      
    public String getPathPhoto(){
        return this.pathPhoto;
    }
    public void setPathPhoto(String pathPhoto){
        this.pathPhoto = pathPhoto;
    }
    public String getPathPhotoLike(){
        return this.pathPhotoLike;
    }
    public void setPathPhotoLike(String pathPhotoLike){
        this.pathPhotoLike = pathPhotoLike;
    }

    public String getSeuilAlerte(){
        return this.seuilAlerte;
    }
    public void setSeuilAlerte(String seuilAlerte){
        this.seuilAlerte = seuilAlerte;
    }   
    public String getSeuilAlerteMin(){
        return this.seuilAlerteMin;
    }
    public void setSeuilAlerteMin(String seuilAlerteMin){
        this.seuilAlerteMin = seuilAlerteMin;
    }
    public String getSeuilAlerteMax(){
        return this.seuilAlerteMax;
    }
    public void setSeuilAlerteMax(String seuilAlerteMax){
        this.seuilAlerteMax = seuilAlerteMax;
    }
      
    public String getDescription(){
        return this.description;
    }
    public void setDescription(String description){
        this.description = description;
    }
    public String getDescriptionLike(){
        return this.descriptionLike;
    }
    public void setDescriptionLike(String descriptionLike){
        this.descriptionLike = descriptionLike;
    }


    public TagCriteria getTag(){
        return this.tag;
    }

    public void setTag(TagCriteria tag){
        this.tag = tag;
    }
    public List<TagCriteria> getTags(){
        return this.tags;
    }

    public void setTags(List<TagCriteria> tags){
        this.tags = tags;
    }
    public CategorieCriteria getCategorie(){
        return this.categorie;
    }

    public void setCategorie(CategorieCriteria categorie){
        this.categorie = categorie;
    }
    public List<CategorieCriteria> getCategories(){
        return this.categories;
    }

    public void setCategories(List<CategorieCriteria> categories){
        this.categories = categories;
    }
    public MarqueCriteria getMarque(){
        return this.marque;
    }

    public void setMarque(MarqueCriteria marque){
        this.marque = marque;
    }
    public List<MarqueCriteria> getMarques(){
        return this.marques;
    }

    public void setMarques(List<MarqueCriteria> marques){
        this.marques = marques;
    }
    public UniteMesureCriteria getUniteMesure(){
        return this.uniteMesure;
    }

    public void setUniteMesure(UniteMesureCriteria uniteMesure){
        this.uniteMesure = uniteMesure;
    }
    public List<UniteMesureCriteria> getUniteMesures(){
        return this.uniteMesures;
    }

    public void setUniteMesures(List<UniteMesureCriteria> uniteMesures){
        this.uniteMesures = uniteMesures;
    }
}
