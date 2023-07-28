package com.minet.walletservice.repository;

import com.minet.walletservice.entity.Wallet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface WalletRepository extends JpaRepository<Wallet, Integer> {
    @Query("SELECT W FROM Wallet W WHERE W.user.id=:userId")
    List<Wallet> findByUserId(@Param("userId") int userId);

    @Query("SELECT W FROM Wallet W WHERE W.user.id=:userId AND W.crypto.id=:coinId")
    Optional<Wallet> findByUserIdAndCoinId(@Param("userId") int userId,@Param("coinId") int coinId);
}
