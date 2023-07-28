package com.minet.portfolioservice.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class WatchlistDto {
    int id;
    int userId;
    int cryptoCurrencyId;
}
