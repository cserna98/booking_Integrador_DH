package com.ovniric.service;

import com.ovniric.dto.ReservationDTO;
import com.ovniric.model.Client;
import com.ovniric.model.Product;
import com.ovniric.model.Reservation;
import com.ovniric.repository.ReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@Service
public class ReservationService {

    @Autowired
    private ReservationRepository reservationRepository;
//    private ProductService productService;
//    private ClientService clientService;
//
//    public List<Reservation> getAllReservations() {
//        return reservationRepository.findAll();
//    }
//
//    public Optional<Reservation> getReservationById(Long id) {
//        return reservationRepository.findById(id);
//    }
//
//    public Reservation createReservation(Reservation reservation) {
//        return reservationRepository.save(reservation);
//    }
//
//    public Reservation updateReservation(Reservation updatedReservation) {
//         return reservationRepository.save(updatedReservation);
//    }
//    public void deleteReservation(Long id) {
//        reservationRepository.deleteById(id);
//    }
//
//
//    public Reservation toReservation(ReservationDTO reservationDTO) {
//        Reservation reservation = new Reservation();
//        Product product = productService.searchProduct(reservationDTO.getProductId()).orElseThrow(() -> new NoSuchElementException("Client not found"));
//        Client client = clientService.getClientByid(reservationDTO.getClientId()).orElseThrow(() -> new NoSuchElementException("Client not found"));
//
//        reservation.setProduct(product);
//        reservation.setClients(client);
//        return reservation;
//    }

}

