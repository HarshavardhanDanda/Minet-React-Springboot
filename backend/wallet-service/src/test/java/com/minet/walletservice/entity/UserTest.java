package com.minet.walletservice.entity;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class UserTest {
    @Test
    void testToCheckTheUserEntity()
    {
        User user=new User();
        user.setId(1);

        user.setFullName("John doe");
        user.setEmailId("Johndoe@gmail.com");
        user.setPassword("Password1.com");
        assertEquals(1, user.getId());
        assertEquals("John doe", user.getFullName());
        assertEquals("Johndoe@gmail.com", user.getEmailId());
        assertEquals("Password1.com", user.getPassword());
        User user1=new User(2,"John","Johndoe@hotmail.com","password2.com");
        assertEquals(2, user1.getId());
        assertEquals("John", user1.getFullName());
        assertEquals("Johndoe@hotmail.com", user1.getEmailId());
        assertEquals("password2.com", user1.getPassword());
    }
}