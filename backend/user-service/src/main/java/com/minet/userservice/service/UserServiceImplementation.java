package com.minet.userservice.service;

import com.minet.userservice.dto.UserDto;
import com.minet.userservice.entity.User;
import com.minet.userservice.exception.UserNotFoundException;
import com.minet.userservice.repository.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@Slf4j
public class UserServiceImplementation implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ModelMapper modelMapper;
    @Override
    public List<UserDto> getAllUsers() {
        List<User> users = userRepository.findAll();
        return users.stream()
                .map(user -> modelMapper.map(user, UserDto.class))
                .collect(Collectors.toList());
    }

    @Override
    public UserDto getUserById(int userId) {
        Optional<User> userOptional = userRepository.findById(userId);
        if (userOptional.isEmpty()) {
            throw new UserNotFoundException("The user with given id is not present in the database");
        }
        User user = userOptional.get(); // Extract the User object from Optional

        log.info(String.valueOf(user));
        return modelMapper.map(user, UserDto.class);
    }


    @Override
    public UserDto getUserByEmail(String email) {
        Optional<User> result= userRepository.findByEmail(email);
        if (result.isEmpty()) {
            throw new UserNotFoundException("The user with given email is not present in the database");
        }
        User user = result.orElse(null);
        return modelMapper.map(user, UserDto.class);
    }

    @Override
    @Transactional
    public UserDto saveUser(User user) {
        userRepository.save(user);
        return modelMapper.map(user, UserDto.class);
    }

    @Override
    @Transactional
    public UserDto editUser(User user, int userId) {
        User updatedUser = userRepository.findById(userId).get();
        if(user.getPassword()!=null)
            updatedUser.setPassword(user.getPassword());
        userRepository.save(updatedUser);
        return modelMapper.map(updatedUser, UserDto.class);
    }

    @Override
    public User getUserByEmailAndPassword(String email, String password) throws UserNotFoundException {
        Optional<User> user = userRepository.findByEmailAndPassword(email,password);
        if(user.isEmpty()){
            throw new UserNotFoundException("Invalid email and password");
        }
        return user.get();
    }
}
