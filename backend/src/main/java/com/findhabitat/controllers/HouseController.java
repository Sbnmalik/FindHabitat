package com.findhabitat.controllers;

import com.findhabitat.services.HouseService;
import jakarta.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
    @Override
    public ResponseEntity<MultiResponse<House>> getAll() {
        List<House> houses = this.houseService.getAll();
        MultiResponse<House> multiResponse = new MultiResponse<>(houses);
        return ResponseEntity.ok(multiResponse);
    }
    @Override
    public ResponseEntity<SingleResponse<House>> getOneById(@PathVariable Long id) {
        House house = this.houseService.getOneById(id);
        SingleResponse<House> singleResponse = new SingleResponse<>(house);
        return ResponseEntity.ok(singleResponse);
    }
    @Override
    public ResponseEntity<SingleResponse<House>> createOne(@RequestBody HouseRequest request) {
        House house = this.houseService.createOne(request);
        SingleResponse<House> singleResponse = new SingleResponse<>(house);
        return ResponseEntity.ok(singleResponse);
    }
    @Override
    public ResponseEntity<SingleResponse<House>> updateOneById(@PathVariable Long id, @RequestBody HouseRequest request) {
        House house = this.houseService.updateOneById(id, request);
        SingleResponse<House> singleResponse = new SingleResponse<>(house);
        return ResponseEntity.ok(singleResponse);
    }
}
