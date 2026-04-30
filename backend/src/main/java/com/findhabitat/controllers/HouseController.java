package com.findhabitat.controllers;

import com.findhabitat.services.HouseService;
import jakarta.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import com.findhabitat.dtos.HouseRequest;
import com.findhabitat.entities.House;
import com.findhabitat.interfaces.CrudControllerInterface;
import com.findhabitat.interfaces.HouseServiceInterface;
import com.findhabitat.response.SingleResponse;
import com.findhabitat.response.MultiResponse;

import java.util.List;

@RestController
@RequestMapping("/api/houses")
public class HouseController implements CrudControllerInterface<House, HouseRequest> {

    private final HouseService houseService;

    public HouseController(@Autowired HouseServiceInterface houseService) {
        this.houseService = houseService;
    }
}
