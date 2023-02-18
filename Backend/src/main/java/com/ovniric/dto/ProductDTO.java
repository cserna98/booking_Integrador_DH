package com.ovniric.dto;

import java.util.Set;

public class ProductDTO {

    private Long id;
    private String title;
    private Long categoryId;
    private Long locationId;
    private Integer altitude;
    private Set<Long> imageId;
    private Set<Long> featureId;
    private String description;
    private Boolean availability;
    private String policy;

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

    public Long getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(Long categoryId) {
        this.categoryId = categoryId;
    }

    public Long getLocationId() {
        return locationId;
    }

    public void setLocationId(Long locationId) {
        this.locationId = locationId;
    }

    public Integer getAltitude() {
        return altitude;
    }

    public void setAltitude(Integer altitude) {
        this.altitude = altitude;
    }

    public Set<Long> getImageId() {
        return imageId;
    }

    public void setImageId(Set<Long> imageId) {
        this.imageId = imageId;
    }

    public Set<Long> getFeatureId() {
        return featureId;
    }

    public void setFeatureId(Set<Long> featureId) {
        this.featureId = featureId;
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
}
