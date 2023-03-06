package com.ovniric.service;

import com.ovniric.dto.ReservationDTO;
import com.ovniric.model.user.Client;
import com.ovniric.model.Product;
import com.ovniric.model.Reservation;
import com.ovniric.repository.ReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalTime;
import java.util.List;
import java.util.Optional;

@Service
public class ReservationService {

    @Autowired
    private ReservationRepository reservationRepository;
    private ProductService productService;
    private ClientService clientService;

    public List<Reservation> getAllReservations() {
        return reservationRepository.findAll();
    }

    public Optional<Reservation> getReservationById(Long id) {
        return reservationRepository.findById(id);
    }



    public List<Reservation> getReservationsByClient(Long clientId) {
        return reservationRepository.findByClientId(clientId);
    }

    public List<Reservation> findReservationsByProductId(Long productId) {
        return reservationRepository.findAllByProductId(productId);
    }

    public Reservation createReservation(Reservation reservation) {
        return reservationRepository.save(reservation);
    }

    public Reservation updateReservation(Reservation updatedReservation) {
         return reservationRepository.save(updatedReservation);
    }
    public void deleteReservation(Long id) {
        reservationRepository.deleteById(id);
    }


    public Reservation toReservation(ReservationDTO reservationDTO) {

        Reservation newreservation = new Reservation();
        newreservation.setIdReservation(reservationDTO.getId());
        newreservation.setStartHour(reservationDTO.getStartHour());
        newreservation.setEndDate(reservationDTO.getEndDate());
        newreservation.setStartDate(reservationDTO.getStartDate());
        Client client = new Client();
        Product product= new Product();

        product.setIdProduct(reservationDTO.getProductId());
        client.setId(reservationDTO.getClientId());

        newreservation.setProduct(product);
        newreservation.setClient(client);
        return newreservation;
    }

    public ReservationDTO toReservationDTO(Reservation reservation) {


        ReservationDTO result = new ReservationDTO();

        result.setId(reservation.getIdReservation());
        result.setStartHour(LocalTime.now());
        result.setEndDate(reservation.getEndDate());
        result.setStartDate(reservation.getStartDate());
        result.setClientId(reservation.getClient().getId());
        result.setProductId(reservation.getProduct().getIdProduct());

        return result;

    }

}

