package ma.zs.easystock.dao.facade.core.commun;

import org.springframework.data.jpa.repository.Query;
import ma.zs.easystock.zynerator.repository.AbstractRepository;
import ma.zs.easystock.bean.core.commun.Tag;
import org.springframework.stereotype.Repository;
import ma.zs.easystock.bean.core.commun.Tag;
import java.util.List;


@Repository
public interface TagDao extends AbstractRepository<Tag,Long>  {
    Tag findByLibelle(String libelle);
    int deleteByLibelle(String libelle);


    @Query("SELECT NEW Tag(item.id,item.libelle) FROM Tag item")
    List<Tag> findAllOptimized();

}
