package com.minet.cryptoservice.service;

import com.minet.cryptoservice.dto.CryptoCurrencyDto;
import com.minet.cryptoservice.entity.CryptoCurrency;

import com.minet.cryptoservice.entity.CryptoThirdPartyEntity;
import com.minet.cryptoservice.exception.CurrencyNotFoundException;
import com.minet.cryptoservice.repository.CryptoCurrencyRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.List;

import java.util.stream.Collectors;

@Service
public class CryptoServiceImplementation implements CryptoServiceInterface {

    @Autowired
    private CryptoCurrencyRepository cryptoCurrencyRepository;


    private final ModelMapper modelMapper;
    public CryptoServiceImplementation() {
        modelMapper = new ModelMapper();
    }
    @Override
    public List<CryptoCurrencyDto> getAllCurrencies() {
        List<CryptoCurrency> cryptoCurrency = cryptoCurrencyRepository.findAll();
        return cryptoCurrency.stream()
                .map(currency -> modelMapper.map(currency, CryptoCurrencyDto.class))
                .collect(Collectors.toList());
    }



    @Override
    public CryptoCurrencyDto getCurrencyById(int id) {
        CryptoCurrency currency = cryptoCurrencyRepository.findById(id)
                .orElseThrow(() -> new CurrencyNotFoundException("cryptocurrency not found with id: " + id));
        return modelMapper.map(currency, CryptoCurrencyDto.class);
    }

   @Override
   @Transactional
    public CryptoCurrencyDto updateCurrency(int id, CryptoCurrencyDto updatedCurrency) {
        CryptoCurrency currency = cryptoCurrencyRepository.findById(id)
                .orElseThrow(() -> new CurrencyNotFoundException("Cryptocurrency not found with id: " + id));

        currency.setName(updatedCurrency.getName());
        currency.setSymbol(updatedCurrency.getSymbol());
        currency.setIcon(updatedCurrency.getIcon());
        currency.setMarketCap(updatedCurrency.getMarketCap());
        currency.setCreated(updatedCurrency.getCreated());
        currency.setPrice(updatedCurrency.getPrice());
        currency.setPriceAt1H(updatedCurrency.getPriceAt1H());
        currency.setPriceAt1D(updatedCurrency.getPriceAt1D());
        currency.setPriceAt1W(updatedCurrency.getPriceAt1W());
        currency.setPriceAt1M(updatedCurrency.getPriceAt1M());
        currency.setTotalSupply(updatedCurrency.getTotalSupply());
        currency.setCirculatingSupply(updatedCurrency.getCirculatingSupply());
        currency.setPriceChange(updatedCurrency.getPriceChange());
        cryptoCurrencyRepository.save(currency);
        return updatedCurrency;
    }
    @Transactional
    @Scheduled(fixedRate = 18000000)
    public void updateByName() {
        String url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,polkadot,binance-usd,dogecoin,usd-coin,tether,cardano,ripple&order=market_cap_desc&per_page=250&page=1&sparkline=false&price_change_percentage=1h,24h,7d,14d,30d,200d,1y&locale=en&id=ethereum";
        RestTemplate template = new RestTemplate();
        CryptoThirdPartyEntity[] lists = template.getForEntity(url, CryptoThirdPartyEntity[].class).getBody();
        List<CryptoThirdPartyEntity> list = Arrays.asList(lists);
        list.stream().forEach(item -> {
            cryptoCurrencyRepository.updateValues(cal(item.getCurrent_price(), 0), cal(item.getCurrent_price(), item.getPrice_change_percentage_1h_in_currency()), cal(item.getCurrent_price(), item.getPrice_change_percentage_24h_in_currency()), cal(item.getCurrent_price(), item.getPrice_change_percentage_7d_in_currency()), cal(item.getCurrent_price(), item.getPrice_change_percentage_30d_in_currency()), cal(item.getPrice_change_percentage_24h(), 0), "$"+con(item.getMarket_cap()), con(item.getCirculating_supply())+item.getSymbol().toUpperCase(), "$"+con(item.getTotal_supply()), item.getName());
        });
    }

    double cal(double num, double per) {
        return Double.parseDouble(String.format("%.2f", num / (1 + per / 100)));
    }

    String con(double num) {
        if (num / 1e12 >= 1) {
            return String.format("%.2f", num / 1e12) + "T ";
        } else if (num / 1e9 >= 1) {
            return String.format("%.2f", num / 1e9) + "B ";
        } else if (num / 1e6 >= 1) {
            return String.format("%.2f", num / 1e6) + "M ";
        }
        return String.format("%.3f", num / 1000) + "K ";
    }

}