package org.jsp.reservation_api.service;

import org.jsp.reservation_api.dao.UserDao;
import org.jsp.reservation_api.dto.ResponseStructure;
import org.jsp.reservation_api.dto.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class UserService {
	@Autowired
	private UserDao dao;
	
	public ResponseEntity<ResponseStructure<User>> saveUser(User u){
		ResponseStructure<User> s=new ResponseStructure<>();
		s.setData(dao.saveUser(u));
		s.setMessage("User Added Successfully :)");
		s.setStatusCode(HttpStatus.CREATED.value());
		return new ResponseEntity<ResponseStructure<User>>(s,HttpStatus.ACCEPTED);
	}
	public ResponseEntity<ResponseStructure<User>> updateUser(User u){
		ResponseStructure<User> s=new ResponseStructure<>();
		s.setData(dao.updateUser(u));
		s.setMessage("User Updated Successfully :)");
		s.setStatusCode(HttpStatus.CREATED.value());
		return new ResponseEntity<ResponseStructure<User>>(s,HttpStatus.ACCEPTED);
	}

}
