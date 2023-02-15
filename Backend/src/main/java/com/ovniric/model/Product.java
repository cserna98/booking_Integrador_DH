package com.ovniric.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "Producto")
public class Product {

    //COLUMNS
    @Id
    @Column(name = "id_producto")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idProduct;

    @Column(name = "titulo")
    private String title;

    @ManyToOne
    @JoinColumn(name = "id_categoria", referencedColumnName = "id_categoria" )
    private Category category;

    @ManyToOne
    @JoinColumn(name = "localizacion_id", referencedColumnName = "id_localizacion")
    private Location locations;

    @Column(name = "altitud")
    private Integer altitude;

    @OneToMany(mappedBy = "product", fetch = FetchType.LAZY)
    private Set<Image> images = new HashSet();

    @ManyToMany
    @JoinTable(
            name = "CaracteristicaProducto",
            joinColumns = @JoinColumn(name = "id_producto"),
            inverseJoinColumns = @JoinColumn(name="id_caracteristica")
    )
    @JsonIgnore
    private Set<Feature> features = new HashSet();

    @Column(name = "descripcion")
    private String description;
    @Column(name = "disponibilidad")
    private Boolean availability;

    @Column(name = "politica", length = 500)
    private String policy;



    //CONSTRUCTORS


    public Product(Long idProduct, String title, Integer altitude, String description, Boolean availability, String policy) {
        this.idProduct = idProduct;
        this.title = title;
        this.altitude = altitude;
        this.description = description;
        this.availability = availability;
        this.policy = policy;
    }

    public Product(String title, Location locations, Integer altitude, String description, Boolean availability, String policy) {
        this.title = title;
        this.locations = locations;
        this.altitude = altitude;
        this.description = description;
        this.availability = availability;
        this.policy = policy;
    }

    public Product() {
    }


    //GETTERS AND SETTERS


    public Long getIdProduct() {
        return idProduct;
    }

    public void setIdProduct(Long idProduct) {
        this.idProduct = idProduct;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Boolean getAvailability() {
        return availability;
    }

    public void setAvailability(Boolean availability) {
        this.availability = availability;
    }

    public String getPolicy() {
        return policy;
    }

    public void setPolicy(String policy) {
        this.policy = policy;
    }

    public Set<Image> getImages() {
        return images;
    }

    public void setImages(Set<Image> images) {
        this.images = images;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public Location getLocations() {
        return locations;
    }

    public void setLocations(Location locations) {
        this.locations = locations;
    }

    public Set<Feature> getFeatures() {
        return features;
    }

    public void setFeatures(Set<Feature> features) {
        this.features = features;
    }

    public Integer getAltitude() {
        return altitude;
    }

    public void setAltitude(Integer altitude) {
        this.altitude = altitude;
    }
}
