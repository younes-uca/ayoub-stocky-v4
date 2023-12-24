package ma.zs.easystock.service.impl.admin.commun;


import ma.zs.easystock.bean.core.commun.Tag;
import ma.zs.easystock.dao.criteria.core.commun.TagCriteria;
import ma.zs.easystock.dao.facade.core.commun.TagDao;
import ma.zs.easystock.dao.specification.core.commun.TagSpecification;
import ma.zs.easystock.service.facade.admin.commun.TagAdminService;
import ma.zs.easystock.zynerator.service.AbstractServiceImpl;
import ma.zs.easystock.zynerator.util.ListUtil;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.ArrayList;





import org.springframework.beans.factory.annotation.Autowired;


import java.util.List;
@Service
public class TagAdminServiceImpl extends AbstractServiceImpl<Tag, TagCriteria, TagDao> implements TagAdminService {





    public Tag findByReferenceEntity(Tag t){
        return  dao.findByLibelle(t.getLibelle());
    }


    public List<Tag> findAllOptimized() {
        return dao.findAllOptimized();
    }





    public void configure() {
        super.configure(Tag.class, TagSpecification.class);
    }



    public TagAdminServiceImpl(TagDao dao) {
        super(dao);
    }

}
