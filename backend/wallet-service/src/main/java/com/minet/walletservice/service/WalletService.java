package com.minet.walletservice.service;

import com.minet.walletservice.dto.WalletDTO;
import com.minet.walletservice.entity.CryptoCurrency;
import com.minet.walletservice.entity.User;
import com.minet.walletservice.entity.Wallet;
import com.minet.walletservice.exception.WalletNotFoundException;
import com.minet.walletservice.repository.CryptoCurrencyRepository;
import com.minet.walletservice.repository.UserRepository;
import com.minet.walletservice.repository.WalletRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Slf4j
@Service
public class WalletService {

    final String string1 = "Wallet not found with id:";
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private CryptoCurrencyRepository cryptoCurrencyRepository;
    @Autowired
    private WalletRepository walletRepository;


    public Wallet findWalletById(int walletId) {
        Optional<Wallet> result = walletRepository.findById(walletId);
        if (result.isEmpty()) {
            log.error(string1 + walletId);
            throw new WalletNotFoundException(string1 + walletId);
        }
        log.info(string1 + walletId);
        return result.get();
    }
    @Transactional
    public Wallet addWallet(WalletDTO wallet) {
        Optional<User> user = userRepository.findById(wallet.getUserId());
        if (user.isEmpty()) {
            throw new WalletNotFoundException("unable to find user with Id: " + wallet.getUserId());
        }
        Optional<CryptoCurrency> crypto = cryptoCurrencyRepository.findById(wallet.getCryptoCurrencyId());
        if (crypto.isEmpty()){
            throw new WalletNotFoundException("unable to find crypto currency with Id: " + wallet.getCryptoCurrencyId());
        }
        Wallet obj = new Wallet();
        obj.setBalance(wallet.getBalance());
        obj.setName(wallet.getName());
        obj.setCrypto(crypto.get());
        obj.setUser(user.get());
        obj.setPriceChange(wallet.getPriceChange());
        walletRepository.save(obj);
        return obj;
    }

    public List<Wallet> findAllWallets() {
        return walletRepository.findAll();
    }
@Transactional
    public Wallet updateWallet(int walletId, WalletDTO wallet) {
        Optional<Wallet> optionalWallet = walletRepository.findById(walletId);
        if (optionalWallet.isEmpty()) {
            log.error(string1 + walletId);
            throw new WalletNotFoundException(string1 + walletId);
        }
        Wallet existingWallet = optionalWallet.get();
        existingWallet.setBalance(wallet.getBalance());
        walletRepository.save(existingWallet);
        return existingWallet;
    }

    public List<Wallet> getWalletsByUserId(int userId) {
        return walletRepository.findByUserId(userId);
    }

    public Wallet getWalletByUserAndCoinId(int userId, int coinId) {
        return walletRepository.findByUserIdAndCoinId(userId, coinId)
                .orElseThrow(() -> new IllegalArgumentException("Wallet not found"));
    }
}
