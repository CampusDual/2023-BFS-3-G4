package com.campusdual.viajerasapp.model.core.dao;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Repository;
import com.ontimize.jee.server.dao.common.ConfigurationFile;
import com.ontimize.jee.server.dao.jdbc.OntimizeJdbcDaoSupport;


@Repository(value = "ProvinceDao")
@Lazy
@ConfigurationFile(configurationFile = "dao/ProvinceDao.xml", configurationFilePlaceholder = "dao/placeholders.properties")
public class ProvinceDao extends OntimizeJdbcDaoSupport {


    public static final String ATTR_ID_PROVINCE = "id_province";
    public static final String ATTR_PROVINCE_NAME = "province_name";
    public static final String ATTR_ID_COMMUNITY = "id_community";


}
