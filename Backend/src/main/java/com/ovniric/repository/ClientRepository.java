package com.ovniric.repository;

import com.ovniric.model.Client;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClientRepository extends JpaRepository<Client,Long>{
    Client findByEmail(String email);
}
