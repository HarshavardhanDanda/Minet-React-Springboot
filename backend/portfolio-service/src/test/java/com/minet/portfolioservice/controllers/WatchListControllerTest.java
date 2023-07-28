package com.minet.portfolioservice.controllers;

import com.minet.portfolioservice.controller.WatchlistController;
import com.minet.portfolioservice.dto.WatchlistDto;
import com.minet.portfolioservice.exceptionHandler.RecordNotFoundException;
import com.minet.portfolioservice.service.WatchlistServiceImpl;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyInt;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;

class WatchListControllerTest {
    @Mock
    WatchlistServiceImpl watchlistService;
    @InjectMocks
    WatchlistController watchlistController;
    @BeforeEach
    void init()
    {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testForPostRequest()
    {
        try {
            watchlistController.createWatchlist(new WatchlistDto());
            verify(watchlistService,times(1)).createWatchlist(any());
        }
        catch (RecordNotFoundException ex)
        {
            System.out.println(ex.getMessage());
        }
    }
    @Test
    void testToGetAllWatchLists()
    {
        try {
            watchlistController.getUserWatchlist(null);
            verify(watchlistService,times(1)).getAllWatchLists();
        }
        catch (RecordNotFoundException ex){
            System.out.println(ex.getMessage());
        }
    }
    @Test
    void testToGetUserWatchLists()
    {
        try {
            watchlistController.getUserWatchlist(Integer.parseInt("1"));
            verify(watchlistService,times(1)).getUserWatchLists(anyInt());
        }
        catch (RecordNotFoundException ex){
            System.out.println(ex.getMessage());
        }
    }
    @Test
    void testForDeleteRequest()
    {
        try {
            watchlistController.removeWatchlist(1);
            verify(watchlistService,times(1)).deleteFromWatchlist(anyInt());
        }
        catch (RecordNotFoundException ex){
            System.out.println(ex.getMessage());
        }
    }

}
