package com.findhabitat.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.security.core.Authentication;

import com.findhabitat.dtos.RegisterRequest;
import com.findhabitat.entities.AppUser;
import com.findhabitat.repositories.AppUserRepository;
import com.findhabitat.response.UserResponse;
import com.findhabitat.services.AuthService;


@RestController
@RequestMapping("/api/auth")
public class AuthController {
        private final AuthService authService;
    private final AppUserRepository appUserRepository;

    public AuthController(AuthService authService, AppUserRepository appUserRepository) {
        this.authService = authService;
        this.appUserRepository = appUserRepository;
    }

    @PostMapping("/register")
    public UserResponse register(@RequestBody RegisterRequest request) {
        return authService.register(request);
    }

    @GetMapping("/me")
    public UserResponse getCurrentUser(Authentication authentication) {
        String email = authentication.getName();

        AppUser user = appUserRepository.findByEmail(email)
            .orElseThrow(() -> new RuntimeException("Authenticated user not found."));

        return UserResponse.fromEntity(user);
    }
}
