package com.ovniric.model.user;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.ovniric.model.Reservation;
import com.ovniric.model.user.Role;
import com.ovniric.model.user.RoleEnum;
import com.ovniric.model.user.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "cliente")
public class Client extends User{

    @OneToMany(mappedBy = "id", fetch = FetchType.LAZY, cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIgnore
    private List<Reservation> reservations = new ArrayList<>();

    public Client() {
    }

    public Client(List<Reservation> reservations) {
        this.reservations = reservations;
    }

    public Client(Long id, String firstname, String lastname, String email, String password, String city, RoleEnum roleEnum, Role role, List<Reservation> reservations) {
        super(id, firstname, lastname, email, password, city, roleEnum, role);
        this.reservations = reservations;
    }

    public List<Reservation> getReservations() {
        return reservations;
    }

    public void setReservations(List<Reservation> reservations) {
        this.reservations = reservations;
    }
}
