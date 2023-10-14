package com.campusdual.viajerasapp.ws.core.rest;

import com.campusdual.viajerasapp.api.core.service.IProvinceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



import com.ontimize.jee.server.rest.ORestController;


@RestController
@RequestMapping("/provinces")
public class ProvinceRestController extends ORestController<IProvinceService> {


    @Autowired
    private IProvinceService provinceService;


    @Override
    public IProvinceService getService() {
        return this.provinceService;
    }
}
