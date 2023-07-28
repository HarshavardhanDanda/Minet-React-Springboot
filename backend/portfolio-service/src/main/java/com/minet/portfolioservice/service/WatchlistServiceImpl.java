package com.minet.portfolioservice.service;

import com.minet.portfolioservice.dto.WatchlistDto;
import com.minet.portfolioservice.entity.CryptoCurrency;
import com.minet.portfolioservice.entity.User;
import com.minet.portfolioservice.entity.Watchlist;
import com.minet.portfolioservice.exceptionHandler.RecordNotFoundException;
import com.minet.portfolioservice.repository.CryptoCurrencyRepository;
import com.minet.portfolioservice.repository.UserRepository;
import com.minet.portfolioservice.repository.WatchListRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class WatchlistServiceImpl implements WatchlistService{
    @Autowired
    private WatchListRepository watchListRepository;
    @Autowired
    private CryptoCurrencyRepository cryptoCurrencyRepository;
    @Autowired
    private UserRepository userRepository;
    public List<WatchlistDto> getAllWatchLists()
    {
        List<Watchlist> watchLists=watchListRepository.findAll();
        return watchLists.stream().map((watchlist -> new WatchlistDto(watchlist.getId(),watchlist.getUser().getId(),watchlist.getCrypto().getId()))).collect(Collectors.toList());
    }
    public List<WatchlistDto> getUserWatchLists(int userId) throws RecordNotFoundException {
        Optional<User> user =userRepository.findById(userId);
        if(user.isEmpty())
        {
            throw new RecordNotFoundException("user with Id: "+userId+" was not found");
        }
        List<Watchlist> watchLists= watchListRepository.getUserWatchLists(userId);
        return watchLists.stream().map(watchlist -> new WatchlistDto(watchlist.getId(),watchlist.getUser().getId(),watchlist.getCrypto().getId())).collect(Collectors.toList());
    }

    public String deleteFromWatchlist(int watchlistId) throws RecordNotFoundException {
        Optional<Watchlist> watchlist=watchListRepository.findById(watchlistId);
        if(watchlist.isEmpty())
        {
            throw new RecordNotFoundException("unable to find the watchlist with id: "+watchlistId);
        }
        watchListRepository.deleteById(watchlistId);
        return "deleted the watchlist with id: "+watchlistId;
    }
@Transactional
    public String createWatchlist(WatchlistDto watchlistDto) throws RecordNotFoundException
    {
        Optional<CryptoCurrency> cryptoCurrency= cryptoCurrencyRepository.findById(watchlistDto.getCryptoCurrencyId());
        if(cryptoCurrency.isEmpty())
        {
            throw new RecordNotFoundException("unable to find the cryptoCurrency with id: "+watchlistDto.getCryptoCurrencyId());
        }
        Optional<User> user=userRepository.findById(watchlistDto.getUserId());
        if(user.isEmpty())
        {
            throw new RecordNotFoundException("unable to find the user with id: "+watchlistDto.getUserId());
        }
        Watchlist watchlist=new Watchlist();
        watchlist.setCrypto(cryptoCurrency.get());
        watchlist.setUser(user.get());
        watchListRepository.save(watchlist);
        return "successfully created the watchlist";
    }
}
