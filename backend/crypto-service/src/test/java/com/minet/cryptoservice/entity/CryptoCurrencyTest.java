package com.minet.cryptoservice.entity;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;


@SpringBootTest
class CryptoCurrencyTest {
    @Mock
    CryptoCurrency cryptocurrency;

    @Test
    void cryptoEntityTest1(){
        CryptoCurrency cryptocurrency = new CryptoCurrency(1,"bitcoin", "BTC", "bitcoin_icon.png",
                "$54.6T", "2022-12-23",345466.54, 345460.4, 345470.4,
                345500.31, 345456.33,"$2.9T","18.8M BTC",1.6);

        Assertions.assertEquals(1,cryptocurrency.getId());
        Assertions.assertEquals("bitcoin",cryptocurrency.getName());
        Assertions.assertEquals("BTC",cryptocurrency.getSymbol());
        Assertions.assertEquals("bitcoin_icon.png",cryptocurrency.getIcon());
        Assertions.assertEquals("$54.6T",cryptocurrency.getMarketCap());
        Assertions.assertEquals("2022-12-23",cryptocurrency.getCreated());
        Assertions.assertEquals(345466.54,cryptocurrency.getPrice());
        Assertions.assertEquals(345460.4,cryptocurrency.getPriceAt1H());
        Assertions.assertEquals(345470.4,cryptocurrency.getPriceAt1D());
        Assertions.assertEquals(345500.31,cryptocurrency.getPriceAt1W());
        Assertions.assertEquals(345456.33,cryptocurrency.getPriceAt1M());
        Assertions.assertEquals("$2.9T",cryptocurrency.getTotalSupply());
        Assertions.assertEquals("18.8M BTC",cryptocurrency.getCirculatingSupply());
        Assertions.assertEquals(1.6,cryptocurrency.getPriceChange());
    }
    @Test
    void cryptoEntityTest(){
        CryptoCurrency cryptocurrency=new CryptoCurrency();
        cryptocurrency.setId(1);
        cryptocurrency.setName("bitcoin");
        cryptocurrency.setSymbol("BTC");
        cryptocurrency.setIcon("bitcoin_icon.png");
        cryptocurrency.setMarketCap("$54.6T");
        cryptocurrency.setCreated("2022-12-23");
        cryptocurrency.setPrice(345466.54);
        cryptocurrency.setPriceAt1H(345460.4);
        cryptocurrency.setPriceAt1D(345470.4);
        cryptocurrency.setPriceAt1W(345500.31);
        cryptocurrency.setPriceAt1M(345456.33);
        cryptocurrency.setTotalSupply("$2.9T");
        cryptocurrency.setCirculatingSupply("18.8M BTC");
        cryptocurrency.setPriceChange(1.6);

        Assertions.assertEquals(1,cryptocurrency.getId());
        Assertions.assertEquals("bitcoin",cryptocurrency.getName());
        Assertions.assertEquals("BTC",cryptocurrency.getSymbol());
        Assertions.assertEquals("bitcoin_icon.png",cryptocurrency.getIcon());
        Assertions.assertEquals("$54.6T",cryptocurrency.getMarketCap());
        Assertions.assertEquals("2022-12-23",cryptocurrency.getCreated());
        Assertions.assertEquals(345466.54,cryptocurrency.getPrice());
        Assertions.assertEquals(345460.4,cryptocurrency.getPriceAt1H());
        Assertions.assertEquals(345470.4,cryptocurrency.getPriceAt1D());
        Assertions.assertEquals(345500.31,cryptocurrency.getPriceAt1W());
        Assertions.assertEquals(345456.33,cryptocurrency.getPriceAt1M());
        Assertions.assertEquals("$2.9T",cryptocurrency.getTotalSupply());
        Assertions.assertEquals("18.8M BTC",cryptocurrency.getCirculatingSupply());
        Assertions.assertEquals(1.6,cryptocurrency.getPriceChange());

    }

}

