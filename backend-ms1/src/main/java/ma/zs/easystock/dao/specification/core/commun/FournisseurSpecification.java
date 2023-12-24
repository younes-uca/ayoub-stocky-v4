package  ma.zs.easystock.dao.specification.core.commun;

import ma.zs.easystock.dao.criteria.core.commun.FournisseurCriteria;
import ma.zs.easystock.bean.core.commun.Fournisseur;
import ma.zs.easystock.zynerator.specification.AbstractSpecification;


public class FournisseurSpecification extends  AbstractSpecification<FournisseurCriteria, Fournisseur>  {

    @Override
    public void constructPredicates() {
        addPredicateId("id", criteria);
        addPredicate("ice", criteria.getIce(),criteria.getIceLike());
        addPredicate("nom", criteria.getNom(),criteria.getNomLike());
        addPredicate("telephone", criteria.getTelephone(),criteria.getTelephoneLike());
        addPredicateBigDecimal("creance", criteria.getCreance(), criteria.getCreanceMin(), criteria.getCreanceMax());
    }

    public FournisseurSpecification(FournisseurCriteria criteria) {
        super(criteria);
    }

    public FournisseurSpecification(FournisseurCriteria criteria, boolean distinct) {
        super(criteria, distinct);
    }

}
