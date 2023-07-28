package com.minet.portfolioservice.exceptionHandlers;

import com.minet.portfolioservice.exceptionHandler.ErrorResponse;
import com.minet.portfolioservice.exceptionHandler.ExceptionHandler;
import com.minet.portfolioservice.exceptionHandler.RecordNotFoundException;
import org.junit.jupiter.api.Test;
import org.springframework.http.ResponseEntity;

import static org.junit.jupiter.api.Assertions.assertEquals;

class ExceptionHandlerTest {

    @Test
    void testForExceptionHandler()
    {

        RecordNotFoundException exception=new RecordNotFoundException("record was not found");
        ExceptionHandler exceptionHandler=new ExceptionHandler();
        ResponseEntity<ErrorResponse> response=exceptionHandler.handleException(exception);
        assertEquals("record was not found",response.getBody().getMessage());
    }
}
