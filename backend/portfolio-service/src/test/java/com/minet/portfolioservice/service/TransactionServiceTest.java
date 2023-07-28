package com.minet.portfolioservice.service;
import com.minet.portfolioservice.dto.TransactionDto;
import com.minet.portfolioservice.entity.CryptoCurrency;
import com.minet.portfolioservice.entity.Transaction;
import com.minet.portfolioservice.entity.User;
import com.minet.portfolioservice.entity.Wallet;
import com.minet.portfolioservice.exceptionHandler.RecordNotFoundException;
import com.minet.portfolioservice.repository.CryptoCurrencyRepository;
import com.minet.portfolioservice.repository.TransactionRepository;
import com.minet.portfolioservice.repository.UserRepository;
import com.minet.portfolioservice.repository.WalletRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.anyInt;
import static org.mockito.Mockito.*;


class TransactionServiceTest {
    @Mock
    TransactionRepository transactionRepository;
    @Mock
    UserRepository userRepository;
    @Mock
    CryptoCurrencyRepository cryptoCurrencyRepository;
    @Mock
    WalletRepository walletRepository;
    @InjectMocks
    TransactionServiceImpl transactionService;
    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testToCheckTheCreateTransactionWithNotFoundUser()
    {
        TransactionDto dto=new TransactionDto();
        when(userRepository.findById(0)).thenReturn(Optional.empty());
        try{transactionService.createTransaction(dto);}
        catch (RecordNotFoundException e)
        {
            assertEquals("unable to find user with id: 0",e.getMessage());
        }
    }
    @Test
    void testToCheckTransactionServiceWithCryptoNotFound()
    {
        TransactionDto dto=new TransactionDto();
        User user=new User();
        when(userRepository.findById(anyInt())).thenReturn(Optional.of(user));
        when(cryptoCurrencyRepository.findById(anyInt())).thenReturn(Optional.empty());
        try{transactionService.createTransaction(dto);}
        catch (RecordNotFoundException e)
        {
            assertEquals("unable to find cryptoCurrency with Id: 0",e.getMessage());
        }
    }
    @Test
    void testToCheckTransactionWithWalletNotFound()
    {
        TransactionDto dto=new TransactionDto();
        User user=new User();
        CryptoCurrency cryptoCurrency=new CryptoCurrency();
        when(userRepository.findById(anyInt())).thenReturn(Optional.of(user));
        when(cryptoCurrencyRepository.findById(anyInt())).thenReturn(Optional.of(cryptoCurrency));
        when(walletRepository.findById(anyInt())).thenReturn(Optional.empty());
        try{transactionService.createTransaction(dto);}
        catch (RecordNotFoundException e)
        {
            assertEquals("unable to find wallet with Id: 0",e.getMessage());
        }
    }
    @Test
    void testToCheckCreateTransaction()
    {
        TransactionDto dto=new TransactionDto();
        User user=new User();
        CryptoCurrency cryptoCurrency=new CryptoCurrency();
        Wallet wallet=new Wallet();
        when(userRepository.findById(anyInt())).thenReturn(Optional.of(user));
        when(cryptoCurrencyRepository.findById(anyInt())).thenReturn(Optional.of(cryptoCurrency));
        when(walletRepository.findById(anyInt())).thenReturn(Optional.of(wallet));
        try{
            String result=transactionService.createTransaction(dto);
            verify(transactionRepository,times(1)).save(any());
            assertEquals("created a new transaction successfully",result);
        }
        catch (RecordNotFoundException ex)
        {
            System.out.println(ex);
        }
    }
    @Test
    void testForGetUserTransactionWithNoUser()
    {
        when(userRepository.findById(anyInt())).thenReturn(Optional.empty());
        try{
            transactionService.getUserTransactions(1);
        }
        catch (RecordNotFoundException ex)
        {
            assertEquals("user with id: 1 not found",ex.getMessage());
        }
    }
    @Test
    void testForGetUserTransactionWithUser()
    {
        User user=new User();
        when(userRepository.findById(anyInt())).thenReturn(Optional.of(user));
        try {
            transactionService.getUserTransactions(1);
            verify(transactionRepository,times(1)).getUserTransactions(anyInt());
        }
        catch (RecordNotFoundException e)
        {
            System.out.println(e.getMessage());
        }
    }
    @Test
    void testForGetUserCoinTransactionWithNoUser()
    {
        when(userRepository.findById(anyInt())).thenReturn(Optional.empty());
        try{
            transactionService.getUserCoinTransactions(1,1);
        }
        catch (RecordNotFoundException ex)
        {
            assertEquals("user with id: 1 is not found",ex.getMessage());
        }
    }

    @Test
    void testForGetUserCoinTransactionWithNoCoin()
    {
        User user=new User();
        when(userRepository.findById(anyInt())).thenReturn(Optional.of(user));
        when(cryptoCurrencyRepository.findById(anyInt())).thenReturn(Optional.empty());
        try{
            transactionService.getUserCoinTransactions(1,1);
        }
        catch (RecordNotFoundException ex)
        {
            assertEquals("cryptoCurrency with Id: 1 is not found",ex.getMessage());
        }
    }
    @Test
    void testForGetUserCoinTransaction()
    {
        User user=new User();
        CryptoCurrency cryptoCurrency=new CryptoCurrency();
        when(userRepository.findById(anyInt())).thenReturn(Optional.of(user));
        when(cryptoCurrencyRepository.findById(anyInt())).thenReturn(Optional.of(cryptoCurrency));
        try{
            transactionService.getUserCoinTransactions(1,1);
            verify(transactionRepository,times(1)).getUserCryptoTransactions(anyInt(),anyInt());
        }
        catch (RecordNotFoundException ex)
        {
            System.out.println(ex.getMessage());
        }
    }

    @Test
    void testForGetTransactionByCoinWithOutCoin()
    {
        when(cryptoCurrencyRepository.findById(anyInt())).thenReturn(Optional.empty());
        try {
            transactionService.getCoinTransactions(1);
        }
        catch (RecordNotFoundException e)
        {
            assertEquals("cryptoCurrency with Id: 1 is not found",e.getMessage());
        }
    }
    @Test
    void testForGetTransactionByCoin()
    {
        CryptoCurrency cryptoCurrency=new CryptoCurrency();
        when(cryptoCurrencyRepository.findById(anyInt())).thenReturn(Optional.of(cryptoCurrency));
        try {
            transactionService.getCoinTransactions(1);
            verify(transactionRepository,times(1)).getCoinTransactions(anyInt());
        }
        catch (RecordNotFoundException e)
        {
            System.out.println(e.getMessage());
        }
    }
    @Test
    void testToCheckTheFindAllTransactions()
    {
        List<Transaction> transactions=new ArrayList<>();
        transactionService.getAllTransactions();
        verify(transactionRepository,times(1)).findAll();
    }


}
