package com.findhabitat.services;

import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import com.findhabitat.entities.AppUser;
import com.findhabitat.repositories.AppUserRepository;

@Service
public class CustomUserDetailsService implements UserDetailsService{
    private final AppUserRepository appUserRepository;

    public CustomUserDetailsService(AppUserRepository appUserRepository) {
        this.appUserRepository = appUserRepository;
    }
    @Override
        public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        AppUser appUser = appUserRepository.findByEmail(email.toLowerCase())
            .orElseThrow(() -> new UsernameNotFoundException("User not found."));

        return User.builder()
            .username(appUser.getEmail())
            .password(appUser.getPassword())
            .roles(appUser.getRole().name())
            .build();
    }
}
