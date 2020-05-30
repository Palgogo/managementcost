package by.managementcost.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

import java.io.Serializable;
import java.math.BigDecimal;
import java.time.Instant;

/**
 * A Expense.
 */
@Entity
@Table(name = "expense")
public class Expense implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "cost", precision = 21, scale = 2)
    private BigDecimal cost;

    @Column(name = "date")
    private Instant date;

    @ManyToOne(fetch = FetchType.EAGER)
    @JsonIgnoreProperties(value = "expenses", allowSetters = true)
    private Tool tool;

    @ManyToOne(fetch = FetchType.EAGER)
    @JsonIgnoreProperties(value = "expenses", allowSetters = true)
    private Company company;

    // jhipster-needle-entity-add-field - JHipster will add fields here
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public BigDecimal getCost() {
        return cost;
    }

    public Expense cost(BigDecimal cost) {
        this.cost = cost;
        return this;
    }

    public void setCost(BigDecimal cost) {
        this.cost = cost;
    }

    public Instant getDate() {
        return date;
    }

    public Expense date(Instant date) {
        this.date = date;
        return this;
    }

    public void setDate(Instant date) {
        this.date = date;
    }

    public Tool getTool() {
        return tool;
    }

    public Expense tool(Tool tool) {
        this.tool = tool;
        return this;
    }

    public void setTool(Tool tool) {
        this.tool = tool;
    }

    public Company getCompany() {
        return company;
    }

    public Expense company(Company company) {
        this.company = company;
        return this;
    }

    public void setCompany(Company company) {
        this.company = company;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Expense)) {
            return false;
        }
        return id != null && id.equals(((Expense) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Expense{" +
            "id=" + getId() +
            ", cost=" + getCost() +
            ", date='" + getDate() + "'" +
            "}";
    }
}
