package com.findhabitat.services;

import com.findhabitat.entities.House;
import com.findhabitat.interfaces.HouseServiceInterface;
import com.findhabitat.repositories.HouseRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import com.findhabitat.dtos.HouseRequest;
import java.util.List;

@Service
@RequiredArgsConstructor
public class HouseService implements HouseServiceInterface {

    private final HouseRepository houseRepository;

    @Override
    public List<House> getAll() {
        return this.houseRepository.findAllByOrderByHouseIdDesc();
    }

    @Override
    public House createOne(HouseRequest request) {
        House house = mapToHouse(request);
        return houseRepository.save(house);
    }

    @Override
    public House getOneById(Long id) {
        return houseRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("House not found with id: " + id));
    }

    @Override
    public House updateOneById(Long id, HouseRequest request) {
        House house = this.getOneById(id);
        
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

        return houseRepository.save(house);
    }

    @Override
    public void deleteOneById(Long id) {

        House house = this.getOneById(id);
        this.houseRepository.delete(house);
    }
    private House mapToHouse(HouseRequest request) {
        return House.builder()
            .addressLine(request.getAddressLine())
            .city(request.getCity())
            .postalCode(request.getPostalCode())
            .propertyType(request.getPropertyType())
            .ownershipStatus(request.getOwnershipStatus())
            .floorLevel(request.getFloorLevel())
            .parkingAvailability(request.getParkingAvailability())
            .description(request.getDescription())
            .bedrooms(request.getBedrooms())
            .bathrooms(request.getBathrooms())
            .moveInDate(request.getMoveInDate())
            .monthlyPrice(request.getMonthlyPrice())
            .livingAreaSqm(request.getLivingAreaSqm())
            .isAvailable(request.getIsAvailable())            
            .build();
    }
}
