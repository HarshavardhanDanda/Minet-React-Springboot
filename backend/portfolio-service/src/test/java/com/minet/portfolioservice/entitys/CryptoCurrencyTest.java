package com.minet.portfolioservice.entitys;

import com.minet.portfolioservice.entity.CryptoCurrency;
import org.junit.jupiter.api.Test;

import java.util.Date;

import static org.junit.jupiter.api.Assertions.assertEquals;

class CryptoCurrencyTest {
    @Test
    void testToCheckTheCryptoCurrencyEntity()
    {
        CryptoCurrency cryptoCurrency=new CryptoCurrency();
        cryptoCurrency.setId(1);
        cryptoCurrency.setName("Bitcoin");
        cryptoCurrency.setCreated(new Date());
        cryptoCurrency.setIcon("dummy.png");
        cryptoCurrency.setPrice(34567.5);
        cryptoCurrency.setCirculatingSupply("5.6M");
        cryptoCurrency.setMarketCap("4.2B");
        cryptoCurrency.setPriceAt1D(34567.1);
        cryptoCurrency.setPriceAt1H(34564.1);
        cryptoCurrency.setPriceAt1W(34562.1);
        cryptoCurrency.setPriceAt1M(34563.1);
        cryptoCurrency.setPriceChange(1.5);
        cryptoCurrency.setSymbol("BTC");
        assertEquals(1, cryptoCurrency.getId());
        assertEquals("Bitcoin", cryptoCurrency.getName());
        assertEquals("BTC", cryptoCurrency.getSymbol());
    }

    @Test
    void testToCheckAllArgumentsConstructor()
    {
        Date date=new Date();
        CryptoCurrency cryptoCurrency=new CryptoCurrency(1,"bitcoin","bitcoin.svg","BTC","5.4B",date,3457.4,2455.3,3333.5,3333.1,3333.3,"6B","4.4B",4.6);
        assertEquals("bitcoin.svg", cryptoCurrency.getIcon());
        assertEquals(cryptoCurrency.getCreated(),date);
        assertEquals("5.4B", cryptoCurrency.getMarketCap());
        assertEquals(3457.4, cryptoCurrency.getPrice());
        assertEquals(2455.3, cryptoCurrency.getPriceAt1H());
        assertEquals(3333.5, cryptoCurrency.getPriceAt1D());
        assertEquals(3333.1, cryptoCurrency.getPriceAt1W());
        assertEquals(3333.3, cryptoCurrency.getPriceAt1M());
        assertEquals("6B", cryptoCurrency.getTotalSupply());
        assertEquals("4.4B", cryptoCurrency.getCirculatingSupply());
        assertEquals(4.6, cryptoCurrency.getPriceChange());
    }
}
