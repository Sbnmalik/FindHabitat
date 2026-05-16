package com.findhabitat.dtos;

import com.findhabitat.entities.UserRole;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class RegisterRequest {
    
    public String fullName;
    public String email;
    public String password;
    public UserRole role;
}
