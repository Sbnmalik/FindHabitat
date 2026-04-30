package com.findhabitat.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Table(name = "house")

public class House {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long houseId;

    @Column(nullable = false, length = 200)
    private String addressLine;

    @Column(nullable = false, length = 100)
    private String city;

    @Column(length = 20)
    private String postalCode;

    @Column(nullable = false, length = 50)
    private String propertyType;

    @Column(nullable = false, length = 50)
    private String ownershipStatus;

    private Integer floorLevel;

    @Column(nullable = false)
    private Boolean parkingAvailability;

    @Column(length = 2000)
    private String description;

    @Column(nullable = false)
    private Integer bedrooms;

    @Column(nullable = false)
    private Integer bathrooms;

    private LocalDate moveInDate;

    @Column(nullable = false, precision = 10, scale = 2)
    private BigDecimal monthlyPrice;

    @Column(precision = 8, scale = 2)
    private BigDecimal livingAreaSqm;

    @Column(nullable = false)
    private Boolean isAvailable;

    @Column(nullable = false)
    private LocalDateTime createdAt;

    @Column(nullable = false)
    private LocalDateTime updatedAt;

}
