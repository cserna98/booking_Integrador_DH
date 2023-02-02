package com.ovniric.model;


import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "Characteristics")
public class Feature {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String title;

    @Column
    private  String description;

    @ManyToMany(mappedBy = "feature")
    private List<Product> products;

    public Feature(Long id, String title, String description, List<Product> products) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.products = products;
    }

    public Feature() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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
}
