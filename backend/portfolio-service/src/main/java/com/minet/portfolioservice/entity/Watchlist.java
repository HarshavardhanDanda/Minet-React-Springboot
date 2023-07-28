package com.minet.portfolioservice.entity;

import lombok.*;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "watchlist")
public class Watchlist {
    @Id
            @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;
    @ManyToOne
    @JoinColumn(name = "user_id")
    User user;
    @ManyToOne
    @JoinColumn(name = "crypto_currency_id")
    CryptoCurrency crypto;

    @Override
    public String toString() {
        return "Watchlist{" +
                "id=" + id +
                ", user=" + user +
                ", crypto=" + crypto +
                '}';
    }
}
