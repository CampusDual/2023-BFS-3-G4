package com.campusdual.viajerasapp.model.core.service;


import com.campusdual.viajerasapp.api.core.service.IRegisterService;

import com.campusdual.viajerasapp.model.core.dao.ClientDao;
import com.campusdual.viajerasapp.model.core.dao.UserDao;
import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.server.dao.DefaultOntimizeDaoHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;


@Lazy
@Service("RegisterService")
public class RegisterService implements IRegisterService {

	@Autowired
	private UserDao userDao;

	@Autowired
	private ClientDao clientDao;

	@Autowired
	private DefaultOntimizeDaoHelper daoHelper;



	//Sample to permission
	//@Secured({ PermissionsProviderSecured.SECURED })
	public EntityResult registerQuery(Map<String, Object> keyMap, List<String> attrList) {
		return this.daoHelper.query(userDao, keyMap, attrList);
	}

	public EntityResult registerInsert(Map<String, Object> attrMap) {
		return this.daoHelper.insert(userDao, attrMap);
	}

	public EntityResult registerUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap) {
		return this.daoHelper.update(userDao, attrMap, keyMap);
	}

	public EntityResult registerDelete(Map<String, Object> keyMap) {
		return this.daoHelper.delete(this.userDao, keyMap);
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


}
