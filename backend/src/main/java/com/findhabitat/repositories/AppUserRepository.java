package com.findhabitat.repositories;

import com.findhabitat.entities.AppUser;
import org.springframework.data.jpa.repository.JpaRepository;

public class AppUserRepository extends JpaRepository<AppUser, Long> {
    
}
