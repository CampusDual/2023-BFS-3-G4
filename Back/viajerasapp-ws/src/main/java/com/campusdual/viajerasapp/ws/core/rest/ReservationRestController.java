package com.campusdual.viajerasapp.ws.core.rest;

import com.campusdual.viajerasapp.api.core.service.IReservationService;
import com.ontimize.jee.server.rest.ORestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/reservation")
public class ReservationRestController extends ORestController<IReservationService> {


    @Autowired
    private IReservationService reservationService;


    @Override
    public IReservationService getService() {
        return this.reservationService;
    }
}
