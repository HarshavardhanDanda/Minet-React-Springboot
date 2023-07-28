package com.minet.portfolioservice.service;

import com.minet.portfolioservice.dto.WatchlistDto;
import com.minet.portfolioservice.entity.CryptoCurrency;
import com.minet.portfolioservice.entity.User;
import com.minet.portfolioservice.entity.Watchlist;
import com.minet.portfolioservice.exceptionHandler.RecordNotFoundException;
import com.minet.portfolioservice.repository.CryptoCurrencyRepository;
import com.minet.portfolioservice.repository.UserRepository;
import com.minet.portfolioservice.repository.WatchListRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

class WatchListServiceTest {
    @Mock
    UserRepository userRepository;
    @Mock
    CryptoCurrencyRepository cryptoCurrencyRepository;
    @Mock
    WatchListRepository watchListRepository;
    @InjectMocks
    WatchlistServiceImpl watchlistService;

    @BeforeEach
    void init()
    {
        MockitoAnnotations.openMocks(this);
    }


    @Test
    void testForGetWatchlistByUserWithoutUser()
    {
        when(userRepository.findById(anyInt())).thenReturn(Optional.empty());
        try {
            watchlistService.getUserWatchLists(1);
        }
        catch (RecordNotFoundException exception)
        {
            assertEquals("user with Id: 1 was not found",exception.getMessage());
        }
    }
    @Test
    void testForGetWatchlistByUser()
    {
        User user=new User();
        when(userRepository.findById(anyInt())).thenReturn(Optional.of(user));
        try {
            watchlistService.getUserWatchLists(1);
            verify(watchListRepository,times(1)).getUserWatchLists(anyInt());
        }
        catch (RecordNotFoundException ex){
            System.out.println(ex.getMessage());
        }
    }
    @Test
    void testToDeleteFromWatchlistWithOutWatchlist()
    {
        when(watchListRepository.findById(anyInt())).thenReturn(Optional.empty());
        try {
            watchlistService.deleteFromWatchlist(1);
        }
        catch (RecordNotFoundException ex)
        {
            assertEquals("unable to find the watchlist with id: 1",ex.getMessage());
        }
    }
    @Test
    void testToDeleteFromWatchlist()
    {
        Watchlist watchlist=new Watchlist();
        when(watchListRepository.findById(anyInt())).thenReturn(Optional.of(watchlist));
        try {
            watchlistService.deleteFromWatchlist(0);
            verify(watchListRepository,times(1)).deleteById(anyInt());
        }
        catch (RecordNotFoundException ex)
        {
            System.out.println(ex.getMessage());
        }
    }
    @Test
    void testToCreateWatchlistWithOutSpecifiedCoinId()
    {
        WatchlistDto dto=new WatchlistDto();
        when(cryptoCurrencyRepository.findById(anyInt())).thenReturn(Optional.empty());
        try {
            watchlistService.createWatchlist(dto);
        }
        catch (RecordNotFoundException ex)
        {
            assertEquals("unable to find the cryptoCurrency with id: 0",ex.getMessage());
        }
    }
    @Test
    void testToCreateWatchlistWithOutSpecifiedUserId()
    {
        WatchlistDto dto=new WatchlistDto();
        CryptoCurrency cryptoCurrency=new CryptoCurrency();
        when(cryptoCurrencyRepository.findById(anyInt())).thenReturn(Optional.of(cryptoCurrency));
        when(userRepository.findById(anyInt())).thenReturn(Optional.empty());
        try {
            watchlistService.createWatchlist(dto);
        }
        catch (RecordNotFoundException ex)
        {
            assertEquals("unable to find the user with id: 0",ex.getMessage());
        }
    }
    @Test
    void testToCreateWatchlist()
    {
        WatchlistDto dto=new WatchlistDto();
        CryptoCurrency cryptoCurrency=new CryptoCurrency();
        User user=new User();
        when(cryptoCurrencyRepository.findById(anyInt())).thenReturn(Optional.of(cryptoCurrency));
        when(userRepository.findById(anyInt())).thenReturn(Optional.of(user));
        try {
            watchlistService.createWatchlist(dto);
            verify(watchListRepository,times(1)).save(any());
        }
        catch (RecordNotFoundException ex)
        {
            System.out.println(ex.getMessage());
        }
    }
    @Test
    void testForGetAllWatchlist()
    {
        watchlistService.getAllWatchLists();
        verify(watchListRepository,times(1)).findAll();
    }

}
