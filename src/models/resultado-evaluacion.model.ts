import {Entity, model, property, belongsTo} from '@loopback/repository';
import {EvaluacionSolicitud} from './evaluacion-solicitud.model';

@model({
  settings: {
    foreignKeys: {
      fk_resultado_id_evaluacion: {
        name: 'k_resultado_id_evaluacion',
        entity: 'EvaluacionSolicitud',
        entityKey: 'id',
        foreignKey: 'id_evaluacionSolicitud',
      }
    },
  },
})
export class ResultadoEvaluacion extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
    required: true,
  })
  resultado: number;

  @property({
    type: 'string',
    required: true,
  })
  formato_diligenciado: string;

  @belongsTo(() => EvaluacionSolicitud, {name: 'evaluacionSolicitud'})
  id_evaluacionSolicitud: number;

  constructor(data?: Partial<ResultadoEvaluacion>) {
    super(data);
  }
}

export interface ResultadoEvaluacionRelations {
  // describe navigational properties here
}

export type ResultadoEvaluacionWithRelations = ResultadoEvaluacion & ResultadoEvaluacionRelations;
