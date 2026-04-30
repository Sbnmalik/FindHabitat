package com.findhabitat.services;

import com.findhabitat.entities.House;
import com.findhabitat.interfaces.CrudServiceInterface;
import com.findhabitat.interfaces.HouseServiceInterface;
import com.findhabitat.repositories.HouseRepository;

import jakarta.validation.Validation;

import org.springframework.stereotype.Service;
import com.findhabitat.dtos.HouseRequest;
import com.findhabitat.dtos.HouseResponse;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class HouseService implements HouseServiceInterface {

    private final HouseRepository houseRepository;
    

    public HouseService (HouseRepository houseRepository) {
        this.houseRepository = houseRepository;
    }
        @Override
    public House createOne(HouseRequest request) {
        House house = mapToEntity(request);
        House savedHouse = houseRepository.save(house);
        return (savedHouse);
    }

        @Override
    public List<House> getAll() {
        return this.houseRepository.findAllByOrderByIdDesc();
    }

    @Override
    public House getOneById(Long id) {
        return houseRepository.findById(id)
        .orElseThrow(() -> new RuntimeException("House not found with id: " + id));
    }

    @Override
    public House updateOneById(Long id, HouseRequest request) {
        House house = this.getOneById(id);
        house.setCity(request.getCity());

        return houseRepository.save(house);
    }

    @Override
    public void deleteOneById(Long id) {

        House house = this.getOneById(id);
        this.houseRepository.delete(house);
    }




}
