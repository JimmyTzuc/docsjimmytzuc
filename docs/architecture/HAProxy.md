# HAProxy para balancear cargas

```mermaid
graph LR
   C[Cliente] -- Peticion/Carga --> H[HAProxy]
   H --> R1[RabbitMQ]
   H --> R2[RabbitMQ]
   H --> R3[RabbitMQ]
```

