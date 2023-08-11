Clientes (DNI, nombreApellido, fechaNac, email, telefono, contasena)
	    CP

TipoDispositivo (id_tipo, descripcion)
		     CP

Tecnicos (nro_leg, nombreApellido, especialidad)
	        CP

Servicios (id_servicio, descripcion)
		CP

Estados (id_estado, descripcion)
	        CP

Componentes (id_componente, marca, modelo, costo, descripcion)
			CP

Dispositivos (id_dispositivo, id_tipo, marca, modelo, DNI)
			CP
				id_tipo → CF(TipoDispositivo)
				DNI → CF(Cliente)NN\

SolicitudDeReparacion (id_dispositivo, id_tipo, fecha_realizacion, desc_problema, 
						CP
id_estado, fecha_cambio)
				id_dispositivo, id_tipo → CF(Dispositivos)
				id_estado → CF(Estados)NN

Trabajo (id_dispositivo, id_tipo, fecha_realizacion, nro_leg)
				CP
		id_dispositivo, id_tipo, fecha_realizacion → CF(SolicitudDeReparacion)
		nro_leg → CF(Tecnicos)

Precios (id_servicio, fecha_vigencia, monto)
			CP
				id_servicio → CF(Servicios)

Trabajos_servicios_componentes (id_dispositivo, id_tipo, fecha_realizacion, id_servicio, 
id_componente)
	CP
		id_dispositivo, id_tipo, fecha_realizacion → CF(SolicitudDeReparacion)
		id_servicio → CF(Servicios)
		id_componente → CF(Componentes)
