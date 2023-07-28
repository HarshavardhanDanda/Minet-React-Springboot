package com.minet.cryptoservice.exception;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

 class CurrencyNotFoundExceptionTest {


    @Test
    void testCurrencyNotFoundExceptionWithoutMessage() {
        try {
            throw new CurrencyNotFoundException("Currency not found");
        } catch (CurrencyNotFoundException exception) {
            assertEquals("Currency not found", exception.getMessage());
        }
    }
     @Test
     void testCurrencyNotFoundExceptionWithMessage() {
         String errorMessage = "Currency not found";
         CurrencyNotFoundException exception = new CurrencyNotFoundException(errorMessage);

         assertEquals(errorMessage, exception.getMessage());
     }
}
