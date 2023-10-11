package com.campusdual.viajerasapp.ws.core.rest;

import com.campusdual.viajerasapp.api.core.service.ITownService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



import com.ontimize.jee.server.rest.ORestController;


@RestController
@RequestMapping("/towns")
public class TownRestController extends ORestController<ITownService> {


    @Autowired
    private ITownService townService;


    @Override
    public ITownService getService() {
        return this.townService;
    }
}

