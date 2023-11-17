package com.campusdual.viajerasapp.api.core.service;

import java.util.List;
import java.util.Map;


import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;


public interface ITownService {


    public EntityResult townQuery(Map<String, Object> keysValues, List<String> attributes) throws OntimizeJEERuntimeException;

    public EntityResult townInsert(Map<String, Object> attributes) throws OntimizeJEERuntimeException;

    public EntityResult townUpdate(Map<String, Object> attributes, Map<String, Object> keyValues) throws OntimizeJEERuntimeException;

    public EntityResult townDelete(Map<String, Object> keyValues) throws OntimizeJEERuntimeException;

    public EntityResult hostcountQuery(Map<String, Object> keyMap, List<String> attrList);
}
