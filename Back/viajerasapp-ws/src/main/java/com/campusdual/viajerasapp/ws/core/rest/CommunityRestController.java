package com.campusdual.viajerasapp.ws.core.rest;

import com.campusdual.viajerasapp.api.core.service.ICommunityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



import com.ontimize.jee.server.rest.ORestController;


@RestController
@RequestMapping("/communities")
public class CommunityRestController extends ORestController<ICommunityService> {


    @Autowired
    private ICommunityService communityService;


    @Override
    public ICommunityService getService() {
        return this.communityService;
    }
}
