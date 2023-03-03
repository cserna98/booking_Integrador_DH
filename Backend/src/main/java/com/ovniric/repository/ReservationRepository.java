package com.ovniric.repository;

import com.ovniric.model.Reservation;
import com.ovniric.model.user.Client;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReservationRepository extends JpaRepository<Reservation,Long> {
//    List<Reservation> findByClient(Client client);
}
