package com.minet.userservice.config;
import com.minet.userservice.dto.LoginUserDTO;

import java.util.Map;

public interface JwtGeneratorInterface {
    Map<String, String> generateToken(LoginUserDTO loginUserDTO);

}

