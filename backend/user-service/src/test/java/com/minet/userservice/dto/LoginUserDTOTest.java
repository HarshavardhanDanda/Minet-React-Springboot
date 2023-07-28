package com.minet.userservice.dto;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;
import static org.junit.jupiter.api.Assertions.assertEquals;


class LoginUserDTOTest {

    @Test
    void testUserDtoBuilder() {
        int id = 1;
        String email = "johndoe@example.com";
        String password = "password";

        LoginUserDTO userDto = LoginUserDTO.builder()
                .email(email)
                .password(password)
                .build();

        assertNotNull(userDto);
        assertEquals(email, userDto.getEmail());
        assertEquals(password, userDto.getPassword());
    }

    @Test
    void testUserDtoGettersAndSetters() {
        LoginUserDTO userDto = new LoginUserDTO();

        int id = 1;
        String email = "johndoe@example.com";
        String password = "password";

        userDto.setEmail(email);
        userDto.setPassword(password);

        assertEquals(email, userDto.getEmail());
        assertEquals(password, userDto.getPassword());
    }

    @Test
    void testUserDtoNoArgsConstructor() {
        LoginUserDTO userDto = new LoginUserDTO();

        assertNotNull(userDto);
        assertNull(userDto.getEmail());
        assertNull(userDto.getPassword());
    }

    @Test
    void testUserDtoAllArgsConstructor() {
        String email = "johndoe@example.com";
        String password = "password";

        LoginUserDTO userDto = new LoginUserDTO(email, password);

        assertNotNull(userDto);
        assertEquals(email, userDto.getEmail());
        assertEquals(password, userDto.getPassword());
    }
}
