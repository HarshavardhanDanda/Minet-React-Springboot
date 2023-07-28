package com.minet.portfolioservice.dto;


import lombok.*;

@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class LoginUserDTO {
    private String email;
    private String password;
}
