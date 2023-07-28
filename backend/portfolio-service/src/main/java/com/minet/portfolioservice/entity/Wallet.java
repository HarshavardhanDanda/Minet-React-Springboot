package com.minet.portfolioservice.entity;

import lombok.*;

import javax.persistence.*;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "wallet")
public class Wallet {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;
    @Column(name = "name")
    String name;
    @Column(name = "balance")
    double balance;
    @ManyToOne
    @JoinColumn(name = "crypto_currency_id")
    CryptoCurrency crypto;
    @ManyToOne
    @JoinColumn(name = "user_id")
    User user;
    @Column(name = "price_change")
    double priceChange;
}
