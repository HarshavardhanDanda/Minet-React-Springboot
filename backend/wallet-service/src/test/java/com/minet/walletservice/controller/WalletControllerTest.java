package com.minet.walletservice.controller;

import com.minet.walletservice.dto.WalletDTO;
import com.minet.walletservice.entity.Wallet;
import com.minet.walletservice.mapper.WalletMapper;
import com.minet.walletservice.service.WalletService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class WalletControllerTest {

    @Mock
    private WalletMapper walletMapper;

    @Mock
    private WalletService walletService;

    @InjectMocks
    private WalletController walletController;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }


    @Test
    void testAddWallet() {
        WalletDTO walletDTO = new WalletDTO();
        walletDTO.setId(1);
        walletDTO.setBalance(100.0);
        Wallet wallet = new Wallet();
        wallet.setId(1);
        wallet.setBalance(100.0);

        when(walletService.addWallet(walletDTO)).thenReturn(wallet);

        when(walletMapper.convertToWalletDTO(wallet)).thenReturn(walletDTO);

        WalletDTO result = walletController.addWallet(walletDTO);

        assertEquals(walletDTO, result);
    }

    @Test
    void testUpdateWallet() {
        int walletId = 1;

        WalletDTO walletDTO = new WalletDTO();
        walletDTO.setId(1);
        walletDTO.setBalance(200.0);

        Wallet wallet = new Wallet();
        wallet.setId(1);
        wallet.setBalance(200.0);

        when(walletService.updateWallet(walletId, walletDTO)).thenReturn(wallet);

        when(walletMapper.convertToWalletDTO(wallet)).thenReturn(walletDTO);

        WalletDTO result = walletController.updateWallet(walletId, walletDTO);

        assertEquals(walletDTO, result);
    }
    @Test
    void testToFindAllWallets() {
        Wallet wallet1 = new Wallet();
        wallet1.setId(1);
        Wallet wallet2 = new Wallet();
        wallet2.setId(2);
        List<Wallet> wallets = Arrays.asList(wallet1, wallet2);

        WalletDTO walletDTO1 = new WalletDTO();
        walletDTO1.setId(1);
        WalletDTO walletDTO2 = new WalletDTO();
        walletDTO2.setId(2);
        List<WalletDTO> expectedDTOs = Arrays.asList(walletDTO1, walletDTO2);

        when(walletService.findAllWallets()).thenReturn(wallets);
        when(walletMapper.convertToWalletDTO(wallet1)).thenReturn(walletDTO1);
        when(walletMapper.convertToWalletDTO(wallet2)).thenReturn(walletDTO2);

        List<WalletDTO> result = walletController.findAllWallets();

        assertNotNull(result);
        assertEquals(expectedDTOs.size(), result.size());
        assertEquals(expectedDTOs, result);
        verify(walletService).findAllWallets();
        verify(walletMapper, times(2)).convertToWalletDTO(any(Wallet.class));
    }


    @Test
    void testToGetWalletsByUserId() {
        int userId = 1;
        Wallet wallet1 = new Wallet();
        wallet1.setId(1);
        Wallet wallet2 = new Wallet();
        wallet2.setId(2);
        List<Wallet> wallets = Arrays.asList(wallet1, wallet2);

        WalletDTO walletDTO1 = new WalletDTO();
        walletDTO1.setId(1);
        WalletDTO walletDTO2 = new WalletDTO();
        walletDTO2.setId(2);
        List<WalletDTO> expectedDTOs = Arrays.asList(walletDTO1, walletDTO2);

        when(walletService.getWalletsByUserId(userId)).thenReturn(wallets);
        when(walletMapper.convertToWalletDTO(wallet1)).thenReturn(walletDTO1);
        when(walletMapper.convertToWalletDTO(wallet2)).thenReturn(walletDTO2);

        List<WalletDTO> result = walletController.getWalletsByUserId(userId);

        assertNotNull(result);
        assertEquals(expectedDTOs.size(), result.size());
        assertEquals(expectedDTOs, result);
        verify(walletService).getWalletsByUserId(userId);
        verify(walletMapper, times(2)).convertToWalletDTO(any(Wallet.class));
    }

    @Test
    void testToGetWalletsByUserIdWithException() {
        int userId = 123;

        doThrow(new RuntimeException("Some error occurred.")).when(walletService).getWalletsByUserId(userId);

        ResponseStatusException exception =
                org.junit.jupiter.api.Assertions.assertThrows(
                        ResponseStatusException.class,
                        () -> walletController.getWalletsByUserId(userId)
                );
        assertEquals(HttpStatus.NOT_FOUND, exception.getStatus());
        assertEquals("No wallets found", exception.getReason());
    }



    @Test
    void testToGetWalletByUserAndCoinIdWithValidUserIdAndCoinId() {
        int userId = 1;
        int coinId = 1;
        Wallet wallet = new Wallet();
        wallet.setId(1);
        WalletDTO walletDTO = new WalletDTO();
        walletDTO.setId(1);

        when(walletService.getWalletByUserAndCoinId(userId, coinId)).thenReturn(wallet);
        when(walletMapper.convertToWalletDTO(wallet)).thenReturn(walletDTO);

        WalletDTO result = walletController.getWalletByUserAndCoinId(userId, coinId);

        assertNotNull(result);
        assertEquals(walletDTO, result);
        verify(walletService).getWalletByUserAndCoinId(userId, coinId);
        verify(walletMapper).convertToWalletDTO(wallet);
    }

    @Test
    void testToGetWalletByUserAndCoinIdWithInvalidUserIdOrCoinId() {
        int userId = 1;
        int coinId = 1;

        when(walletService.getWalletByUserAndCoinId(userId, coinId)).thenThrow(new IllegalArgumentException("Wallet not found"));

        assertThrows(ResponseStatusException.class, () -> walletController.getWalletByUserAndCoinId(userId, coinId));
        verify(walletService).getWalletByUserAndCoinId(userId, coinId);
    }
    @Test
    void testToFindWalletByIdWithValidWalletId() {
        int walletId = 1;
        Wallet wallet = new Wallet();
        wallet.setId(walletId);
        WalletDTO walletDTO = new WalletDTO();
        walletDTO.setId(walletId);

        when(walletService.findWalletById(walletId)).thenReturn(wallet);
        when(walletMapper.convertToWalletDTO(wallet)).thenReturn(walletDTO);

        WalletDTO result = walletController.findWalletById(walletId);

        assertNotNull(result);
        assertEquals(walletDTO, result);
        verify(walletService).findWalletById(walletId);
        verify(walletMapper).convertToWalletDTO(wallet);
    }
}
