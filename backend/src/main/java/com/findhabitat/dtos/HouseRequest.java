package com.findhabitat.dtos;

import jakarta.validation.constraints.*;
import java.math.BigDecimal;
import java.time.LocalDate;
// import lombok.Getter;
// import lombok.Setter;
// use @Getter and @Setter annotations from Lombok to generate getters and setters automatically

import com.fasterxml.jackson.annotation.JsonGetter;

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

    public String getAddressLine() {
        return addressLine;
    }
    public void setAddressLine(String addressLine) {
        this.addressLine = addressLine;
    }
    public String getCity() {
        return city;
    }
    public void setCity(String city) {
        this.city = city;
    }
    public String getPostalCode() {
        return postalCode;
    }
    public void setPostalCode(String postalCode) {
        this.postalCode = postalCode;
    }
    public String getPropertyType() {
        return propertyType;
    }
    public void setPropertyType(String propertyType) {
        this.propertyType = propertyType;
    }
    public String getOwnershipStatus() {
        return ownershipStatus;
    }
    public void setOwnershipStatus(String ownershipStatus) {
        this.ownershipStatus = ownershipStatus;
    }
    public Integer getFloorLevel() {
        return floorLevel;
    }
    public void setFloorLevel(Integer floorLevel) {
        this.floorLevel = floorLevel;
    }
    public Boolean getParkingAvailability() {
        return parkingAvailability;
    }
    public void setParkingAvailability(Boolean parkingAvailability) {
        this.parkingAvailability = parkingAvailability;
    }
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public Integer getBedrooms() {
        return bedrooms;
    }
    public void setBedrooms(Integer bedrooms) {
        this.bedrooms = bedrooms;
    }
    public Integer getBathrooms() {
        return bathrooms;
    }
    public void setBathrooms(Integer bathrooms) {
        this.bathrooms = bathrooms;
    }
    public LocalDate getMoveInDate() {
        return moveInDate;
    }
    public void setMoveInDate(LocalDate moveInDate) {
        this.moveInDate = moveInDate;
    }
    public BigDecimal getMonthlyPrice() {
        return monthlyPrice;
    }   
    public void setMonthlyPrice(BigDecimal monthlyPrice) {
        this.monthlyPrice = monthlyPrice;
    }
    public BigDecimal getLivingAreaSqm() {
        return livingAreaSqm;
    }
    public void setLivingAreaSqm(BigDecimal livingAreaSqm) {
        this.livingAreaSqm = livingAreaSqm;
    }
    public Boolean getIsAvailable() {
        return isAvailable;
    }
    public void setIsAvailable(Boolean isAvailable) {
        this.isAvailable = isAvailable;
    }
}
