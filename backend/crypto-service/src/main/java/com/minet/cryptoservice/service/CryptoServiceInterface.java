package com.minet.cryptoservice.service;

import com.minet.cryptoservice.dto.CryptoCurrencyDto;

import java.util.List;

public interface CryptoServiceInterface {
    List<CryptoCurrencyDto> getAllCurrencies();
    CryptoCurrencyDto getCurrencyById(int id);
    CryptoCurrencyDto updateCurrency(int id, CryptoCurrencyDto updatedCurrency);
}
