//package org.jsp.reservation_api.dto;
//
//import java.sql.Date;
//
//import jakarta.persistence.Column;
//import jakarta.persistence.Entity;
//import jakarta.persistence.GeneratedValue;
//import jakarta.persistence.GenerationType;
//import jakarta.persistence.Id;
//import lombok.Getter;
//import lombok.Setter;
//
//@Entity
//@Getter
//@Setter
//public class Bus {
//	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
//	private int id;
//	private String from_loc;
//	private String to_loc;
//	private Date date_of_dep;
//	@Column(nullable=false,unique = true)
//	private String bus_no;
//	@Column(nullable=false,unique = true)
//	private String bus_name;
//	private int no_of_seats;
//
//}
