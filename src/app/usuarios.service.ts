export class UsuariosService {
	getUsuarios(){
		return [
			{
				"nombre":"Luis Salinas",
				"edad": 20,
				"hobby": 'cantar'
			},
			{
				"nombre":"Day Meyers",
				"edad": 30,
				"hobby": 'patinar'
			},
			{
				"nombre":"Aguirre Ellis",
				"edad": 25,
				"hobby": 'correr'
			}
		];
	}
}
//esto se debe declarar en un constructor ubicado en app.componet.ts y se debe importar.