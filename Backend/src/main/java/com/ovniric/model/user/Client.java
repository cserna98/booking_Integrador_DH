package com.ovniric.model.user;

import com.ovniric.model.Reservation;
import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "cliente")
public class Client extends User{

    @OneToMany(mappedBy = "idReservation", fetch = FetchType.LAZY, cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Reservation> reservations = new ArrayList<>();


    public Client(List<Reservation> reservations) {
        this.reservations = reservations;
    }

    public Client(Long id, String firstname, String lastname, String email, String password, String city, RoleEnum roleEnum, Role role, List<Reservation> reservations) {
        super(id, firstname, lastname, email, password, city, roleEnum, role);
        this.reservations = reservations;
    }

    public Client(){

    }

    public List<Reservation> getReservations() {
        return reservations;
    }

    public void setReservations(List<Reservation> reservations) {
        this.reservations = reservations;
    }
}
