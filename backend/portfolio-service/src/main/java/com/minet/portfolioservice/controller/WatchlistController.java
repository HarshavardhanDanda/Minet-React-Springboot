package com.minet.portfolioservice.controller;

import com.minet.portfolioservice.dto.WatchlistDto;
import com.minet.portfolioservice.exceptionHandler.RecordNotFoundException;
import com.minet.portfolioservice.service.WatchlistServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = {"http://localhost:4000","https://bc88-fe.fe-assignment.tk"},methods = {RequestMethod.GET,RequestMethod.POST,RequestMethod.DELETE,RequestMethod.PUT,RequestMethod.PATCH})
@RequestMapping("/portfolio")
public class WatchlistController {
    @Autowired
    WatchlistServiceImpl watchlistService;

    @GetMapping("/watchLists")
    public List<WatchlistDto> getUserWatchlist(@RequestParam(required = false) Integer userId) throws RecordNotFoundException {
        if(userId==null)
            return watchlistService.getAllWatchLists();
        else
            return watchlistService.getUserWatchLists(userId.intValue());
    }
    @DeleteMapping("/watchLists/{id}")
    public String removeWatchlist(@PathVariable(name = "id") int id) throws RecordNotFoundException
    {
        return watchlistService.deleteFromWatchlist((id));
    }
    @PostMapping("/watchLists")
    public  String createWatchlist(@RequestBody WatchlistDto watchlistDto) throws RecordNotFoundException
    {
        return watchlistService.createWatchlist(watchlistDto);
    }
}
