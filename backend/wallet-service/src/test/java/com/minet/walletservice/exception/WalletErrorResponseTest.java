package com.minet.walletservice.exception;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
class WalletErrorResponseTest {

    @Test
    void testForErrorResponse()
    {
        WalletErrorResponse errorResponse1=new WalletErrorResponse();
        errorResponse1.setStatus(404);
        errorResponse1.setMessage("bad gateway");
        assertEquals(404,errorResponse1.getStatus());
        assertEquals("bad gateway",errorResponse1.getMessage());
    }
}