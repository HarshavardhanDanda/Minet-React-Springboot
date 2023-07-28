package com.minet.portfolioservice.repository;

import com.minet.portfolioservice.entity.Watchlist;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface WatchListRepository extends JpaRepository<Watchlist,Integer> {
    @Query("SELECT W FROM Watchlist W where W.user.id=:userId")
    public List<Watchlist> getUserWatchLists(@Param("userId") int userId);
}
