package  ma.zs.easystock.ws.converter.stock;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import ma.zs.easystock.zynerator.util.ListUtil;

import ma.zs.easystock.ws.converter.commun.UniteMesureConverter;
import ma.zs.easystock.ws.converter.commun.DepotConverter;
import ma.zs.easystock.ws.converter.commun.TagConverter;
import ma.zs.easystock.ws.converter.commun.MarqueConverter;
import ma.zs.easystock.ws.converter.commun.EntrepriseSocieteConverter;
import ma.zs.easystock.ws.converter.commun.CategorieConverter;
import ma.zs.easystock.ws.converter.stock.StockConverter;



import ma.zs.easystock.zynerator.util.StringUtil;
import ma.zs.easystock.zynerator.converter.AbstractConverter;
import ma.zs.easystock.zynerator.util.DateUtil;
import ma.zs.easystock.bean.core.stock.Produit;
import ma.zs.easystock.ws.dto.stock.ProduitDto;

@Component
public class ProduitConverter extends AbstractConverter<Produit, ProduitDto> {

    @Autowired
    private UniteMesureConverter uniteMesureConverter ;
    @Autowired
    private DepotConverter depotConverter ;
    @Autowired
    private TagConverter tagConverter ;
    @Autowired
    private MarqueConverter marqueConverter ;
    @Autowired
    private EntrepriseSocieteConverter entrepriseSocieteConverter ;
    @Autowired
    private CategorieConverter categorieConverter ;
    @Autowired
    private StockConverter stockConverter ;
    private boolean tag;
    private boolean categorie;
    private boolean marque;
    private boolean uniteMesure;
    private boolean stocks;

    public  ProduitConverter(){//UniteMesure uniteMesureDepot depotTag tagMarque marqueEntrepriseSociete entrepriseSocieteCategorie categorieStock stock){
        super(Produit.class, ProduitDto.class);
        init(true);
        //this.uniteMesure =  uniteMesure ;
        //this.depot =  depot ;
        //this.tag =  tag ;
        //this.marque =  marque ;
        //this.entrepriseSociete =  entrepriseSociete ;
        //this.categorie =  categorie ;
        //this.stock =  stock ;
    }

    @Override
    public Produit toItem(ProduitDto dto) {
        if (dto == null) {
            return null;
        } else {
        Produit item = new Produit();
            if(StringUtil.isNotEmpty(dto.getId()))
                item.setId(dto.getId());
            if(StringUtil.isNotEmpty(dto.getReference()))
                item.setReference(dto.getReference());
            if(StringUtil.isNotEmpty(dto.getBarCode()))
                item.setBarCode(dto.getBarCode());
            if(StringUtil.isNotEmpty(dto.getDesignation()))
                item.setDesignation(dto.getDesignation());
            if(StringUtil.isNotEmpty(dto.getQuantiteTotal()))
                item.setQuantiteTotal(dto.getQuantiteTotal());
            if(StringUtil.isNotEmpty(dto.getPrixAchatMoyen()))
                item.setPrixAchatMoyen(dto.getPrixAchatMoyen());
            if(StringUtil.isNotEmpty(dto.getPrixVente()))
                item.setPrixVente(dto.getPrixVente());
            if(StringUtil.isNotEmpty(dto.getPathPhoto()))
                item.setPathPhoto(dto.getPathPhoto());
            if(StringUtil.isNotEmpty(dto.getSeuilAlerte()))
                item.setSeuilAlerte(dto.getSeuilAlerte());
            if(StringUtil.isNotEmpty(dto.getDescription()))
                item.setDescription(dto.getDescription());
            if(this.tag && dto.getTag()!=null &&  dto.getTag().getId() != null)
                item.setTag(tagConverter.toItem(dto.getTag())) ;

            if(this.categorie && dto.getCategorie()!=null &&  dto.getCategorie().getId() != null)
                item.setCategorie(categorieConverter.toItem(dto.getCategorie())) ;

            if(this.marque && dto.getMarque()!=null &&  dto.getMarque().getId() != null)
                item.setMarque(marqueConverter.toItem(dto.getMarque())) ;

            if(this.uniteMesure && dto.getUniteMesure()!=null &&  dto.getUniteMesure().getId() != null)
                item.setUniteMesure(uniteMesureConverter.toItem(dto.getUniteMesure())) ;


            if(this.stocks && ListUtil.isNotEmpty(dto.getStocks()))
                item.setStocks(stockConverter.toItem(dto.getStocks()));


        return item;
        }
    }

