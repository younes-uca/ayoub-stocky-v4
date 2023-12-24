package  ma.zs.easystock.dao.specification.core.commun;

import ma.zs.easystock.dao.criteria.core.commun.TagCriteria;
import ma.zs.easystock.bean.core.commun.Tag;
import ma.zs.easystock.zynerator.specification.AbstractSpecification;


public class TagSpecification extends  AbstractSpecification<TagCriteria, Tag>  {

    @Override
    public void constructPredicates() {
        addPredicateId("id", criteria);
        addPredicate("libelle", criteria.getLibelle(),criteria.getLibelleLike());
    }

    public TagSpecification(TagCriteria criteria) {
        super(criteria);
    }

    public TagSpecification(TagCriteria criteria, boolean distinct) {
        super(criteria, distinct);
    }

}
