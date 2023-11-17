package com.campusdual.viajerasapp.model.core.dao;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Repository;
import com.ontimize.jee.server.dao.common.ConfigurationFile;
import com.ontimize.jee.server.dao.jdbc.OntimizeJdbcDaoSupport;


@Repository(value = "TownDao")
@Lazy
@ConfigurationFile(configurationFile = "dao/TownDao.xml", configurationFilePlaceholder = "dao/placeholders.properties")
public class TownDao extends OntimizeJdbcDaoSupport {


    public static final String ATTR_ID_TOWN = "id_town";
    public static final String ATTR_TOWN_NAME = "town_name";
    public static final String ATTR_ID_PROVINCE = "id_province";

    public static final String QUERY_HOSTCOUNT = "hostcount";


}




