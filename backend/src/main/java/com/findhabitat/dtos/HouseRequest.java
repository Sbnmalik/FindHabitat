package com.findhabitat.dtos;

import jakarta.validation.constraints.*;
import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDate;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class HouseRequest {
    
    @NotBlank(message = "Address line is required")
    @Size(max = 200)
    private String addressLine;

    @NotBlank(message = "City is required")
    @Size(max = 100)
    private String city;

    @Size(max = 20)         
    private String postalCode;

    @NotBlank(message = "Property type is required")
    @Size(max = 50)
    private String propertyType;

    @NotBlank(message = "Ownership status is required")
    @Size(max = 50)
    private String ownershipStatus;

    @PositiveOrZero
    private Integer floorLevel;

    @NotNull
    private Boolean parkingAvailability;

    @Size(max = 2000)
    private String description;

    @NotNull
    @PositiveOrZero
    private Integer bedrooms;

    @NotNull
    @PositiveOrZero
    private Integer bathrooms;

    @FutureOrPresent
    private LocalDate moveInDate;

    @NotNull
    @DecimalMin(value = "0.0", inclusive = true)
    private BigDecimal monthlyPrice;
    
    @DecimalMin(value = "0.0", inclusive = false)
    private BigDecimal livingAreaSqm;

    @Builder.Default
    private Boolean isAvailable = true;

}
