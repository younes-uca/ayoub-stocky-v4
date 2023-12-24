package ma.zs.easystock.dao.facade.core.gestionchequeffet;

import ma.zs.easystock.zynerator.repository.AbstractRepository;
import ma.zs.easystock.bean.core.gestionchequeffet.TransfertItem;
import org.springframework.stereotype.Repository;
import java.util.List;


@Repository
public interface TransfertItemDao extends AbstractRepository<TransfertItem,Long>  {

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
