package com.campusdual.viajerasapp.model.core.service;


import java.sql.Timestamp;
import java.util.*;

import com.campusdual.viajerasapp.model.core.dao.ClientDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import com.campusdual.viajerasapp.api.core.service.IUserService;
import com.campusdual.viajerasapp.model.core.dao.UserDao;
import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.server.dao.DefaultOntimizeDaoHelper;


@Lazy
@Service("UserService")
public class UserService implements IUserService {

	@Autowired
	private UserDao userDao;

	@Autowired
	private ClientDao clientDao;

	@Autowired
	private DefaultOntimizeDaoHelper daoHelper;

	public void loginQuery(Map<?, ?> key, List<?> attr) {
	}

	//Sample to permission
	//@Secured({ PermissionsProviderSecured.SECURED })
	public EntityResult userQuery(Map<String, Object> keyMap, List<String> attrList) {
		return this.daoHelper.query(userDao, keyMap, attrList);
	}

	public EntityResult userInsert(Map<String, Object> attrMap) {

		return this.daoHelper.insert(userDao, attrMap);
	}

	public EntityResult userUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap) {
		return this.daoHelper.update(userDao, attrMap, keyMap);
	}

	public EntityResult userDelete(Map<String, Object> keyMap) {
		return this.daoHelper.delete(this.userDao, keyMap);
	}

	@Override
	public EntityResult myUserQuery(Map<String, Object> keyMap, List<String> attrList) {
		keyMap.put(ClientDao.EMAILREGISTER, getUser());
		return this.daoHelper.query(clientDao, keyMap, attrList);
	}

	@Override
	public EntityResult myUserUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap) {
		keyMap.put(ClientDao.EMAILREGISTER, getUser());
		return this.daoHelper.update(clientDao, attrMap, keyMap);
	}


	@Override
	public EntityResult hostQuery(Map<String, Object> keyMap, List<String> attrList) {
		
		return this.daoHelper.query(clientDao, keyMap, attrList, ClientDao.QUERY_HOSTCLIENT );
	}

	//------------CLIENT ENTITIES------------------------------
	@Override
	public EntityResult clientQuery(Map<String, Object> keyMap, List<String> attrList) {
		return this.daoHelper.query(clientDao, keyMap, attrList);
	}
	@Override
	public EntityResult clientInsert(Map<String, Object> attrMap) {
		return this.daoHelper.insert(clientDao, attrMap);
	}
	@Override
	public EntityResult clientUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap) {
		return this.daoHelper.update(clientDao, attrMap, keyMap);
	}
	@Override
	public EntityResult clientDelete(Map<String, Object> keyMap) {
		return this.daoHelper.delete(this.clientDao, keyMap);
	}



	public String getUser(){
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		return auth.getName();
	}

	public String getRole(){
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		return auth.getAuthorities().toArray()[0].toString();
	}



}
