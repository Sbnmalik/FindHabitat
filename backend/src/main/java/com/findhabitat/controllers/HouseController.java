package com.findhabitat.controllers;

import com.findhabitat.services.HouseService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import com.findhabitat.dtos.HouseRequest;


import java.util.List;

@RestController
@RequestMapping("/api/houses")
public class HouseController implements CrudControllerInterface<House, HouseRequest> {
    
    private final HouseService houseService;

    public HouseController(HouseService houseService) {
        this.houseService = houseService;
    }
}
