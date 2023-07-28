package com.minet.cryptoservice.repository;

import com.minet.cryptoservice.entity.CryptoCurrency;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface CryptoCurrencyRepository extends JpaRepository<CryptoCurrency, Integer> {
    @Transactional
    @Modifying
    @Query("UPDATE CryptoCurrency C SET C.price=:price, C.priceAt1H=:priceAt1H, C.priceAt1D=:priceAt1D, C.priceAt1W=:priceAt1W, C.priceAt1M=:priceAt1M, C.priceChange=:priceChange, C.marketCap=:marketCap, C.circulatingSupply=:circulatingSupply, C.totalSupply=:totalSupply WHERE C.name=:name")
    void updateValues(@Param("price")double price, @Param("priceAt1H")double priceAt1H, @Param("priceAt1D")double priceAt1D, @Param("priceAt1W")double priceAt1W, @Param("priceAt1M")double priceAt1M, @Param("priceChange")double priceChange, @Param("marketCap")String marketCap, @Param("circulatingSupply")String circulatingSupply, @Param("totalSupply") String totalSupply, @Param("name")String name);
}
