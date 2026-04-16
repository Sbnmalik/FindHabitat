package com.findhabitat.interfaces;

import java.util.List;

public interface HouseInterface {
    HouseResponse createHouse(HouseRequest request);
    List<HouseResponse> getAllHouses();
    HouseResponse getHouseById(Long id);
    HouseResponse updateHouse(Long id, HouseRequest request);
    void deleteHouse(Long id);
}
