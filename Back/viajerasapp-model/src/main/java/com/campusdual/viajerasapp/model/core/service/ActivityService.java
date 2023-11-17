package com.campusdual.viajerasapp.model.core.service;

import java.util.List;
import java.util.Map;


import com.campusdual.viajerasapp.api.core.service.IActivityService;
import com.campusdual.viajerasapp.model.core.dao.ActivityDao;
import com.campusdual.viajerasapp.model.core.dao.CommunityDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;


import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.server.dao.DefaultOntimizeDaoHelper;




@Lazy
@Service("ActivityService")
public class ActivityService implements IActivityService {


    @Autowired
    private ActivityDao activityDao;


    @Autowired
    private DefaultOntimizeDaoHelper daoHelper;





    //Sample to permission
    //@Secured({ PermissionsProviderSecured.SECURED })
    public EntityResult activityQuery(Map<String, Object> keyMap, List<String> attrList) {
        return this.daoHelper.query(activityDao, keyMap, attrList);
    }

    @Override
    public EntityResult activitycountQuery(Map<String, Object> keyMap, List<String> attrList) {
        return this.daoHelper.query(activityDao, keyMap, attrList, ActivityDao.QUERY_ACTIVITYCOUNT);
    }





}
