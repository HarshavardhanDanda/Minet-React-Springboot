package com.minet.portfolioservice.exceptionHandlers;

import com.minet.portfolioservice.exceptionHandler.RecordNotFoundException;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;

class RecordNotFoundExceptionTest {

    @Test
    void testForRecordNotFoundException()
    {
        RecordNotFoundException ex=new RecordNotFoundException("exception created");
        ex.setMessage("exception updated");
        assertEquals("exception updated",ex.getMessage());
    }
}
