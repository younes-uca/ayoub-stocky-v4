package ma.zs.easystock.service.impl.admin.commun;


import ma.zs.easystock.bean.core.commun.Client;
import ma.zs.easystock.dao.criteria.core.commun.ClientCriteria;
import ma.zs.easystock.dao.facade.core.commun.ClientDao;
import ma.zs.easystock.dao.specification.core.commun.ClientSpecification;
import ma.zs.easystock.service.facade.admin.commun.ClientAdminService;
import ma.zs.easystock.zynerator.service.AbstractServiceImpl;
import ma.zs.easystock.zynerator.service.Attribute;
import ma.zs.easystock.zynerator.util.ListUtil;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.ArrayList;




import ma.zs.easystock.zynerator.util.VelocityPdf;
import ma.zs.easystock.ws.dto.commun.ClientDto;
import org.springframework.http.HttpEntity;

import org.springframework.beans.factory.annotation.Autowired;


import java.util.List;
@Service
public class ClientAdminServiceImpl extends AbstractServiceImpl<Client, ClientCriteria, ClientDao> implements ClientAdminService {
    public static final String TEMPLATE = "template/client.vm";
    public static final String FILE_NAME = "client.pdf";
public static final List<Attribute> ATTRIBUTES = new ArrayList();
    static{


    ATTRIBUTES.add(new Attribute("cin"));

    ATTRIBUTES.add(new Attribute("nom"));

    ATTRIBUTES.add(new Attribute("telephone"));

    ATTRIBUTES.add(new Attribute("adresse"));

    ATTRIBUTES.add(new Attribute("creance","BigDecimal"));

    ATTRIBUTES.add(new Attribute("description"));
    }

    @Override
    public HttpEntity<byte[]> createPdf(ClientDto dto) throws Exception{
        return velocityPdf.createPdf(FILE_NAME, TEMPLATE, dto);
    }




    public Client findByReferenceEntity(Client t){
        return  dao.findByTelephone(t.getTelephone());
    }


    public List<Client> findAllOptimized() {
        return dao.findAllOptimized();
    }


    @Override
    protected List<Attribute> getAttributes() {
        return ATTRIBUTES;
    }



    public void configure() {
        super.configure(Client.class, ClientSpecification.class);
    }


    @Autowired
    private VelocityPdf velocityPdf;

    public ClientAdminServiceImpl(ClientDao dao) {
        super(dao);
    }

}
