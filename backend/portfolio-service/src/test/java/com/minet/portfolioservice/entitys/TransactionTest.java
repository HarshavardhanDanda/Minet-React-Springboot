package com.minet.portfolioservice.entitys;

import com.minet.portfolioservice.entity.CryptoCurrency;
import com.minet.portfolioservice.entity.Transaction;
import com.minet.portfolioservice.entity.User;
import com.minet.portfolioservice.entity.Wallet;
import org.junit.jupiter.api.Test;

import java.util.Date;

import static org.junit.jupiter.api.Assertions.assertEquals;

class TransactionTest {
    @Test
    void testForTransactionEntity()
    {
        User user=new User();
        CryptoCurrency cryptoCurrency=new CryptoCurrency();
        Wallet wallet=new Wallet();
        Date date=new Date();
        Transaction transaction1=new Transaction();
        transaction1.setId(1);
        transaction1.setStatus("success");
        transaction1.setAmount(1234);
        transaction1.setTransactionFee(100);
        transaction1.setTransactionTime(date);
        transaction1.setTransactionType("sell");
        transaction1.setWallet(wallet);
        transaction1.setCrypto(cryptoCurrency);
        transaction1.setUser(user);
        transaction1.setQuantity(1.1);
        assertEquals(1,transaction1.getId());
        assertEquals(1234,transaction1.getAmount());
        assertEquals("sell",transaction1.getTransactionType());
        assertEquals("success",transaction1.getStatus());
        assertEquals(1.1,transaction1.getQuantity());
        assertEquals(100,transaction1.getTransactionFee());
        assertEquals(date,transaction1.getTransactionTime());
        assertEquals(user,transaction1.getUser());
        assertEquals(cryptoCurrency,transaction1.getCrypto());
        assertEquals(wallet,transaction1.getWallet());
        Transaction transaction2=new Transaction(2,123,"purchase","failed",99,date,1.2,user,cryptoCurrency,wallet);
        assertEquals(2,transaction2.getId());
        System.out.println(transaction1);
    }
}
