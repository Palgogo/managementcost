package by.managementcost.repository;

import by.managementcost.domain.Expense;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

import java.time.Instant;
import java.util.List;

/**
 * Spring Data  repository for the Expense entity.
 */
@SuppressWarnings("unused")
@Repository
public interface ExpenseRepository extends JpaRepository<Expense, Long> {

    List<Expense> getAllByDateBetween(Instant first, Instant last);
}
