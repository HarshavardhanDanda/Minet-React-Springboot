package com.minet.portfolioservice.entitys;

import com.minet.portfolioservice.entity.CryptoCurrency;
import com.minet.portfolioservice.entity.User;
import com.minet.portfolioservice.entity.Wallet;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class WalletTest {
    @Test
    void testForWalletEntity()
    {
        User user=new User();
        CryptoCurrency cryptoCurrency=new CryptoCurrency();
        Wallet wallet1=new Wallet();
        wallet1.setId(1);
        wallet1.setName("bitcoin wallet");
        wallet1.setBalance(1.2);
        wallet1.setUser(user);
        wallet1.setCrypto(cryptoCurrency);

        wallet1.setPriceChange(1.2);
        assertEquals(1,wallet1.getId());
        assertEquals("bitcoin wallet",wallet1.getName());
        assertEquals(1.2,wallet1.getBalance());
        assertEquals(1.2,wallet1.getPriceChange());
        assertEquals(user,wallet1.getUser());
        assertEquals(cryptoCurrency,wallet1.getCrypto());
        Wallet wallet2=new Wallet(2,"ethereum wallet",1.1,cryptoCurrency,user,1.1);
        assertEquals(2,wallet2.getId());
        assertEquals("ethereum wallet",wallet2.getName());
        assertEquals(1.1,wallet2.getPriceChange());
        assertEquals(1.1,wallet2.getBalance());
        assertEquals(user,wallet2.getUser());
        assertEquals(cryptoCurrency,wallet2.getCrypto());
    }
}
