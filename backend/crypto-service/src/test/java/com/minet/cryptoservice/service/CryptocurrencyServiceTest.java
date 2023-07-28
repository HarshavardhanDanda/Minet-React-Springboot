package com.minet.cryptoservice.service;

import com.minet.cryptoservice.dto.CryptoCurrencyDto;
import com.minet.cryptoservice.entity.CryptoCurrency;
import com.minet.cryptoservice.exception.CurrencyNotFoundException;
import com.minet.cryptoservice.repository.CryptoCurrencyRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

@SpringBootTest

class CryptocurrencyServiceTest {

    @Mock
    private CryptoCurrencyRepository cryptocurrencyRepository;


    @InjectMocks
    private CryptoServiceImplementation cryptocurrencyService;

    CryptoCurrency cryptocurrency;




    @Test
    void testGetAllCurrencies() {
            List<CryptoCurrency> cryptoCurrencyList = new ArrayList<>();
            Mockito.when(cryptocurrencyRepository.findAll()).thenReturn(cryptoCurrencyList);
            List<CryptoCurrencyDto> result =cryptocurrencyService.getAllCurrencies();
            Assertions.assertNotNull(result);
            Assertions.assertTrue(result.isEmpty());

    }


    @Test
     void testGetCurrencyById() {
        int id = 1;
        CryptoCurrency cryptoCurrency = new CryptoCurrency();
        Mockito.when(cryptocurrencyRepository.findById(id)).thenReturn(Optional.of(cryptoCurrency));
        CryptoCurrencyDto result = cryptocurrencyService.getCurrencyById(id);
        Assertions.assertNotNull(result, "The resulting CryptoCurrencyDto should not be null");

    }
    @Test
    void testUpdateCurrency() {
        int id = 1;
        CryptoCurrency cryptoCurrency = new CryptoCurrency();
        CryptoCurrencyDto updatedCurrency = new CryptoCurrencyDto();
        Mockito.when(cryptocurrencyRepository.findById(id)).thenReturn(Optional.of(cryptoCurrency));
        CryptoCurrencyDto result = cryptocurrencyService.updateCurrency(id, updatedCurrency);
        Mockito.verify(cryptocurrencyRepository, Mockito.times(1)).save(cryptoCurrency);
    }



    @Test
    void findCryptoByIdExceptionTest(){
        Mockito.when(cryptocurrencyRepository.findById(1)).thenReturn(Optional.empty());
        Assertions.assertThrows(CurrencyNotFoundException.class,()->cryptocurrencyService.getCurrencyById(1));
    }

    @Test
    void getAllCurrencies_EmptyListTest() {
        Mockito.when(cryptocurrencyRepository.findAll()).thenReturn(Collections.emptyList());
        List<CryptoCurrencyDto> cryptoCurrencyDtoList = cryptocurrencyService.getAllCurrencies();
        Assertions.assertNotNull(cryptoCurrencyDtoList);
        Assertions.assertTrue(cryptoCurrencyDtoList.isEmpty());
        Mockito.verify(cryptocurrencyRepository).findAll();
    }

}