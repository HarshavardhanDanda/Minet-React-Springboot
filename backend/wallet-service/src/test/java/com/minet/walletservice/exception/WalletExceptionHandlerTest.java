package com.minet.walletservice.exception;

import org.junit.jupiter.api.Test;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

class WalletExceptionHandlerTest {

    @Test
    void testHandleException() {
        Exception exception = new Exception("Test exception");
        WalletExceptionHandler exceptionHandler = new WalletExceptionHandler();

        ResponseEntity<WalletErrorResponse> responseEntity = exceptionHandler.handleException(exception);
        WalletErrorResponse errorResponse = responseEntity.getBody();

        assertEquals(HttpStatus.BAD_REQUEST, responseEntity.getStatusCode());
        assertEquals("Test exception", errorResponse.getMessage());
        assertEquals(HttpStatus.BAD_REQUEST.value(), errorResponse.getStatus());

        assertTrue(errorResponse.getTimeStamp() > 0);
    }
}
