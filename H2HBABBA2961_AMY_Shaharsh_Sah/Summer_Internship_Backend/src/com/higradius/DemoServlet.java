package com.higradius;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.*;
import java.util.*;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

/**
 * Servlet implementation class DemoServlet
 */
@WebServlet("/DemoServlet")
public class DemoServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	

    /**
     * @see HttpServlet#HttpServlet()
     */
    public DemoServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		String cardno=null;
		String pin=null;
		List<TrainingPojo> demoList = new ArrayList();
		try {
			
			
			Class.forName("com.mysql.cj.jdbc.Driver");  
       	 Connection con = DriverManager.getConnection("jdbc:mysql://localhost/bms","root","");    
           Statement stmt = con.createStatement();  
           ResultSet rs = stmt.executeQuery("select * from mytable");
			while(rs.next())
			{
				TrainingPojo demo = new TrainingPojo();
				demo.setCustomer(rs.getString("Customer"));
				demo.setCustomer_Name(rs.getString("Customer_Name"));
				demo.setDue_Date(rs.getString("Due_Date"));
				demo.setInvoice_Amount(rs.getFloat("Invoice_Amount"));
				demo.setInvoice(rs.getInt("Invoice"));
				demo.setPredicted_Payment_Date(rs.getString("Predicted_Payment_Date"));
				demoList.add(demo);
				//System.out.println("cardno: "+cardno+" pin: "+pin);
			}
			 Gson gson = new Gson();
			 String data = gson.toJson(demoList);
			 PrintWriter out = response.getWriter();
			 response.setContentType("application/json");
			 response.setCharacterEncoding("UTF-8");
			 out.write(data);
			 out.print(data);
			 out.flush();
		}catch(Exception e) {
		e.printStackTrace();	}
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