    @Override
    public ProduitDto toDto(Produit item) {
        if (item == null) {
            return null;
        } else {
            ProduitDto dto = new ProduitDto();
            if(StringUtil.isNotEmpty(item.getId()))
                dto.setId(item.getId());
            if(StringUtil.isNotEmpty(item.getReference()))
                dto.setReference(item.getReference());
            if(StringUtil.isNotEmpty(item.getBarCode()))
                dto.setBarCode(item.getBarCode());
            if(StringUtil.isNotEmpty(item.getDesignation()))
                dto.setDesignation(item.getDesignation());
            if(StringUtil.isNotEmpty(item.getQuantiteTotal()))
                dto.setQuantiteTotal(item.getQuantiteTotal());
            if(StringUtil.isNotEmpty(item.getPrixAchatMoyen()))
                dto.setPrixAchatMoyen(item.getPrixAchatMoyen());
            if(StringUtil.isNotEmpty(item.getPrixVente()))
                dto.setPrixVente(item.getPrixVente());
            if(StringUtil.isNotEmpty(item.getPathPhoto()))
                dto.setPathPhoto(item.getPathPhoto());
            if(StringUtil.isNotEmpty(item.getSeuilAlerte()))
                dto.setSeuilAlerte(item.getSeuilAlerte());
            if(StringUtil.isNotEmpty(item.getDescription()))
                dto.setDescription(item.getDescription());
        if(this.tag && item.getTag()!=null) {
            dto.setTag(tagConverter.toDto(item.getTag())) ;
        }
        if(this.categorie && item.getCategorie()!=null) {
            dto.setCategorie(categorieConverter.toDto(item.getCategorie())) ;
        }
        if(this.marque && item.getMarque()!=null) {
            dto.setMarque(marqueConverter.toDto(item.getMarque())) ;
        }
        if(this.uniteMesure && item.getUniteMesure()!=null) {
            dto.setUniteMesure(uniteMesureConverter.toDto(item.getUniteMesure())) ;
        }
        if(this.stocks && ListUtil.isNotEmpty(item.getStocks())){
            stockConverter.init(true);
            stockConverter.setProduit(false);
            dto.setStocks(stockConverter.toDto(item.getStocks()));
            stockConverter.setProduit(true);

        }


        return dto;
        }
    }

    public void initList(boolean value) {
        this.stocks = value;
    }

    public void initObject(boolean value) {
        this.tag = value;
        this.categorie = value;
        this.marque = value;
        this.uniteMesure = value;
    }


    public UniteMesureConverter getUniteMesureConverter(){
        return this.uniteMesureConverter;
    }
    public void setUniteMesureConverter(UniteMesureConverter uniteMesureConverter ){
        this.uniteMesureConverter = uniteMesureConverter;
    }
    public DepotConverter getDepotConverter(){
        return this.depotConverter;
    }
    public void setDepotConverter(DepotConverter depotConverter ){
        this.depotConverter = depotConverter;
    }
    public TagConverter getTagConverter(){
        return this.tagConverter;
    }
    public void setTagConverter(TagConverter tagConverter ){
        this.tagConverter = tagConverter;
    }
    public MarqueConverter getMarqueConverter(){
        return this.marqueConverter;
    }
    public void setMarqueConverter(MarqueConverter marqueConverter ){
        this.marqueConverter = marqueConverter;
    }
    public EntrepriseSocieteConverter getEntrepriseSocieteConverter(){
        return this.entrepriseSocieteConverter;
    }
    public void setEntrepriseSocieteConverter(EntrepriseSocieteConverter entrepriseSocieteConverter ){
        this.entrepriseSocieteConverter = entrepriseSocieteConverter;
    }
    public CategorieConverter getCategorieConverter(){
        return this.categorieConverter;
    }
    public void setCategorieConverter(CategorieConverter categorieConverter ){
        this.categorieConverter = categorieConverter;
    }
    public StockConverter getStockConverter(){
        return this.stockConverter;
    }
    public void setStockConverter(StockConverter stockConverter ){
        this.stockConverter = stockConverter;
    }
    public boolean  isTag(){
        return this.tag;
    }
    public void  setTag(boolean tag){
        this.tag = tag;
    }
    public boolean  isCategorie(){
        return this.categorie;
    }
    public void  setCategorie(boolean categorie){
        this.categorie = categorie;
    }
    public boolean  isMarque(){
        return this.marque;
    }
    public void  setMarque(boolean marque){
        this.marque = marque;
    }
    public boolean  isUniteMesure(){
        return this.uniteMesure;
    }
    public void  setUniteMesure(boolean uniteMesure){
        this.uniteMesure = uniteMesure;
    }
    public boolean  isStocks(){
        return this.stocks ;
    }
    public void  setStocks(boolean stocks ){
        this.stocks  = stocks ;
    }
}
