package com.findhabitat.controllers;

import com.findhabitat.services.HouseService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import com.findhabitat.dtos.HouseRequest;
import com.findhabitat.dtos.HouseResponse;

import java.utils.List;

@RestController
@RequestMapping("/api/houses")
@CrossOrigin(origins = "http://localhost:undefined")
public class HouseController {
    private final HouseService houseService;

    public HouseController(HouseService houseService) {
        this.houseService = houseService;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public HouseResponse createHouse(@Valid @RequestBody HouseRequest request) {
        return houseService.createHouse(request);
    }

    @GetMapping
    public List<HouseResponse> getAllHouses() {
        return houseService.getAllHouses();
    }

    @GetMapping("/{id}")
    public HouseResponse getHouseById(@PathVariable Long id) {
        return houseService.getHouseById(id);
    }

    @PutMapping("/{id}")
    public HouseResponse updateHouse(@PathVariable Long id, @Valid @RequestBody HouseRequest request) {
        return houseService.updateHouse(id, request);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteHouse(@PathVariable Long id) {
        houseService.deleteHouse(id);
    
}
}
