package com.ovniric.controller;

import com.ovniric.dto.ReservationDTO;
import com.ovniric.model.Product;
import com.ovniric.model.Reservation;
import com.ovniric.model.user.Client;
import com.ovniric.repository.ReservationRepository;
import com.ovniric.service.ClientService;
import com.ovniric.service.ProductService;
import com.ovniric.service.ReservationService;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Optional;


@RestController
@CrossOrigin(origins = "*")
@AllArgsConstructor
@RequestMapping("/api/reservaciones")
public class ReservationController {
    private ReservationService reservationService;
    private ClientService clientService;
    private ProductService productService;
    private ReservationRepository reservationRepository;

    @PostMapping
    @Transactional
    public ResponseEntity<ReservationDTO> createReservation(@RequestBody ReservationDTO reservationDTO){
       Reservation reservation = new Reservation();

        Optional<Client> optionalClient = clientService.getClientByid(reservationDTO.getClientId());
        if(optionalClient.isPresent()) {
            Client client = optionalClient.get();
            reservation.setClient(client);
        }

        Optional<Product> optionalProduct = productService.searchProduct(reservationDTO.getProductId());
        if(optionalProduct.isPresent()) {
            Product product = optionalProduct.get();
            reservation.setProduct(product);
        }

        LocalTime startHour =  LocalTime.parse(reservationDTO.getStartHour(), DateTimeFormatter.ofPattern("HH:mm:ss"));
        reservation.setStartHour(startHour);
        reservation.setStartDate(reservationDTO.getStartDate());
        reservation.setEndDate(reservationDTO.getEndDate());

        reservationRepository.save(reservation);

        reservationDTO.setId(reservation.getIdReservation());
        return ResponseEntity.status(HttpStatus.CREATED).body(reservationDTO);
//        ReservationDTO reservation = reservationService.createReservation(reservationDTO);
//        return ResponseEntity.status(HttpStatus.CREATED).body(reservation);
    }


    @GetMapping
    public ResponseEntity<List<Reservation>> getALLReservations(){
        return ResponseEntity.ok(reservationService.getAllReservations());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Reservation> getReservation(@PathVariable Long id) {
        Optional<Reservation> reservationToSearch = reservationService.getReservationById(id);
        if (reservationToSearch.isPresent()) {
            return ResponseEntity.ok(reservationToSearch.get());
        }else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/cliente/{clientId}")
    public ResponseEntity<List<Reservation>> getReservationsByClientId(@PathVariable Long clientId) {
        return ResponseEntity.ok(reservationService.getReservationsByClient(clientId));
    }

    @GetMapping("/producto/{productId}")
    public ResponseEntity<List<Reservation>> getReservationsByProductId(@PathVariable Long productId) {
        return ResponseEntity.ok(reservationService.findReservationsByProductId(productId));
    }

    @PutMapping
    public ResponseEntity<String> updateReservation(@RequestBody Reservation reservation) {
        Optional<Reservation> reservationToSearch = reservationService.getReservationById(reservation.getIdReservation());
        if (reservationToSearch.isPresent()) {
            reservationService.updateReservation(reservation);
            return ResponseEntity.ok("The reservation has been updated");
        }else {
            return ResponseEntity.badRequest().body("The reservation has not been updated because the reservation" +
                    "does not exists on database");
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteReservation(@PathVariable Long id) {
        Optional<Reservation> reservationToSearch = reservationService.getReservationById(id);
        if(reservationToSearch.isPresent()) {
            reservationService.deleteReservation(id);
            return ResponseEntity.ok("The reservation has been deleted");
        }else {
            return ResponseEntity.badRequest().body("The reservation has not been deleted");
        }
    }
}
