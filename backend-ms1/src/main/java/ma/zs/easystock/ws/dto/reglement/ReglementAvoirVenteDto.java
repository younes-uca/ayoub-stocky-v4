package  ma.zs.easystock.ws.dto.reglement;

import ma.zs.easystock.zynerator.audit.Log;
import ma.zs.easystock.zynerator.dto.AuditBaseDto;
import com.fasterxml.jackson.annotation.JsonInclude;

import java.util.Date;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import com.fasterxml.jackson.annotation.JsonFormat;
import java.math.BigDecimal;


import ma.zs.easystock.ws.dto.gestionchequeffet.ModeReglementDto;
import ma.zs.easystock.ws.dto.stock.AvoirVenteDto;
import ma.zs.easystock.ws.dto.stock.VenteDto;


@JsonInclude(JsonInclude.Include.NON_NULL)
public class ReglementAvoirVenteDto  extends AuditBaseDto {

    private String reference  ;
    private String dateReglement ;
    private BigDecimal montant  ;
    private String description  ;

    private VenteDto vente ;
    private ModeReglementDto modeReglement ;
    private AvoirVenteDto avoirVente ;



    public ReglementAvoirVenteDto(){
        super();
    }



    @Log
    public String getReference(){
        return this.reference;
    }
    public void setReference(String reference){
        this.reference = reference;
    }

    @Log
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd/MM/yyyy HH:mm")
    public String getDateReglement(){
        return this.dateReglement;
    }
    public void setDateReglement(String dateReglement){
        this.dateReglement = dateReglement;
    }

    @Log
    public BigDecimal getMontant(){
        return this.montant;
    }
    public void setMontant(BigDecimal montant){
        this.montant = montant;
    }

    @Log
    public String getDescription(){
        return this.description;
    }
    public void setDescription(String description){
        this.description = description;
    }


    public VenteDto getVente(){
        return this.vente;
    }

    public void setVente(VenteDto vente){
        this.vente = vente;
    }
    public ModeReglementDto getModeReglement(){
        return this.modeReglement;
    }

    public void setModeReglement(ModeReglementDto modeReglement){
        this.modeReglement = modeReglement;
    }
    public AvoirVenteDto getAvoirVente(){
        return this.avoirVente;
    }

    public void setAvoirVente(AvoirVenteDto avoirVente){
        this.avoirVente = avoirVente;
    }






}
