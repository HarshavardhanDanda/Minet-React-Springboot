package com.minet.portfolioservice.dto;


import org.junit.jupiter.api.Test;

import java.util.Date;

import static org.junit.jupiter.api.Assertions.assertEquals;

class TransactionDtoTest {
    @Test
    void testForTransactionDto()
    {
        Date date=new Date();
        TransactionDto transaction1=new TransactionDto();
        transaction1.setId(1);
        transaction1.setAmount(1234);
        transaction1.setStatus("success");
        transaction1.setTransactionFee(100);
        transaction1.setTransactionTime(date);
        transaction1.setTransactionType("sell");
        transaction1.setWalletId(1);
        transaction1.setCryptoCurrencyId(1);
        transaction1.setUserId(1);
        transaction1.setQuantity(1.1);
        assertEquals(1,transaction1.getId());
        assertEquals(1234,transaction1.getAmount());
        assertEquals("sell",transaction1.getTransactionType());
        assertEquals("success",transaction1.getStatus());
        assertEquals(1.1,transaction1.getQuantity());
        assertEquals(100,transaction1.getTransactionFee());
        assertEquals(date,transaction1.getTransactionTime());
        assertEquals(1,transaction1.getCryptoCurrencyId());
        assertEquals(1,transaction1.getUserId());
        assertEquals(1,transaction1.getWalletId());
        TransactionDto transaction2=new TransactionDto(2,123,"purchase","failed",99,date,1.2,1,2,1);
        assertEquals(2,transaction2.getId());
        System.out.println(transaction1);
    }
}
