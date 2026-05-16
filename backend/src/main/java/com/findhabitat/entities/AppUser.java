package com.findhabitat.entities;

import jakarta.persistence.*;

@Entity
@Table(
    name = "app_user",
    uniqueConstraints = {
        @UniqueConstraint(columnNames = "email")
    }
)
public class AppUser {
    
}
