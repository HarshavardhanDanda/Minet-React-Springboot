package com.minet.userservice.dto;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class UserDtoTest {


    @Test
    void testUserDtoGettersAndSetters() {
        UserDto userDto = new UserDto();

        int id = 1;
        String name = "John Doe";
        String email = "johndoe@example.com";
        String password = "password";

        userDto.setId(id);
        userDto.setFullName(name);
        userDto.setEmailId(email);
        userDto.setPassword(password);

        assertEquals(id, userDto.getId());
        assertEquals(name, userDto.getFullName());
        assertEquals(email, userDto.getEmailId());
        assertEquals(password, userDto.getPassword());
    }

    @Test
    void testUserDtoNoArgsConstructor() {
        UserDto userDto = new UserDto();

        assertNotNull(userDto);
        assertEquals(0, userDto.getId());
        assertNull(userDto.getFullName());
        assertNull(userDto.getEmailId());
        assertNull(userDto.getPassword());
    }

    @Test
    void testUserDtoAllArgsConstructor() {
        int id = 1;
        String name = "John Doe";
        String email = "johndoe@example.com";
        String password = "password";

        UserDto userDto = new UserDto(id, name, email, password);

        assertNotNull(userDto);
        assertEquals(id, userDto.getId());
        assertEquals(name, userDto.getFullName());
        assertEquals(email, userDto.getEmailId());
        assertEquals(password, userDto.getPassword());
    }
    @Test
    void testUserDtoBuilder() {
        int id = 1;
        String name = "John Doe";
        String email = "johndoe@example.com";
        String password = "password";

        UserDto userDto = UserDto.builder()
                .id(id)
                .fullName(name)
                .emailId(email)
                .password(password)
                .build();

        assertNotNull(userDto);
        assertEquals(id, userDto.getId());
        assertEquals(name, userDto.getFullName());
        assertEquals(email, userDto.getEmailId());
        assertEquals(password, userDto.getPassword());
    }
}
