package com.findhabitat.interfaces;

import com.findhabitat.dtos.HouseRequest;
import com.findhabitat.dtos.HouseResponse;
import java.util.List;

public interface HouseInterface {
    HouseResponse createHouse(HouseRequest request);
    List<HouseResponse> getAllHouses();
    HouseResponse getHouseById(Long id);
    HouseResponse updateHouse(Long id, HouseRequest request);
    void deleteHouse(Long id);
}
