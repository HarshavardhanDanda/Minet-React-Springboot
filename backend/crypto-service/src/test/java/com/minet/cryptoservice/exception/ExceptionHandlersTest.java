package com.minet.cryptoservice.exception;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

 class ExceptionHandlersTest {

    private final ExceptionHandlers exceptionHandlers = new ExceptionHandlers();

    @Test
    void handleCurrencyNotFoundExceptionTest() {
        CurrencyNotFoundException exception = new CurrencyNotFoundException("Currency not found");

        ResponseEntity<ErrorResponse> response = exceptionHandlers.handleException(exception);

        Assertions.assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
        ErrorResponse errorResponse = response.getBody();
        Assertions.assertNotNull(errorResponse);
        Assertions.assertEquals("Currency not found", errorResponse.getMessage());
        Assertions.assertEquals(HttpStatus.NOT_FOUND.value(), errorResponse.getStatus());

    }
}
