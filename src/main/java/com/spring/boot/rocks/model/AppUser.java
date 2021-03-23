package com.spring.boot.rocks.model;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "app_user")
public class AppUser {
	
	
	@Id
	@GeneratedValue (strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Long id;
	@Basic(optional = false)
	@Column(name = "username")
	private String username;
	@Basic(optional = false)
	@Column(name = "useremail")
	private String useremail;
	@Basic(optional = false)
	@Column(name = "userfirstname")
	private String userfirstname;
	@Basic(optional = false)
	@Column(name = "userlastname")
	private String userlastname;
	@Basic(optional = false)
	@Column(name = "useraddress")
	private String useraddress;
	

}
