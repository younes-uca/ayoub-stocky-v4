package ma.zs.easystock.bean.core.commun;

import java.util.Objects;







import com.fasterxml.jackson.annotation.JsonInclude;
import ma.zs.easystock.zynerator.audit.AuditBusinessObject;
import jakarta.persistence.*;
import java.util.Objects;


import java.math.BigDecimal;


@Entity
@Table(name = "client")
@JsonInclude(JsonInclude.Include.NON_NULL)
@SequenceGenerator(name="client_seq",sequenceName="client_seq",allocationSize=1, initialValue = 1)
public class Client   extends AuditBusinessObject     {

    private Long id;

    @Column(length = 500)
    private String cin;
    @Column(length = 500)
    private String nom;
    @Column(length = 500)
    private String telephone;
    @Column(length = 500)
    private String adresse;
    private BigDecimal creance = BigDecimal.ZERO;
    @Column(length = 500)
    private String description;



    public Client(){
        super();
    }

    public Client(Long id,String telephone){
        this.id = id;
        this.telephone = telephone ;
    }
    public Client(String telephone){
        this.telephone = telephone ;
    }




    @Id
    @Column(name = "id")
        @GeneratedValue(strategy =  GenerationType.SEQUENCE,generator="client_seq")
    public Long getId(){
        return this.id;
    }
    public void setId(Long id){
        this.id = id;
    }
    public String getCin(){
        return this.cin;
    }
    public void setCin(String cin){
        this.cin = cin;
    }
    public String getNom(){
        return this.nom;
    }
    public void setNom(String nom){
        this.nom = nom;
    }
    public String getTelephone(){
        return this.telephone;
    }
    public void setTelephone(String telephone){
        this.telephone = telephone;
    }
    public String getAdresse(){
        return this.adresse;
    }
    public void setAdresse(String adresse){
        this.adresse = adresse;
    }
    public BigDecimal getCreance(){
        return this.creance;
    }
    public void setCreance(BigDecimal creance){
        this.creance = creance;
    }
    public String getDescription(){
        return this.description;
    }
    public void setDescription(String description){
        this.description = description;
    }

    @Transient
    public String getLabel() {
        label = telephone;
        return label;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Client client = (Client) o;
        return id != null && id.equals(client.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

}

