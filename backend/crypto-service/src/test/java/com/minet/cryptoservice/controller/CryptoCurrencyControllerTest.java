package com.minet.cryptoservice.controller;
import com.minet.cryptoservice.dto.CryptoCurrencyDto;
import com.minet.cryptoservice.entity.CryptoCurrency;
import com.minet.cryptoservice.exception.CurrencyNotFoundException;
import com.minet.cryptoservice.service.CryptoServiceImplementation;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import java.lang.reflect.Field;
import java.util.ArrayList;
import java.util.List;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyInt;
import static org.mockito.Mockito.when;


 class CryptoCurrencyControllerTest {
    @Mock
    CryptoServiceImplementation cryptocurrencyService;

    @InjectMocks
    CryptoCurrencyController cryptocurrencyController;

    @Mock
    CryptoCurrency cryptocurrency;
    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
        cryptocurrency = new CryptoCurrency(1,"bitcoin", "btc", "bitcoin.png","$54.6T", "2022-12-23",1000.12, 1000.11, 1000.34, 1000.56, 1000.78,"$2.9T","18.8M BTC",2.10);
    }


    @Test
    void getCurrencyById_ExistingIdTest() throws NoSuchFieldException, IllegalAccessException {
        int id = 1;
        CryptoCurrencyDto expectedCurrency = new CryptoCurrencyDto();
        when(cryptocurrencyService.getCurrencyById(id)).thenReturn(expectedCurrency);
        ResponseEntity<CryptoCurrencyDto> response = cryptocurrencyController.getTransactionById(id);
        Assertions.assertEquals(HttpStatus.OK, response.getStatusCode());
        Assertions.assertEquals(expectedCurrency, response.getBody());

    }

    @Test
    void getCurrencyById_NonexistentIdTest() throws NoSuchFieldException, IllegalAccessException {
        int id = 100;
        when(cryptocurrencyService.getCurrencyById(id)).thenThrow(new CurrencyNotFoundException("not found"));
        ResponseEntity<CryptoCurrencyDto> response = cryptocurrencyController.getTransactionById(id);
        Assertions.assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
        Assertions.assertNull(response.getBody());

    }

    private Field findField(Class<?> clazz, String fieldName) throws NoSuchFieldException {
        try {
            return clazz.getDeclaredField(fieldName);
        } catch (NoSuchFieldException e) {
            Class<?> superClass = clazz.getSuperclass();
            if (superClass == null || superClass.equals(Object.class)) {
                throw e;
            }
            return findField(superClass, fieldName);
        }
    }


    @Test
    void testUpdateCurrency_Success() {

        int id = 1;
        CryptoCurrencyDto updatedCurrency = new CryptoCurrencyDto();
        updatedCurrency.setId(id);
        updatedCurrency.setName("Bitcoin");

        CryptoCurrencyDto expectedCurrency = new CryptoCurrencyDto();
        expectedCurrency.setId(id);
        expectedCurrency.setName("Bitcoin");
        when(cryptocurrencyService.updateCurrency(anyInt(), any())).thenReturn(expectedCurrency);
        ResponseEntity<CryptoCurrencyDto> response = cryptocurrencyController.updateCurrency(id, updatedCurrency);
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(expectedCurrency, response.getBody());
    }
    @Test
    void testUpdateCurrency_CurrencyNotFound() {
        int id = 1;
        CryptoCurrencyDto updatedCurrency = new CryptoCurrencyDto();
        updatedCurrency.setId(id);
        updatedCurrency.setName("Bitcoin");

        when(cryptocurrencyService.updateCurrency(anyInt(), any())).thenThrow(new CurrencyNotFoundException("Currency not found"));
        ResponseEntity<CryptoCurrencyDto> response = cryptocurrencyController.updateCurrency(id, updatedCurrency);
        assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
        assertEquals(null, response.getBody());
    }
    @Test
    void testUpdateCurrency_ValidId() {
        int id = 1;
        CryptoCurrencyDto updatedCurrency = new CryptoCurrencyDto();
        CryptoCurrencyDto expectedCurrency = new CryptoCurrencyDto();
        when(cryptocurrencyService.updateCurrency(id, updatedCurrency)).thenReturn(expectedCurrency);
        ResponseEntity<CryptoCurrencyDto> response = cryptocurrencyController.updateCurrency(id, updatedCurrency);
        Assertions.assertEquals(HttpStatus.OK, response.getStatusCode());
        Assertions.assertEquals(expectedCurrency, response.getBody());

    }

    @Test
    void testUpdateCurrency_InvalidId() {
        int id = 100;
        CryptoCurrencyDto updatedCurrency = new CryptoCurrencyDto();
        when(cryptocurrencyService.updateCurrency(id, updatedCurrency)).thenThrow(new CurrencyNotFoundException("not found"));
        ResponseEntity<CryptoCurrencyDto> response = cryptocurrencyController.updateCurrency(id, updatedCurrency);
        Assertions.assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
        Assertions.assertNull(response.getBody());
    }
     @Test
     void testGetAllCurrencies() throws Exception {
         List<CryptoCurrencyDto> expectedCurrencies = new ArrayList<>();
         expectedCurrencies.add(new CryptoCurrencyDto());
         expectedCurrencies.add(new CryptoCurrencyDto());
         when(cryptocurrencyService.getAllCurrencies()).thenReturn(expectedCurrencies);
         ResponseEntity<List<CryptoCurrencyDto>> response = cryptocurrencyController.getAllCurrencies();
         Assertions.assertEquals(HttpStatus.OK, response.getStatusCode());
         Assertions.assertEquals(expectedCurrencies, response.getBody());

     }

}
