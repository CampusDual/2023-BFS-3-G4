package com.campusdual.viajerasapp.api.core.service;

import java.util.List;
import java.util.Map;


import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;


public interface ICommunityService {


    public EntityResult communityQuery(Map<String, Object> keysValues, List<String> attributes) throws OntimizeJEERuntimeException;

    public EntityResult communityInsert(Map<String, Object> attributes) throws OntimizeJEERuntimeException;

    public EntityResult communityUpdate(Map<String, Object> attributes, Map<String, Object> keyValues) throws OntimizeJEERuntimeException;

    public EntityResult communityDelete(Map<String, Object> keyValues) throws OntimizeJEERuntimeException;


}
