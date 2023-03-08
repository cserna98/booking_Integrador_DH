package com.ovniric.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalTime;

@Data
@Builder
@AllArgsConstructor
public class ReservationDTO {


    private Long id;
    private String startHour;
    private LocalDate startDate;
    private LocalDate endDate;
    private Long productId;
    private Long clientId;
<<<<<<< HEAD
=======


    public ReservationDTO() {
    }

>>>>>>> bea29f098bab9376951adbb3f185042ecd8a4701
}