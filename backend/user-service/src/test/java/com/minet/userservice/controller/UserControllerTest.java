package com.minet.userservice.controller;

import com.minet.userservice.config.JwtGeneratorInterface;
import com.minet.userservice.dto.LoginUserDTO;
import com.minet.userservice.dto.UserDto;
import com.minet.userservice.entity.User;
import com.minet.userservice.service.UserService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.server.ResponseStatusException;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

class UserControllerTest {

    @Mock
    private UserService userService;

    @Mock
    private ModelMapper modelMapper;

    @InjectMocks
    private UserController userController;

    @Mock
    private JwtGeneratorInterface jwtGenerator;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testGetAllUsers() {
        List<UserDto> expectedUsers = Arrays.asList(new UserDto(), new UserDto());

        when(userService.getAllUsers()).thenReturn(expectedUsers);

        List<UserDto> actualUsers = userController.getAllUsers();

        assertEquals(expectedUsers, actualUsers);
        verify(userService, times(1)).getAllUsers();
    }


    @Test
    void testGetUserById_NotFound() {
        int id = 1;

        when(userService.getUserById(id)).thenThrow(new ResponseStatusException(HttpStatus.NOT_FOUND));

        try {
            userController.getUserById(id);
        } catch (ResponseStatusException ex) {
            assertEquals(HttpStatus.NOT_FOUND, ex.getStatus());
            verify(userService, times(1)).getUserById(id);
        }
    }
    @Test
    void testGetUserById() {
        int id = 1;
        UserDto expectedUser = new UserDto();

        when(userService.getUserById(id)).thenReturn(expectedUser);

        UserDto actualUser = userController.getUserById(id);

        assertEquals(expectedUser, actualUser);
        verify(userService, times(1)).getUserById(id);
    }

    @Test
    void testGetUserByEmail() {
        String email = "test@example.com";
        UserDto expectedUser = new UserDto();

        when(userService.getUserByEmail(email)).thenReturn(expectedUser);

        UserDto actualUser = userController.getUserByEmail(email);

        assertEquals(expectedUser, actualUser);
        verify(userService, times(1)).getUserByEmail(email);
    }


    @Test
    void testSaveUser() {
        UserDto userDto = new UserDto();
        User expectedUser = new User();

        when(modelMapper.map(userDto, User.class)).thenReturn(expectedUser);
        when(userService.saveUser(expectedUser)).thenReturn(userDto);

        UserDto actualUser = userController.saveUser(userDto);

        assertEquals(userDto, actualUser);
        verify(userService, times(1)).saveUser(expectedUser);
    }

    @Test
    void testGetUserByEmail_NotFound() {
        String email = "test@example.com";

        when(userService.getUserByEmail(email)).thenThrow(new ResponseStatusException(HttpStatus.NOT_FOUND));

        try {
            userController.getUserByEmail(email);
        } catch (ResponseStatusException ex) {
            assertEquals(HttpStatus.NOT_FOUND, ex.getStatus());
            verify(userService, times(1)).getUserByEmail(email);
        }
    }

    @Test
    void testSaveUser_BadRequest() {
        UserDto userDto = new UserDto();

        when(modelMapper.map(userDto, User.class)).thenReturn(null);

        try {
            userController.saveUser(userDto);
        } catch (ResponseStatusException ex) {
            assertEquals(HttpStatus.BAD_REQUEST, ex.getStatus());
            verify(userService, times(0)).saveUser(any());
        }
    }

    @Test
    void testEditUser() {
        int id = 1;
        UserDto userDto = new UserDto();
        User expectedUser = new User();

        when(modelMapper.map(userDto, User.class)).thenReturn(expectedUser);
        when(userService.editUser(expectedUser, id)).thenReturn(userDto);

        UserDto actualUser = userController.editUser(id, userDto);

        assertEquals(userDto, actualUser);
        verify(userService, times(1)).editUser(expectedUser, id);
    }

    @Test
    void testEditUser_BadRequest() {
        int id = 1;
        UserDto userDto = new UserDto();

        when(modelMapper.map(userDto, User.class)).thenReturn(null);

        try {
            userController.editUser(id, userDto);
        } catch (ResponseStatusException ex) {
            assertEquals(HttpStatus.BAD_REQUEST, ex.getStatus());
            verify(userService, times(0)).editUser(any(), anyInt());
        }
    }

    @Test
    void testEditUser_ExceptionThrown() {
        int id = 1;
        UserDto userDto = new UserDto();

        when(modelMapper.map(userDto, User.class)).thenReturn(new User());
        when(userService.editUser(any(User.class), anyInt())).thenThrow(new RuntimeException("Some error occurred."));

        try {
            userController.editUser(id, userDto);
        } catch (ResponseStatusException ex) {
            assertEquals(HttpStatus.BAD_REQUEST, ex.getStatus());
            assertEquals("Unable to add user", ex.getReason());
            verify(userService, times(1)).editUser(any(User.class), anyInt());
        }
    }

    @Test
    void testSaveUser_ExceptionThrown() {
        UserDto userDto = new UserDto();

        when(modelMapper.map(userDto, User.class)).thenReturn(new User());
        when(userService.saveUser(any(User.class))).thenThrow(new RuntimeException("Some error occurred."));

        try {
            userController.saveUser(userDto);
        } catch (ResponseStatusException ex) {
            assertEquals(HttpStatus.BAD_REQUEST, ex.getStatus());
            assertEquals("Unable to add user", ex.getReason());
            verify(userService, times(1)).saveUser(any(User.class));
        }
    }

    @Test
    void testLoginUser_EmptyUsernameOrPassword() {
        LoginUserDTO loginUserDTO = new LoginUserDTO();
        loginUserDTO.setEmail(null);
        loginUserDTO.setPassword(null);

        ResponseEntity<?> response = userController.loginUser(loginUserDTO);

        assertEquals(HttpStatus.CONFLICT, response.getStatusCode());
        assertEquals("UserName or Password is Empty", response.getBody());
        verify(userService, never()).getUserByEmailAndPassword(anyString(), anyString());
        verify(jwtGenerator, never()).generateToken(any(LoginUserDTO.class));
    }

    @Test
    void testLoginUser_InvalidUsernameOrPassword() {
        LoginUserDTO loginUserDTO = new LoginUserDTO();
        loginUserDTO.setEmail("test@example.com");
        loginUserDTO.setPassword("password");

        when(userService.getUserByEmailAndPassword(loginUserDTO.getEmail(), loginUserDTO.getPassword())).thenReturn(null);

        ResponseEntity<?> response = userController.loginUser(loginUserDTO);

        assertEquals(HttpStatus.CONFLICT, response.getStatusCode());
        assertEquals("UserName or Password is Invalid", response.getBody());
        verify(userService, times(1)).getUserByEmailAndPassword(loginUserDTO.getEmail(), loginUserDTO.getPassword());
        verify(jwtGenerator, never()).generateToken(any(LoginUserDTO.class));
    }

}
