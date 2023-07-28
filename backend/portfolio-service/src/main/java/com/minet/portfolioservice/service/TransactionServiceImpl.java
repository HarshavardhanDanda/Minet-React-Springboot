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
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class TransactionServiceImpl implements TransactionService{

    final String s = " is not found" ;
    @Autowired
    private TransactionRepository transactionRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private CryptoCurrencyRepository cryptoCurrencyRepository;
    @Autowired
    private WalletRepository walletRepository;
    @Override
    public List<TransactionDto> getAllTransactions() {
        List<Transaction> transactions=transactionRepository.findAll();
        return convertTransactionToDTO(transactions);
    }

    @Override
    @Transactional
    public String createTransaction(TransactionDto dto) throws RecordNotFoundException{
        Optional<User> user=userRepository.findById(dto.getUserId());
        if(user.isEmpty())
        {
            throw new RecordNotFoundException("unable to find user with id: "+dto.getUserId());
        }
        Optional<CryptoCurrency> cryptoCurrency=cryptoCurrencyRepository.findById(dto.getCryptoCurrencyId());
        if(cryptoCurrency.isEmpty())
        {
            throw new RecordNotFoundException("unable to find cryptoCurrency with Id: "+dto.getCryptoCurrencyId());
        }
        Optional<Wallet> wallet=walletRepository.findById(dto.getWalletId());
        if(wallet.isEmpty()){
            throw new RecordNotFoundException("unable to find wallet with Id: "+dto.getWalletId());
        }
        Transaction transaction=new Transaction();
        transaction.setAmount(dto.getAmount());
        transaction.setTransactionType(dto.getTransactionType());
        transaction.setStatus(dto.getStatus());
        transaction.setTransactionFee(dto.getTransactionFee());
        transaction.setTransactionTime(dto.getTransactionTime());
        transaction.setQuantity(dto.getQuantity());
        transaction.setUser(user.get());
        transaction.setCrypto(cryptoCurrency.get());
        transaction.setWallet(wallet.get());
        transactionRepository.save(transaction);
        return "created a new transaction successfully";
    }

    @Override
    public List<TransactionDto> getUserTransactions(int userId) throws RecordNotFoundException{
        Optional<User> user=userRepository.findById(userId);
        if(user.isEmpty())
        {
            throw new RecordNotFoundException("user with id: "+userId+" not found");
        }
        List<Transaction> transactions=transactionRepository.getUserTransactions(userId);
        return convertTransactionToDTO(transactions);
    }

    @Override
    public List<TransactionDto> getUserCoinTransactions(int userId, int coinId) throws RecordNotFoundException{
        Optional<User> user=userRepository.findById(userId);
        if(user.isEmpty())
        {
            throw new RecordNotFoundException("user with id: "+userId+s);
        }
        Optional<CryptoCurrency> cryptoCurrency=cryptoCurrencyRepository.findById(coinId);
        if(cryptoCurrency.isEmpty())
        {
            throw new RecordNotFoundException("cryptoCurrency with Id: "+coinId+s);
        }
        List<Transaction> transactions=transactionRepository.getUserCryptoTransactions(userId,coinId);
        return convertTransactionToDTO(transactions);
    }

    @Override
    public List<TransactionDto> getCoinTransactions(int coinId) throws RecordNotFoundException{
        Optional<CryptoCurrency> cryptoCurrency=cryptoCurrencyRepository.findById(coinId);
        if(cryptoCurrency.isEmpty())
        {
            throw new RecordNotFoundException("cryptoCurrency with Id: "+coinId+s);
        }
        List<Transaction> transactions=transactionRepository.getCoinTransactions(coinId);
        return convertTransactionToDTO(transactions);
    }

    public List<TransactionDto> convertTransactionToDTO(List<Transaction> transactions)
    {
        return transactions.stream().map(transaction -> new TransactionDto(transaction.getId(),transaction.getAmount(),transaction.getTransactionType(),transaction.getStatus(),transaction.getTransactionFee(),transaction.getTransactionTime(),transaction.getQuantity(),transaction.getUser().getId(),transaction.getCrypto().getId(),transaction.getWallet().getId())).collect(Collectors.toList());
    }
}
