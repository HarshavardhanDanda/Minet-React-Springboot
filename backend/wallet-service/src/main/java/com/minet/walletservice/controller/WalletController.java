package com.minet.walletservice.controller;

import com.minet.walletservice.dto.WalletDTO;
import com.minet.walletservice.entity.Wallet;
import com.minet.walletservice.mapper.WalletMapper;
import com.minet.walletservice.service.WalletService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@RestController
@CrossOrigin(origins = {"http://localhost:4000","https://bc88-fe.fe-assignment.tk"},methods = {RequestMethod.GET,RequestMethod.POST,RequestMethod.DELETE,RequestMethod.PUT,RequestMethod.PATCH})
@RequestMapping("/wallets")
public class WalletController {

    @Autowired
    private WalletMapper walletMapper;
    @Autowired
    private WalletService walletService;

    @GetMapping("/{walletId}")
    public WalletDTO findWalletById(@PathVariable int walletId) {
        Wallet wallet = walletService.findWalletById(walletId);
        return walletMapper.convertToWalletDTO(wallet);
    }

    @GetMapping("/")
    public List<WalletDTO> findAllWallets(){
        List<Wallet> wallets = walletService.findAllWallets();
        return wallets.stream()
                .map(walletMapper::convertToWalletDTO)
                .collect(Collectors.toList());
    }

    @PostMapping
    public WalletDTO addWallet(@RequestBody WalletDTO wallet) {
        Wallet newWallet = walletService.addWallet(wallet);
        return walletMapper.convertToWalletDTO(newWallet);
    }

    @PutMapping("/{walletId}")
    public WalletDTO updateWallet(@PathVariable(name = "walletId") int walletId, @RequestBody WalletDTO wallet) {
        Wallet newWallet = walletService.updateWallet(walletId, wallet);
        return walletMapper.convertToWalletDTO(newWallet);
    }

    @GetMapping(params = "userId")
    public List<WalletDTO> getWalletsByUserId(@RequestParam int userId) {
        try {
            log.info(" >>> INSIDE UserWalletController: getAllUserWallets");
            List<Wallet> wallets = walletService.getWalletsByUserId(userId);
            return wallets.stream()
                    .map(walletMapper::convertToWalletDTO)
                    .collect(Collectors.toList());
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No wallets found");
        }
    }

    @GetMapping(params = {"cryptoCurrencyId", "userId"})
    public WalletDTO getWalletByUserAndCoinId(@RequestParam int userId, @RequestParam int cryptoCurrencyId) {
        try {
            log.info(">>> INSIDE WalletController: getWalletByUserAndCoinId");
            Wallet wallet = walletService.getWalletByUserAndCoinId(userId, cryptoCurrencyId);
            return walletMapper.convertToWalletDTO(wallet);
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Wallet not found");
        }
    }

}
