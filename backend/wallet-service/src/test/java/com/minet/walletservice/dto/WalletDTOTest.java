package com.minet.walletservice.dto;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class WalletDTOTest {


    @Test
    void testNoArgsConstructor() {
        WalletDTO wallet = new WalletDTO();

        assertNull(wallet.getId());
        assertNull(wallet.getName());
        assertEquals(0.0, wallet.getBalance());
        assertEquals(0.0, wallet.getPriceChange());
        assertNull(wallet.getUserId());
        assertNull(wallet.getCryptoCurrencyId());
    }

    @Test
    void testAllArgsConstructor() {
        WalletDTO wallet = new WalletDTO(1, "My Wallet", 1000.0, 0.05, 1001, 2001);

        assertEquals(1, wallet.getId());
        assertEquals("My Wallet", wallet.getName());
        assertEquals(1000.0, wallet.getBalance());
        assertEquals(0.05, wallet.getPriceChange());
        assertEquals(1001, wallet.getUserId());
        assertEquals(2001, wallet.getCryptoCurrencyId());
    }

    @Test
    void testGettersAndSetters() {
        WalletDTO wallet = new WalletDTO();

        wallet.setId(1);
        wallet.setName("My Wallet");
        wallet.setBalance(1000.0);
        wallet.setPriceChange(0.05);
        wallet.setUserId(1001);
        wallet.setCryptoCurrencyId(2001);

        assertEquals(1, wallet.getId());
        assertEquals("My Wallet", wallet.getName());
        assertEquals(1000.0, wallet.getBalance());
        assertEquals(0.05, wallet.getPriceChange());
        assertEquals(1001, wallet.getUserId());
        assertEquals(2001, wallet.getCryptoCurrencyId());
    }
}
