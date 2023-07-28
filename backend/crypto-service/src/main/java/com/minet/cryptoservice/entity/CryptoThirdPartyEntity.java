package com.minet.cryptoservice.entity;

import lombok.*;

import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CryptoThirdPartyEntity {
    String id;
    String symbol;
    String name;
    String image;
    double current_price;
    long market_cap;
    long total_volume;
    double price_change_percentage_24h;
    double circulating_supply;
    double total_supply;
    double max_supply;
    Date ath_date;
    double price_change_percentage_1h_in_currency;
    double price_change_percentage_24h_in_currency;
    double price_change_percentage_30d_in_currency;
    double price_change_percentage_7d_in_currency;

    @Override
    public String toString() {
        return "CryptoThirdPartyEntity{" +
                "id='" + id + '\'' +
                ", symbol='" + symbol + '\'' +
                ", name='" + name + '\'' +
                ", image='" + image + '\'' +
                ", current_price=" + current_price +
                ", market_cap=" + market_cap +
                ", total_volume=" + total_volume +
                ", price_change_percentage_24h=" + price_change_percentage_24h +
                ", circulating_supply=" + circulating_supply +
                ", total_supply=" + total_supply +
                ", max_supply=" + max_supply +
                ", ath_date=" + ath_date +
                ", price_change_percentage_1h_in_currency=" + price_change_percentage_1h_in_currency +
                ", price_change_percentage_24h_in_currency=" + price_change_percentage_24h_in_currency +
                ", price_change_percentage_30d_in_currency=" + price_change_percentage_30d_in_currency +
                ", price_change_percentage_7d_in_currency=" + price_change_percentage_7d_in_currency +
                '}';
    }
}
