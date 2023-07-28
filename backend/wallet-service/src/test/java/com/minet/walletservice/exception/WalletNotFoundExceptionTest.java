package com.minet.walletservice.exception;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;

class WalletNotFoundExceptionTest {

    @Test
    void testWalletNotFoundException() {
        String message = "Wallet not found exception";

        WalletNotFoundException exception = new WalletNotFoundException(message);

        assertEquals(message, exception.getMessage());
    }
}
