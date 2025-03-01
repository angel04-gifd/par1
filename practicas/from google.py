from google.cloud import bigtable

# Crea un cliente de Bigtable
client = bigtable.Client(project=sonorous-guide-449922-j3, admin=True)

# Obtiene la instancia y la tabla
instance = client.instance(mi-instancia-bigtable)
table = instance.table(tu_tabla_id)

# Crea una lista de mutaciones para insertar datos
mutations = [
    bigtable.mutations.SetCell(
        "datos_personales", "nombre", "1", "Juan"
    ),
    bigtable.mutations.SetCell(
        "datos_personales", "apellido", "1", "Pérez"
    ),
    bigtable.mutations.SetCell(
        "datos_contacto", "email", "1", "juan.perez@example.com"
    ),
]

# Crea una fila con la clave "1" y aplica las mutaciones
row = table.row("1")
row.mutate(mutations)

# Inserta la fila en la tabla
table.insert_rows([row])