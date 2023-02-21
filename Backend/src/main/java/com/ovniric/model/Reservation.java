package com.ovniric.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.ovniric.model.user.Client;
import jakarta.persistence.*;

import java.time.LocalDate;
import java.time.LocalTime;

@Entity
@Table(name = "reservas")
public class Reservation {

    // ATRIBUTOS
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "hora_comienzo")
    private LocalTime startHour;

    @Column(name = "fecha_inicio")
    private LocalDate startDate;

    @Column(name = "fecha_fin")
    private LocalDate endDate;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "producto_id", referencedColumnName = "id_Producto")
    @JsonIgnore
    private Product product;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "usuario_id", referencedColumnName = "id")
    private Client clients;

    // CONSTRUCTORES
    public Reservation() {}

    public Reservation(Long id, LocalTime startHour, LocalDate startDate, LocalDate endDate, Product product, Client clients) {
        this.id = id;
        this.startHour = startHour;
        this.startDate = startDate;
        this.endDate = endDate;
        this.product = product;
        this.clients = clients;
    }

    public Reservation(LocalTime startHour, LocalDate startDate, LocalDate endDate, Product product, Client clients) {
        this.startHour = startHour;
        this.startDate = startDate;
        this.endDate = endDate;
        this.product = product;
        this.clients = clients;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalTime getStartHour() {
        return startHour;
    }

    public void setStartHour(LocalTime startHour) {
        this.startHour = startHour;
    }

    public LocalDate getStartDate() {
        return startDate;
    }

    public void setStartDate(LocalDate startDate) {
        this.startDate = startDate;
    }

    public LocalDate getEndDate() {
        return endDate;
    }

    public void setEndDate(LocalDate endDate) {
        this.endDate = endDate;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public Client getClients() {
        return clients;
    }

    public void setClients(Client clients) {
        this.clients = clients;
    }

    // GETTERS Y SETTERS
    // ...
}
