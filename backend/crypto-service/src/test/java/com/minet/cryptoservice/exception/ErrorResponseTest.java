package com.minet.cryptoservice.exception;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertNotNull;
 class ErrorResponseTest {

    @Test
    void testToString() {
        ErrorResponse errorResponse = new ErrorResponse();
        assertNotNull(errorResponse.toString());
    }
     @Test
     void createErrorResponseTest() {
         int status = 404;
         String message = "Not Found";
         long timeStamp = System.currentTimeMillis();

         ErrorResponse errorResponse = new ErrorResponse(status, message, timeStamp);

         Assertions.assertEquals(status, errorResponse.getStatus());
         Assertions.assertEquals(message, errorResponse.getMessage());
         Assertions.assertEquals(timeStamp, errorResponse.getTimeStamp());
     }
}
