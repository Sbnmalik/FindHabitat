package com.findhabitat.repositories;

import com.findhabitat.entities.House;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HouseRepository extends JpaRepository<House, Long>
{    }
