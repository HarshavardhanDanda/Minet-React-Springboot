package com.minet.cryptoservice.entity;

import lombok.*;
import org.springframework.stereotype.Component;

import javax.persistence.*;
@Getter
@Setter
@Entity
@Component
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "crypto_currency")
public class CryptoCurrency {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
     int id;

    @Column(name = "name")
     String name;

    @Column(name = "symbol")
     String symbol;

    @Column(name = "icon")
     String icon;

    @Column(name = "market_cap")
     String marketCap;

    @Column(name = "created")
     String created;

    @Column(name = "price")
    double price;

    @Column(name = "price_at_1H")
     double priceAt1H;

    @Column(name = "price_at_1D")
     double priceAt1D;

    @Column(name = "price_at_1W")
     double priceAt1W;

    @Column(name = "price_at_1M")
     double priceAt1M;

    @Column(name = "total_supply")
     String totalSupply;

    @Column(name = "circulating_supply")
     String circulatingSupply;

    @Column(name = "price_change")
    double priceChange;




}
