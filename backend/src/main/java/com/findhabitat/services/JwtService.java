package com.findhabitat.services;

import java.time.Instant;

import org.springframework.security.oauth2.jwt.JwtClaimsSet;
import org.springframework.security.oauth2.jwt.JwtEncoder;
import org.springframework.security.oauth2.jwt.JwtEncoderParameters;
import org.springframework.stereotype.Service;

import org.springframework.security.oauth2.jose.jws.MacAlgorithm;
import org.springframework.security.oauth2.jwt.JwsHeader;

import com.findhabitat.config.JwtProperties;
import com.findhabitat.entities.AppUser;

@Service
public class JwtService {
    private final JwtEncoder jwtEncoder;
    private final JwtProperties jwtProperties;

    public JwtService(JwtEncoder jwtEncoder, JwtProperties jwtProperties) {
        this.jwtEncoder = jwtEncoder;
        this.jwtProperties = jwtProperties;
    }

    public String generateToken(AppUser user) {
        // Implement token generation logic using jwtEncoder and jwtProperties
        Instant now = Instant.now();


        JwtClaimsSet claims = JwtClaimsSet.builder()
                .issuer("findhabitat")
                .issuedAt(now)
                .expiresAt(now.plusSeconds(jwtProperties.expiration()))
                .subject(user.getEmail())
                .claim("userId", user.getId())
                .claim("role", user.getRole().name())
                .build();
        JwsHeader jwsHeader = JwsHeader.with(MacAlgorithm.HS256).build();

        return jwtEncoder
                .encode(JwtEncoderParameters.from(jwsHeader, claims))
                .getTokenValue();    
            
    }
}
