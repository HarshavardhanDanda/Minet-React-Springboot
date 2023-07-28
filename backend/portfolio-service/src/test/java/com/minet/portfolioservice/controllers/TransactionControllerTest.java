package com.minet.portfolioservice.controllers;

import com.minet.portfolioservice.controller.TransactionController;
import com.minet.portfolioservice.dto.TransactionDto;
import com.minet.portfolioservice.exceptionHandler.RecordNotFoundException;
import com.minet.portfolioservice.service.TransactionService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyInt;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;

class TransactionControllerTest {
    @Mock
    TransactionService transactionService;
    @InjectMocks
    TransactionController transactionController;
    @BeforeEach
    void init(){
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testToGetAllTransactions()
    {
        try {
            transactionController.getTransactions(null,null);
            verify(transactionService,times(1)).getAllTransactions();
        }
        catch (RecordNotFoundException exception)
        {
            System.out.println(exception.getMessage());
        }
    }
    @Test
    void testToGetAllTransactionsOfAUser()
    {
        try {
            transactionController.getTransactions(Integer.parseInt("1"),null);
            verify(transactionService,times(1)).getUserTransactions(anyInt());
        }
        catch (RecordNotFoundException exception)
        {
            System.out.println(exception.getMessage());
        }
    }
    @Test
    void testToGetAllTransactionsOfACoin()
    {
        try {
            transactionController.getTransactions(null,Integer.parseInt("1"));
            verify(transactionService,times(1)).getCoinTransactions(anyInt());
        }
        catch (RecordNotFoundException exception)
        {
            System.out.println(exception.getMessage());
        }
    }
    @Test
    void testToGetAllTransactionsOfAUserAndCoin()
    {
        try {
            transactionController.getTransactions(Integer.parseInt("1"),Integer.parseInt("1"));
            verify(transactionService,times(1)).getUserCoinTransactions(anyInt(),anyInt());
        }
        catch (RecordNotFoundException exception)
        {
            System.out.println(exception.getMessage());
        }
    }
    @Test
    void testForCreateTransaction()
    {
        TransactionDto dto=new TransactionDto();
        try{
            transactionController.createUserTransaction(dto);
            verify(transactionService,times(1)).createTransaction(any());
        }
        catch (RecordNotFoundException ex)
        {
            System.out.println(ex.getMessage());
        }
    }
}
