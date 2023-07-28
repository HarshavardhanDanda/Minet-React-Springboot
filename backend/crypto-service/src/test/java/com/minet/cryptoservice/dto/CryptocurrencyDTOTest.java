package com.minet.cryptoservice.dto;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class CryptocurrencyDTOTest {

    @Test
    void cryptoDTOTest() {

        CryptoCurrencyDto cryptocurrencyDTO = new CryptoCurrencyDto();

        cryptocurrencyDTO.setId(1);
        cryptocurrencyDTO.setName("bitcoin");
        cryptocurrencyDTO.setSymbol("BTC");
        cryptocurrencyDTO.setIcon("bitcoin_icon.png");
        cryptocurrencyDTO.setMarketCap("$54.6T");
        cryptocurrencyDTO.setCreated("2022-12-23");
        cryptocurrencyDTO.setPrice(345466.54);
        cryptocurrencyDTO.setPriceAt1H(345460.4);
        cryptocurrencyDTO.setPriceAt1D(345470.4);
        cryptocurrencyDTO.setPriceAt1W(345500.31);
        cryptocurrencyDTO.setPriceAt1M(345456.33);
        cryptocurrencyDTO.setTotalSupply("$2.9T");
        cryptocurrencyDTO.setCirculatingSupply("18.8M BTC");
        cryptocurrencyDTO.setPriceChange(1.6);

        Assertions.assertEquals(1, cryptocurrencyDTO.getId());
        Assertions.assertEquals("bitcoin", cryptocurrencyDTO.getName());
        Assertions.assertEquals("BTC", cryptocurrencyDTO.getSymbol());
        Assertions.assertEquals("bitcoin_icon.png", cryptocurrencyDTO.getIcon());
        Assertions.assertEquals("$54.6T", cryptocurrencyDTO.getMarketCap());
        Assertions.assertEquals("2022-12-23", cryptocurrencyDTO.getCreated());
        Assertions.assertEquals(345466.54, cryptocurrencyDTO.getPrice());
        Assertions.assertEquals(345460.4, cryptocurrencyDTO.getPriceAt1H());
        Assertions.assertEquals(345500.31, cryptocurrencyDTO.getPriceAt1W());
        Assertions.assertEquals(345456.33, cryptocurrencyDTO.getPriceAt1M());
        Assertions.assertEquals(345470.4, cryptocurrencyDTO.getPriceAt1D());
        Assertions.assertEquals("$2.9T", cryptocurrencyDTO.getTotalSupply());
        Assertions.assertEquals("18.8M BTC", cryptocurrencyDTO.getCirculatingSupply());
        Assertions.assertEquals(1.6, cryptocurrencyDTO.getPriceChange());
    }
}