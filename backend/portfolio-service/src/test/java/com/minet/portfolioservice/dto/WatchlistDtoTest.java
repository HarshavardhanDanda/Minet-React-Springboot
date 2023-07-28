package com.minet.portfolioservice.dto;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class WatchlistDtoTest {
    @Test
    void testForWatchListDto()
    {
        WatchlistDto watchlist1=new WatchlistDto();
        watchlist1.setId(1);
        watchlist1.setUserId(1);
        watchlist1.setCryptoCurrencyId(1);
        System.out.println(watchlist1);
        assertEquals(1,watchlist1.getId());
        assertEquals(1,watchlist1.getUserId());
        assertEquals(1,watchlist1.getCryptoCurrencyId());
        WatchlistDto watchlist2=new WatchlistDto(2,2,2);
        assertEquals(2,watchlist2.getId());
        assertEquals(2,watchlist2.getCryptoCurrencyId());
        assertEquals(2,watchlist2.getUserId());
    }
}
