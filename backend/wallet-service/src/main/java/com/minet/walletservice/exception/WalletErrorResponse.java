package com.minet.walletservice.exception;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class WalletErrorResponse {

    private String message;
    private long timeStamp;
    private int status;

}