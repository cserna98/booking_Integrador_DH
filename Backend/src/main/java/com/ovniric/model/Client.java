package com.ovniric.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.ovniric.model.user.Role;
import com.ovniric.model.user.RoleEnum;
import com.ovniric.model.user.User;
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

    public Client(Long id, String firstname, String lastname, String email, String password, String city, RoleEnum roleEnum, Role role, List<Reservation> reservations) {
        super(id, firstname, lastname, email, password, city, roleEnum, role);
        this.reservations = reservations;
    }

    public Client() {
    }


    public Client(User user) {

    }
}
