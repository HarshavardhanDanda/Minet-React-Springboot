package com.minet.userservice.entity;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import javax.validation.ConstraintViolation;
import javax.validation.Validation;
import javax.validation.Validator;
import javax.validation.ValidatorFactory;
import java.util.Set;

import static org.junit.jupiter.api.Assertions.*;


class UserTest {

    private Validator validator;

    @BeforeEach
    void setUp() {
        ValidatorFactory factory = Validation.buildDefaultValidatorFactory();
        validator = factory.getValidator();
    }

    @Test
    void testUserValidation_Success() {
        // Arrange
        User user = new User();
        user.setFullName("John Doe");
        user.setEmailId("johndoe@gmail.com");
        user.setPassword("password");

        Set<ConstraintViolation<User>> violations = validator.validate(user);

        assertTrue(violations.isEmpty());
    }

    @Test
    void testUserValidation_NameEmpty() {
        // Arrange
        User user = new User();
        user.setFullName(""); // Setting the name to empty string
        user.setEmailId("johndoe@gmail.com");
        user.setPassword("password");

        // Act
        Set<ConstraintViolation<User>> violations = validator.validate(user);

        // Assert
        assertEquals(1, violations.size());
        assertEquals("name cannot be empty!!", violations.iterator().next().getMessage());
    }

    @Test
    void testUserValidation_EmailInvalid() {
        // Arrange
        User user = new User();
        user.setFullName("John Doe");
        user.setEmailId(""); // Setting the email to an empty string
        user.setPassword("password");

        Set<ConstraintViolation<User>> violations = validator.validate(user);

        assertEquals(1, violations.size());
        assertEquals("email cannot be empty!!", violations.iterator().next().getMessage());
    }

    @Test
    void testUserValidation_PasswordNull() {
        // Arrange
        User user = new User();
        user.setFullName("John Doe");
        user.setEmailId("johndoe@gmail.com");
        user.setPassword(null); // Setting the password to null

        Set<ConstraintViolation<User>> violations = validator.validate(user);

        assertEquals(2, violations.size());
        boolean violationMessageFound = false;
        for (ConstraintViolation<User> violation : violations) {
            String violationMessage = violation.getMessage();
            if (violationMessage.equals("password cannot be empty!!") || violationMessage.equals("password should not be null")) {
                violationMessageFound = true;
                break;
            }
        }
        assertTrue(violationMessageFound);
    }

    @Test
    void testUserGettersAndSetters() {
        User user = new User();

        int id = 1;
        String name = "John Doe";
        String email = "johndoe@example.com";
        String password = "password";

        user.setId(id);
        user.setFullName(name);
        user.setEmailId(email);
        user.setPassword(password);

        assertEquals(id, user.getId());
        assertEquals(name, user.getFullName());
        assertEquals(email, user.getEmailId());
        assertEquals(password, user.getPassword());
    }

    @Test
    void testUserNoArgsConstructor() {
        User user = new User();

        assertNotNull(user);
        assertNull(user.getFullName());
        assertNull(user.getEmailId());
        assertNull(user.getPassword());
    }

    @Test
    void testUserAllArgsConstructor() {
        int id = 1;
        String name = "John Doe";
        String email = "johndoe@example.com";
        String password = "password";

        User user = new User(id, name, email, password);

        assertNotNull(user);
        assertEquals(id, user.getId());
        assertEquals(name, user.getFullName());
        assertEquals(email, user.getEmailId());
        assertEquals(password, user.getPassword());
    }

}
