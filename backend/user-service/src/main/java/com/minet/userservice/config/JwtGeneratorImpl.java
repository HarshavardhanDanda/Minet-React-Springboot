package com.minet.userservice.config;

import com.minet.userservice.dto.LoginUserDTO;
import org.springframework.stereotype.Service;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Value;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import io.jsonwebtoken.Jwts;
@Service
public class JwtGeneratorImpl implements JwtGeneratorInterface{

    @Value("${jwt.secret}")
    private String secret;

    @Value("${app.jwttoken.message}")
    private String message;

    @Override
    public Map<String, String> generateToken(LoginUserDTO loginUserDTO) {
        String jwtToken="";
        jwtToken = Jwts.builder().setSubject(loginUserDTO.getEmail()).setIssuedAt(new Date()).signWith(SignatureAlgorithm.HS256, "secret").compact();
        Map<String, String> jwtTokenGen = new HashMap<>();
        jwtTokenGen.put("token", jwtToken);
        jwtTokenGen.put("message", message);
        return jwtTokenGen;
    }
}
