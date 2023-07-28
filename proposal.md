# Propuesta TP DSW

## Grupo
### Integrantes
* 50214 - Bacolla Manuel 
* 49848 - Bellini Esteban
* 47921 - Garabelli Joaquín
* 49457 - Dorigoni Mauro

### Repositorios
* [full app](https://github.com/estebannbn/tp-desarrollo)


## Tema
### Descripción
El sistema en desarrollo busca la gestión 
de un taller de reparación de dispositivos electrónicos.
Tiene como objetivo informar a los técnicos las solicitudes de reparación hechas por el cliente,
e informar al cliente de la finalización de la reparación realizada y su costo total.
También permitirá llevar un control detallado de todas las reparaciones realizadas por el taller.

### Modelo

![](https://raw.githubusercontent.com/estebannbn/tp-desarrollo/main/der.jpg)

## Alcance Funcional 

### Alcance Mínimo

Regularidad:

|Req| Detalle                                                                                                                                                                                                                                                                                                 |
|:-|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|CRUD simple| 1. CRUD Cliente<br>2. CRUD Tecnico<br>3. CRUD Practica<br/> 4. CRUD Tipo Dispositivo                                                                                                                                                                                                                    |
|CRUD dependiente| 1. CRUD Dispositivo {depende de} CRUD Tipo Dispositivo y CRUD Cliente<br>2. CRUD Solicitud Reparacion {depende de} CRUD Dispositivo                                                                                                                                                                     |
|Listado<br>+<br>detalle| 1. Listado de dispositivos de cliente, muestra marca y modelo => detalle CRUD Dispositivo<br> 2. Listado de trabajos realizados filtrado por rango de fecha, muestra datos del dispositivo, fecha inicio y fin, nombre del cliente, practicas realizadas => detalle muestra datos completos del trabajo |
|CUU/Epic| 1. Registrar una solicitud de reparación<br>2. Registro del cliente<br/> 3. Confirmación de solicitud.                                                                                                                                                                                                  |


Adicionales para Aprobación

|Req| Detalle                                                                                  |
|:-|:-----------------------------------------------------------------------------------------|
|CRUD | 1. CRUD Componentes<br>2. CRUD Precio<br>                                                |
|CUU/Epic| 1. Registrar nuevo componente<br>2. Registrar fin de trabajo<br>3. Registrar dispositivo |


### Alcance Adicional Voluntario

*Nota*: El Alcance Adicional Voluntario es opcional, pero ayuda a que la funcionalidad del sistema esté completa y será considerado en la nota en función de su complejidad y esfuerzo.

|Req| Detalle                                                  |
|:-|:---------------------------------------------------------|
|Listados | 1. Listado histórico de practicas por tecnico            |
|CUU/Epic| 1. Cancelación de solicitud <br> 2. Registro de tecnicos |
|Otros| 1. Notificacion de trabajo realizado                     |

