package com.minet.walletservice.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class WalletDTO {
    private Integer id;

    private String name;

    private double balance;

    private double priceChange;

    private Integer userId;

    private Integer cryptoCurrencyId;
}
