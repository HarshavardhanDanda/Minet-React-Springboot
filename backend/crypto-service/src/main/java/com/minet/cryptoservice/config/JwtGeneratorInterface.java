package com.minet.cryptoservice.config;
import com.minet.cryptoservice.dto.LoginUserDTO;

import java.util.Map;

public interface JwtGeneratorInterface {
    Map<String, String> generateToken(LoginUserDTO loginUserDTO);

}

