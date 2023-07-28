package com.minet.portfolioservice.exceptionHandler;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ErrorResponse {
    int status;
    String message;
}
