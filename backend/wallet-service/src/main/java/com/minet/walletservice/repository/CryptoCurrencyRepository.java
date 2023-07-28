package com.minet.walletservice.repository;

import com.minet.walletservice.entity.CryptoCurrency;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CryptoCurrencyRepository extends JpaRepository<CryptoCurrency, Integer> {
}
