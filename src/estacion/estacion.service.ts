import { Injectable } from '@nestjs/common';
import * as data from 'src/estacion/planetas.json';

@Injectable()
export class EstacionService {
    planetas: any;

    getJsonFilePlanetas(nombrePlaneta: string) {
        for (const a of data[0] ) {
            this.planetas = data[a];
            if (nombrePlaneta.match(this.planetas)) {
                return data;
            } else {
                return 'Planeta no existe en el registro';
            }
        }
    }
}
