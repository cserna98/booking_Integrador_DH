package com.ovniric.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "Producto")
public class Product {
    //COLUMNS
    @Id
    @Column(name = "id_producto")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idProduct;

    @Column(name = "nombre")
    private String name;

    @Column(name = "disponibilidad")
    private Boolean availability;

    @Column(name = "politica", length = 500)
    private String policy;

    //JOINS

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "product_id")
    private List<Image> images;

    //CONSTRUCTORS

    public Product(Long idProduct, String name, Boolean availability, String policy) {
        this.idProduct = idProduct;
        this.name = name;
        this.availability = availability;
        this.policy = policy;
    }

    public Product(String name, Boolean availability, String policy) {
        this.name = name;
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

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
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
}
