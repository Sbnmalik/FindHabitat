package com.findhabitat.dtos;

import java.time.LocalDate;
import java.math.BigDecimal;
import java.time.LocalDateTime;

public class HouseResponse {
    private Long houseId;
    private String addressLine;
    private String city;
    private String postalCode;
    private String propertyType;
    private String ownershipStatus;
    private Integer floorLevel;
    private Boolean parkingAvailability;
    private String description;
    private Integer bedrooms;
    private Integer bathrooms;
    private LocalDate moveInDate;
    private BigDecimal monthlyPrice;
    private BigDecimal livingAreaSqm;
    private Boolean isAvailable;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
