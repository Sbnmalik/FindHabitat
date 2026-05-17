package com.findhabitat.services;

import com.findhabitat.dtos.HouseRequest;
import com.findhabitat.entities.House;
import com.findhabitat.repositories.HouseRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class HouseServiceTest {

    @Mock
    private HouseRepository houseRepository;

    @InjectMocks
    private HouseService houseService;

    @Test
    void getAll_shouldReturnHousesOrderedByHouseIdDesc() {
        House house = House.builder()
                .houseId(1L)
                .addressLine("Main Street 10")
                .city("Eindhoven")
                .propertyType("Apartment")
                .ownershipStatus("Owner")
                .parkingAvailability(true)
                .bedrooms(2)
                .bathrooms(1)
                .monthlyPrice(BigDecimal.valueOf(1200.00))
                .isAvailable(true)
                .build();

        when(houseRepository.findAllByOrderByHouseIdDesc()).thenReturn(List.of(house));

        List<House> result = houseService.getAll();

        assertEquals(1, result.size());
        assertEquals(1L, result.get(0).getHouseId());
        assertEquals("Main Street 10", result.get(0).getAddressLine());
        assertEquals("Eindhoven", result.get(0).getCity());

        verify(houseRepository).findAllByOrderByHouseIdDesc();
    }

    @Test
    void createOne_shouldSaveAndReturnHouse() {
        HouseRequest request = createHouseRequest();

        House savedHouse = House.builder()
                .houseId(1L)
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

        when(houseRepository.save(any(House.class))).thenReturn(savedHouse);

        House result = houseService.createOne(request);

        assertEquals(1L, result.getHouseId());
        assertEquals("Main Street 10", result.getAddressLine());
        assertEquals("Eindhoven", result.getCity());
        assertEquals("5611 AA", result.getPostalCode());
        assertEquals("Apartment", result.getPropertyType());
        assertEquals("Owner", result.getOwnershipStatus());
        assertEquals(3, result.getFloorLevel());
        assertTrue(result.getParkingAvailability());
        assertEquals("Nice apartment near the city center", result.getDescription());
        assertEquals(2, result.getBedrooms());
        assertEquals(1, result.getBathrooms());
        assertEquals(LocalDate.of(2026, 6, 1), result.getMoveInDate());
        assertEquals(0, BigDecimal.valueOf(1200.00).compareTo(result.getMonthlyPrice()));
        assertEquals(0, BigDecimal.valueOf(65.50).compareTo(result.getLivingAreaSqm()));
        assertTrue(result.getIsAvailable());

        verify(houseRepository).save(any(House.class));
    }

    @Test
    void getOneById_whenHouseExists_shouldReturnHouse() {
        House house = House.builder()
                .houseId(1L)
                .addressLine("Main Street 10")
                .city("Eindhoven")
                .propertyType("Apartment")
                .ownershipStatus("Owner")
                .parkingAvailability(true)
                .bedrooms(2)
                .bathrooms(1)
                .monthlyPrice(BigDecimal.valueOf(1200.00))
                .isAvailable(true)
                .build();

        when(houseRepository.findById(1L)).thenReturn(Optional.of(house));

        House result = houseService.getOneById(1L);

        assertEquals(1L, result.getHouseId());
        assertEquals("Main Street 10", result.getAddressLine());
        assertEquals("Eindhoven", result.getCity());

        verify(houseRepository).findById(1L);
    }

    @Test
    void getOneById_whenHouseDoesNotExist_shouldThrowRuntimeException() {
        when(houseRepository.findById(99L)).thenReturn(Optional.empty());

        RuntimeException exception = assertThrows(
                RuntimeException.class,
                () -> houseService.getOneById(99L)
        );

        assertEquals("House not found with id: 99", exception.getMessage());

        verify(houseRepository).findById(99L);
    }

    @Test
    void updateOneById_shouldUpdateAndSaveHouse() {
        House existingHouse = House.builder()
                .houseId(1L)
                .addressLine("Old Street 1")
                .city("Old City")
                .postalCode("0000 AA")
                .propertyType("Studio")
                .ownershipStatus("Rent")
                .floorLevel(1)
                .parkingAvailability(false)
                .description("Old description")
                .bedrooms(1)
                .bathrooms(1)
                .moveInDate(LocalDate.of(2026, 1, 1))
                .monthlyPrice(BigDecimal.valueOf(700.00))
                .livingAreaSqm(BigDecimal.valueOf(30.00))
                .isAvailable(false)
                .build();

        HouseRequest request = createHouseRequest();

        when(houseRepository.findById(1L)).thenReturn(Optional.of(existingHouse));
        when(houseRepository.save(existingHouse)).thenReturn(existingHouse);

        House result = houseService.updateOneById(1L, request);

        assertEquals("Main Street 10", result.getAddressLine());
        assertEquals("Eindhoven", result.getCity());
        assertEquals("5611 AA", result.getPostalCode());
        assertEquals("Apartment", result.getPropertyType());
        assertEquals("Owner", result.getOwnershipStatus());
        assertEquals(3, result.getFloorLevel());
        assertTrue(result.getParkingAvailability());
        assertEquals("Nice apartment near the city center", result.getDescription());
        assertEquals(2, result.getBedrooms());
        assertEquals(1, result.getBathrooms());
        assertEquals(LocalDate.of(2026, 6, 1), result.getMoveInDate());
        assertEquals(0, BigDecimal.valueOf(1200.00).compareTo(result.getMonthlyPrice()));
        assertEquals(0, BigDecimal.valueOf(65.50).compareTo(result.getLivingAreaSqm()));
        assertTrue(result.getIsAvailable());

        verify(houseRepository).findById(1L);
        verify(houseRepository).save(existingHouse);
    }

    @Test
    void deleteOneById_shouldDeleteHouse() {
        House house = House.builder()
                .houseId(1L)
                .addressLine("Main Street 10")
                .city("Eindhoven")
                .propertyType("Apartment")
                .ownershipStatus("Owner")
                .parkingAvailability(true)
                .bedrooms(2)
                .bathrooms(1)
                .monthlyPrice(BigDecimal.valueOf(1200.00))
                .isAvailable(true)
                .build();

        when(houseRepository.findById(1L)).thenReturn(Optional.of(house));

        houseService.deleteOneById(1L);

        verify(houseRepository).findById(1L);
        verify(houseRepository).delete(house);
    }

    private HouseRequest createHouseRequest() {
        return HouseRequest.builder()
                .addressLine("Main Street 10")
                .city("Eindhoven")
                .postalCode("5611 AA")
                .propertyType("Apartment")
                .ownershipStatus("Owner")
                .floorLevel(3)
                .parkingAvailability(true)
                .description("Nice apartment near the city center")
                .bedrooms(2)
                .bathrooms(1)
                .moveInDate(LocalDate.of(2026, 6, 1))
                .monthlyPrice(BigDecimal.valueOf(1200.00))
                .livingAreaSqm(BigDecimal.valueOf(65.50))
                .isAvailable(true)
                .build();
    }
}