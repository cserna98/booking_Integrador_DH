package com.ovniric.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

@Entity
@Table(name = "Imagen")
public class Image {

    //COLUMNS
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_imagen")
    private Long idImage;

    @Column(name = "url_imagen")
    private String imageUrl;

    @Column(name = "titulo_imagen")
    private String imageTitle;

    @ManyToOne
    @JoinColumn(name = "producto_id", referencedColumnName = "id_producto")
    @JsonIgnore
    private Product product;

    //CONSTRUCTORS


    public Image(Long idImage, String imageUrl, String imageTitle) {
        this.idImage = idImage;
        this.imageUrl = imageUrl;
        this.imageTitle = imageTitle;
    }

    public Image(String imageUrl, String imageTitle) {
        this.imageUrl = imageUrl;
        this.imageTitle = imageTitle;
    }

    public Image() {
    }

    //GETTERS AND SETTERS


    public Long getIdImage() {
        return idImage;
    }

    public void setIdImage(Long idImage) {
        this.idImage = idImage;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public String getImageTitle() {
        return imageTitle;
    }

    public void setImageTitle(String imageTitle) {
        this.imageTitle = imageTitle;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }
}