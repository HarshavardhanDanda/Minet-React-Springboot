package com.minet.portfolioservice.entity;

import lombok.*;

import javax.persistence.*;
import java.util.Date;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "transaction")
public class Transaction {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;
    @Column(name = "amount")
    double amount;
    @Column(name = "transaction_type")
    String transactionType;
    @Column(name = "status")
    String status;

    @Override
    public String toString() {
        return "Transaction{" +
                "id=" + id +
                ", amount=" + amount +
                ", transactionType='" + transactionType + '\'' +
                ", status='" + status + '\'' +
                ", transactionFee=" + transactionFee +
                ", transactionTime=" + transactionTime +
                ", quantity=" + quantity +
                ", user=" + user +
                ", crypto=" + crypto +
                '}';
    }
    @Column(name = "transaction_fee")
    double transactionFee;
    @Column(name = "transaction_time")
    Date transactionTime;
    @Column(name = "quantity")
    double quantity;
    @ManyToOne
    @JoinColumn(name = "user_id")
    User user;
    @ManyToOne
    @JoinColumn(name = "crypto_currency_id")
    CryptoCurrency crypto;
    @ManyToOne
    @JoinColumn(name = "wallet_id")
    Wallet wallet;
}
