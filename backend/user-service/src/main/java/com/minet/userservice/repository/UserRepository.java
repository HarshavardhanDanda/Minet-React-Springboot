package com.minet.userservice.repository;

import com.minet.userservice.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;


@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    @Query(value="select * from user where email=:email", nativeQuery=true)
    Optional<User> findByEmail(String email);

    @Query(value="select * from user where email=:email and password=:password", nativeQuery=true)
    Optional<User> findByEmailAndPassword(String email, String password);
}
