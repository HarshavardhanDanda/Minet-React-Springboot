package com.minet.walletservice.mapper;

import com.minet.walletservice.entity.Wallet;

import com.minet.walletservice.dto.WalletDTO;
import lombok.NoArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

@Service
@NoArgsConstructor
public class WalletMapper {

    ModelMapper modelMapper = new ModelMapper();

    public WalletDTO convertToWalletDTO(Wallet wallet){

        WalletDTO obj = modelMapper.map(wallet, WalletDTO.class);
        obj.setUserId(wallet.getUser().getId());
        obj.setCryptoCurrencyId(wallet.getCrypto().getId());
        return obj;
    }

    public Wallet convertToWallet(WalletDTO walletDto){
        return modelMapper.map(walletDto, Wallet.class);
    }


}