package com.minet.userservice.controller;

import com.minet.userservice.config.JwtGeneratorInterface;
import com.minet.userservice.dto.LoginUserDTO;
import com.minet.userservice.entity.User;
import com.minet.userservice.exception.UserNotFoundException;
import com.minet.userservice.service.UserService;
import com.minet.userservice.dto.UserDto;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.modelmapper.ModelMapper;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import java.util.List;

@RestController
@Slf4j
@CrossOrigin(origins = {"http://localhost:4000","https://bc88-fe.fe-assignment.tk"},methods = {RequestMethod.GET,RequestMethod.POST,RequestMethod.DELETE,RequestMethod.PUT,RequestMethod.PATCH})
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private ModelMapper modelMapper;

    @GetMapping
    public List<UserDto> getAllUsers(){
        return userService.getAllUsers();
    }

    @Autowired
    private JwtGeneratorInterface jwtGenerator;

    @GetMapping(params = "id")
    public UserDto getUserById(@RequestParam int id) {
        try {
            log.info(" >>> INSIDE UserController: getting user by email");
            return userService.getUserById(id);
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No user found for the given id: " + id, e);
        }
    }

    @GetMapping(params = "emailId")
    public UserDto getUserByEmail(@RequestParam String emailId) {
        try {
            log.info(" >>> INSIDE UserController: getting user by email");
            return userService.getUserByEmail(emailId);
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No user found for the given email: " + emailId, e);
        }
    }

    @PostMapping("/save")
    public UserDto saveUser(@RequestBody UserDto userDto) {
        try {
            User user = modelMapper.map(userDto, User.class);
            log.info(" >>> INSIDE UserController: adding user");
            return userService.saveUser(user);
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Unable to add user");
        }
    }

    @PatchMapping(params = "id")
    public UserDto editUser(@RequestParam int id, @RequestBody UserDto userDto) {
        try {
            User user = modelMapper.map(userDto, User.class);
            log.info(" >>> INSIDE UserController: patching user");
            return userService.editUser(user, id);
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Unable to add user");
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody LoginUserDTO loginUserDTO) {
        try {
            if(loginUserDTO.getEmail() == null || loginUserDTO.getPassword() == null) {
                throw new UserNotFoundException("UserName or Password is Empty");
            }
            User userData = userService.getUserByEmailAndPassword(loginUserDTO.getEmail(), loginUserDTO.getPassword());
            if(userData == null){
                throw new UserNotFoundException("UserName or Password is Invalid");
            }
            return new ResponseEntity<>(jwtGenerator.generateToken(loginUserDTO), HttpStatus.OK);
        } catch (UserNotFoundException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.CONFLICT);
        }
    }
}

