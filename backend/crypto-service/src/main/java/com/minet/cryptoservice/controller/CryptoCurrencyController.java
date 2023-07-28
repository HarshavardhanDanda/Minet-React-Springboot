package com.minet.cryptoservice.controller;
import com.minet.cryptoservice.dto.CryptoCurrencyDto;
import com.minet.cryptoservice.exception.CurrencyNotFoundException;
import com.minet.cryptoservice.service.CryptoServiceImplementation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

@RestController
@CrossOrigin(origins = {"http://localhost:4000","https://bc88-fe.fe-assignment.tk"},methods = {RequestMethod.GET,RequestMethod.POST,RequestMethod.DELETE,RequestMethod.PUT,RequestMethod.PATCH})
@RequestMapping("/cryptocurrency")
public class CryptoCurrencyController {
    @Autowired
    private CryptoServiceImplementation cryptoServiceImplementation;

    @GetMapping
    public ResponseEntity<List<CryptoCurrencyDto>> getAllCurrencies() throws CurrencyNotFoundException {
        List<CryptoCurrencyDto> currenciesDtos = cryptoServiceImplementation.getAllCurrencies();
        return ResponseEntity.ok(currenciesDtos);
    }
    @GetMapping("/{id}")
    public ResponseEntity<CryptoCurrencyDto> getTransactionById(@PathVariable int id) throws CurrencyNotFoundException{
        try {
            CryptoCurrencyDto currencyDto = cryptoServiceImplementation.getCurrencyById(id);
            return ResponseEntity.ok(currencyDto);
        } catch (CurrencyNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }

   @PutMapping("/{id}")
    public ResponseEntity<CryptoCurrencyDto> updateCurrency(@PathVariable int id, @RequestBody CryptoCurrencyDto updatedCurrency) throws CurrencyNotFoundException{

            CryptoCurrencyDto currencyDto = cryptoServiceImplementation.updateCurrency(id, updatedCurrency);
            return ResponseEntity.ok(currencyDto);

    }

}