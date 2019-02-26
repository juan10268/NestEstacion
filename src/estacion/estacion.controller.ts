import { Controller, Get, Param, Put, Res, HttpStatus } from '@nestjs/common';
import { EstacionService } from './estacion.service';

@Controller('estacion')
export class EstacionController {

    constructor(private estacionService: EstacionService) {}

    @Get(':planeta')
    getCompararPlanetaRegistrado(@Res() response , @Param(':planeta') planetaIngresado) {
        this.getPlanetas(planetaIngresado).then(mensaje => {
            response.status(HttpStatus.OK).json(mensaje);
        }).catch( () => {
            response.status(HttpStatus.FORBIDDEN).json({mensaje: 'Error con el planeta ingresado'});
        });
    }

    getPlanetas(nombrePlaneta) {
        return this.estacionService.getJsonFilePlanetas(nombrePlaneta);
    }
}
