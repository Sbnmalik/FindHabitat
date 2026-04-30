package com.findhabitat.repositories;

import com.findhabitat.entities.House;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface HouseRepository extends JpaRepository<House, Long>
{  // Custom query method to retrieve all houses ordered by ID in descending order
    List<House> findAllByOrderByIdDesc();  }
