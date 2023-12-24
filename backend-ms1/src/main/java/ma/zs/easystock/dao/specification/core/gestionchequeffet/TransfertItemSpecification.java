package  ma.zs.easystock.dao.specification.core.gestionchequeffet;

import ma.zs.easystock.dao.criteria.core.gestionchequeffet.TransfertItemCriteria;
import ma.zs.easystock.bean.core.gestionchequeffet.TransfertItem;
import ma.zs.easystock.zynerator.specification.AbstractSpecification;


public class TransfertItemSpecification extends  AbstractSpecification<TransfertItemCriteria, TransfertItem>  {

    @Override
    public void constructPredicates() {
        addPredicateId("id", criteria);
        addPredicateBigDecimal("quantite", criteria.getQuantite(), criteria.getQuantiteMin(), criteria.getQuantiteMax());
        addPredicateFk("fromDepot","id", criteria.getFromDepot()==null?null:criteria.getFromDepot().getId());
        addPredicateFk("fromDepot","id", criteria.getFromDepots());
        addPredicateFk("toDepot","id", criteria.getToDepot()==null?null:criteria.getToDepot().getId());
        addPredicateFk("toDepot","id", criteria.getToDepots());
        addPredicateFk("produit","id", criteria.getProduit()==null?null:criteria.getProduit().getId());
        addPredicateFk("produit","id", criteria.getProduits());
        addPredicateFk("produit","reference", criteria.getProduit()==null?null:criteria.getProduit().getReference());
        addPredicateFk("transfert","id", criteria.getTransfert()==null?null:criteria.getTransfert().getId());
        addPredicateFk("transfert","id", criteria.getTransferts());
    }

    public TransfertItemSpecification(TransfertItemCriteria criteria) {
        super(criteria);
    }

    public TransfertItemSpecification(TransfertItemCriteria criteria, boolean distinct) {
        super(criteria, distinct);
    }

}
