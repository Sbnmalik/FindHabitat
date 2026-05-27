package com.findhabitat.dtos;

import com.findhabitat.entities.UserRole;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class RegisterRequest {
    
    @NotBlank(message = "Full name is required")
    public String fullName;
    @NotBlank(message = "Email is required")
    public String email;
    @NotBlank(message = "Password is required")
    @Size(min = 6, message = "Password must be at least 6 characters long")
    public String password;
    public UserRole role;
}
