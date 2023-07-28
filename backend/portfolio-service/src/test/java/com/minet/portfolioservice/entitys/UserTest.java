package com.minet.portfolioservice.entitys;

import com.minet.portfolioservice.entity.User;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class UserTest {

    @Test
    void testToCheckTheUserEntity()
    {
        User user=new User();
        user.setId(1);
        user.setFullName("John doe");
        user.setEmailId("John@gmail.com");
        user.setPassword("Password.com");
        assertEquals(1, user.getId());
        assertEquals("John doe", user.getFullName());
        assertEquals("John@gmail.com", user.getEmailId());
        assertEquals("Password.com", user.getPassword());
        User user1=new User(2,"John","John@hotmail.com","password.com");
        assertEquals(2, user1.getId());
        assertEquals("John", user1.getFullName());
        assertEquals("password.com", user1.getPassword());
        assertEquals("John@hotmail.com", user1.getEmailId());
    }
}
