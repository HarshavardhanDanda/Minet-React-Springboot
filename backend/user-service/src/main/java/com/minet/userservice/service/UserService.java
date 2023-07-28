package com.minet.userservice.service;

import com.minet.userservice.dto.UserDto;
import com.minet.userservice.entity.User;
import com.minet.userservice.exception.UserNotFoundException;

import java.util.List;

public interface UserService {
    List<UserDto> getAllUsers();

    UserDto getUserById(int id);

    UserDto getUserByEmail(String email);

    UserDto saveUser(User user);

    UserDto editUser(User user, int userId);

    User getUserByEmailAndPassword(String name, String password) throws UserNotFoundException;
}
