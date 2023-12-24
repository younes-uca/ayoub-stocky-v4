package  ma.zs.easystock.dao.specification.core.stock;

import ma.zs.easystock.dao.criteria.core.stock.ProduitCriteria;
import ma.zs.easystock.bean.core.stock.Produit;
import ma.zs.easystock.zynerator.specification.AbstractSpecification;


public class ProduitSpecification extends  AbstractSpecification<ProduitCriteria, Produit>  {

    @Override
    public void constructPredicates() {
        addPredicateId("id", criteria);
        addPredicate("reference", criteria.getReference(),criteria.getReferenceLike());
        addPredicate("barCode", criteria.getBarCode(),criteria.getBarCodeLike());
        addPredicate("designation", criteria.getDesignation(),criteria.getDesignationLike());
        addPredicateBigDecimal("quantiteTotal", criteria.getQuantiteTotal(), criteria.getQuantiteTotalMin(), criteria.getQuantiteTotalMax());
        addPredicateBigDecimal("prixAchatMoyen", criteria.getPrixAchatMoyen(), criteria.getPrixAchatMoyenMin(), criteria.getPrixAchatMoyenMax());
        addPredicateBigDecimal("prixVente", criteria.getPrixVente(), criteria.getPrixVenteMin(), criteria.getPrixVenteMax());
        addPredicate("pathPhoto", criteria.getPathPhoto(),criteria.getPathPhotoLike());
        addPredicateBigDecimal("seuilAlerte", criteria.getSeuilAlerte(), criteria.getSeuilAlerteMin(), criteria.getSeuilAlerteMax());
        addPredicateFk("tag","id", criteria.getTag()==null?null:criteria.getTag().getId());
        addPredicateFk("tag","id", criteria.getTags());
        addPredicateFk("tag","libelle", criteria.getTag()==null?null:criteria.getTag().getLibelle());
        addPredicateFk("categorie","id", criteria.getCategorie()==null?null:criteria.getCategorie().getId());
        addPredicateFk("categorie","id", criteria.getCategories());
        addPredicateFk("categorie","libelle", criteria.getCategorie()==null?null:criteria.getCategorie().getLibelle());
        addPredicateFk("marque","id", criteria.getMarque()==null?null:criteria.getMarque().getId());
        addPredicateFk("marque","id", criteria.getMarques());
        addPredicateFk("marque","libelle", criteria.getMarque()==null?null:criteria.getMarque().getLibelle());
        addPredicateFk("uniteMesure","id", criteria.getUniteMesure()==null?null:criteria.getUniteMesure().getId());
        addPredicateFk("uniteMesure","id", criteria.getUniteMesures());
        addPredicateFk("uniteMesure","libelle", criteria.getUniteMesure()==null?null:criteria.getUniteMesure().getLibelle());
    }

    public ProduitSpecification(ProduitCriteria criteria) {
        super(criteria);
    }

    public ProduitSpecification(ProduitCriteria criteria, boolean distinct) {
        super(criteria, distinct);
    }

}
