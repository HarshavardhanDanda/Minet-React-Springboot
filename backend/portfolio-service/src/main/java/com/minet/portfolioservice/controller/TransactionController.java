package com.minet.portfolioservice.controller;

import com.minet.portfolioservice.dto.TransactionDto;
import com.minet.portfolioservice.exceptionHandler.RecordNotFoundException;
import com.minet.portfolioservice.service.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = {"http://localhost:4000","https://bc88-fe.fe-assignment.tk"},methods = {RequestMethod.GET,RequestMethod.POST,RequestMethod.DELETE,RequestMethod.PUT,RequestMethod.PATCH})
@RequestMapping("/portfolio/transactions")
public class TransactionController {
    @Autowired
    private TransactionService transactionService;
    @GetMapping("")
    public List<TransactionDto> getTransactions(@RequestParam(required = false) Integer userId,@RequestParam(required = false) Integer cryptoCurrencyId) throws RecordNotFoundException {
        if(userId==null&&cryptoCurrencyId==null)
        {
            return transactionService.getAllTransactions();
        } else if (cryptoCurrencyId==null) {
            return transactionService.getUserTransactions(userId.intValue());
        }
        else if(userId==null)
        {
            return transactionService.getCoinTransactions(cryptoCurrencyId.intValue());
        }
        return transactionService.getUserCoinTransactions(userId.intValue(),cryptoCurrencyId.intValue());
    }

    @PostMapping("")
    public String createUserTransaction(@RequestBody TransactionDto dto)throws RecordNotFoundException{
        return transactionService.createTransaction(dto);
    }
}
