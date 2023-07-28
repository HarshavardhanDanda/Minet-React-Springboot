package com.minet.userservice.dto;

import lombok.*;

@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserDto {

    private int id;

    private String fullName;

    private String emailId;

    private String password;
}