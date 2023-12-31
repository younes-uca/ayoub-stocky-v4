package ma.zs.easystock.service.facade.admin.stock;

import java.util.List;
import ma.zs.easystock.bean.core.stock.BonPour;
import ma.zs.easystock.dao.criteria.core.stock.BonPourCriteria;
import ma.zs.easystock.zynerator.service.IService;



public interface BonPourAdminService extends  IService<BonPour,BonPourCriteria>  {

    List<BonPour> findByClientId(Long id);
    int deleteByClientId(Long id);
    long countByClientTelephone(String telephone);



}
