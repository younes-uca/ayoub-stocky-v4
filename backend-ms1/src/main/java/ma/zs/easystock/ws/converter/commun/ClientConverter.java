package  ma.zs.easystock.ws.converter.commun;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;




import ma.zs.easystock.zynerator.util.StringUtil;
import ma.zs.easystock.zynerator.converter.AbstractConverter;
import ma.zs.easystock.zynerator.util.DateUtil;
import ma.zs.easystock.bean.core.commun.Client;
import ma.zs.easystock.ws.dto.commun.ClientDto;

@Component
public class ClientConverter extends AbstractConverter<Client, ClientDto> {


    public  ClientConverter(){//){
        super(Client.class, ClientDto.class);
    }

    @Override
    public Client toItem(ClientDto dto) {
        if (dto == null) {
            return null;
        } else {
        Client item = new Client();
            if(StringUtil.isNotEmpty(dto.getId()))
                item.setId(dto.getId());
            if(StringUtil.isNotEmpty(dto.getCin()))
                item.setCin(dto.getCin());
            if(StringUtil.isNotEmpty(dto.getNom()))
                item.setNom(dto.getNom());
            if(StringUtil.isNotEmpty(dto.getTelephone()))
                item.setTelephone(dto.getTelephone());
            if(StringUtil.isNotEmpty(dto.getAdresse()))
                item.setAdresse(dto.getAdresse());
            if(StringUtil.isNotEmpty(dto.getCreance()))
                item.setCreance(dto.getCreance());
            if(StringUtil.isNotEmpty(dto.getDescription()))
                item.setDescription(dto.getDescription());



        return item;
        }
    }

    @Override
    public ClientDto toDto(Client item) {
        if (item == null) {
            return null;
        } else {
            ClientDto dto = new ClientDto();
            if(StringUtil.isNotEmpty(item.getId()))
                dto.setId(item.getId());
            if(StringUtil.isNotEmpty(item.getCin()))
                dto.setCin(item.getCin());
            if(StringUtil.isNotEmpty(item.getNom()))
                dto.setNom(item.getNom());
            if(StringUtil.isNotEmpty(item.getTelephone()))
                dto.setTelephone(item.getTelephone());
            if(StringUtil.isNotEmpty(item.getAdresse()))
                dto.setAdresse(item.getAdresse());
            if(StringUtil.isNotEmpty(item.getCreance()))
                dto.setCreance(item.getCreance());
            if(StringUtil.isNotEmpty(item.getDescription()))
                dto.setDescription(item.getDescription());


        return dto;
        }
    }


    public void initObject(boolean value) {
    }


}
