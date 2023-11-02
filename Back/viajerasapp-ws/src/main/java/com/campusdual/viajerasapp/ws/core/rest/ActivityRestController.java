package com.campusdual.viajerasapp.ws.core.rest;

import com.campusdual.viajerasapp.api.core.service.IActivityService;
import com.campusdual.viajerasapp.api.core.service.ICommunityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



import com.ontimize.jee.server.rest.ORestController;


@RestController
@RequestMapping("/activities")
public class ActivityRestController extends ORestController<IActivityService> {


    @Autowired
    private IActivityService activityService;


    @Override
    public IActivityService getService() {
        return this.activityService;
    }
}
