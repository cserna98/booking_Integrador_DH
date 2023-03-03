package com.ovniric.repository;

import com.ovniric.model.Reservation;
import com.ovniric.model.user.Client;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ClientRepository extends JpaRepository<Client,Long>{
    Client findByEmail(String email);
}
