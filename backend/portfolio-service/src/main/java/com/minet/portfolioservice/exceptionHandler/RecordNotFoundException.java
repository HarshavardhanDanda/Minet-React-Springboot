package com.minet.portfolioservice.exceptionHandler;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RecordNotFoundException extends Exception{
    String message;
    public  RecordNotFoundException(String message){
        super(message);
        this.message=message;
    }
}
