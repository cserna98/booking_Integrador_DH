package com.ovniric.controller;

import com.ovniric.dto.ReservationDTO;
import com.ovniric.model.Reservation;
import com.ovniric.model.user.Client;
import com.ovniric.service.ReservationService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "*")
@AllArgsConstructor
@RequestMapping("/api/reservaciones")
public class ReservationController {
    private ReservationService reservationService;

    @PostMapping
    public ResponseEntity<ReservationDTO> createReservation(@RequestBody ReservationDTO reservationDTO){
        return ResponseEntity.ok(reservationService.toReservationDTO(reservationService.createReservation(reservationService.toReservation(reservationDTO))));
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
