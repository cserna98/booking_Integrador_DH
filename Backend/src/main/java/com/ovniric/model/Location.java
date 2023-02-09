package com.ovniric.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

@Entity
@Table(name = "Localizacion")
public class Location {

    //COLUMNS
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_localizacion")
    private Long idLocation;

    @Column(name = "lugar")
    private String place;

    @Column(name = "altitud")
    private Double altitude;

    @ManyToOne
    @JoinColumn(name = "producto_id", referencedColumnName = "id_producto")
    @JsonIgnore
    private Product product;

    //CONSTRUCTORS


    public Location(Long idLocation, String place, Double altitude) {
        this.idLocation = idLocation;
        this.place = place;
        this.altitude = altitude;
    }

    public Location(String place, Double altitude) {
        this.place = place;
        this.altitude = altitude;
    }

    public Location() {
    }

    //GETTERS AND SETTERS


    public Long getIdLocation() {
        return idLocation;
    }

    public void setIdLocation(Long idLocation) {
        this.idLocation = idLocation;
    }

    public String getPlace() {
        return place;
    }

    public void setPlace(String place) {
        this.place = place;
    }

    public Double getAltitude() {
        return altitude;
    }

    public void setAltitude(Double altitude) {
        this.altitude = altitude;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }
}
