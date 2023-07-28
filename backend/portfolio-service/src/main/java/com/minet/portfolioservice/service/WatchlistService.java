package com.minet.portfolioservice.service;

import com.minet.portfolioservice.dto.WatchlistDto;
import com.minet.portfolioservice.exceptionHandler.RecordNotFoundException;


import java.util.List;

public interface WatchlistService {
    List<WatchlistDto> getAllWatchLists();
    List<WatchlistDto> getUserWatchLists(int userId) throws RecordNotFoundException;
}
