package com.campusdual.viajerasapp.model.core.dao;

import com.ontimize.jee.server.dao.common.ConfigurationFile;
import com.ontimize.jee.server.dao.jdbc.OntimizeJdbcDaoSupport;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Repository;







@Lazy
@Repository(value = "ClientActivityMultipleDelDao")
@ConfigurationFile(
        configurationFile = "dao/ClientActivityMultipleDelDao.xml",
        configurationFilePlaceholder = "dao/placeholders.properties")
public class ClientActivityMultipleDelDao extends OntimizeJdbcDaoSupport {

    public static final String ID_CLIENT = "id_client";
    public static final String ID_ACTIVITY = "id_activity";





}
