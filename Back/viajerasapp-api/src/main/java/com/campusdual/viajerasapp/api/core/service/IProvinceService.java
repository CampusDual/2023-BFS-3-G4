package com.campusdual.viajerasapp.api.core.service;

import java.util.List;
import java.util.Map;


import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;


public interface IProvinceService {


    public EntityResult provinceQuery(Map<String, Object> keysValues, List<String> attributes) throws OntimizeJEERuntimeException;

    public EntityResult provinceInsert(Map<String, Object> attributes) throws OntimizeJEERuntimeException;

    public EntityResult provinceUpdate(Map<String, Object> attributes, Map<String, Object> keyValues) throws OntimizeJEERuntimeException;

    public EntityResult provinceDelete(Map<String, Object> keyValues) throws OntimizeJEERuntimeException;


}
