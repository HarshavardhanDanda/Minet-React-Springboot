package com.minet.portfolioservice.config;
import com.minet.portfolioservice.dto.LoginUserDTO;

import java.util.Map;

public interface JwtGeneratorInterface {
    Map<String, String> generateToken(LoginUserDTO loginUserDTO);

}

