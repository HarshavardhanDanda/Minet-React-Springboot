package com.minet.userservice.service;

import com.minet.userservice.dto.UserDto;
import com.minet.userservice.entity.User;
import com.minet.userservice.exception.UserNotFoundException;
import com.minet.userservice.repository.UserRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.modelmapper.ModelMapper;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.*;

class UserServiceTest {

    @Mock
    private UserRepository userRepository;

    @Mock
    private ModelMapper modelMapper;

    @InjectMocks
    private UserServiceImplementation userService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }


    @Test
    void testGetUserById_ExistingId() {
        int userId = 1;
        User user = new User();
        Optional<User> userOptional = Optional.of(user);
        when(userRepository.findById(userId)).thenReturn(userOptional);
        when(modelMapper.map(user, UserDto.class)).thenReturn(new UserDto());

        UserDto result = userService.getUserById(userId);

        assertEquals(UserDto.class, result.getClass());
        verify(userRepository, times(1)).findById(userId);
        verify(modelMapper, times(1)).map(user, UserDto.class);
    }

    @Test
    void testGetUserById_NonExistingId() {
        int userId = 1;
        when(userRepository.findById(userId)).thenReturn(Optional.empty());

        assertThrows(RuntimeException.class, () -> userService.getUserById(userId));
        verify(userRepository, times(1)).findById(userId);
    }

    @Test
    void testGetUserByEmail_ExistingEmail() {
        String email = "test@example.com";
        User user = new User();
        Optional<User> userOptional = Optional.of(user);
        when(userRepository.findByEmail(email)).thenReturn(userOptional);
        when(modelMapper.map(user, UserDto.class)).thenReturn(new UserDto());
        UserDto result = userService.getUserByEmail(email);

        assertEquals(UserDto.class, result.getClass());
        verify(userRepository, times(1)).findByEmail(email);
        verify(modelMapper, times(1)).map(user, UserDto.class);
    }

    @Test
    void testGetUserByEmail_NonExistingEmail() {
        String email = "test@example.com";
        when(userRepository.findByEmail(email)).thenReturn(Optional.empty());

        assertThrows(RuntimeException.class, () -> userService.getUserByEmail(email));
        verify(userRepository, times(1)).findByEmail(email);
    }

    @Test
    void testSaveUser() {
        User user = new User();
        when(userRepository.save(user)).thenReturn(user);
        when(modelMapper.map(user, UserDto.class)).thenReturn(new UserDto());

        UserDto result = userService.saveUser(user);

        assertEquals(UserDto.class, result.getClass());
        verify(userRepository, times(1)).save(user);
        verify(modelMapper, times(1)).map(user, UserDto.class);
    }

    @Test
    void testEditUser() {
        int userId = 1;
        User user = new User();
        User existingUser = new User();
        when(userRepository.findById(userId)).thenReturn(Optional.of(existingUser));
        when(userRepository.save(existingUser)).thenReturn(existingUser);
        when(modelMapper.map(existingUser, UserDto.class)).thenReturn(new UserDto());

        UserDto result = userService.editUser(user, userId);

        assertEquals(UserDto.class, result.getClass());
        verify(userRepository, times(1)).findById(userId);
        verify(userRepository, times(1)).save(existingUser);
        verify(modelMapper, times(1)).map(existingUser, UserDto.class);
    }

    @Test
    void testGetUserByEmailAndPassword_ValidCredentials() throws UserNotFoundException {
        String email = "test@example.com";
        String password = "password";

        User user = new User();
        user.setId(1);
        user.setEmailId(email);
        user.setPassword(password);

        when(userRepository.findByEmailAndPassword(email, password)).thenReturn(Optional.of(user));

        User result = userService.getUserByEmailAndPassword(email, password);


        assertEquals(user.getId(), result.getId());
        assertEquals(user.getEmailId(), result.getEmailId());
        assertEquals(user.getPassword(), result.getPassword());

        verify(userRepository, times(1)).findByEmailAndPassword(email, password);
    }

    @Test
    void testGetUserByEmailAndPassword_InvalidCredentials() {
        String email = "test@example.com";
        String password = "password";

        when(userRepository.findByEmailAndPassword(email, password)).thenReturn(Optional.empty());

        assertThrows(UserNotFoundException.class, () -> userService.getUserByEmailAndPassword(email, password));

        verify(userRepository, times(1)).findByEmailAndPassword(email, password);
    }
    @Test
    void testGetAllUsers() {
        List<User> users = new ArrayList<>();
        users.add(new User());
        when(userRepository.findAll()).thenReturn(users);
        when(modelMapper.map(any(User.class), eq(UserDto.class))).thenReturn(new UserDto());

        List<UserDto> result = userService.getAllUsers();

        assertEquals(1, result.size());
        verify(userRepository, times(1)).findAll();
        verify(modelMapper, times(1)).map(any(User.class), eq(UserDto.class));
    }
}
