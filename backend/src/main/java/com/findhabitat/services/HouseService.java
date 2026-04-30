package com.findhabitat.services;

import com.findhabitat.entities.House;
import com.findhabitat.interfaces.CrudServiceInterface;
import com.findhabitat.repositories.HouseRepository;
import org.springframework.stereotype.Service;
import com.findhabitat.dtos.HouseRequest;
import com.findhabitat.dtos.HouseResponse;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class HouseService implements CrudServiceInterface {

    private final HouseRepository houseRepository;

    public HouseService (HouseRepository houseRepository) {
        this.houseRepository = houseRepository;
    }
        @Override
    public HouseResponse createHouse(HouseRequest request) {
        House house = mapToEntity(request);
        House savedHouse = houseRepository.save(house);
        return mapToResponse(savedHouse);
    }

        @Override
    public List<HouseResponse> getAllHouses() {
        return houseRepository.findAll()
                .stream()
                .map(this::mapToResponse)
                .collect(Collectors.toList());
    }

    @Override
    public HouseResponse getHouseById(Long id) {
        House house = houseRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("House not found with id: " + id));
        return mapToResponse(house);
    }

    @Override
    public HouseResponse updateHouse(Long id, HouseRequest request) {
        House existingHouse = houseRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("House not found with id: " + id));

        existingHouse.setAddressLine(request.getAddressLine());
        existingHouse.setCity(request.getCity());
        existingHouse.setPostalCode(request.getPostalCode());
        existingHouse.setPropertyType(request.getPropertyType());
        existingHouse.setOwnershipStatus(request.getOwnershipStatus());
        existingHouse.setFloorLevel(request.getFloorLevel());
        existingHouse.setParkingAvailability(request.getParkingAvailability());
        existingHouse.setDescription(request.getDescription());
        existingHouse.setBedrooms(request.getBedrooms());
        existingHouse.setBathrooms(request.getBathrooms());
        existingHouse.setMoveInDate(request.getMoveInDate());
        existingHouse.setMonthlyPrice(request.getMonthlyPrice());
        existingHouse.setLivingAreaSqm(request.getLivingAreaSqm());

        if (request.getIsAvailable() != null) {
            existingHouse.setIsAvailable(request.getIsAvailable());
        }

        House updatedHouse = houseRepository.save(existingHouse);
        return mapToResponse(updatedHouse);
    }

    @Override
    public void deleteHouse(Long id) {
        House house = houseRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("House not found with id: " + id));
        houseRepository.delete(house);
    }

    private House mapToEntity(HouseRequest request) {
        House house = new House();
        house.setAddressLine(request.getAddressLine());
        house.setCity(request.getCity());
        house.setPostalCode(request.getPostalCode());
        house.setPropertyType(request.getPropertyType());
        house.setOwnershipStatus(request.getOwnershipStatus());
        house.setFloorLevel(request.getFloorLevel());
        house.setParkingAvailability(request.getParkingAvailability());
        house.setDescription(request.getDescription());
        house.setBedrooms(request.getBedrooms());
        house.setBathrooms(request.getBathrooms());
        house.setMoveInDate(request.getMoveInDate());
        house.setMonthlyPrice(request.getMonthlyPrice());
        house.setLivingAreaSqm(request.getLivingAreaSqm());
        house.setIsAvailable(request.getIsAvailable());
        return house;
    }

    private HouseResponse mapToResponse(House house) {
        HouseResponse response = new HouseResponse();
        response.sethouseId(house.getHouseId());
        response.setAddressLine(house.getAddressLine());
        response.setCity(house.getCity());
        response.setPostalCode(house.getPostalCode());
        response.setPropertyType(house.getPropertyType());
        response.setOwnershipStatus(house.getOwnershipStatus());
        response.setFloorLevel(house.getFloorLevel());
        response.setParkingAvailability(house.getParkingAvailability());
        response.setDescription(house.getDescription());
        response.setBedrooms(house.getBedrooms());
        response.setBathrooms(house.getBathrooms());
        response.setMoveInDate(house.getMoveInDate());
        response.setMonthlyPrice(house.getMonthlyPrice());
        response.setLivingAreaSqm(house.getLivingAreaSqm());
        response.setIsAvailable(house.getIsAvailable());
        response.setCreatedAt(house.getCreatedAt());
        response.setUpdatedAt(house.getUpdatedAt());
        return response;
    }
}
