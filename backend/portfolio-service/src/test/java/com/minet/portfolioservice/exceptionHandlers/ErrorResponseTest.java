package com.minet.portfolioservice.exceptionHandlers;

import com.minet.portfolioservice.exceptionHandler.ErrorResponse;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class ErrorResponseTest {

    @Test
    void testForErrorResponse()
    {
        ErrorResponse errorResponse1=new ErrorResponse();
        errorResponse1.setStatus(404);
        errorResponse1.setMessage("bad gateway");
        assertEquals(404,errorResponse1.getStatus());
        assertEquals("bad gateway",errorResponse1.getMessage());
        ErrorResponse errorResponse2=new ErrorResponse(404,"Not found");
        assertEquals(404,errorResponse2.getStatus());
        assertEquals("Not found",errorResponse2.getMessage());
    }
}
