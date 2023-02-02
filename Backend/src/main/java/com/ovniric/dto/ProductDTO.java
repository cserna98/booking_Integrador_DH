package com.ovniric.dto;

import com.ovniric.model.Feature;

import java.util.List;

public class ProductDTO {

    private long id;

    private String name;

    private  String description;

    private List<Long> featureId;

    private List<Long> imgId;

    private Long categoryId;


    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<Long> getFeatureId() {
        return featureId;
    }

    public void setFeatureId(List<Long> featureId) {
        this.featureId = featureId;
    }

    public List<Long> getImgId() {
        return imgId;
    }

    public void setImgId(List<Long> imgId) {
        this.imgId = imgId;
    }

    public Long getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(Long categoryId) {
        this.categoryId = categoryId;
    }
}
