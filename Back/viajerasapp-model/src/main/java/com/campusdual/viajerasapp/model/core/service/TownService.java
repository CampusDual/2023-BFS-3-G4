package com.campusdual.viajerasapp.model.core.service;



import java.sql.Timestamp;
import java.util.Calendar;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


import com.campusdual.viajerasapp.api.core.service.ITownService;
import com.campusdual.viajerasapp.model.core.dao.TownDao;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;


import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.server.dao.DefaultOntimizeDaoHelper;




@Lazy
@Service("TownService")
public class TownService implements ITownService {


    @Autowired
    private TownDao townDao;


    @Autowired
    private DefaultOntimizeDaoHelper daoHelper;





    //Sample to permission
    //@Secured({ PermissionsProviderSecured.SECURED })
    public EntityResult townQuery(Map<String, Object> keyMap, List<String> attrList) {
        return this.daoHelper.query(townDao, keyMap, attrList);
    }


    public EntityResult townInsert(Map<String, Object> attrMap) {
        return this.daoHelper.insert(townDao, attrMap);
    }


    public EntityResult townUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap) {
        return this.daoHelper.update(townDao, attrMap, keyMap);
    }


    @Override
    public EntityResult townDelete(Map<String, Object> keyValues) throws OntimizeJEERuntimeException {
        return this.daoHelper.delete(this.townDao, keyValues);
    }




}
