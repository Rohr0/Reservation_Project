package org.jsp.reservation_api.dto;

import jakarta.persistence.Entity;
import lombok.Data;

@Data
public class ResponseStructure<T> {	
	private T data;
	private String message;
	private int statusCode;

}
