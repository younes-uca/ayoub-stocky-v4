package  ma.zs.easystock.ws.converter.commun;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;




import ma.zs.easystock.zynerator.util.StringUtil;
import ma.zs.easystock.zynerator.converter.AbstractConverter;
import ma.zs.easystock.zynerator.util.DateUtil;
import ma.zs.easystock.bean.core.commun.Tag;
import ma.zs.easystock.ws.dto.commun.TagDto;

@Component
public class TagConverter extends AbstractConverter<Tag, TagDto> {


    public  TagConverter(){//){
        super(Tag.class, TagDto.class);
    }

    @Override
    public Tag toItem(TagDto dto) {
        if (dto == null) {
            return null;
        } else {
        Tag item = new Tag();
            if(StringUtil.isNotEmpty(dto.getId()))
                item.setId(dto.getId());
            if(StringUtil.isNotEmpty(dto.getLibelle()))
                item.setLibelle(dto.getLibelle());



        return item;
        }
    }

    @Override
    public TagDto toDto(Tag item) {
        if (item == null) {
            return null;
        } else {
            TagDto dto = new TagDto();
            if(StringUtil.isNotEmpty(item.getId()))
                dto.setId(item.getId());
            if(StringUtil.isNotEmpty(item.getLibelle()))
                dto.setLibelle(item.getLibelle());


        return dto;
        }
    }


    public void initObject(boolean value) {
    }


}
