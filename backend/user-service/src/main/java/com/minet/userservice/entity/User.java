package com.minet.userservice.entity;

import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Table(name="user", schema = "BC88_minet")
public class User {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name="id")
    @NotNull
    private int id;

    @NotEmpty(message = "email cannot be empty!!")
    @Column(name="email")
    private String emailId;

    @NotEmpty(message = "name cannot be empty!!")
    @NotNull(message = "name should not be null")
    @Column(name="name")
    private String fullName;

    @NotEmpty(message = "password cannot be empty!!")
    @NotNull(message = "password should not be null")
    @Column(name="password")
    private String password;
}
