package com.minet.cryptoservice.entity;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Date;
@SpringBootTest
class CryptothirdpartyEntityTest {
    @Mock
   CryptoThirdPartyEntity cryptothirdpartyEntity;

    @Test
    void testNoArgsConstructor() {

        CryptoThirdPartyEntity entity = new CryptoThirdPartyEntity();
        Assertions.assertNull(entity.getId());
        Assertions.assertNull(entity.getSymbol());
        Assertions.assertNull(entity.getName());
        Assertions.assertNull(entity.getImage());

    }
    @Test
    void testToStringMethod() {
        CryptoThirdPartyEntity entity = new CryptoThirdPartyEntity();
        entity.setId("BTC");
        entity.setSymbol("BTC");
        entity.setName("Bitcoin");
        entity.setImage("bitcoin.png");

        String expectedString = "CryptoThirdPartyEntity{" +
                "id='BTC', " +
                "symbol='BTC', " +
                "name='Bitcoin', " +
                "image='bitcoin.png', " +
                "current_price=0.0, " +
                "market_cap=0, " +
                "total_volume=0, " +
                "price_change_percentage_24h=0.0, " +
                "circulating_supply=0.0, " +
                "total_supply=0.0, " +
                "max_supply=0.0, " +
                "ath_date=null, " +
                "price_change_percentage_1h_in_currency=0.0, " +
                "price_change_percentage_24h_in_currency=0.0, " +
                "price_change_percentage_30d_in_currency=0.0, " +
                "price_change_percentage_7d_in_currency=0.0" +
                "}";

        Assertions.assertEquals(expectedString, entity.toString());
    }
    @Test
    void testAllArgsConstructor() {

        Date date=new Date();
        CryptoThirdPartyEntity entity = new CryptoThirdPartyEntity("1","BTC","Bitcoin","https://example.com/bitcoin.png",50000.0,
                1000000000000L,50000000000L,4.0,18000000.0,21000000.0,21000000.0,date,8.0,3.0,10.0,1.5);

        Assertions.assertEquals("1", entity.getId());
        Assertions.assertEquals("BTC", entity.getSymbol());
        Assertions.assertEquals("Bitcoin", entity.getName());
        Assertions.assertEquals("https://example.com/bitcoin.png", entity.getImage());
        Assertions.assertEquals(50000.0, entity.getCurrent_price());
        Assertions.assertEquals(1000000000000L, entity.getMarket_cap());
        Assertions.assertEquals(50000000000L, entity.getTotal_volume());
        Assertions.assertEquals(4.0,entity.getPrice_change_percentage_24h());
        Assertions.assertNotNull(entity.getAth_date());
        Assertions.assertEquals(18000000.0, entity.getCirculating_supply());
        Assertions.assertEquals(21000000.0, entity.getTotal_supply());
        Assertions.assertEquals(21000000.0, entity.getMax_supply());
        Assertions.assertEquals(8.0, entity.getPrice_change_percentage_1h_in_currency());
        Assertions.assertEquals(3.0, entity.getPrice_change_percentage_24h_in_currency());
        Assertions.assertEquals(1.5, entity.getPrice_change_percentage_7d_in_currency());
        Assertions.assertEquals(10.0, entity.getPrice_change_percentage_30d_in_currency());


    }

}










