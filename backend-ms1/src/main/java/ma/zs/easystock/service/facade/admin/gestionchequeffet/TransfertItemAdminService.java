package ma.zs.easystock.service.facade.admin.gestionchequeffet;

import java.util.List;
import ma.zs.easystock.bean.core.gestionchequeffet.TransfertItem;
import ma.zs.easystock.dao.criteria.core.gestionchequeffet.TransfertItemCriteria;
import ma.zs.easystock.zynerator.service.IService;



public interface TransfertItemAdminService extends  IService<TransfertItem,TransfertItemCriteria>  {

    List<TransfertItem> findByFromDepotId(Long id);
    int deleteByFromDepotId(Long id);
    long countByFromDepotId(Long id);
    List<TransfertItem> findByToDepotId(Long id);
    int deleteByToDepotId(Long id);
    long countByToDepotId(Long id);
    List<TransfertItem> findByProduitId(Long id);
    int deleteByProduitId(Long id);
    long countByProduitReference(String reference);
    List<TransfertItem> findByTransfertId(Long id);
    int deleteByTransfertId(Long id);
    long countByTransfertId(Long id);



}
