package com.campusdual.viajerasapp.api.core.service;

import com.ontimize.jee.common.dto.EntityResult;

import java.util.List;
import java.util.Map;

public interface IActivityService {



    public EntityResult activityQuery(Map<String, Object> keyMap, List<String> attrList);
    public EntityResult activitycountQuery(Map<String, Object> keyMap, List<String> attrList);

}
