package com.findhabitat.dtos;

import jakarta.validation.constraints.*;
import java.math.BigDecimal;
import java.time.LocalDate;

public class HouseRequest {
    
    @NotBlank
    @Size(max = 200)
    private String addressLine;

    @NotBlank
    @Size(max = 100)
    private String city;

    @Size(max = 20)         
    private String postalCode;

    @NotBlank
    @Size(max = 50)
    private String propertyType;

    @NotBlank
    @Size(max = 50)
    private String ownershipStatus;

    @Min(0)
    private Integer floorLevel;

    @NotNull
    private Boolean parkingAvailability;

    @Size(max = 2000)
    private String description;

    @NotNull
    @Min(0)
    private Integer bedrooms;

    @NotNull
    @Min(0)
    private Integer bathrooms;

    private LocalDate moveInDate;

    @NotNull
    @DecimalMin(value = "0.0", inclusive = true)
    private BigDecimal monthlyPrice;
    
    @DecimalMin(value = "0.0", inclusive = false)
    private BigDecimal livingAreaSqm;

    private Boolean isAvailable;

}
