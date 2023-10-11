package com.campusdual.viajerasapp.model.core.dao;

import java.util.Map;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Repository;
import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.server.dao.common.ConfigurationFile;
import com.ontimize.jee.server.dao.jdbc.OntimizeJdbcDaoSupport;


@Repository(value = "TownDao")
@Lazy
@ConfigurationFile(configurationFile = "dao/TownDao.xml", configurationFilePlaceholder = "dao/placeholders.properties")
public class TownDao extends OntimizeJdbcDaoSupport {


    public static final String ATTR_ID_TOWN = "ID_TOWN";
    public static final String ATTR_NAME = "NAME";
    public static final String ATTR_ID_PROVINCE = "ID_PROVINCE";


}




