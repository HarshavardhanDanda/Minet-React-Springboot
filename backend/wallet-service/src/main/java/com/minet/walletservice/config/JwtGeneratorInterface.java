package com.minet.walletservice.config;
import com.minet.walletservice.dto.LoginUserDTO;

import java.util.Map;

public interface JwtGeneratorInterface {
    Map<String, String> generateToken(LoginUserDTO loginUserDTO);

}

