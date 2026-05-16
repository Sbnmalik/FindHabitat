package com.findhabitat.services;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.findhabitat.dtos.RegisterRequest;
import com.findhabitat.repositories.AppUserRepository;
import com.findhabitat.response.UserResponse;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final AppUserRepository appUserRepository;
    private final PasswordEncoder passwordEncoder;

    public UserResponse register(RegisterRequest request) {
        String fullName = requireText(request.getFullName(), "Full name is required.");
        String email = normalizeEmail(request.getEmail());
        String password = requireText(request.getPassword(), "Password is required.");

        if (appUserRepository.existsByEmail(email)) {
            throw new IllegalArgumentException("Email is already registered.");
        }
}
