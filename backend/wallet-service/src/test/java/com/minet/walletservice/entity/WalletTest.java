package com.minet.walletservice.entity;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.Mockito.mock;

class WalletTest {

    @Test
    void walletGetterAndSetterTest() {
        Integer id = 1;
        String name = "My Wallet";
        double balance = 100.0;
        double priceChange = 10.0;
        User user = mock(User.class);
        CryptoCurrency cryptoCurrency = mock(CryptoCurrency.class);

        Wallet wallet = new Wallet();
        wallet.setId(id);
        wallet.setName(name);
        wallet.setBalance(balance);
        wallet.setPriceChange(priceChange);
        wallet.setUser(user);
        wallet.setCrypto(cryptoCurrency);

        assertNotNull(wallet);
        assertEquals(id, wallet.getId());
        assertEquals(name, wallet.getName());
        assertEquals(balance, wallet.getBalance());
        assertEquals(priceChange, wallet.getPriceChange());
        assertEquals(user, wallet.getUser());
        assertEquals(cryptoCurrency, wallet.getCrypto());
    }
}
