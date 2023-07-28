package com.minet.cryptoservice.dto;


import lombok.*;


@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class CryptoCurrencyDto {

     Integer id;
     String name;
     String symbol;
     String icon;
     String marketCap;
     String created;
     double price;
     double priceAt1H;
     double priceAt1D;
     double priceAt1W;
     double priceAt1M;
     String totalSupply;
     String circulatingSupply;
     double priceChange;


}