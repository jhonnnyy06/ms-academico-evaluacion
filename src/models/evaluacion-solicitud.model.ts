import {Entity, model, property, hasMany} from '@loopback/repository';
import {ResultadoEvaluacion} from './resultado-evaluacion.model';

@model()
export class EvaluacionSolicitud extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'date',
    required: true,
  })
  fecha_invitacion: string;

  @property({
    type: 'date',
    required: true,
  })
  fecha_respuesta: string;

  @property({
    type: 'boolean',
    required: true,
  })
  respuesta: boolean;

  @property({
    type: 'string',
    required: true,
  })
  observaciones: string;

  @hasMany(() => ResultadoEvaluacion, {keyTo: 'id_evaluacionSolicitud'})
  resultadoEvaluacions: ResultadoEvaluacion[];

  constructor(data?: Partial<EvaluacionSolicitud>) {
    super(data);
  }
}

export interface EvaluacionSolicitudRelations {
  // describe navigational properties here
}

export type EvaluacionSolicitudWithRelations = EvaluacionSolicitud & EvaluacionSolicitudRelations;
