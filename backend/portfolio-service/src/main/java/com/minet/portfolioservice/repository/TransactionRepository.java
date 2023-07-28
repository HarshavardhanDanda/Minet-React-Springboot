package com.minet.portfolioservice.repository;

import com.minet.portfolioservice.entity.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TransactionRepository extends JpaRepository<Transaction,Integer> {
    @Query("SELECT T FROM Transaction T WHERE T.user.id=:userId")
    List<Transaction> getUserTransactions(@Param("userId") int userId);
    @Query("SELECT T FROM Transaction T WHERE T.user.id=:userId AND T.crypto.id=:cryptoId")
    List<Transaction> getUserCryptoTransactions(@Param("userId")int userId,@Param("cryptoId")int cryptoId);

    @Query("SELECT T FROM Transaction T WHERE T.crypto.id=:coinId")
    List<Transaction> getCoinTransactions(@Param("coinId") int coinId);
}
