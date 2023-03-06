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

    public ReservationDTO createReservation(ReservationDTO reservationDTO) {
        Reservation reservationToCreate = reservationRepository.save(toReservation(reservationDTO));
        return toReservationDTO(reservationToCreate);
    }

    public Reservation updateReservation(Reservation updatedReservation) {
         return reservationRepository.save(updatedReservation);
    }
    public void deleteReservation(Long id) {
        reservationRepository.deleteById(id);
    }


    public Reservation toReservation(ReservationDTO reservationDTO) {

        Client client = new Client();
        client.setIdClient(reservationDTO.getClientId());
        Product product= new Product();
        product.setIdProduct(reservationDTO.getProductId());

        Reservation result = new Reservation();
        result.setIdReservation(reservationDTO.getId());
        result.setStartHour(reservationDTO.getStartHour());
        result.setEndDate(reservationDTO.getEndDate());
        result.setStartDate(reservationDTO.getStartDate());
        result.setProduct(product);
        result.setClient(client);
        return result;
    }

    public ReservationDTO toReservationDTO(Reservation reservation) {

        ReservationDTO result = new ReservationDTO();

        result.setId(reservation.getIdReservation());
        result.setStartHour(reservation.getStartHour());
        result.setEndDate(reservation.getEndDate());
        result.setStartDate(reservation.getStartDate());
        result.setClientId(reservation.getClient().getIdClient());
        result.setProductId(reservation.getProduct().getIdProduct());

        return result;

    }

}

