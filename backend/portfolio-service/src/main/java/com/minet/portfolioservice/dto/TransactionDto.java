package com.minet.portfolioservice.dto;

import lombok.*;

import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class TransactionDto {
    int id;
    double amount;
    String transactionType;
    String status;
    double transactionFee;
    Date transactionTime;
    double quantity;
    int userId;
    int cryptoCurrencyId;
    int walletId;

    @Override
    public String toString() {
        return "TransactionDto{" +
                "id=" + id +
                ", amount=" + amount +
                ", transactionType='" + transactionType + '\'' +
                ", status='" + status + '\'' +
                ", transactionFee=" + transactionFee +
                ", transactionTime=" + transactionTime +
                ", quantity=" + quantity +
                ", userId=" + userId +
                ", cryptoCurrencyId=" + cryptoCurrencyId +
                ", walletId=" + walletId +
                '}';
    }
}
