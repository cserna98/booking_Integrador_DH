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
@Data
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "cliente")

@PrimaryKeyJoinColumn(name = "usuario_id")
public class Client extends User{



    @OneToMany(mappedBy = "clients", fetch = FetchType.LAZY, cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIgnore
    private List<Reservation> reservations = new ArrayList<>();

    public Client(User user) {

    }
}
