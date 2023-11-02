package com.campusdual.viajerasapp.model.core.service;

import com.campusdual.viajerasapp.api.core.service.IReservationService;
import com.campusdual.viajerasapp.model.core.dao.ReservationDao;
import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;
import com.ontimize.jee.server.dao.DefaultOntimizeDaoHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;


@Lazy
@Service("ReservationService")
public class ReservationService implements IReservationService {


    @Autowired
    private ReservationDao reservationDao;


    @Autowired
    private DefaultOntimizeDaoHelper daoHelper;





    //Sample to permission
    //@Secured({ PermissionsProviderSecured.SECURED })
    public EntityResult reservationQuery(Map<String, Object> keyMap, List<String> attrList) {
        return this.daoHelper.query(reservationDao, keyMap, attrList);
    }


    public EntityResult reservationInsert(Map<String, Object> attrMap) {
        return this.daoHelper.insert(reservationDao, attrMap);
    }


    public EntityResult reservationUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap) {
        return this.daoHelper.update(reservationDao, attrMap, keyMap);
    }


    @Override
    public EntityResult reservationDelete(Map<String, Object> keyValues) throws OntimizeJEERuntimeException {
        return this.daoHelper.delete(this.reservationDao, keyValues);
    }


}
