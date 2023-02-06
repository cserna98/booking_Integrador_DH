package com.ovniric.controller;

import com.ovniric.model.Feature;
import com.ovniric.model.Location;
import com.ovniric.service.LocationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/localizaciones")
public class LocationController {

    private LocationService locationService;

    @Autowired
    public LocationController(LocationService locationService) {
        this.locationService = locationService;
    }

    @GetMapping
    ResponseEntity<List<Location>> searchAllLocations() {
        return ResponseEntity.ok(locationService.searchAllLocations());
    }

    @GetMapping("/id/{id}")
    ResponseEntity<Location> searchLocationById(@PathVariable Long id) {
        Optional<Location> locationToSearch = locationService.searchLocation(id);
        if (locationToSearch.isPresent()) {
            return ResponseEntity.ok(locationToSearch.get());
        } else {
            return ResponseEntity.badRequest().build();
        }
    }

    @GetMapping("/place/{place}")
    ResponseEntity<Location> searchLocationByPlace(@PathVariable String place) {
        Optional<Location> locationToSearch = locationService.searchLocationByPlace(place);
        if (locationToSearch.isPresent()) {
            return ResponseEntity.ok(locationToSearch.get());
        } else {
            return ResponseEntity.badRequest().build();
        }
    }

























}
