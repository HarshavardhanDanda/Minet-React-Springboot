package com.minet.userservice.config;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class FilterConfig {

    @Bean
    public FilterRegistrationBean jwtFilter() {
        FilterRegistrationBean filter= new FilterRegistrationBean();
        filter.setFilter(new JwtFilter());
        filter.addUrlPatterns("/users/*");
        filter.addInitParameter("exclusions", "/users/login/*, /users/save/*");
        return filter;
    }
}

