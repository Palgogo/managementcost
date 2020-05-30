import { Moment } from 'moment';
import { ITool } from 'app/shared/model/tool.model';
import { ICompany } from 'app/shared/model/company.model';

export interface IExpense {
  id?: number;
  cost?: number;
  date?: Moment;
  tool?: ITool;
  company?: ICompany;
}

export class Expense implements IExpense {
  constructor(public id?: number, public cost?: number, public date?: Moment, public tool?: ITool, public company?: ICompany) {}
}
