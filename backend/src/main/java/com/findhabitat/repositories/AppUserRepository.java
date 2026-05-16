package com.findhabitat.repositories;

import com.findhabitat.entities.AppUser;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public class AppUserRepository extends JpaRepository<AppUser, Long> {
        
    Optional<AppUser> findByEmail(String email);

    boolean existsByEmail(String email);
}
