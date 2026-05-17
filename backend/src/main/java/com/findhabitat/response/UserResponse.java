package com.findhabitat.response;

import com.findhabitat.entities.AppUser;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class UserResponse {

    private final Long id;
    private final String fullName;
    private final String email;
    private final String role;
    
    public static UserResponse fromEntity(AppUser user) {
        return new UserResponse(
            user.getId(),
            user.getFullName(),
            user.getEmail(),
            user.getRole().name()
        );
    }
}
