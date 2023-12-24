package ma.zs.easystock.service.impl.admin.gestionchequeffet;


import ma.zs.easystock.bean.core.gestionchequeffet.TransfertItem;
import ma.zs.easystock.dao.criteria.core.gestionchequeffet.TransfertItemCriteria;
import ma.zs.easystock.dao.facade.core.gestionchequeffet.TransfertItemDao;
import ma.zs.easystock.dao.specification.core.gestionchequeffet.TransfertItemSpecification;
import ma.zs.easystock.service.facade.admin.gestionchequeffet.TransfertItemAdminService;
import ma.zs.easystock.zynerator.service.AbstractServiceImpl;
import ma.zs.easystock.zynerator.util.ListUtil;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.ArrayList;





import org.springframework.beans.factory.annotation.Autowired;

import ma.zs.easystock.service.facade.admin.commun.DepotAdminService ;
import ma.zs.easystock.bean.core.commun.Depot ;
import ma.zs.easystock.service.facade.admin.gestionchequeffet.TransfertAdminService ;
import ma.zs.easystock.bean.core.gestionchequeffet.Transfert ;
import ma.zs.easystock.service.facade.admin.stock.ProduitAdminService ;
import ma.zs.easystock.bean.core.stock.Produit ;

import java.util.List;
@Service
public class TransfertItemAdminServiceImpl extends AbstractServiceImpl<TransfertItem, TransfertItemCriteria, TransfertItemDao> implements TransfertItemAdminService {






    public List<TransfertItem> findByFromDepotId(Long id){
        return dao.findByFromDepotId(id);
    }
    public int deleteByFromDepotId(Long id){
        return dao.deleteByFromDepotId(id);
    }
    public long countByFromDepotId(Long id){
        return dao.countByFromDepotId(id);
    }
    public List<TransfertItem> findByToDepotId(Long id){
        return dao.findByToDepotId(id);
    }
    public int deleteByToDepotId(Long id){
        return dao.deleteByToDepotId(id);
    }
    public long countByToDepotId(Long id){
        return dao.countByToDepotId(id);
    }
    public List<TransfertItem> findByProduitId(Long id){
        return dao.findByProduitId(id);
    }
    public int deleteByProduitId(Long id){
        return dao.deleteByProduitId(id);
    }
    public long countByProduitReference(String reference){
        return dao.countByProduitReference(reference);
    }
    public List<TransfertItem> findByTransfertId(Long id){
        return dao.findByTransfertId(id);
    }
    public int deleteByTransfertId(Long id){
        return dao.deleteByTransfertId(id);
    }
    public long countByTransfertId(Long id){
        return dao.countByTransfertId(id);
    }






    public void configure() {
        super.configure(TransfertItem.class, TransfertItemSpecification.class);
    }


    @Autowired
    private DepotAdminService depotService ;
    @Autowired
    private TransfertAdminService transfertService ;
    @Autowired
    private ProduitAdminService produitService ;

    public TransfertItemAdminServiceImpl(TransfertItemDao dao) {
        super(dao);
    }

}
