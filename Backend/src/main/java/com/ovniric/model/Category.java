package com.ovniric.model;

import jakarta.persistence.*;

@Entity
@Table(name = "Categoria")
public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_categoria")
    private Long categoryId;

    @Column(name = "titulo")
    private String title;

    @Column(name = "descripcion",length = 500)
    private String description;

    @Column(name = "url_imagen")
    private String urlImage;

    public Category(Long categoryId, String title, String description, String urlImage) {
        this.categoryId = categoryId;
        this.title = title;
        this.description = description;
        this.urlImage = urlImage;
    }

    public Category(String title, String description, String urlImage) {
        this.title = title;
        this.description = description;
        this.urlImage = urlImage;
    }

    public Category() {
    }

    public Long getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(Long categoryId) {
        this.categoryId = categoryId;
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

    public String getUrlImage() {
        return urlImage;
    }

    public void setUrlImage(String urlImage) {
        this.urlImage = urlImage;
    }
}
