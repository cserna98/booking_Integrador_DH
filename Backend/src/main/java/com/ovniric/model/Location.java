package com.ovniric.model;

import jakarta.persistence.*;



@Entity
@Table(name = "location")
public class Location {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String place;

    @Column
    private  double altitude;

    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product product;


    public Location(Long id, String place, double altitude) {
        this.id = id;
        this.place = place;
        this.altitude = altitude;
    }

    public Location() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPlace() {
        return place;
    }

    public void setPlace(String place) {
        this.place = place;
    }

    public double getAltitude() {
        return altitude;
    }

    public void setAltitude(double altitude) {
        this.altitude = altitude;
    }
}
