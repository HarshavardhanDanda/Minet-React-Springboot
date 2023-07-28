package com.minet.walletservice.service;

import com.minet.walletservice.dto.WalletDTO;
import com.minet.walletservice.entity.CryptoCurrency;
import com.minet.walletservice.entity.User;
import com.minet.walletservice.entity.Wallet;
import com.minet.walletservice.exception.WalletNotFoundException;
import com.minet.walletservice.repository.CryptoCurrencyRepository;
import com.minet.walletservice.repository.UserRepository;
import com.minet.walletservice.repository.WalletRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class WalletServiceTest {

    @Mock
    private UserRepository userRepository;

    @Mock
    private CryptoCurrencyRepository cryptoCurrencyRepository;

    @Mock
    private WalletRepository walletRepository;

    @InjectMocks
    private WalletService walletService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }



    @Test
    void testToFindWalletByIdWithNonExistingWalletId() {
        int walletId = 1;
        when(walletRepository.findById(walletId)).thenReturn(Optional.empty());

        assertThrows(WalletNotFoundException.class, () -> walletService.findWalletById(walletId));
        verify(walletRepository).findById(walletId);
    }

    @Test
    void testToAddWallet() {
        WalletDTO walletDTO = new WalletDTO();
        walletDTO.setUserId(1);
        walletDTO.setCryptoCurrencyId(1);
        User user = new User();
        user.setId(1);
        CryptoCurrency cryptoCurrency = new CryptoCurrency();
        cryptoCurrency.setId(1);
        Wallet wallet = new Wallet();
        when(userRepository.findById(walletDTO.getUserId())).thenReturn(Optional.of(user));
        when(cryptoCurrencyRepository.findById(walletDTO.getCryptoCurrencyId())).thenReturn(Optional.of(cryptoCurrency));
        when(walletRepository.save(any(Wallet.class))).thenReturn(wallet);

        Wallet result = walletService.addWallet(walletDTO);

        assertNotNull(result);
        verify(userRepository).findById(walletDTO.getUserId());
        verify(cryptoCurrencyRepository).findById(walletDTO.getCryptoCurrencyId());
        verify(walletRepository).save(any(Wallet.class));
    }

    @Test
    void testToAddWalletWithInvalidUserId() {
        WalletDTO walletDTO = new WalletDTO();
        walletDTO.setUserId(1);
        when(userRepository.findById(walletDTO.getUserId())).thenReturn(Optional.empty());

        assertThrows(WalletNotFoundException.class, () -> walletService.addWallet(walletDTO));
        verify(userRepository).findById(walletDTO.getUserId());
        verifyNoMoreInteractions(cryptoCurrencyRepository, walletRepository);
    }

    @Test
    void testToAddWalletWithInvalidCryptoCurrencyId() {
        WalletDTO walletDTO = new WalletDTO();
        walletDTO.setUserId(1);
        walletDTO.setCryptoCurrencyId(1);
        User user = new User();
        user.setId(1);
        when(userRepository.findById(walletDTO.getUserId())).thenReturn(Optional.of(user));
        when(cryptoCurrencyRepository.findById(walletDTO.getCryptoCurrencyId())).thenReturn(Optional.empty());

        assertThrows(WalletNotFoundException.class, () -> walletService.addWallet(walletDTO));
        verify(userRepository).findById(walletDTO.getUserId());
        verify(cryptoCurrencyRepository).findById(walletDTO.getCryptoCurrencyId());
        verifyNoMoreInteractions(walletRepository);
    }

    @Test
    void testToFindAllWallets() {
        Wallet wallet1 = new Wallet();
        wallet1.setId(1);
        Wallet wallet2 = new Wallet();
        wallet2.setId(2);
        List<Wallet> wallets = List.of(wallet1, wallet2);
        when(walletRepository.findAll()).thenReturn(wallets);

        List<Wallet> result = walletService.findAllWallets();

        assertNotNull(result);
        assertEquals(wallets.size(), result.size());
        assertEquals(wallets, result);
        verify(walletRepository).findAll();
    }

    @Test
    void testToUpdateWalletWithExistingWalletId() {
        int walletId = 1;
        WalletDTO walletDTO = new WalletDTO();
        walletDTO.setBalance(100.0);
        Wallet existingWallet = new Wallet();
        existingWallet.setId(walletId);
        when(walletRepository.findById(walletId)).thenReturn(Optional.of(existingWallet));
        when(walletRepository.save(existingWallet)).thenReturn(existingWallet);

        Wallet result = walletService.updateWallet(walletId, walletDTO);

        assertNotNull(result);
        assertEquals(existingWallet, result);
        assertEquals(walletDTO.getBalance(), result.getBalance());
        verify(walletRepository).findById(walletId);
        verify(walletRepository).save(existingWallet);
    }

    @Test
    void testToUpdateWalletWithNonExistingWalletId() {
        int walletId = 1;
        WalletDTO walletDTO = new WalletDTO();
        walletDTO.setBalance(100.0);
        when(walletRepository.findById(walletId)).thenReturn(Optional.empty());

        assertThrows(WalletNotFoundException.class, () -> walletService.updateWallet(walletId, walletDTO));
        verify(walletRepository).findById(walletId);
        verifyNoMoreInteractions(walletRepository);
    }

    @Test
    void testToGetWalletsByUserId_UserIdWithWallets() {
        // Arrange
        int userId = 1;
        Wallet wallet1 = new Wallet();
        wallet1.setId(1);
        Wallet wallet2 = new Wallet();
        wallet2.setId(2);
        List<Wallet> wallets = List.of(wallet1, wallet2);
        when(walletRepository.findByUserId(userId)).thenReturn(wallets);

        List<Wallet> result = walletService.getWalletsByUserId(userId);

        assertNotNull(result);
        assertEquals(wallets.size(), result.size());
        assertEquals(wallets, result);
        verify(walletRepository).findByUserId(userId);
    }

    @Test
    void testToGetWalletsByUserId_UserIdWithNoWallets() {
        int userId = 1;
        when(walletRepository.findByUserId(userId)).thenReturn(Collections.emptyList());

        List<Wallet> result = walletService.getWalletsByUserId(userId);

        assertNotNull(result);
        assertTrue(result.isEmpty());
        verify(walletRepository).findByUserId(userId);
    }

    @Test
    void testToGetWalletByUserAndCoinIdWithExistingUserIdAndCoinId() {
        int userId = 1;
        int coinId = 1;
        Wallet wallet = new Wallet();
        wallet.setId(1);
        when(walletRepository.findByUserIdAndCoinId(userId, coinId)).thenReturn(Optional.of(wallet));

        Wallet result = walletService.getWalletByUserAndCoinId(userId, coinId);

        assertNotNull(result);
        assertEquals(wallet, result);
        verify(walletRepository).findByUserIdAndCoinId(userId, coinId);
    }

    @Test
    void testToGetWalletByUserAndCoinIdWithNonExistingUserIdAndCoinId() {
        int userId = 1;
        int coinId = 1;
        when(walletRepository.findByUserIdAndCoinId(userId, coinId)).thenReturn(Optional.empty());

        assertThrows(IllegalArgumentException.class, () -> walletService.getWalletByUserAndCoinId(userId, coinId));
        verify(walletRepository).findByUserIdAndCoinId(userId, coinId);
    }

    @Test
    void testToFindWalletById() {
        int walletId = 1;
        Wallet wallet = new Wallet();
        wallet.setId(walletId);
        when(walletRepository.findById(walletId)).thenReturn(Optional.of(wallet));

        Wallet result = walletService.findWalletById(walletId);

        assertNotNull(result);
        assertEquals(wallet, result);
        verify(walletRepository).findById(walletId);
    }
}
