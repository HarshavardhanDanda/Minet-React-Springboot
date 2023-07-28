package com.minet.portfolioservice.entitys;

import com.minet.portfolioservice.entity.CryptoCurrency;
import com.minet.portfolioservice.entity.User;
import com.minet.portfolioservice.entity.Watchlist;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class WatchListTest {
    @Test
    void testForWatchlistEntity()
    {
        User user=new User();

        CryptoCurrency cryptoCurrency=new CryptoCurrency();
        Watchlist watchlist1=new Watchlist();
        watchlist1.setId(1);
        watchlist1.setUser(user);
        watchlist1.setCrypto(cryptoCurrency);
        System.out.println(watchlist1);
        assertEquals(1,watchlist1.getId());
        assertEquals(user,watchlist1.getUser());
        assertEquals(cryptoCurrency,watchlist1.getCrypto());
        Watchlist watchlist2=new Watchlist(2,user,cryptoCurrency);
        assertEquals(2,watchlist2.getId());
        assertEquals(cryptoCurrency,watchlist2.getCrypto());
        assertEquals(user,watchlist2.getUser());
    }
}
