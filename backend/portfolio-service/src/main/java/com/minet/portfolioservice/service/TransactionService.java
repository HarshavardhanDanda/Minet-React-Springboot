package com.minet.portfolioservice.service;

import com.minet.portfolioservice.dto.TransactionDto;
import com.minet.portfolioservice.exceptionHandler.RecordNotFoundException;

import java.util.List;

public interface TransactionService {
    List<TransactionDto> getAllTransactions();

    String createTransaction(TransactionDto dto) throws RecordNotFoundException;

    List<TransactionDto> getUserTransactions(int userId) throws RecordNotFoundException;

    List<TransactionDto> getUserCoinTransactions(int userId,int coinId) throws RecordNotFoundException;

    List<TransactionDto> getCoinTransactions(int coinId) throws RecordNotFoundException;
}
