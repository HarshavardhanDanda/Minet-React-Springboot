package com.minet.cryptoservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.scheduling.annotation.EnableScheduling;


@EnableAutoConfiguration
@SpringBootApplication
@EnableScheduling
public class CryptoServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(CryptoServiceApplication.class, args);
	}

}
