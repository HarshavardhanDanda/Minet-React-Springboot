package com.minet.walletservice.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class WalletExceptionHandler {

    @ExceptionHandler
    public ResponseEntity<WalletErrorResponse> handleException(Exception exception){
        WalletErrorResponse errorResponse=new WalletErrorResponse();
        errorResponse.setMessage(exception.getMessage());
        errorResponse.setStatus(HttpStatus.BAD_REQUEST.value());
        errorResponse.setTimeStamp(System.currentTimeMillis());
        return new ResponseEntity<>(errorResponse,HttpStatus.BAD_REQUEST);
    }

}