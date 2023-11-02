package com.campusdual.viajerasapp.model.core.dao;


import com.ontimize.jee.server.dao.common.ConfigurationFile;
import com.ontimize.jee.server.dao.jdbc.OntimizeJdbcDaoSupport;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Repository;


@Lazy
@Repository(value = "ReservationDao")
@ConfigurationFile(
	configurationFile = "dao/ReservationDao.xml",
	configurationFilePlaceholder = "dao/placeholders.properties")
public class ReservationDao extends OntimizeJdbcDaoSupport {

    public static final String ID_RESERVATION = "id_reservation";
    public static final String ID_CLIENT_TRAVELER = "id_client_traveler";
    public static final String ID_CLIENT_HOST = "id_client_host";
    public static final String MESSAGE = "message";
    public static final String STATUS = "id_status";



}
