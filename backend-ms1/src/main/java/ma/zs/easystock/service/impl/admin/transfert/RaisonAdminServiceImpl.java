package ma.zs.easystock.service.impl.admin.transfert;


import ma.zs.easystock.bean.core.transfert.Raison;
import ma.zs.easystock.dao.criteria.core.transfert.RaisonCriteria;
import ma.zs.easystock.dao.facade.core.transfert.RaisonDao;
import ma.zs.easystock.dao.specification.core.transfert.RaisonSpecification;
import ma.zs.easystock.service.facade.admin.transfert.RaisonAdminService;
import ma.zs.easystock.zynerator.service.AbstractServiceImpl;
import ma.zs.easystock.zynerator.util.ListUtil;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.ArrayList;





import org.springframework.beans.factory.annotation.Autowired;


import java.util.List;
@Service
public class RaisonAdminServiceImpl extends AbstractServiceImpl<Raison, RaisonCriteria, RaisonDao> implements RaisonAdminService {







    public List<Raison> findAllOptimized() {
        return dao.findAllOptimized();
    }





    public void configure() {
        super.configure(Raison.class, RaisonSpecification.class);
    }



    public RaisonAdminServiceImpl(RaisonDao dao) {
        super(dao);
    }

}
