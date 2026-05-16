package com.findhabitat.services;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.findhabitat.repositories.AppUserRepository;

@Service
public class AuthService {
    
    private final AppUserRepository appUserRepository;
    private final PasswordEncoder passwordEncoder;
}
