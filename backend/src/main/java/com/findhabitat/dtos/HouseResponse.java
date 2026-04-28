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

    public long gethouseId() {
        return houseId;
    }
    public void sethouseId(long houseId) {
        this.houseId = houseId;
    }
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
    public LocalDateTime getCreatedAt() {
        return createdAt;
    }
    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }
    public LocalDateTime getUpdatedAt() {
        return updatedAt;
    }
    public void setUpdatedAt(LocalDateTime updatedAt) {
        this.updatedAt = updatedAt;
    }
}
