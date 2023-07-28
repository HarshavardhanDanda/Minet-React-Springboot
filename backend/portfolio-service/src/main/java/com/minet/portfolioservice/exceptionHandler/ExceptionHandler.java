package com.minet.portfolioservice.exceptionHandler;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;

@ControllerAdvice
public class ExceptionHandler {

    @org.springframework.web.bind.annotation.ExceptionHandler
    public ResponseEntity<ErrorResponse> handleException(Exception exception)
    {
        ErrorResponse error=new ErrorResponse();
        error.setStatus(HttpStatus.BAD_GATEWAY.value());
        error.setMessage(exception.getMessage());
        return new ResponseEntity<>(error, HttpStatus.BAD_GATEWAY);
    }
}
