package com.higradius;

public class TrainingPojo {
	private String Customer;
	private String Customer_Name;
	private String Due_Date;
	private float Invoice_Amount;
	private int Invoice;
	private String Predicted_Payment_Date;
	public String getCustomer() {
		return Customer;
	}
	public void setCustomer(String customer) {
		Customer = customer;
	}
	public String getCustomer_Name() {
		return Customer_Name;
	}
	public void setCustomer_Name(String customer_Name) {
		Customer_Name = customer_Name;
	}
	public String getDue_Date() {
		return Due_Date;
	}
	public void setDue_Date(String due_Date) {
		Due_Date = due_Date;
	}
	public float getInvoice_Amount() {
		return Invoice_Amount;
	}
	public void setInvoice_Amount(float invoice_Amount) {
		Invoice_Amount = invoice_Amount;
	}
	public int getInvoice() {
		return Invoice;
	}
	public void setInvoice(int invoice) {
		Invoice = invoice;
	}
	public String getPredicted_Payment_Date() {
		return Predicted_Payment_Date;
	}
	public void setPredicted_Payment_Date(String predicted_Payment_Date) {
		Predicted_Payment_Date = predicted_Payment_Date;
	}
	

}
