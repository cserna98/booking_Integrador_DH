package com.ovniric.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "clientes")
@PrimaryKeyJoinColumn(name = "usuario_id")
public class Client extends User{



    @OneToMany(mappedBy = "clients", fetch = FetchType.LAZY, cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIgnore
    private List<Reservation> reservations = new ArrayList<>();

    public Client(String firstName, String lastName, String email, String password, String city, Role role, List<Reservation> reservations) {
        super(firstName, lastName, email, password, city, role);
        this.reservations = reservations;
    }

    public Client(Long id, String firstName, String lastName, String email, String password, String city, Role role,  List<Reservation> reservations) {
        super(firstName, lastName, email, password, city, role);
        this.reservations = reservations;
    }

    public Client() {
    }


    public Client(User user) {

    }
}
