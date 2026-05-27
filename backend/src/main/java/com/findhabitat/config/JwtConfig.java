package com.findhabitat.config;

import org.springframework.context.annotation.Configuration;

@Configuration
public class JwtConfig {
    private final JwtProperties jwtProperties;

    public JwtConfig(JwtProperties jwtProperties) {
        this.jwtProperties = jwtProperties;
    }
    
}
